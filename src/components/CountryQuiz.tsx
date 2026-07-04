import { useMemo, useState } from "react";
import { countryById, extraQuizFor, COUNTRIES } from "../data/countries";
import {
  useGameStore,
  CORRECT_TO_COLLECT,
  POINTS_PER_CORRECT,
  COLLECT_BONUS,
} from "../store/gameStore";
import { playCorrect, playWrong } from "../lib/sound";
import { useT, L } from "../i18n";

type Phase = "question" | "feedback" | "result";

export default function CountryQuiz() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const quizCountryId = useGameStore((s) => s.quizCountryId);
  const advanced = useGameStore((s) => s.quizAdvanced);
  const finishQuiz = useGameStore((s) => s.finishQuiz);
  const finishAdvanced = useGameStore((s) => s.finishAdvanced);
  const goHome = useGameStore((s) => s.goHome);
  const openKnowledge = useGameStore((s) => s.openKnowledge);

  const country = quizCountryId ? countryById(quizCountryId) : undefined;
  // Whether this run can pay out — captured before finishing mutates it.
  const [wasSettled] = useState(() => {
    const s = useGameStore.getState();
    if (!quizCountryId) return false;
    return advanced
      ? s.advancedDoneIds.includes(quizCountryId)
      : s.collectedCountryIds.includes(quizCountryId);
  });

  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("question");
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  // Questions: advanced bank (country-level) or the base city questions.
  const items = useMemo(() => {
    if (!country) return [];
    if (advanced) {
      return (extraQuizFor(country.id) ?? []).map((trivia) => ({
        label: country.name,
        trivia,
      }));
    }
    return country.cities.map((c) => ({ label: c.name, trivia: c.trivia }));
  }, [country, advanced]);

  // Content stores the correct answer at answerIndex (usually 0), so shuffle
  // for display. `order[displayIndex] = originalIndex`.
  const order = useMemo(
    () =>
      items.length
        ? items[qIndex].trivia.options
            .map((_, i) => i)
            .sort(() => Math.random() - 0.5)
        : [],
    [items, qIndex],
  );

  if (!country || items.length === 0) return null;

  const total = items.length;
  const item = items[qIndex];
  const trivia = item.trivia;
  const isLast = qIndex === total - 1;
  const answerDisplayIndex = order.indexOf(trivia.answerIndex);
  const pickedCorrect = picked === answerDisplayIndex;

  const answer = (i: number) => {
    if (phase !== "question") return;
    setPicked(i);
    if (i === answerDisplayIndex) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
    setPhase("feedback");
  };

  const advance = () => {
    if (isLast) {
      // Settle in the click handler (not an effect) so it runs exactly once.
      if (advanced) finishAdvanced(country.id, correctCount);
      else finishQuiz(country.id, correctCount);
      setPhase("result");
    } else {
      setQIndex((i) => i + 1);
      setPicked(null);
      setPhase("question");
    }
  };

  const retry = () => {
    setQIndex(0);
    setPicked(null);
    setCorrectCount(0);
    setPhase("question");
  };

  if (phase === "result") {
    const succeeded = correctCount >= CORRECT_TO_COLLECT;
    const gained =
      wasSettled || !(succeeded || !advanced)
        ? 0
        : wasSettled
          ? 0
          : correctCount * POINTS_PER_CORRECT + (succeeded ? COLLECT_BONUS : 0);
    // Advanced pays only when cleared; base pays per correct even on failure.
    const shownGain = wasSettled
      ? 0
      : advanced
        ? succeeded
          ? correctCount * POINTS_PER_CORRECT + COLLECT_BONUS
          : 0
        : gained;
    // Did this collection just complete the whole region?
    const state = useGameStore.getState();
    const regionComplete =
      !advanced &&
      succeeded &&
      !wasSettled &&
      COUNTRIES.filter((c) => c.region === country.region).every((c) =>
        state.collectedCountryIds.includes(c.id),
      );
    return (
      <div className="modal-backdrop">
        <div className="modal modal--celebrate">
          <div className="celebrate-badge">
            {succeeded ? country.flag : "😅"}
          </div>
          <h2>
            {succeeded
              ? advanced
                ? t("advanced_cleared")
                : t("quiz_collected")
              : t("quiz_failed")}
          </h2>
          <p className="modal-intro">
            {t("quiz_score_line", { c: correctCount, n: total })}
            {succeeded && wasSettled && (
              <>
                <br />
                {advanced ? t("advanced_already") : t("quiz_already")}
              </>
            )}
            {!succeeded && (
              <>
                <br />
                {t("quiz_failed_desc")}
              </>
            )}
            {shownGain > 0 && (
              <>
                <br />+{shownGain} {t("pts")}
              </>
            )}
            {regionComplete && (
              <>
                <br />
                <strong>
                  {t("region_mastered", { r: t(`region_${country.region}`) })}
                </strong>
              </>
            )}
          </p>
          {!succeeded && !advanced && (
            <p className="modal-intro" style={{ fontSize: 12 }}>
              {t("read_before_retry")}
            </p>
          )}
          <div className="choice-result" style={{ width: "100%" }}>
            {!succeeded && (
              <button className="btn btn--primary" onClick={retry}>
                {t("try_again")}
              </button>
            )}
            <button
              className={succeeded ? "btn btn--primary" : "btn btn--ghost"}
              onClick={() => openKnowledge(country.id)}
            >
              📖 {t("read_after", { c: L(country.name, lang) })}
            </button>
            <button className="btn btn--ghost" onClick={goHome}>
              {t("back_to_map")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="quiz-meta">
          <span>
            {country.flag} {L(country.name, lang)}
            {advanced && <span className="advanced-chip"> ⭐ {t("advanced_tag")}</span>}
          </span>
          <span>{t("quiz_progress", { i: qIndex + 1, n: total })}</span>
        </div>
        {!advanced && <div className="quiz-city">📍 {L(item.label, lang)}</div>}
        <h2 style={{ fontSize: 18 }}>{L(trivia.question, lang)}</h2>

        {phase === "question" && (
          <>
            <div className="choice-list">
              {order.map((orig, i) => (
                <button
                  key={i}
                  className="btn btn--choice"
                  onClick={() => answer(i)}
                >
                  {L(trivia.options[orig], lang)}
                </button>
              ))}
            </div>
            <p className="modal-intro" style={{ fontSize: 12 }}>
              {t("quiz_rule")}
            </p>
          </>
        )}

        {phase === "feedback" && (
          <div className="choice-result">
            {order.map((orig, i) => (
              <button
                key={i}
                className={`btn btn--choice ${
                  i === answerDisplayIndex
                    ? "btn--right"
                    : i === picked
                      ? "btn--wrongpick"
                      : "btn--dim"
                }`}
                disabled
              >
                {L(trivia.options[orig], lang)}
              </button>
            ))}
            <p className={pickedCorrect ? "res-ok" : "res-no"}>
              {pickedCorrect ? t("correct") : t("wrong")}
            </p>
            <p className="modal-intro">{L(trivia.explanation, lang)}</p>
            <button className="btn btn--primary" onClick={advance}>
              {isLast ? t("see_result") : t("next_q")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
