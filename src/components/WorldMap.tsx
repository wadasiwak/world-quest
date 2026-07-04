import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { COUNTRIES, countryById, REGION_ORDER } from "../data/countries";
import { useGameStore, type PointingMode } from "../store/gameStore";
import { useT, L, tr, type LS } from "../i18n";
import {
  loadCountriesGeo,
  iso2Flag,
  type GeoCountry,
} from "../lib/countriesGeo";
import { seededShuffle, todayKey } from "../lib/rng";
import { playCollect } from "../lib/sound";
import { levelInfo } from "../lib/leveling";
import { avatarById, OUTFIT_TIERS, tierForLevel } from "../data/avatars";
import CountryCard from "./CountryCard";
import PointingGame, { type PointTarget } from "./PointingGame";
import CharacterSelect from "./CharacterSelect";

const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

// Advanced-cleared countries burn a deeper amber than plain collected gold.
const FILL_COLOR: maplibregl.ExpressionSpecification = [
  "case",
  ["boolean", ["feature-state", "advanced"], false],
  "rgba(255, 150, 40, 0.75)",
  ["boolean", ["feature-state", "collected"], false],
  "rgba(255, 207, 77, 0.60)",
  ["boolean", ["feature-state", "hover"], false],
  "rgba(120, 170, 235, 0.50)",
  ["boolean", ["feature-state", "hasdata"], false],
  "rgba(105, 130, 165, 0.28)",
  "rgba(120, 130, 145, 0.10)",
];

const LINE_COLOR: maplibregl.ExpressionSpecification = [
  "case",
  ["boolean", ["feature-state", "advanced"], false],
  "rgba(255, 150, 40, 1)",
  ["boolean", ["feature-state", "collected"], false],
  "rgba(255, 207, 77, 0.95)",
  "rgba(140, 155, 175, 0.45)",
];

// Pointing mode paints every country the same — collected gold / has-data
// blue would narrow down the answer. "reveal" lights up the correct answer
// after a wrong guess.
const FILL_COLOR_NEUTRAL: maplibregl.ExpressionSpecification = [
  "case",
  ["boolean", ["feature-state", "reveal"], false],
  "rgba(5, 203, 99, 0.70)",
  ["boolean", ["feature-state", "hover"], false],
  "rgba(120, 170, 235, 0.50)",
  "rgba(105, 130, 165, 0.20)",
];

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

/** A click on the map, resolved to a country when one was hit. */
export interface MapClick {
  iso: string | null;
  lat: number;
  lng: number;
  /** Monotonic counter so consumers can react to repeat clicks. */
  seq: number;
}

const POINTING_ROUNDS = 10;

function buildTargets(
  mode: PointingMode,
  worldPool: GeoCountry[],
  hasPolygon: (iso: string) => boolean,
): PointTarget[] {
  if (mode === "world" && worldPool.length) {
    return [...worldPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, POINTING_ROUNDS)
      .map((g) => ({
        id: g.iso,
        name: g.name,
        flag: iso2Flag(g.iso2),
        center: g.center,
        hasPolygon: true,
      }));
  }
  const base = COUNTRIES.map((c) => ({
    id: c.id,
    name: c.name,
    flag: c.flag,
    center: c.center,
    hasPolygon: hasPolygon(c.id),
  }));
  if (mode === "daily") {
    return seededShuffle(
      [...base].sort((a, b) => a.id.localeCompare(b.id)),
      todayKey(),
    ).slice(0, POINTING_ROUNDS);
  }
  return [...base].sort(() => Math.random() - 0.5).slice(0, POINTING_ROUNDS);
}

