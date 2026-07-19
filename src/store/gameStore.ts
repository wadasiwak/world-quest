import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n";
import { levelInfo } from "../lib/leveling";

export type AppState =
  | "WORLD_MAP"
  | "QUIZ"
  | "KNOWLEDGE"
  | "CODEX"
  | "POINTING"
  | "SHAPE"
  | "FLASH";

export type PointingMode = "classic" | "world" | "daily";

/** Points per correct quiz answer / bonus for collecting a country. */
export const POINTS_PER_CORRECT = 50;
export const COLLECT_BONUS = 100;
export const CORRECT_TO_COLLECT = 2;

interface GameState {
  // --- persisted progression ---
  collectedCountryIds: string[];
  /** Countries whose advanced quiz has been cleared (paid out once). */
  advancedDoneIds: string[];
  points: number;
  xp: number;
  correctAnswers: number;
  bestPointing: number | null;
  bestPointingWorld: number | null;
  bestShape: number | null;
  bestFlash: number | null;
  /** Daily-challenge results keyed by YYYY-MM-DD. */
  dailyScores: Record<string, number>;
  lang: Lang;
  soundOn: boolean;
  /** Chosen companion avatar; null until first pick. */
  avatarId: string | null;

  // --- transient UI state ---
  appState: AppState;
  pointingMode: PointingMode;
  /** Country card shown on the world map. */
  selectedCountryId: string | null;
  /** Country being quizzed / read. */
  quizCountryId: string | null;
  /** Quiz uses the advanced bank instead of the base city questions. */
  quizAdvanced: boolean;
  knowledgeCountryId: string | null;
  /** Set when a country was just collected — drives the map celebration. */
  lastCollectedId: string | null;

  setLang: (lang: Lang) => void;
  toggleSound: () => void;
  setAvatar: (avatarId: string) => void;
  level: () => number;
  isCollected: (countryId: string) => boolean;

  selectCountry: (countryId: string | null) => void;
  startQuiz: (countryId: string, advanced?: boolean) => void;
  /** Settle a finished base quiz: collect + pay out (first collection only). */
  finishQuiz: (countryId: string, correctCount: number) => void;
  /** Settle a finished advanced quiz (pays out once, needs 2+ correct). */
  finishAdvanced: (countryId: string, correctCount: number) => void;
  openKnowledge: (countryId: string) => void;
  openCodex: () => void;
  startPointing: (mode: PointingMode) => void;
  startShape: () => void;
  startFlash: () => void;
  recordPointing: (score: number) => void;
  recordPointingWorld: (score: number) => void;
  recordDaily: (dateKey: string, score: number) => void;
  recordShape: (score: number) => void;
  recordFlash: (score: number) => void;
  clearCelebration: () => void;
  goHome: () => void;
  /** Wipe all saved progression (fresh start). Keeps lang + sound prefs. */
  resetProgress: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      collectedCountryIds: [],
      advancedDoneIds: [],
      points: 0,
      xp: 0,
      correctAnswers: 0,
      bestPointing: null,
      bestPointingWorld: null,
      bestShape: null,
      bestFlash: null,
      dailyScores: {},
      lang: "zh",
      soundOn: true,
      avatarId: null,

      appState: "WORLD_MAP",
      pointingMode: "classic",
      selectedCountryId: null,
      quizCountryId: null,
      quizAdvanced: false,
      knowledgeCountryId: null,
      lastCollectedId: null,

      setLang: (lang) => set({ lang }),
      toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
      setAvatar: (avatarId) => set({ avatarId }),
      level: () => levelInfo(get().xp).level,
      isCollected: (id) => get().collectedCountryIds.includes(id),

      selectCountry: (countryId) => set({ selectedCountryId: countryId }),

      startQuiz: (countryId, advanced = false) =>
        set({
          quizCountryId: countryId,
          quizAdvanced: advanced,
          appState: "QUIZ",
        }),

