import { useEffect, useRef, useState } from "react";
import type maplibregl from "maplibre-gl";
import type { LS } from "../i18n";
import { useGameStore, type PointingMode } from "../store/gameStore";
import { distanceKm } from "../lib/geo";
import { todayKey } from "../lib/rng";
import { playCorrect, playWrong } from "../lib/sound";
import { useT, L } from "../i18n";
import type { MapClick } from "./WorldMap";

/** Tolerance for countries too small to hit precisely at world zoom. */
const NEAR_MISS_KM = 150;

export interface PointTarget {
  id: string;
  name: LS;
  flag: string;
  center: { lat: number; lng: number };
  hasPolygon: boolean;
}

interface Props {
  mapRef: React.RefObject<maplibregl.Map | null>;
  mapClick: MapClick | null;
  targets: PointTarget[];
  mode: PointingMode;
  /** Highlight (or clear, with null) the correct country on the map. */
  revealCountry: (target: PointTarget | null) => void;
}

export default function PointingGame({
  mapRef,
  mapClick,
  targets,
  mode,
  revealCountry,
}: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const goHome = useGameStore((s) => s.goHome);
  const recordPointing = useGameStore((s) => s.recordPointing);
  const recordPointingWorld = useGameStore((s) => s.recordPointingWorld);
  const recordDaily = useGameStore((s) => s.recordDaily);
  const bestPointing = useGameStore((s) => s.bestPointing);
  const bestPointingWorld = useGameStore((s) => s.bestPointingWorld);

  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"guess" | "feedback" | "done">("guess");
  const [lastCorrect, setLastCorrect] = useState(false);
  const handledSeqRef = useRef(0);
  const recordedRef = useRef(false);
  // Best-before-this-run, so the result screen can detect a new record.
  const prevBestRef = useRef(mode === "world" ? bestPointingWorld : bestPointing);
  // Daily replays only pay for improvement over today's best.
  const dailyPrevRef = useRef(
    mode === "daily"
      ? (useGameStore.getState().dailyScores[todayKey()] ?? 0)
      : 0,
  );

  const target = targets[Math.min(round, targets.length - 1)];

  // Evaluate a map click during the guess phase.
  useEffect(() => {
    if (!mapClick || mapClick.seq === handledSeqRef.current) return;
    handledSeqRef.current = mapClick.seq;
    if (phase !== "guess") return;

    // Near-miss tolerance only applies when the click hit open water or the
    // target is a marker-only microstate — clicking a neighbor's polygon is
    // always wrong.
    const near =
      distanceKm(mapClick.lat, mapClick.lng, target.center.lat, target.center.lng) <
      NEAR_MISS_KM;
    const correct =
      mapClick.iso === target.id ||
      (near && (mapClick.iso === null || !target.hasPolygon));
    setLastCorrect(correct);
    if (correct) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
    setPhase("feedback");

    const map = mapRef.current;
    if (!correct) {
      // Light up the answer so "here it is" actually shows where "here" is.
      revealCountry(target);
      map?.flyTo({
        center: [target.center.lng, target.center.lat],
        zoom: 3,
        duration: 1200,
      });
    }
  }, [mapClick, phase, target, mapRef, revealCountry]);

  // Clear any reveal highlight when leaving the game.
  useEffect(() => () => revealCountry(null), [revealCountry]);

  const next = () => {
    const map = mapRef.current;
    revealCountry(null);
    if (round + 1 >= targets.length) {
      if (!recordedRef.current) {
        recordedRef.current = true;
        if (mode === "world") recordPointingWorld(score);
        else if (mode === "daily") recordDaily(todayKey(), score);
        else recordPointing(score);
      }
      setPhase("done");
    } else {
      setRound((r) => r + 1);
      setPhase("guess");
      map?.flyTo({ center: [30, 25], zoom: 1.6, duration: 800 });
    }
  };

  const modeTag =
    mode === "world"
      ? t("pointing_world")
      : mode === "daily"
        ? t("mode_daily")
        : t("pointing_classic");

  if (phase === "done") {
    const isNewBest =
      mode === "daily"
        ? score > dailyPrevRef.current && dailyPrevRef.current > 0
        : score > (prevBestRef.current ?? 0);
    const dailyGain = Math.max(0, score - dailyPrevRef.current) * 20;
    return (
      <div className="modal-backdrop">
        <div className="modal modal--celebrate">
          <div className="celebrate-badge">🗺️</div>
          <h2>{t("pointing_done")}</h2>
          <p className="modal-intro">
            {modeTag}
            <br />
            {t("pointing_score", { c: score, n: targets.length })}
            <br />
            {mode === "daily"
              ? dailyGain > 0
                ? t("daily_improved", { p: dailyGain })
                : t("daily_no_gain")
              : `+${score * 20} ${t("pts")}`}
            {isNewBest && (
              <>
                <br />
                {t("new_best")}
              </>
            )}
          </p>
          <div className="choice-result" style={{ width: "100%" }}>
            <button className="btn btn--primary" onClick={goHome}>
              {t("back_to_map")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pointing-hud">
        {/* Quit lives inside the HUD — a separate corner button gets covered
            by the full-width HUD on phones. */}
        <button
          className="pointing-quit"
          onClick={goHome}
          aria-label={t("quit")}
        >
          ✕
        </button>
        <div className="pointing-meta">
          <span>{modeTag}</span>
          <span>{t("pointing_round", { i: round + 1, n: targets.length })}</span>
          <span>✓ {score}</span>
        </div>
        <div className="pointing-target">
          {t("pointing_find")} {target.flag} {L(target.name, lang)}
        </div>
        {phase === "feedback" && (
          <>
            <div
              className={`pointing-feedback ${
                lastCorrect ? "pointing-feedback--ok" : "pointing-feedback--no"
              }`}
            >
              {lastCorrect ? t("pointing_correct") : t("pointing_wrong")}
            </div>
            <button className="btn btn--primary btn--sm" onClick={next}>
              {round + 1 >= targets.length ? t("see_result") : t("next_q")}
            </button>
          </>
        )}
      </div>
    </>
  );
}