export default function WorldMap() {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapReady, setMapReady] = useState(false);

  /** iso → polygon feature id (numeric) in the countries source. */
  const polyIdByIsoRef = useRef<Map<string, number>>(new Map());
  /** iso → marker feature id for countries with no 110m polygon. */
  const markerIdByIsoRef = useRef<Map<string, number>>(new Map());
  /** iso → localized name from the GeoJSON (covers no-data countries). */
  const geoNamesRef = useRef<Map<string, LS>>(new Map());
  const hoverIdRef = useRef<number | null>(null);
  const [worldPool, setWorldPool] = useState<GeoCountry[]>([]);

  const [hoverLabel, setHoverLabel] = useState<{
    x: number;
    y: number;
    name: LS;
  } | null>(null);
  const [mapClick, setMapClick] = useState<MapClick | null>(null);
  const clickSeqRef = useRef(0);
  const [celebrateToast, setCelebrateToast] = useState<string | null>(null);

  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const setLang = useGameStore((s) => s.setLang);
  const soundOn = useGameStore((s) => s.soundOn);
  const toggleSound = useGameStore((s) => s.toggleSound);
  const appState = useGameStore((s) => s.appState);
  const pointingMode = useGameStore((s) => s.pointingMode);
  const points = useGameStore((s) => s.points);
  const level = useGameStore((s) => s.level());
  const collectedCountryIds = useGameStore((s) => s.collectedCountryIds);
  const selectedCountryId = useGameStore((s) => s.selectedCountryId);
  const lastCollectedId = useGameStore((s) => s.lastCollectedId);
  const clearCelebration = useGameStore((s) => s.clearCelebration);
  const bestPointing = useGameStore((s) => s.bestPointing);
  const bestPointingWorld = useGameStore((s) => s.bestPointingWorld);
  const bestShape = useGameStore((s) => s.bestShape);
  const bestFlash = useGameStore((s) => s.bestFlash);
  const dailyScores = useGameStore((s) => s.dailyScores);
  const avatarId = useGameStore((s) => s.avatarId);
  const [showAvatarSelect, setShowAvatarSelect] = useState(false);

  useEffect(() => {
    if (!mapDivRef.current) return;
    if (!hasWebGL()) {
      setMapError("WEBGL");
      return;
    }
    let map: maplibregl.Map;
    try {
      map = new maplibregl.Map({
        container: mapDivRef.current,
        style: MAP_STYLE,
        center: [30, 25],
        zoom: 1.6,
        attributionControl: { compact: true },
      });
    } catch {
      setMapError("WEBGL");
      return;
    }
    mapRef.current = map;

    map.on("error", (e) => console.error("[map error]", e?.error ?? e));

    map.on("load", async () => {
      let geo: Awaited<ReturnType<typeof loadCountriesGeo>>;
      try {
        geo = await loadCountriesGeo();
      } catch (err) {
        console.error("[countries.geo.json]", err);
        setMapError("DATA");
        return;
      }

      const polyIds = new Map<string, number>();
      const geoNames = new Map<string, LS>();
      for (const g of geo.list) {
        polyIds.set(g.iso, g.featureId);
        geoNames.set(g.iso, g.name);
      }
      polyIdByIsoRef.current = polyIds;
      geoNamesRef.current = geoNames;
      setWorldPool(geo.list.filter((g) => g.iso2));

      map.addSource("countries", { type: "geojson", data: geo.raw });
      map.addLayer({
        id: "country-fill",
        type: "fill",
        source: "countries",
        paint: { "fill-color": FILL_COLOR },
      });
      map.addLayer({
        id: "country-line",
        type: "line",
        source: "countries",
        paint: { "line-color": LINE_COLOR, "line-width": 0.6 },
      });

      // Countries with content but no polygon at 110m (microstates like
      // Singapore) get a clickable circle instead.
      const markerIds = new Map<string, number>();
      const markerFeatures: GeoJSON.Feature[] = [];
      for (const c of COUNTRIES) {
        if (polyIds.has(c.id)) continue;
        const id = markerFeatures.length;
        markerIds.set(c.id, id);
        markerFeatures.push({
          type: "Feature",
          id,
          properties: { iso: c.id },
          geometry: {
            type: "Point",
            coordinates: [c.center.lng, c.center.lat],
          },
        });
      }
      markerIdByIsoRef.current = markerIds;
      map.addSource("country-markers", {
        type: "geojson",
        data: { type: "FeatureCollection", features: markerFeatures },
      });
      map.addLayer({
        id: "country-marker",
        type: "circle",
        source: "country-markers",
        paint: {
          "circle-radius": 5,
          "circle-color": [
            "case",
            ["boolean", ["feature-state", "advanced"], false],
            "rgba(255, 150, 40, 1)",
            ["boolean", ["feature-state", "collected"], false],
            "rgba(255, 207, 77, 0.95)",
            "rgba(90, 140, 200, 0.9)",
          ],
          "circle-stroke-width": 1.5,
          "circle-stroke-color": "#0e1116",
        },
      });

      // Hover highlight + name chip (fill layer only; markers are tiny).
      map.on("mousemove", "country-fill", (e) => {
        const f = e.features?.[0];
        if (!f) return;
        const id = f.id as number;
        if (hoverIdRef.current !== null && hoverIdRef.current !== id) {
          map.setFeatureState(
            { source: "countries", id: hoverIdRef.current },
            { hover: false },
          );
        }
        hoverIdRef.current = id;
        map.setFeatureState({ source: "countries", id }, { hover: true });
        map.getCanvas().style.cursor = "pointer";
        const iso = (f.properties as { iso: string }).iso;
        const name =
          countryById(iso)?.name ??
          geoNamesRef.current.get(iso) ??
          ({ zh: iso, en: iso } as LS);
        setHoverLabel({ x: e.point.x, y: e.point.y, name });
      });
      map.on("mouseleave", "country-fill", () => {
        if (hoverIdRef.current !== null) {
          map.setFeatureState(
            { source: "countries", id: hoverIdRef.current },
            { hover: false },
          );
          hoverIdRef.current = null;
        }
        map.getCanvas().style.cursor = "";
        setHoverLabel(null);
      });

      // One click handler for both modes; behavior depends on appState.
      map.on("click", (e) => {
        const state = useGameStore.getState().appState;
        if (state !== "WORLD_MAP" && state !== "POINTING") return;
        const hits = map.queryRenderedFeatures(e.point, {
          layers: ["country-marker", "country-fill"],
        });
        const iso = hits.length
          ? ((hits[0].properties as { iso: string }).iso ?? null)
          : null;
        if (state === "WORLD_MAP") {
          useGameStore.getState().selectCountry(iso);
        } else {
          clickSeqRef.current += 1;
          setMapClick({
            iso,
            lat: e.lngLat.lat,
            lng: e.lngLat.lng,
            seq: clickSeqRef.current,
          });
        }
      });

      setMapReady(true);
      // Dev/test hook (same pattern as zelda-irl's __stageMap): lets e2e
      // scripts project geo → pixel for precise canvas clicks.
      (window as unknown as { __wqMap?: maplibregl.Map }).__wqMap = map;
    });

    return () => {
      map.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  // Pointing mode hides all basemap text (country/city labels would give the
  // answer away). Original visibility is restored on exit.
  const hiddenLabelsRef = useRef<Map<string, string | undefined> | null>(null);
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    if (appState === "POINTING" && !hiddenLabelsRef.current) {
      const saved = new Map<string, string | undefined>();
      for (const layer of map.getStyle().layers) {
        if (layer.type !== "symbol") continue;
        saved.set(layer.id, map.getLayoutProperty(layer.id, "visibility"));
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
      hiddenLabelsRef.current = saved;
      // Uniform fill + hidden microstate markers: no color/marker giveaways.
      map.setPaintProperty("country-fill", "fill-color", FILL_COLOR_NEUTRAL);
      map.setLayoutProperty("country-marker", "visibility", "none");
    } else if (appState !== "POINTING" && hiddenLabelsRef.current) {
      for (const [id, vis] of hiddenLabelsRef.current) {
        if (map.getLayer(id))
          map.setLayoutProperty(id, "visibility", vis ?? "visible");
      }
      hiddenLabelsRef.current = null;
      map.setPaintProperty("country-fill", "fill-color", FILL_COLOR);
      map.setLayoutProperty("country-marker", "visibility", "visible");
    }
  }, [appState, mapReady]);

  // Paint collected / advanced / has-data states whenever progress changes.
  const advancedDoneIds = useGameStore((s) => s.advancedDoneIds);
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    const collected = new Set(collectedCountryIds);
    const advanced = new Set(advancedDoneIds);
    for (const c of COUNTRIES) {
      const state = {
        collected: collected.has(c.id),
        advanced: advanced.has(c.id),
      };
      const polyId = polyIdByIsoRef.current.get(c.id);
      if (polyId !== undefined) {
        map.setFeatureState(
          { source: "countries", id: polyId },
          { ...state, hasdata: true },
        );
      }
      const markerId = markerIdByIsoRef.current.get(c.id);
      if (markerId !== undefined) {
        map.setFeatureState({ source: "country-markers", id: markerId }, state);
      }
    }
  }, [collectedCountryIds, advancedDoneIds, mapReady]);

  // Collection ceremony: fly to the freshly collected country, blink it,
  // toast, fanfare.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || appState !== "WORLD_MAP" || !lastCollectedId)
      return;
    const country = countryById(lastCollectedId);
    if (!country) {
      clearCelebration();
      return;
    }
    playCollect();
    map.flyTo({
      center: [country.center.lng, country.center.lat],
      zoom: 3.2,
      duration: 1400,
    });
    setCelebrateToast(
      tr("collected_toast", lang, {
        f: country.flag,
        c: L(country.name, lang),
      }),
    );
    const polyId = polyIdByIsoRef.current.get(country.id);
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (polyId !== undefined) {
      // Blink via the hover state (3 pulses).
      for (let i = 0; i < 6; i++) {
        timers.push(
          setTimeout(() => {
            map.setFeatureState(
              { source: "countries", id: polyId },
              { hover: i % 2 === 0 },
            );
          }, 400 * i + 600),
        );
      }
    }
    timers.push(setTimeout(() => setCelebrateToast(null), 3800));
    clearCelebration();
    return () => timers.forEach(clearTimeout);
  }, [appState, lastCollectedId, mapReady, lang, clearCelebration]);

  const totalWithData = COUNTRIES.length;
  const collectedCount = collectedCountryIds.length;
  const xp = useGameStore((s) => s.xp);
  const xpInfo = levelInfo(xp);
  const avatar = avatarId ? avatarById(avatarId) : undefined;
  const outfit = OUTFIT_TIERS[tierForLevel(level)];

  const startQuiz = useGameStore((s) => s.startQuiz);
  const openCodex = useGameStore((s) => s.openCodex);
  const startPointing = useGameStore((s) => s.startPointing);
  const startShape = useGameStore((s) => s.startShape);
  const startFlash = useGameStore((s) => s.startFlash);

  const regionStats = useMemo(() => {
    const collected = new Set(collectedCountryIds);
    return REGION_ORDER.map((region) => {
      const all = COUNTRIES.filter((c) => c.region === region);
      const done = all.filter((c) => collected.has(c.id)).length;
      return { region, done, total: all.length };
    });
  }, [collectedCountryIds]);

  // Regenerated when a pointing session starts (appState/mode flip).
  const pointingTargets = useMemo(
    () =>
      appState === "POINTING"
        ? buildTargets(pointingMode, worldPool, (iso) =>
            polyIdByIsoRef.current.has(iso),
          )
        : [],
    [appState, pointingMode, worldPool],
  );

  const todayScore = dailyScores[todayKey()];

  // Highlight the correct answer after a wrong pointing guess: green fill for
  // polygon countries, a flag popup for marker-only microstates. Stable
  // identity (useCallback) — PointingGame keys its cleanup effect on it.
  const revealPolyIdRef = useRef<number | null>(null);
  const revealPopupRef = useRef<maplibregl.Popup | null>(null);
  const revealCountry = useCallback((target: PointTarget | null) => {
    const map = mapRef.current;
    if (!map) return;
    if (revealPolyIdRef.current !== null) {
      map.setFeatureState(
        { source: "countries", id: revealPolyIdRef.current },
        { reveal: false },
      );
      revealPolyIdRef.current = null;
    }
    revealPopupRef.current?.remove();
    revealPopupRef.current = null;
    if (!target) return;
    const polyId = polyIdByIsoRef.current.get(target.id);
    if (polyId !== undefined) {
      map.setFeatureState(
        { source: "countries", id: polyId },
        { reveal: true },
      );
      revealPolyIdRef.current = polyId;
    } else {
      revealPopupRef.current = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 10,
      })
        .setLngLat([target.center.lng, target.center.lat])
        .setText(
          `${target.flag} ${L(target.name, useGameStore.getState().lang)}`,
        )
        .addTo(map);
    }
  }, []);

  const randomChallenge = () => {
    const pool = COUNTRIES.filter(
      (c) => !collectedCountryIds.includes(c.id),
    );
    const pick = pool.length
      ? pool[Math.floor(Math.random() * pool.length)]
      : COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    startQuiz(pick.id);
  };

  return (
    <div className="worldmap-wrap">
      {appState === "WORLD_MAP" && (
        <div className="worldmap-panel">
          <div className="worldmap-banner">
            <div className="banner-top">
              <h1>{t("app_title")}</h1>
              <div className="lang-toggle">
                <button
                  onClick={toggleSound}
                  title={soundOn ? "Sound on" : "Muted"}
                >
                  {soundOn ? "🔊" : "🔇"}
                </button>
                <button
                  className={lang === "zh" ? "lang-on" : ""}
                  onClick={() => setLang("zh")}
                >
                  繁中
                </button>
                <button
                  className={lang === "en" ? "lang-on" : ""}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
            </div>
            <p>{t("subtitle")}</p>
            <div className="banner-score">
              <button
                className="avatar-chip"
                onClick={() => setShowAvatarSelect(true)}
                title={t("pick_avatar_title")}
              >
                <span
                  className="avatar-circle"
                  style={{ boxShadow: `0 0 0 2px ${outfit.ring}` }}
                >
                  {avatar?.emoji ?? "🙂"}
                  <span className="avatar-gear">{outfit.gear}</span>
                </span>
                <span className="avatar-meta">
                  <span
                    className="avatar-title"
                    style={{ color: outfit.ring }}
                  >
                    {L(outfit.title, lang)}
                  </span>
                  <span className="avatar-sub">
                    Lv {level} · {points} {t("pts")}
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="explore-card collect-progress">
            <div className="collect-progress-row">
              <span>{t("collected_progress")}</span>
              <strong>
                {collectedCount} / {totalWithData}
              </strong>
            </div>
            <div className="xp-bar">
              <div
                className="xp-fill"
                style={{ width: `${(collectedCount / totalWithData) * 100}%` }}
              />
            </div>
            <div className="region-progress">
              {regionStats.map(({ region, done, total }) => (
                <div key={region} className="region-progress-row">
                  <span className="region-progress-name">
                    {done === total && total > 0 ? "🏆 " : ""}
                    {t(`region_${region}`)}
                  </span>
                  <div className="xp-bar region-progress-bar">
                    <div
                      className="xp-fill"
                      style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="region-progress-count">
                    {done}/{total}
                  </span>
                </div>
              ))}
            </div>
            <div className="collect-progress-row">
              <span>
                XP · Lv {xpInfo.level} → {xpInfo.level + 1}
              </span>
              <strong>
                {xpInfo.into} / {xpInfo.need}
              </strong>
            </div>
            <div className="xp-bar">
              <div
                className="xp-fill"
                style={{ width: `${(xpInfo.into / xpInfo.need) * 100}%` }}
              />
            </div>
          </div>

          <div className="explore-card">
            <div className="explore-card-head">{t("modes_head")}</div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("mode_collect")}</div>
                <div className="quest-row-city">{t("mode_collect_desc")}</div>
              </div>
              <button
                className="btn btn--primary btn--sm"
                onClick={randomChallenge}
              >
                {t("start_btn")}
              </button>
            </div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("mode_pointing")}</div>
                <div className="quest-row-city">{t("mode_pointing_desc")}</div>
                {(bestPointing !== null || bestPointingWorld !== null) && (
                  <div className="mode-best">
                    {bestPointing !== null &&
                      `${t("pointing_classic")} ${t("best")}: ${bestPointing}`}
                    {bestPointing !== null &&
                      bestPointingWorld !== null &&
                      " · "}
                    {bestPointingWorld !== null &&
                      `${t("pointing_world")} ${t("best")}: ${bestPointingWorld}`}
                  </div>
                )}
              </div>
              <div className="mode-btn-col">
                <button
                  className="btn btn--primary btn--sm"
                  onClick={() => startPointing("classic")}
                >
                  {t("pointing_classic")}
                </button>
                <button
                  className="btn btn--ghost btn--sm"
                  onClick={() => startPointing("world")}
                >
                  {t("pointing_world")}
                </button>
              </div>
            </div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("mode_daily")}</div>
                <div className="quest-row-city">{t("mode_daily_desc")}</div>
                {todayScore !== undefined && (
                  <div className="mode-best">
                    {t("daily_done", { s: todayScore * 20 })}
                  </div>
                )}
              </div>
              <button
                className="btn btn--primary btn--sm"
                onClick={() => startPointing("daily")}
              >
                {t("start_btn")}
              </button>
            </div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("mode_shape")}</div>
                <div className="quest-row-city">{t("mode_shape_desc")}</div>
                {bestShape !== null && (
                  <div className="mode-best">
                    {t("best")}: {bestShape}
                  </div>
                )}
              </div>
              <button className="btn btn--primary btn--sm" onClick={startShape}>
                {t("start_btn")}
              </button>
            </div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("mode_flash")}</div>
                <div className="quest-row-city">{t("mode_flash_desc")}</div>
                {bestFlash !== null && (
                  <div className="mode-best">
                    {t("best")}: {bestFlash}
                  </div>
                )}
              </div>
              <button className="btn btn--primary btn--sm" onClick={startFlash}>
                {t("start_btn")}
              </button>
            </div>
          </div>

          <div className="explore-card">
            <div className="explore-card-head">{t("knowledge_head")}</div>
            <div className="explore-row">
              <div>
                <div className="quest-row-title">{t("open_codex")}</div>
                <div className="quest-row-city">{t("open_codex_desc")}</div>
              </div>
              <button className="btn btn--primary btn--sm" onClick={openCodex}>
                {t("start_btn")}
              </button>
            </div>
            <div className="roam-hint">{t("map_hint")}</div>
          </div>
        </div>
      )}

      <div ref={mapDivRef} className="worldmap" />

      {hoverLabel && appState === "WORLD_MAP" && (
        <div
          className="map-hover-label"
          style={{ left: hoverLabel.x, top: hoverLabel.y }}
        >
          {L(hoverLabel.name, lang)}
        </div>
      )}

      {appState === "WORLD_MAP" && selectedCountryId && (
        <CountryCard
          iso={selectedCountryId}
          geoName={geoNamesRef.current.get(selectedCountryId)}
        />
      )}

      {appState === "WORLD_MAP" && celebrateToast && (
        <div className="toast">{celebrateToast}</div>
      )}

      {appState === "WORLD_MAP" && (!avatarId || showAvatarSelect) && (
        <CharacterSelect onDone={() => setShowAvatarSelect(false)} />
      )}

      {appState === "POINTING" && pointingTargets.length > 0 && (
        <PointingGame
          mapRef={mapRef}
          mapClick={mapClick}
          targets={pointingTargets}
          mode={pointingMode}
          revealCountry={revealCountry}
        />
      )}

      {mapError && (
        <div className="viewer-overlay viewer-overlay--error">
          <p style={{ maxWidth: 420 }}>
            {mapError === "WEBGL"
              ? "The map needs WebGL, but your browser couldn't create a WebGL context. Enable hardware acceleration and reload."
              : "Failed to load country boundaries (data/countries.geo.json)."}
          </p>
        </div>
      )}
    </div>
  );
}
