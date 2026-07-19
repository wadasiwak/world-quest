import type { LS } from "../i18n";
import type { Region } from "./types";

// Achievement badge definitions. Every badge is *derived* from persisted
// progression (see lib/badges.ts) — nothing here is stored, so veterans get
// retro-awarded on first visit and the save can never disagree with itself.

/** Everything a badge condition may look at, precomputed once per evaluate. */
export interface BadgeContext {
  /** Countries collected. */
  collected: number;
  /** Collected count per region / total per region. */
  regionCollected: Record<Region, number>;
  regionTotal: Record<Region, number>;
  /** Advanced quizzes cleared. */
  advanced: number;
  level: number;
  /** Longest run of consecutive daily-challenge days. */
  maxDailyStreak: number;
  /** Ever scored 10/10 on a daily challenge. */
  hasDailyPerfect: boolean;
  /** Best pointing score across classic + world modes. */
  bestPointingAny: number;
  bestShape: number;
  bestFlash: number;
  /** Collected countries that are on the microstate list. */
  microCollected: number;
}

export interface BadgeDef {
  id: string;
  emoji: string;
  name: LS;
  /** Achievement condition, shown as the hint for locked badges. */
  desc: LS;
  earned: (c: BadgeContext) => boolean;
}

/** Tiny-country list for the microstate-hunter badge (all in the dataset). */
export const MICRO_IDS = [
  "VAT",
  "MCO",
  "NRU",
  "TUV",
  "SMR",
  "LIE",
  "MHL",
  "KNA",
  "MDV",
  "MLT",
  "GRD",
  "VCT",
  "ATG",
  "SYC",
  "AND",
  "PLW",
];

/** Score bars for the mode-mastery badges. */
export const SHAPE_MASTER_SCORE = 8;
export const FLASH_MASTER_SCORE = 200;

const REGION_NAMES: Record<Region, LS> = {
  asia: { zh: "亞洲", en: "Asia" },
  europe: { zh: "歐洲", en: "Europe" },
  africa: { zh: "非洲", en: "Africa" },
  americas: { zh: "美洲", en: "the Americas" },
  oceania: { zh: "大洋洲", en: "Oceania" },
};

const collectBadge = (
  id: string,
  emoji: string,
  name: LS,
  n: number,
): BadgeDef => ({
  id,
  emoji,
  name,
  desc: { zh: `收集 ${n} 個國家`, en: `Collect ${n} countries` },
  earned: (c) => c.collected >= n,
});

const regionBadge = (region: Region, emoji: string, zh: string, en: string): BadgeDef => ({
  id: `region_${region}`,
  emoji,
  name: { zh, en },
  desc: {
    zh: `收集${REGION_NAMES[region].zh}的全部國家`,
    en: `Collect every country in ${REGION_NAMES[region].en}`,
  },
  earned: (c) =>
    c.regionTotal[region] > 0 &&
    c.regionCollected[region] >= c.regionTotal[region],
});

const streakBadge = (
  id: string,
  emoji: string,
  name: LS,
  days: number,
): BadgeDef => ({
  id,
  emoji,
  name,
  desc: {
    zh: `連續 ${days} 天完成每日挑戰`,
    en: `Play the daily challenge ${days} days in a row`,
  },
  earned: (c) => c.maxDailyStreak >= days,
});

