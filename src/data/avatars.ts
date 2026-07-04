import type { LS } from "../i18n";

// Pick-a-companion avatar system. Outfits (gear + title + ring color)
// upgrade every 3 levels for a steady sense of progression.

export interface Avatar {
  id: string;
  emoji: string;
  name: LS;
}

export const AVATARS: Avatar[] = [
  { id: "fox", emoji: "🦊", name: { zh: "機靈狐狸", en: "Clever Fox" } },
  { id: "cat", emoji: "🐱", name: { zh: "好奇貓咪", en: "Curious Cat" } },
  { id: "owl", emoji: "🦉", name: { zh: "博學貓頭鷹", en: "Wise Owl" } },
  { id: "penguin", emoji: "🐧", name: { zh: "勇敢企鵝", en: "Brave Penguin" } },
  { id: "panda", emoji: "🐼", name: { zh: "悠哉熊貓", en: "Chill Panda" } },
  { id: "turtle", emoji: "🐢", name: { zh: "沉穩海龜", en: "Steady Turtle" } },
];

export const avatarById = (id: string): Avatar | undefined =>
  AVATARS.find((a) => a.id === id);

export interface OutfitTier {
  gear: string;
  title: LS;
  /** Ring color around the avatar — game-style rarity progression. */
  ring: string;
}

export const OUTFIT_TIERS: OutfitTier[] = [
  { gear: "🎒", title: { zh: "見習旅人", en: "Novice Traveler" }, ring: "#9aa7b5" },
  { gear: "🧭", title: { zh: "背包客", en: "Backpacker" }, ring: "#05cb63" },
  { gear: "🗺️", title: { zh: "冒險家", en: "Adventurer" }, ring: "#3aa0ff" },
  { gear: "✈️", title: { zh: "環球旅人", en: "Globetrotter" }, ring: "#b07aff" },
  { gear: "🏅", title: { zh: "探險大師", en: "Master Explorer" }, ring: "#ff9b3d" },
  { gear: "👑", title: { zh: "傳奇旅人", en: "Legendary Voyager" }, ring: "#ffcf4d" },
];

export const LEVELS_PER_TIER = 3;

/** Outfit tier index for a level (Lv1–3 → 0, Lv4–6 → 1, … capped at max). */
export function tierForLevel(level: number): number {
  return Math.min(
    Math.floor((level - 1) / LEVELS_PER_TIER),
    OUTFIT_TIERS.length - 1,
  );
}
