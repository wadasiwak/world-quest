import { useMemo, useState } from "react";
import { COUNTRIES_ORDERED, REGION_ORDER } from "../data/countries";
import type { Region } from "../data/types";
import { useGameStore } from "../store/gameStore";
import { useT, L } from "../i18n";

interface Props {
  /** Fly the map to the country and open its card. */
  onPick: (iso: string) => void;
}

type StatusFilter = "all" | "collected" | "uncollected";

/**
 * Sidebar country finder: bilingual search over all 197 countries with
 * region + collected filters. Picking a row flies to it on the map.
 */
export default function CountrySearch({ onPick }: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const collectedCountryIds = useGameStore((s) => s.collectedCountryIds);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | "all">("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const collected = useMemo(
    () => new Set(collectedCountryIds),
    [collectedCountryIds],
  );

  const results = useMemo(() => {
    const raw = query.trim();
    const q = raw.toLowerCase();
    return COUNTRIES_ORDERED.filter((c) => {
      if (region !== "all" && c.region !== region) return false;
      if (status !== "all" && (status === "collected") !== collected.has(c.id))
        return false;
      if (!raw) return true;
      // Both languages are searchable regardless of the current UI language.
      return (
        c.name.zh.includes(raw) ||
        c.name.en.toLowerCase().includes(q) ||
        c.id.toLowerCase() === q // ISO code for power users
      );
    });
  }, [query, region, status, collected]);

  return (
    <div className="explore-card country-search">
      <div className="explore-card-head country-search-head">
        <span>{t("search_head")}</span>
        <span className="country-search-count">
          {t("search_count", { n: results.length })}
        </span>
      </div>
      <input
        className="country-search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("search_placeholder")}
        aria-label={t("search_head")}
      />
      <div className="search-filter-row">
        <button
          className={`filter-chip ${region === "all" ? "filter-chip--on" : ""}`}
          onClick={() => setRegion("all")}
        >
          {t("filter_all")}
        </button>
        {REGION_ORDER.map((r) => (
          <button
            key={r}
            className={`filter-chip ${region === r ? "filter-chip--on" : ""}`}
            onClick={() => setRegion(r)}
          >
            {t(`region_${r}`)}
          </button>
        ))}
      </div>
      <div className="search-filter-row">
        {(["all", "collected", "uncollected"] as const).map((f) => (
          <button
            key={f}
            className={`filter-chip ${status === f ? "filter-chip--on" : ""}`}
            onClick={() => setStatus(f)}
          >
            {f === "all"
              ? t("filter_all")
              : f === "collected"
                ? `✓ ${t("filter_collected")}`
                : t("filter_uncollected")}
          </button>
        ))}
      </div>
      <div className="country-search-list">
        {results.length === 0 && (
          <div className="country-search-empty">{t("search_none")}</div>
        )}
        {results.map((c) => (
          <button
            key={c.id}
            className="country-search-row"
            onClick={() => onPick(c.id)}
          >
            <span className="country-search-flag">{c.flag}</span>
            <span className="country-search-name">{L(c.name, lang)}</span>
            {collected.has(c.id) && (
              <span className="country-search-check">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
