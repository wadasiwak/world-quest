import { COUNTRIES_ORDERED, extraQuizFor } from "../data/countries";
import { useGameStore } from "../store/gameStore";
import { useT, L } from "../i18n";

interface Props {
  onClose: () => void;
}

/**
 * Advanced-challenge entry point: lists collected countries that have an
 * advanced question bank so the mode isn't hidden inside country cards.
 * Picking one jumps straight into its advanced quiz.
 */
export default function AdvancedPicker({ onClose }: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const collectedCountryIds = useGameStore((s) => s.collectedCountryIds);
  const advancedDoneIds = useGameStore((s) => s.advancedDoneIds);
  const startQuiz = useGameStore((s) => s.startQuiz);

  const collected = new Set(collectedCountryIds);
  const done = new Set(advancedDoneIds);
  const withBank = COUNTRIES_ORDERED.filter((c) => extraQuizFor(c.id));
  const eligible = withBank.filter((c) => collected.has(c.id));
  const todo = eligible.filter((c) => !done.has(c.id));
  const cleared = eligible.filter((c) => done.has(c.id));

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal advanced-picker"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="country-card-close"
          onClick={onClose}
          aria-label={t("close")}
        >
          ✕
        </button>
        <h2>⭐ {t("advanced_tag")}</h2>
        <p className="modal-intro">
          {t("advanced_pick_sub", { n: withBank.length })}
        </p>

        {eligible.length === 0 ? (
          <p className="advanced-picker-empty">{t("advanced_pick_empty")}</p>
        ) : (
          <>
            {todo.length === 0 && (
              <p className="advanced-picker-empty">
                {t("advanced_pick_all_done")}
              </p>
            )}
            <div className="advanced-picker-list">
              {[...todo, ...cleared].map((c) => {
                const isDone = done.has(c.id);
                return (
                  <button
                    key={c.id}
                    className={`codex-tile ${isDone ? "codex-tile--advanced" : ""}`}
                    onClick={() => startQuiz(c.id, true)}
                  >
                    <span className="codex-tile-flag">{c.flag}</span>
                    <span>
                      <span className="codex-tile-name">{L(c.name, lang)}</span>
                      <br />
                      <span className="codex-tile-status">
                        {isDone
                          ? t("advanced_done")
                          : `⭐ ${t("advanced_btn")}`}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
