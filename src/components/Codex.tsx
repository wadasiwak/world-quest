import { COUNTRIES_ORDERED, REGION_ORDER } from "../data/countries";
import { useGameStore } from "../store/gameStore";
import { useT, L } from "../i18n";

export default function Codex() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const goHome = useGameStore((s) => s.goHome);
  const openKnowledge = useGameStore((s) => s.openKnowledge);
  const collectedCountryIds = useGameStore((s) => s.collectedCountryIds);
  const collected = new Set(collectedCountryIds);

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-topbar">
          <div>
            <h1>📖 {t("codex_title")}</h1>
            <p className="page-sub">{t("codex_sub")}</p>
          </div>
          <button className="btn btn--ghost btn--sm" onClick={goHome}>
            {t("back_to_map")}
          </button>
        </div>

        {REGION_ORDER.map((region) => {
          const countries = COUNTRIES_ORDERED.filter(
            (c) => c.region === region,
          );
          if (!countries.length) return null;
          return (
            <div key={region}>
              <p className="codex-region-head">{t(`region_${region}`)}</p>
              <div className="codex-grid">
                {countries.map((c) => (
                  <button
                    key={c.id}
                    className={`codex-tile ${
                      collected.has(c.id) ? "codex-tile--collected" : ""
                    }`}
                    onClick={() => openKnowledge(c.id)}
                  >
                    <span className="codex-tile-flag">{c.flag}</span>
                    <span>
                      <span className="codex-tile-name">
                        {L(c.name, lang)}
                      </span>
                      <br />
                      <span className="codex-tile-status">
                        {collected.has(c.id)
                          ? t("collected_badge")
                          : t("not_collected")}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
