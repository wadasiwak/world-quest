import { useGameStore } from "./store/gameStore";

export type Lang = "zh" | "en";

/** A localized string: Traditional Chinese + English. */
export interface LS {
  zh: string;
  en: string;
}

/** Resolve a localized string (or plain string) for the given language. */
export const L = (s: LS | string, lang: Lang): string =>
  typeof s === "string" ? s : s[lang];

/** UI chrome strings (not content). */
const STRINGS: Record<string, LS> = {
  app_title: { zh: "🗺️ 世界任務", en: "🗺️ World Quest" },
  subtitle: {
    zh: "答題收集世界各國,認識它們的城市與歷史。",
    en: "Answer trivia to collect the world's countries and learn their cities and history.",
  },
  pts: { zh: "分", en: "pts" },
  collected_progress: { zh: "已收集國家", en: "Countries collected" },
  modes_head: { zh: "遊戲模式", en: "Game modes" },
  mode_collect: { zh: "🎯 隨機挑戰收集", en: "🎯 Random collect challenge" },
  mode_collect_desc: {
    zh: "隨機抽一個未收集的國家來挑戰",
    en: "Quiz a random uncollected country",
  },
  mode_pointing: { zh: "📍 地圖指認挑戰", en: "📍 Find-the-country" },
  mode_pointing_desc: {
    zh: "在地圖上點出指定國家,一輪 10 題",
    en: "Click the named country on the map — 10 rounds",
  },
  pointing_classic: { zh: "經典", en: "Classic" },
  pointing_world: { zh: "全世界", en: "World" },
  mode_daily: { zh: "📅 每日指認挑戰", en: "📅 Daily challenge" },
  mode_daily_desc: {
    zh: "每天一組固定 10 題,全球同題",
    en: "A fixed set of 10 each day — same for everyone",
  },
  daily_done: { zh: "今日 {s} 分", en: "Today: {s}" },
  mode_shape: { zh: "🧩 形狀猜國家", en: "🧩 Guess the shape" },
  mode_shape_desc: {
    zh: "看國家剪影猜是哪一國",
    en: "Name the country from its silhouette",
  },
  shape_q: { zh: "這是哪個國家的形狀?", en: "Which country is this?" },
  mode_flash: { zh: "⚡ 首都國旗快問快答", en: "⚡ Capital & flag blitz" },
  mode_flash_desc: {
    zh: "60 秒連續作答,連對有加成",
    en: "60-second rapid fire with combo bonus",
  },
  knowledge_head: { zh: "知識模式", en: "Knowledge" },
  open_codex: { zh: "📖 國家圖鑑", en: "📖 Country codex" },
  open_codex_desc: {
    zh: "瀏覽並閱讀所有國家的介紹與歷史",
    en: "Browse every country's intro and history",
  },
  map_hint: {
    zh: "點地圖上的國家開始(金=已收集,橘=進階完成)",
    en: "Click a country to begin (gold = collected, amber = advanced cleared)",
  },
  best: { zh: "最佳", en: "Best" },
  start_btn: { zh: "開始 →", en: "Start →" },

  // Country card
  collected_badge: { zh: "✓ 已收集", en: "✓ Collected" },
  not_collected: { zh: "尚未收集", en: "Not collected yet" },
  challenge_btn: { zh: "挑戰收集 →", en: "Challenge →" },
  replay_btn: { zh: "重新挑戰", en: "Replay quiz" },
  read_btn: { zh: "閱讀介紹", en: "Read about it" },
  coming_soon: {
    zh: "這個國家即將開放,敬請期待!",
    en: "This country is coming soon — stay tuned!",
  },
  close: { zh: "關閉", en: "Close" },

  // Quiz
  quiz_progress: { zh: "第 {i} / {n} 題", en: "Question {i} / {n}" },
  quiz_rule: {
    zh: "答對 2 題以上即可收集這個國家",
    en: "Answer 2+ correctly to collect this country",
  },
  correct: { zh: "答對了!", en: "Correct!" },
  wrong: { zh: "答錯了…", en: "Not quite…" },
  next_q: { zh: "下一題 →", en: "Next →" },
  see_result: { zh: "看結果 →", en: "See result →" },
  quiz_collected: { zh: "收集成功!", en: "Country collected!" },
  quiz_failed: { zh: "差一點!", en: "So close!" },
  quiz_failed_desc: {
    zh: "答對未達 2 題,再挑戰一次吧",
    en: "You need 2+ correct — try again!",
  },
  quiz_already: {
    zh: "已收集過,這次不再計分",
    en: "Already collected — no points this time",
  },
  quiz_score_line: { zh: "答對 {c} / {n} 題", en: "{c} / {n} correct" },
  try_again: { zh: "再挑戰 →", en: "Try again →" },
  read_after: { zh: "閱讀{c}介紹", en: "Read about {c}" },
  read_before_retry: {
    zh: "小提示:先讀讀介紹再回來挑戰",
    en: "Tip: read up on it, then try again",
  },
  back_to_map: { zh: "← 回世界地圖", en: "← Back to world map" },

  // Pointing game
  pointing_title: { zh: "地圖指認挑戰", en: "Find the country" },
  pointing_find: { zh: "請點出:", en: "Find:" },
  pointing_round: { zh: "第 {i} / {n} 題", en: "Round {i} / {n}" },
  pointing_correct: { zh: "答對!就是這裡", en: "Correct! That's it" },
  pointing_wrong: { zh: "不對,正確位置在這裡", en: "Nope — here it is" },
  pointing_done: { zh: "挑戰結束!", en: "Challenge complete!" },
  pointing_score: { zh: "答對 {c} / {n} 國", en: "{c} / {n} countries" },
  new_best: { zh: "🎉 新紀錄!", en: "🎉 New best!" },
  play_again: { zh: "再玩一輪 →", en: "Play again →" },
  quit: { zh: "← 離開", en: "← Quit" },

  // Flash quiz
  flash_title: { zh: "首都國旗快問快答", en: "Capital & flag blitz" },
  flash_ready: {
    zh: "60 秒內連續作答,連續答對有 combo 加成!",
    en: "Answer as many as you can in 60 seconds — combos boost your score!",
  },
  flash_go: { zh: "開始!", en: "Go!" },
  flash_time: { zh: "秒", en: "s" },
  flash_combo: { zh: "連對", en: "combo" },
  flash_q_flag: { zh: "這是哪個國家的國旗?", en: "Whose flag is this?" },
  flash_q_capital: { zh: "{c} 的首都是?", en: "What's the capital of {c}?" },
  flash_done: { zh: "時間到!", en: "Time's up!" },
  flash_answered: { zh: "共答對 {c} 題", en: "{c} correct answers" },

  // Knowledge / codex
  codex_title: { zh: "國家圖鑑", en: "Country Codex" },
  codex_sub: {
    zh: "點任何國家閱讀完整介紹(知識不上鎖)",
    en: "Click any country to read its full story — knowledge is never locked",
  },
  capital_label: { zh: "首都", en: "Capital" },
  region_label: { zh: "區域", en: "Region" },
  intro_head: { zh: "國家介紹", en: "About" },
  history_head: { zh: "歷史", en: "History" },
  cities_head: { zh: "重要城市", en: "Key cities" },
  facts_head: { zh: "冷知識", en: "Fun facts" },
  prev_country: { zh: "← 上一國", en: "← Previous" },
  next_country: { zh: "下一國 →", en: "Next →" },

  xp_to_next: { zh: "距 Lv {l} 還需 {x} XP", en: "{x} XP to Lv {l}" },
  stat_points: { zh: "總分", en: "Points" },
  stat_collected: { zh: "已收集", en: "Collected" },
  stat_advanced: { zh: "進階完成", en: "Advanced" },
  stat_correct: { zh: "答對題數", en: "Correct answers" },
  outfit_track: { zh: "裝扮進化之路", en: "Outfit journey" },
  best_scores: { zh: "最佳成績", en: "Best scores" },
  change_avatar: { zh: "更換旅伴", en: "Change companion" },
  pick_avatar_title: { zh: "選擇你的旅伴", en: "Choose your travel companion" },
  pick_avatar_sub: {
    zh: "每升 3 級,旅伴的裝扮就會進化,一路從見習旅人變成傳奇旅人!",
    en: "Their outfit evolves every 3 levels — from novice traveler all the way to legendary voyager!",
  },
  pick_btn: { zh: "就是你了!", en: "Let's go!" },
  levelup_head: { zh: "升級!", en: "LEVEL UP!" },
  tierup_head: { zh: "裝扮進化!", en: "OUTFIT UPGRADE!" },
  daily_no_gain: {
    zh: "未超過今日最佳,這次不加分",
    en: "Didn't beat today's best — no points this time",
  },
  daily_improved: {
    zh: "較今日最佳進步,+{p} 分",
    en: "Beat today's best: +{p} pts",
  },
  region_progress: { zh: "各洲進度", en: "Regions" },
  region_mastered: { zh: "🏆 {r}制霸!", en: "🏆 {r} mastered!" },
  collected_toast: { zh: "{f} {c} 已加入圖鑑!", en: "{f} {c} added to your codex!" },
  climate_head: { zh: "氣候", en: "Climate" },
  tips_head: { zh: "旅遊注意事項", en: "Travel tips" },
  advanced_btn: { zh: "進階挑戰 →", en: "Advanced quiz →" },
  advanced_tag: { zh: "進階挑戰", en: "Advanced" },
  advanced_done: { zh: "✓ 進階完成", en: "✓ Advanced cleared" },
  advanced_cleared: { zh: "進階挑戰完成!", en: "Advanced quiz cleared!" },
  advanced_already: {
    zh: "已完成過進階挑戰,這次不再計分",
    en: "Advanced already cleared — no points this time",
  },
  flash_q_flag_rev: { zh: "{c} 的國旗是?", en: "Which flag is {c}'s?" },

  // Country search panel
  search_head: { zh: "🔍 尋找國家", en: "🔍 Find a country" },
  search_placeholder: {
    zh: "輸入國名(中英文皆可)…",
    en: "Type a country name (中/EN)…",
  },
  search_count: { zh: "{n} 國", en: "{n}" },
  filter_all: { zh: "全部", en: "All" },
  filter_collected: { zh: "已收集", en: "Collected" },
  filter_uncollected: { zh: "未收集", en: "Not yet" },
  search_none: { zh: "找不到符合的國家", en: "No matching countries" },

  // Advanced challenge entry
  mode_advanced: { zh: "⭐ 進階挑戰", en: "⭐ Advanced challenge" },
  mode_advanced_desc: {
    zh: "挑戰已收集國家的高難度題庫",
    en: "Harder quizzes for countries you've collected",
  },
  advanced_todo: { zh: "可挑戰 {n} 國", en: "{n} to challenge" },
  advanced_pick_sub: {
    zh: "從已收集的國家挑一國直接開戰(共 {n} 國提供進階題庫)",
    en: "Pick a collected country to start ({n} countries have an advanced bank)",
  },
  advanced_pick_empty: {
    zh: "還沒有可挑戰的國家——先在地圖上答題收集,收集到提供進階題庫的國家後,就會出現在這裡!",
    en: "Nothing to challenge yet — collect countries on the map first; collected countries with an advanced bank will show up here!",
  },
  advanced_pick_all_done: {
    zh: "🎉 全部完成!可重玩複習(不再計分)",
    en: "🎉 All cleared! Replay any of them to review (no points)",
  },

  // Badges
  badge_wall: { zh: "成就徽章", en: "Badges" },
  badge_hint: {
    zh: "點徽章看達成條件(灰色=尚未取得)",
    en: "Tap a badge to see how to earn it (gray = locked)",
  },
  badgeup_head: { zh: "新徽章!", en: "NEW BADGE!" },
  badgeup_head_multi: { zh: "獲得新徽章!", en: "NEW BADGES!" },
  share_badges: { zh: "成就徽章", en: "Badges" },

  // Share card
  share_btn: { zh: "📤 分享成就", en: "📤 Share" },
  share_img_tagline: {
    zh: "答題收集世界 197 國",
    en: "Collect all 197 countries",
  },

  // Reset progress
  reset_btn: { zh: "🗑️ 重置進度", en: "🗑️ Reset progress" },
  reset_warn: {
    zh: "確定要重置?所有收集進度、分數與最佳成績將全部清除,無法復原。",
    en: "Reset everything? All collected countries, points, and best scores will be permanently erased.",
  },
  reset_confirm: { zh: "確定重置", en: "Yes, reset" },
  reset_cancel: { zh: "取消", en: "Cancel" },

  copyright: {
    zh: "© 2026 wadasiwak · 內容與程式碼未經授權禁止轉載",
    en: "© 2026 wadasiwak. All rights reserved.",
  },

  region_asia: { zh: "亞洲", en: "Asia" },
  region_europe: { zh: "歐洲", en: "Europe" },
  region_africa: { zh: "非洲", en: "Africa" },
  region_americas: { zh: "美洲", en: "Americas" },
  region_oceania: { zh: "大洋洲", en: "Oceania" },
};

/** Translate a UI string, with {placeholder} interpolation. */
export function tr(
  key: string,
  lang: Lang,
  vars?: Record<string, string | number>,
): string {
  let s = STRINGS[key]?.[lang] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}

/** Hook: translate with the current language from the store. */
export function useT() {
  const lang = useGameStore((s) => s.lang);
  return (key: string, vars?: Record<string, string | number>) =>
    tr(key, lang, vars);
}
