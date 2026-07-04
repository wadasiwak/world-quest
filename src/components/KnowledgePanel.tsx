import {
  COUNTRIES_ORDERED,
  countryById,
  extraQuizFor,
} from "../data/countries";
import { useGameStore } from "../store/gameStore";
import { useT, L } from "../i18n";

export default function KnowledgePanel() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const knowledgeCountryId = useGameStore((s) => s.knowledgeCountryId);
  const openKnowledge = useGameStore((s) => s.openKnowledge);
  const openCodex = useGameStore((s) => s.openCodex);
  const startQuiz = useGameStore((s) => s.startQuiz);

  const country = knowledgeCountryId
    ? countryById(knowledgeCountryId)
    : undefined;
  const collected = useGameStore((s) =>
    country ? s.collectedCountryIds.includes(country.id) : false,
  );
  const advancedDone = useGameStore((s) =>
    country ? s.advancedDoneIds.includes(country.id) : false,
  );

  if (!country) return null;
  const hasAdvanced = !!extraQuizFor(country.id);

  const idx = COUNTRIES_ORDERED.findIndex((c) => c.id === country.id);
  const prev =
    COUNTRIES_ORDERED[
      (idx - 1 + COUNTRIES_ORDERED.length) % COUNTRIES_ORDERED.length
    ];
  const next = COUNTRIES_ORDERED[(idx + 1) % COUNTRIES_ORDERED.length];

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-topbar">
          <button className="btn btn--ghost btn--sm" onClick={openCodex}>
            ← {t("codex_title")}
          </button>
          <button
            className="btn btn--ghost btn--sm"
            onClick={useGameStore.getState().goHome}
          >
            {t("back_to_map")}
          </button>
        </div>

        <div className="knowledge-head">
          <span className="knowledge-flag">{country.flag}</span>
          <div className="knowledge-title">
            <h1>{L(country.name, lang)}</h1>
            <div className="knowledge-meta">
              <span>
                {t("capital_label")}: <strong>{L(country.capital, lang)}</strong>
              </span>
              <span>
                {t("region_label")}:{" "}
                <strong>{t(`region_${country.region}`)}</strong>
              </span>
              {collected ? (
                <>
                  <span className="collected-chip">{t("collected_badge")}</span>
                  {hasAdvanced &&
                    (advancedDone ? (
                      <span className="collected-chip">
                        {t("advanced_done")}
                      </span>
                    ) : (
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => startQuiz(country.id, true)}
                      >
                        ⭐ {t("advanced_btn")}
                      </button>
                    ))}
                </>
              ) : (
                <button
                  className="btn btn--primary btn--sm"
                  onClick={() => startQuiz(country.id)}
                >
                  {t("challenge_btn")}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="knowledge-section">
          <h2>{t("intro_head")}</h2>
          <p>{L(country.intro, lang)}</p>
        </div>

        <div className="knowledge-section">
          <h2>{t("history_head")}</h2>
          <p>{L(country.history, lang)}</p>
        </div>

        {country.climate && (
          <div className="knowledge-section">
            <h2>☀️ {t("climate_head")}</h2>
            <p>{L(country.climate, lang)}</p>
          </div>
        )}

        <div className="knowledge-section">
          <h2>{t("cities_head")}</h2>
          {country.cities.map((city, i) => (
            <div key={i} className="knowledge-city">
              <div className="knowledge-city-name">📍 {L(city.name, lang)}</div>
              <p>{L(city.blurb, lang)}</p>
            </div>
          ))}
        </div>

        {country.travelTips && country.travelTips.length > 0 && (
          <div className="knowledge-section">
            <h2>🧳 {t("tips_head")}</h2>
            <ul className="knowledge-facts">
              {country.travelTips.map((tip, i) => (
                <li key={i}>{L(tip, lang)}</li>
              ))}
            </ul>
          </div>
        )}

        {country.funFacts && country.funFacts.length > 0 && (
          <div className="knowledge-section">
            <h2>{t("facts_head")}</h2>
            <ul className="knowledge-facts">
              {country.funFacts.map((f, i) => (
                <li key={i}>{L(f, lang)}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="knowledge-nav">
          <button
            className="btn btn--ghost"
            onClick={() => openKnowledge(prev.id)}
          >
            {t("prev_country")} {prev.flag}
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => openKnowledge(next.id)}
          >
            {next.flag} {t("next_country")}
          </button>
        </div>
      </div>
    </div>
  );
}
