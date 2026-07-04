import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES } from "../data/countries";
import type { Country } from "../data/types";
import { useGameStore } from "../store/gameStore";
import {
  loadCountriesGeo,
  type CountriesGeo,
} from "../lib/countriesGeo";
import { playCorrect, playWrong } from "../lib/sound";
import { useT, L, type LS } from "../i18n";

const ROUNDS = 10;
/** Minimum bbox area (deg²) for a silhouette that's actually guessable. */
const MIN_BBOX_AREA = 0.5;

interface Round {
  country: Country;
  options: LS[];
  answerIndex: number;
}

function sample<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function geomBBox(geom: GeoJSON.Geometry): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
} {
  let minX = 180,
    minY = 90,
    maxX = -180,
    maxY = -90;
  const scan = (coords: number[][]) => {
    for (const [x, y] of coords) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  };
  if (geom.type === "Polygon")
    (geom as GeoJSON.Polygon).coordinates.forEach(scan);
  else if (geom.type === "MultiPolygon")
    (geom as GeoJSON.MultiPolygon).coordinates.forEach((p) => p.forEach(scan));
  return { minX, minY, maxX, maxY };
}

function drawSilhouette(
  canvas: HTMLCanvasElement,
  geom: GeoJSON.Geometry,
  color: string,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const { minX, minY, maxX, maxY } = geomBBox(geom);
  const midLat = (minY + maxY) / 2;
  // Equirectangular with cos(midLat) horizontal correction.
  const kx = Math.cos((midLat * Math.PI) / 180);
  const dX = (maxX - minX) * kx || 1;
  const dY = maxY - minY || 1;
  const pad = 14;
  const scale = Math.min((w - pad * 2) / dX, (h - pad * 2) / dY);
  const ox = (w - dX * scale) / 2;
  const oy = (h - dY * scale) / 2;
  const px = (lng: number, lat: number): [number, number] => [
    ox + (lng - minX) * kx * scale,
    oy + (maxY - lat) * scale,
  ];

  ctx.fillStyle = color;
  ctx.beginPath();
  const tracePoly = (poly: number[][][]) => {
    for (const ring of poly) {
      ring.forEach(([lng, lat], i) => {
        const [x, y] = px(lng, lat);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
    }
  };
  if (geom.type === "Polygon") tracePoly((geom as GeoJSON.Polygon).coordinates);
  else if (geom.type === "MultiPolygon")
    (geom as GeoJSON.MultiPolygon).coordinates.forEach(tracePoly);
  ctx.fill("evenodd");
}

export default function ShapeGame() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const goHome = useGameStore((s) => s.goHome);
  const recordShape = useGameStore((s) => s.recordShape);
  const bestShape = useGameStore((s) => s.bestShape);

  const [geo, setGeo] = useState<CountriesGeo | null>(null);
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recordedRef = useRef(false);
  const prevBestRef = useRef(bestShape);

  useEffect(() => {
    loadCountriesGeo().then(setGeo).catch(console.error);
  }, []);

  const rounds: Round[] = useMemo(() => {
    if (!geo) return [];
    const eligible = COUNTRIES.filter((c) => {
      const g = geo.byIso.get(c.id);
      if (!g) return false;
      const b = geomBBox(g.geometry);
      return (b.maxX - b.minX) * (b.maxY - b.minY) >= MIN_BBOX_AREA;
    });
    return sample(eligible, ROUNDS).map((country) => {
      const sameRegion = eligible.filter(
        (c) => c.region === country.region && c.id !== country.id,
      );
      const others = eligible.filter(
        (c) => c.region !== country.region && c.id !== country.id,
      );
      const distractors = sample(sameRegion, 3);
      if (distractors.length < 3)
        distractors.push(...sample(others, 3 - distractors.length));
      const options = sample(
        [country.name, ...distractors.map((c) => c.name)],
        4,
      );
      return { country, options, answerIndex: options.indexOf(country.name) };
    });
  }, [geo]);

  const round = rounds[Math.min(roundIdx, rounds.length - 1)];

  useEffect(() => {
    if (!geo || !round || !canvasRef.current) return;
    const g = geo.byIso.get(round.country.id);
    if (g) drawSilhouette(canvasRef.current, g.geometry, "#7aa5d8");
  }, [geo, round]);

  if (!geo || !round) {
    return (
      <div className="page">
        <div className="flash-wrap">
          <p className="page-sub">…</p>
        </div>
      </div>
    );
  }

  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === round.answerIndex) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (roundIdx + 1 >= rounds.length) {
      // score already includes this round (incremented in answer()).
      if (!recordedRef.current) {
        recordedRef.current = true;
        recordShape(score);
      }
      setDone(true);
    } else {
      setRoundIdx((r) => r + 1);
      setPicked(null);
    }
  };

  if (done) {
    const isNewBest = score > (prevBestRef.current ?? 0);
    return (
      <div className="page">
        <div className="flash-wrap">
          <h1>🧩 {t("pointing_done")}</h1>
          <p className="page-sub">
            {t("pointing_score", { c: score, n: rounds.length })} · +
            {score * 20} {t("pts")}
            {isNewBest && <> · {t("new_best")}</>}
          </p>
          <button className="btn btn--primary" onClick={goHome}>
            {t("back_to_map")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="flash-wrap">
        <div className="page-topbar">
          <h1>🧩 {t("mode_shape").replace("🧩 ", "")}</h1>
          <button className="btn btn--ghost btn--sm" onClick={goHome}>
            {t("quit")}
          </button>
        </div>
        <div className="flash-status">
          <span>
            {t("pointing_round", { i: roundIdx + 1, n: rounds.length })}
          </span>
          <span>✓ {score}</span>
        </div>
        <div className="shape-canvas-wrap">
          <canvas ref={canvasRef} width={420} height={320} />
          <div className="flash-question-text">{t("shape_q")}</div>
        </div>
        <div className="choice-list">
          {round.options.map((opt, i) => (
            <button
              key={i}
              className={`btn btn--choice ${
                picked === null
                  ? ""
                  : i === round.answerIndex
                    ? "btn--right"
                    : i === picked
                      ? "btn--wrongpick"
                      : "btn--dim"
              }`}
              onClick={() => answer(i)}
            >
              {L(opt, lang)}
            </button>
          ))}
        </div>
        {picked !== null && (
          <button className="btn btn--primary" onClick={next}>
            {roundIdx + 1 >= rounds.length ? t("see_result") : t("next_q")}
          </button>
        )}
      </div>
    </div>
  );
}
