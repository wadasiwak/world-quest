import { countryById, extraQuizFor } from "../data/countries";
import { useGameStore } from "../store/gameStore";
import { useT, L, type LS } from "../i18n";

interface Props {
  iso: string;
  /** Name from the GeoJSON — covers countries without content yet. */
  geoName?: LS;
}

export default function CountryCard({ iso, geoName }: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const selectCountry = useGameStore((s) => s.selectCountry);
  const startQuiz = useGameStore((s) => s.startQuiz);
  const openKnowledge = useGameStore((s) => s.openKnowledge);
  const collected = useGameStore((s) => s.isCollected(iso));
  const advancedDone = useGameStore((s) => s.advancedDoneIds.includes(iso));

  const country = countryById(iso);
  const name = country?.name ?? geoName;
  const hasAdvanced = collected && !!extraQuizFor(iso);

  return (
    <div className="country-card">
      <button
        className="country-card-close"
        onClick={() => selectCountry(null)}
        aria-label={t("close")}
      >
        ✕
      </button>
      <div className="country-card-head">
        <span className="country-card-flag">{country?.flag ?? "🌍"}</span>
        <div>
          <div className="country-card-name">{name ? L(name, lang) : iso}</div>
          {country ? (
            collected ? (
              <span className="collected-chip">
                {t("collected_badge")}
                {advancedDone && ` · ${t("advanced_done")}`}
              </span>
            ) : (
              <span className="country-card-sub">{t("not_collected")}</span>
            )
          ) : (
            <span className="country-card-sub">{t("coming_soon")}</span>
          )}
        </div>
      </div>
      {country && (
        <div className="country-card-actions">
          <button
            className="btn btn--primary btn--sm"
            onClick={() => startQuiz(iso, hasAdvanced && !advancedDone)}
          >
            {hasAdvanced && !advancedDone
              ? `⭐ ${t("advanced_btn")}`
              : collected
                ? t("replay_btn")
                : t("challenge_btn")}
          </button>
          <button
            className="btn btn--ghost btn--sm"
            onClick={() => openKnowledge(iso)}
          >
            {t("read_btn")}
          </button>
        </div>
      )}
    </div>
  );
}
