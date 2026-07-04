import { useEffect, useRef, useState } from "react";
import { COUNTRIES } from "../data/countries";
import type { Country } from "../data/types";
import { useGameStore } from "../store/gameStore";
import { playCorrect, playWrong } from "../lib/sound";
import { useT, L, type LS } from "../i18n";

const DURATION_S = 60;
const BASE_POINTS = 10;

type FlashKind = "flag" | "capital" | "flag-reverse";

interface FlashQuestion {
  kind: FlashKind;
  country: Country;
  options: LS[];
  answerIndex: number;
}

function sample<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function makeQuestion(): FlashQuestion {
  const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  const r = Math.random();
  const kind: FlashKind =
    r < 0.34 ? "flag" : r < 0.67 ? "capital" : "flag-reverse";
  // Distractors from the same region read as plausible; pad from the rest of
  // the world if the region is small.
  const sameRegion = COUNTRIES.filter(
    (c) => c.region === country.region && c.id !== country.id,
  );
  const others = COUNTRIES.filter(
    (c) => c.region !== country.region && c.id !== country.id,
  );
  const pool = [...sample(sameRegion, 3)];
  if (pool.length < 3) pool.push(...sample(others, 3 - pool.length));

  const asOption = (c: Country): LS =>
    kind === "flag"
      ? c.name
      : kind === "capital"
        ? c.capital
        : { zh: c.flag, en: c.flag };
  const correct = asOption(country);
  const options = sample([correct, ...pool.map(asOption)], 4);
  return { kind, country, options, answerIndex: options.indexOf(correct) };
}

export default function FlashQuiz() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const goHome = useGameStore((s) => s.goHome);
  const recordFlash = useGameStore((s) => s.recordFlash);
  const bestFlash = useGameStore((s) => s.bestFlash);

  const [phase, setPhase] = useState<"ready" | "playing" | "done">("ready");
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const [question, setQuestion] = useState<FlashQuestion>(makeQuestion);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const recordedRef = useRef(false);
  const prevBestRef = useRef(bestFlash);
  const nextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Countdown while playing; settle exactly once when it hits zero.
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase === "playing" && timeLeft <= 0) {
      if (!recordedRef.current) {
        recordedRef.current = true;
        recordFlash(score);
      }
      setPhase("done");
    }
  }, [timeLeft, phase, score, recordFlash]);

  useEffect(
    () => () => {
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    },
    [],
  );

  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === question.answerIndex;
    setAnswered((n) => n + 1);
    if (correct) {
      playCorrect();
      // Combo bonus caps out so late-game streaks don't explode.
      const gain = BASE_POINTS + 2 * Math.min(combo, 5);
      setScore((s) => s + gain);
      setCombo((c) => c + 1);
    } else {
      playWrong();
      setCombo(0);
    }
    nextTimerRef.current = setTimeout(() => {
      setQuestion(makeQuestion());
      setPicked(null);
    }, 450);
  };

  if (phase === "ready") {
    return (
      <div className="page">
        <div className="flash-wrap">
          <div className="page-topbar">
            <h1>⚡ {t("flash_title")}</h1>
            <button className="btn btn--ghost btn--sm" onClick={goHome}>
              {t("quit")}
            </button>
          </div>
          <p className="page-sub">{t("flash_ready")}</p>
          {bestFlash !== null && (
            <p className="page-sub">
              {t("best")}: {bestFlash} {t("pts")}
            </p>
          )}
          <button
            className="btn btn--primary"
            onClick={() => setPhase("playing")}
          >
            {t("flash_go")}
          </button>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const isNewBest = score > (prevBestRef.current ?? 0);
    return (
      <div className="page">
        <div className="flash-wrap">
          <h1>⏰ {t("flash_done")}</h1>
          <p className="page-sub">
            {t("flash_answered", { c: answered })} · +{score} {t("pts")}
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
        <div className="flash-status">
          <span
            className={`flash-timer ${timeLeft <= 10 ? "flash-timer--low" : ""}`}
          >
            {timeLeft}
            {t("flash_time")}
          </span>
          <span>
            {score} {t("pts")}
            {combo >= 2 && (
              <span className="flash-combo">
                {" "}
                🔥{combo} {t("flash_combo")}
              </span>
            )}
          </span>
        </div>

        <div className="flash-question">
          {question.kind === "flag" ? (
            <>
              <div className="flash-question-flag">{question.country.flag}</div>
              <div className="flash-question-text">{t("flash_q_flag")}</div>
            </>
          ) : question.kind === "capital" ? (
            <div className="flash-question-text">
              {t("flash_q_capital", { c: L(question.country.name, lang) })}
            </div>
          ) : (
            <div className="flash-question-text">
              {t("flash_q_flag_rev", { c: L(question.country.name, lang) })}
            </div>
          )}
        </div>

        <div
          className={`choice-list ${
            question.kind === "flag-reverse" ? "choice-list--flags" : ""
          }`}
        >
          {question.options.map((opt, i) => (
            <button
              key={i}
              className={`btn btn--choice ${
                picked === null
                  ? ""
                  : i === question.answerIndex
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
      </div>
    </div>
  );
}