export const BADGES: BadgeDef[] = [
  // --- collection milestones ---
  {
    id: "first_collect",
    emoji: "🌱",
    name: { zh: "初次啟程", en: "First Steps" },
    desc: { zh: "收集第一個國家", en: "Collect your first country" },
    earned: (c) => c.collected >= 1,
  },
  collectBadge("collect_10", "✈️", { zh: "小小旅行家", en: "Frequent Flyer" }, 10),
  collectBadge("collect_50", "🧭", { zh: "縱橫四海", en: "World Wanderer" }, 50),
  collectBadge("collect_100", "🌍", { zh: "百國俱樂部", en: "Century Club" }, 100),
  collectBadge("collect_150", "🚀", { zh: "最後衝刺", en: "Final Stretch" }, 150),
  collectBadge("collect_197", "👑", { zh: "世界制霸", en: "World Conqueror" }, 197),

  // --- continent completion ---
  regionBadge("asia", "🐉", "亞洲制霸", "Asia Complete"),
  regionBadge("europe", "🏰", "歐洲制霸", "Europe Complete"),
  regionBadge("africa", "🦁", "非洲制霸", "Africa Complete"),
  regionBadge("americas", "🦅", "美洲制霸", "Americas Complete"),
  regionBadge("oceania", "🐚", "大洋洲制霸", "Oceania Complete"),

  // --- daily challenge ---
  {
    id: "daily_perfect",
    emoji: "🎯",
    name: { zh: "每日滿分", en: "Daily Perfect" },
    desc: {
      zh: "每日挑戰拿到 10/10 滿分",
      en: "Score a perfect 10/10 on a daily challenge",
    },
    earned: (c) => c.hasDailyPerfect,
  },
  streakBadge("daily_streak_3", "🔥", { zh: "三日連勝", en: "3-Day Streak" }, 3),
  streakBadge("daily_streak_7", "📅", { zh: "七日堅持", en: "7-Day Streak" }, 7),
  streakBadge(
    "daily_streak_30",
    "🏆",
    { zh: "三十天鐵人", en: "30-Day Iron Streak" },
    30,
  ),

  // --- mode mastery ---
  {
    id: "pointing_perfect",
    emoji: "📍",
    name: { zh: "指哪打哪", en: "Dead Reckoning" },
    desc: {
      zh: "地圖指認挑戰單輪 10/10(經典或全世界)",
      en: "A perfect 10/10 pointing round (classic or world)",
    },
    earned: (c) => c.bestPointingAny >= 10,
  },
  {
    id: "shape_master",
    emoji: "🧩",
    name: { zh: "剪影之眼", en: "Silhouette Eye" },
    desc: {
      zh: `形狀猜國家單輪 ${SHAPE_MASTER_SCORE} 分以上`,
      en: `Score ${SHAPE_MASTER_SCORE}+ in one shape-quiz round`,
    },
    earned: (c) => c.bestShape >= SHAPE_MASTER_SCORE,
  },
  {
    id: "flash_master",
    emoji: "⚡",
    name: { zh: "快答旋風", en: "Blitz Whiz" },
    desc: {
      zh: `快問快答單輪 ${FLASH_MASTER_SCORE} 分以上`,
      en: `Score ${FLASH_MASTER_SCORE}+ in one 60-second blitz`,
    },
    earned: (c) => c.bestFlash >= FLASH_MASTER_SCORE,
  },
  {
    id: "advanced_10",
    emoji: "⭐",
    name: { zh: "進階新星", en: "Advanced Rookie" },
    desc: { zh: "完成 10 國進階挑戰", en: "Clear 10 advanced quizzes" },
    earned: (c) => c.advanced >= 10,
  },
  {
    id: "advanced_61",
    emoji: "🌟",
    name: { zh: "進階大師", en: "Advanced Master" },
    desc: { zh: "完成 61 國進階挑戰", en: "Clear 61 advanced quizzes" },
    earned: (c) => c.advanced >= 61,
  },

  // --- fun ---
  {
    id: "micro_5",
    emoji: "🔍",
    name: { zh: "小國獵人", en: "Microstate Hunter" },
    desc: {
      zh: "收集 5 個袖珍小國(如梵蒂岡、摩納哥、諾魯…)",
      en: "Collect 5 microstates (Vatican, Monaco, Nauru…)",
    },
    earned: (c) => c.microCollected >= 5,
  },
  {
    id: "level_10",
    emoji: "🎖️",
    name: { zh: "十級旅人", en: "Seasoned Traveler" },
    desc: { zh: "等級達到 Lv 10", en: "Reach level 10" },
    earned: (c) => c.level >= 10,
  },
  {
    id: "level_25",
    emoji: "💎",
    name: { zh: "傳奇等級", en: "Legend Tier" },
    desc: { zh: "等級達到 Lv 25", en: "Reach level 25" },
    earned: (c) => c.level >= 25,
  },
];

export const badgeById = (id: string): BadgeDef | undefined =>
  BADGES.find((b) => b.id === id);
