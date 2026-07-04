// Tiny synthesized SFX via Web Audio — no assets needed. All players
// check the store's soundOn flag, so callers never have to.
import { useGameStore } from "../store/gameStore";

let ctx: AudioContext | null = null;

function ensureCtx(): AudioContext | null {
  if (!useGameStore.getState().soundOn) return null;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(
  freq: number,
  startIn: number,
  duration: number,
  type: OscillatorType = "sine",
  gainPeak = 0.12,
) {
  const ac = ensureCtx();
  if (!ac) return;
  const t0 = ac.currentTime + startIn;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(gainPeak, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
  osc.connect(gain).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.05);
}

/** Rising two-note chirp. */
export function playCorrect() {
  tone(660, 0, 0.12, "sine");
  tone(880, 0.09, 0.16, "sine");
}

/** Low buzz. */
export function playWrong() {
  tone(180, 0, 0.22, "square", 0.06);
}

/** Little fanfare arpeggio for collecting a country. */
export function playCollect() {
  tone(523, 0, 0.14);
  tone(659, 0.11, 0.14);
  tone(784, 0.22, 0.14);
  tone(1047, 0.33, 0.3);
}

/** Soft click for UI interactions. */
export function playClick() {
  tone(440, 0, 0.05, "triangle", 0.05);
}
