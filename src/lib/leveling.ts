// Non-linear leveling: early levels come fast (one collected country ≈ 200 XP
// clears level 1), later ones stretch out.

/** XP needed to go from `level` to `level + 1`. */
export function xpNeedForLevel(level: number): number {
  return Math.round(150 * Math.pow(level, 1.35));
}

export interface LevelInfo {
  level: number;
  /** XP accumulated inside the current level. */
  into: number;
  /** XP needed to clear the current level. */
  need: number;
}

const LEVEL_CAP = 99;

export function levelInfo(xp: number): LevelInfo {
  let level = 1;
  let rem = Math.max(0, xp);
  for (;;) {
    const need = xpNeedForLevel(level);
    if (rem < need || level >= LEVEL_CAP) return { level, into: rem, need };
    rem -= need;
    level++;
  }
}
