import type { Country, Region, Trivia } from "../types";
import { ASIA } from "./asia";
import { ASIA_MORE1 } from "./asia_more1";
import { ASIA_MORE2 } from "./asia_more2";
import { EUROPE } from "./europe";
import { EUROPE_MORE1 } from "./europe_more1";
import { EUROPE_MORE2 } from "./europe_more2";
import { AFRICA } from "./africa";
import { AFRICA_MORE1 } from "./africa_more1";
import { AFRICA_MORE2 } from "./africa_more2";
import { AFRICA_MORE3 } from "./africa_more3";
import { AFRICA_MORE4 } from "./africa_more4";
import { AMERICAS } from "./americas";
import { AMERICAS_MORE1 } from "./americas_more1";
import { AMERICAS_MORE2 } from "./americas_more2";
import { OCEANIA } from "./oceania";
import { OCEANIA_MORE } from "./oceania_more";
import { ASIA_EXTRAS } from "../extras/asia";
import { ASIA_MORE1_EXTRAS } from "../extras/asia_more1";
import { ASIA_MORE2_EXTRAS } from "../extras/asia_more2";
import { ASIA_MORE3_EXTRAS } from "../extras/asia_more3";
import { EUROPE_EXTRAS } from "../extras/europe";
import { EUROPE_MORE1_EXTRAS } from "../extras/europe_more1";
import { EUROPE_MORE2_EXTRAS } from "../extras/europe_more2";
import { AMERICAS_EXTRAS } from "../extras/americas";
import { AMERICAS_MORE1_EXTRAS } from "../extras/americas_more1";
import { AMERICAS_MORE2_EXTRAS } from "../extras/americas_more2";
import { AFRICA_OCEANIA_EXTRAS } from "../extras/africa_oceania";
import { AFRICA_MORE1_EXTRAS } from "../extras/africa_more1";
import { AFRICA_MORE2_EXTRAS } from "../extras/africa_more2";
import { AFRICA_MORE3_EXTRAS } from "../extras/africa_more3";
import { AFRICA_MORE4_EXTRAS } from "../extras/africa_more4";
import { OCEANIA_MORE_EXTRAS } from "../extras/oceania_more";

const EXTRAS = {
  ...ASIA_EXTRAS,
  ...ASIA_MORE1_EXTRAS,
  ...ASIA_MORE2_EXTRAS,
  ...ASIA_MORE3_EXTRAS,
  ...EUROPE_EXTRAS,
  ...EUROPE_MORE1_EXTRAS,
  ...EUROPE_MORE2_EXTRAS,
  ...AMERICAS_EXTRAS,
  ...AMERICAS_MORE1_EXTRAS,
  ...AMERICAS_MORE2_EXTRAS,
  ...AFRICA_OCEANIA_EXTRAS,
  ...AFRICA_MORE1_EXTRAS,
  ...AFRICA_MORE2_EXTRAS,
  ...AFRICA_MORE3_EXTRAS,
  ...AFRICA_MORE4_EXTRAS,
  ...OCEANIA_MORE_EXTRAS,
};

// Extras (climate / travel tips written after the base content) merge into
// the country record; newer country files carry these fields inline.
export const COUNTRIES: Country[] = [
  ...ASIA,
  ...ASIA_MORE1,
  ...ASIA_MORE2,
  ...EUROPE,
  ...EUROPE_MORE1,
  ...EUROPE_MORE2,
  ...AFRICA,
  ...AFRICA_MORE1,
  ...AFRICA_MORE2,
  ...AFRICA_MORE3,
  ...AFRICA_MORE4,
  ...AMERICAS,
  ...AMERICAS_MORE1,
  ...AMERICAS_MORE2,
  ...OCEANIA,
  ...OCEANIA_MORE,
].map((c) => {
  const extra = EXTRAS[c.id];
  return extra
    ? { ...c, climate: c.climate ?? extra.climate, travelTips: c.travelTips ?? extra.travelTips }
    : c;
});

const BY_ID = new Map(COUNTRIES.map((c) => [c.id, c]));

export const countryById = (id: string): Country | undefined => BY_ID.get(id);

/** Advanced question bank (3 country-level questions), if written. */
export const extraQuizFor = (id: string): Trivia[] | undefined =>
  EXTRAS[id]?.extraQuiz;

export const REGION_ORDER: Region[] = [
  "asia",
  "europe",
  "americas",
  "africa",
  "oceania",
];

/** Codex / knowledge-mode ordering: by region, then by English name. */
export const COUNTRIES_ORDERED: Country[] = [...COUNTRIES].sort((a, b) => {
  const r = REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region);
  return r !== 0 ? r : a.name.en.localeCompare(b.name.en);
});
