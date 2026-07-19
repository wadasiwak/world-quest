// Badge evaluation: a pure function over the persisted save. Badges are
// never stored — they're re-derived every time, so old saves retro-earn
// everything they qualify for and the save can't drift out of sync. Only
// `badgesSeen` (which unlocks were already celebrated) persists.
import { COUNTRIES } from "../data/countries";
import type { Region } from "../data/types";
import { BADGES, MICRO_IDS, type BadgeContext } from "../data/badges";
import { levelInfo } from "./leveling";

/** The slice of the save that badges are derived from (subset of GameState). */
export interface BadgeProgress {
  collectedCountryIds: string[];
  advancedDoneIds: string[];
  xp: number;
  bestPointing: number | null;
  bestPointingWorld: number | null;
  bestShape: number | null;
  bestFlash: number | null;
  dailyScores: Record<string, number>;
}

const REGIONS: Region[] = ["asia", "europe", "africa", "americas", "oceania"];

const REGION_TOTAL = COUNTRIES.reduce(
  (acc, c) => ((acc[c.region] += 1), acc),
  Object.fromEntries(REGIONS.map((r) => [r, 0])) as Record<Region, number>,
);

const MICRO_SET = new Set(MICRO_IDS);
const DAY_MS = 86_400_000;

/** Longest run of consecutive days among the daily-challenge date keys. */
export function maxDailyStreak(scores: Record<string, number>): number {
  const days = Object.keys(scores)
    .map((k) => Date.parse(`${k}T00:00:00Z`))
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);
  let best = 0;
  let run = 0;
  let prev = NaN;
  for (const d of days) {
    run = d - prev === DAY_MS ? run + 1 : 1;
    prev = d;
    if (run > best) best = run;
  }
  return best;
}

function buildContext(p: BadgeProgress): BadgeContext {
  const collectedSet = new Set(p.collectedCountryIds);
  const regionCollected = Object.fromEntries(
    REGIONS.map((r) => [r, 0]),
  ) as Record<Region, number>;
  for (const c of COUNTRIES) {
    if (collectedSet.has(c.id)) regionCollected[c.region] += 1;
  }
  let microCollected = 0;
  for (const id of collectedSet) if (MICRO_SET.has(id)) microCollected += 1;

  return {
    collected: collectedSet.size,
    regionCollected,
    regionTotal: REGION_TOTAL,
    advanced: p.advancedDoneIds.length,
    level: levelInfo(p.xp).level,
    maxDailyStreak: maxDailyStreak(p.dailyScores),
    hasDailyPerfect: Object.values(p.dailyScores).some((s) => s >= 10),
    bestPointingAny: Math.max(p.bestPointing ?? 0, p.bestPointingWorld ?? 0),
    bestShape: p.bestShape ?? 0,
    bestFlash: p.bestFlash ?? 0,
    microCollected,
  };
}

/** All earned badge ids, in definition order. */
export function evaluateBadges(p: BadgeProgress): string[] {
  const ctx = buildContext(p);
  return BADGES.filter((b) => b.earned(ctx)).map((b) => b.id);
}

/**
 * Earned ids ordered by when they were first celebrated (badgesSeen is
 * append-only, so it doubles as an unlock chronology); not-yet-seen ones
 * go last. Used for the share card's "recent badges" row.
 */
export function earnedByRecency(earned: string[], seen: string[]): string[] {
  const pos = new Map(seen.map((id, i) => [id, i]));
  return [...earned].sort(
    (a, b) => (pos.get(a) ?? Infinity) - (pos.get(b) ?? Infinity),
  );
}