      finishQuiz: (countryId, correctCount) =>
        set((s) => {
          const already = s.collectedCountryIds.includes(countryId);
          const collected = correctCount >= CORRECT_TO_COLLECT;
          // Replays never re-farm points.
          const gained = already
            ? 0
            : correctCount * POINTS_PER_CORRECT +
              (collected ? COLLECT_BONUS : 0);
          const newlyCollected = collected && !already;
          return {
            collectedCountryIds: newlyCollected
              ? [...s.collectedCountryIds, countryId]
              : s.collectedCountryIds,
            points: s.points + gained,
            xp: s.xp + gained,
            correctAnswers: s.correctAnswers + (already ? 0 : correctCount),
            lastCollectedId: newlyCollected ? countryId : s.lastCollectedId,
          };
        }),

      finishAdvanced: (countryId, correctCount) =>
        set((s) => {
          const already = s.advancedDoneIds.includes(countryId);
          const cleared = correctCount >= CORRECT_TO_COLLECT;
          const gained =
            already || !cleared
              ? 0
              : correctCount * POINTS_PER_CORRECT + COLLECT_BONUS;
          return {
            advancedDoneIds:
              cleared && !already
                ? [...s.advancedDoneIds, countryId]
                : s.advancedDoneIds,
            points: s.points + gained,
            xp: s.xp + gained,
          };
        }),

      openKnowledge: (countryId) =>
        set({ knowledgeCountryId: countryId, appState: "KNOWLEDGE" }),

      openCodex: () => set({ appState: "CODEX" }),
      startPointing: (mode) =>
        set({ appState: "POINTING", pointingMode: mode, selectedCountryId: null }),
      startShape: () => set({ appState: "SHAPE" }),
      startFlash: () => set({ appState: "FLASH" }),

      // score = countries found (0–10); pays 20 pts each.
      recordPointing: (score) =>
        set((s) => ({
          bestPointing: Math.max(score, s.bestPointing ?? 0),
          points: s.points + score * 20,
          xp: s.xp + score * 20,
        })),

      recordPointingWorld: (score) =>
        set((s) => ({
          bestPointingWorld: Math.max(score, s.bestPointingWorld ?? 0),
          points: s.points + score * 20,
          xp: s.xp + score * 20,
        })),

      // Replays only pay for improvement over today's best — no re-farming.
      recordDaily: (dateKey, score) =>
        set((s) => {
          const prev = s.dailyScores[dateKey] ?? 0;
          const gained = Math.max(0, score - prev) * 20;
          return {
            dailyScores: {
              ...s.dailyScores,
              [dateKey]: Math.max(score, prev),
            },
            points: s.points + gained,
            xp: s.xp + gained,
          };
        }),

      recordShape: (score) =>
        set((s) => ({
          bestShape: Math.max(score, s.bestShape ?? 0),
          points: s.points + score * 20,
          xp: s.xp + score * 20,
        })),

      recordFlash: (score) =>
        set((s) => ({
          bestFlash: Math.max(score, s.bestFlash ?? 0),
          points: s.points + score,
          xp: s.xp + score,
        })),

      clearCelebration: () => set({ lastCollectedId: null }),

      goHome: () =>
        set({
          appState: "WORLD_MAP",
          selectedCountryId: null,
          quizCountryId: null,
          quizAdvanced: false,
          knowledgeCountryId: null,
        }),

      // Clearing avatarId re-triggers the first-run character select — a
      // clear "fresh start" signal. Language/sound prefs survive.
      resetProgress: () =>
        set({
          collectedCountryIds: [],
          advancedDoneIds: [],
          points: 0,
          xp: 0,
          correctAnswers: 0,
          bestPointing: null,
          bestPointingWorld: null,
          bestShape: null,
          bestFlash: null,
          dailyScores: {},
          avatarId: null,
          selectedCountryId: null,
          lastCollectedId: null,
        }),
    }),
    {
      name: "world-quest-save",
      // Only durable progression persists; UI state resets on reload.
      partialize: (s) => ({
        collectedCountryIds: s.collectedCountryIds,
        advancedDoneIds: s.advancedDoneIds,
        points: s.points,
        xp: s.xp,
        correctAnswers: s.correctAnswers,
        bestPointing: s.bestPointing,
        bestPointingWorld: s.bestPointingWorld,
        bestShape: s.bestShape,
        bestFlash: s.bestFlash,
        dailyScores: s.dailyScores,
        lang: s.lang,
        soundOn: s.soundOn,
        avatarId: s.avatarId,
      }),
    },
  ),
);
