import type { LS } from "../i18n";

// Country content data. Plain literals designed to be LLM-generatable: to add
// a country, append an object of this shape to its continent file — the map,
// quizzes, and codex all pick it up automatically.

export interface Trivia {
  question: LS;
  options: LS[];
  answerIndex: number;
  explanation: LS;
}

export interface CountryCity {
  name: LS;
  /** 1–2 sentence city intro shown in the codex. */
  blurb: LS;
  trivia: Trivia;
}

export type Region = "asia" | "europe" | "africa" | "americas" | "oceania";

export interface Country {
  /** ISO 3166-1 alpha-3, must match the `iso` property in countries.geo.json. */
  id: string;
  name: LS;
  capital: LS;
  /** Flag emoji — no image assets needed. */
  flag: string;
  region: Region;
  /** Rough centroid for flyTo and marker-fallback hit testing. */
  center: { lat: number; lng: number };
  /** ~100–150 chars country intro. */
  intro: LS;
  /** ~150–200 chars history overview. */
  history: LS;
  /** 3 cities, one trivia question each. */
  cities: CountryCity[];
  funFacts?: LS[];
  /** ~60–100 chars climate overview. */
  climate?: LS;
  /** 2–4 practical travel tips. */
  travelTips?: LS[];
}

/**
 * Supplementary content merged into Country at load (see countries/index.ts).
 * extraQuiz is the country-level advanced question bank (3 questions),
 * unlocked after the country is collected. climate/travelTips are only
 * needed for countries whose base entry predates those fields — newer
 * country files carry them inline, so their extras are quiz-only.
 */
export interface CountryExtras {
  climate?: LS;
  travelTips?: LS[];
  extraQuiz: Trivia[];
}
