import { useEffect, useMemo, useRef, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { avatarById, OUTFIT_TIERS, tierForLevel } from "../data/avatars";
import { playCollect, playLevelUp } from "../lib/sound";
import { useT, L } from "../i18n";

const CONFETTI_COLORS = ["#ffcf4d", "#05cb63", "#3aa0ff", "#ff7a5c", "#b07aff"];
const PIECES = 28;

interface Celebration {
  level: number;
  tierUp: boolean;
}

/**
 * Full-screen level-up celebration. Mounted once at app level and watching
 * the store, so it fires wherever the XP lands (usually over a quiz result).
 * Tap anywhere to dismiss; auto-dismisses on its own.
 */
export default function LevelUpOverlay() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const level = useGameStore((s) => s.level());
  const avatarId = useGameStore((s) => s.avatarId);
  const setLevelUpShowing = useGameStore((s) => s.setLevelUpShowing);
  const [show, setShow] = useState<Celebration | null>(null);
  const prevLevelRef = useRef(level);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Publish visibility so the badge-unlock overlay can wait its turn.
  useEffect(() => {
    setLevelUpShowing(show !== null);
    return () => setLevelUpShowing(false);
  }, [show, setLevelUpShowing]);

  useEffect(() => {
    const prev = prevLevelRef.current;
    prevLevelRef.current = level;
    if (level <= prev) return;
    const tierUp = tierForLevel(level) > tierForLevel(prev);
    if (tierUp) playCollect();
    else playLevelUp();
    setShow({ level, tierUp });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShow(null), tierUp ? 4200 : 3000);
  }, [level]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  // Deterministic pseudo-random confetti layout, reseeded per level-up.
  const confetti = useMemo(
    () =>
      Array.from({ length: PIECES }, (_, i) => ({
        left: (i * 37 + (show?.level ?? 0) * 13) % 100,
        delay: (i % 8) * 0.1,
        duration: 1.9 + (i % 5) * 0.35,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rotate: (i * 47) % 360,
        sway: i % 2 === 0 ? 1 : -1,
      })),
    [show?.level],
  );

  if (!show) return null;

  const avatar = avatarId ? avatarById(avatarId) : undefined;
  const tier = OUTFIT_TIERS[tierForLevel(show.level)];

  return (
    <div className="levelup-backdrop" onClick={() => setShow(null)}>
      {confetti.map((c, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${c.left}%`,
            background: c.color,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            transform: `rotate(${c.rotate}deg)`,
            "--sway": c.sway,
          } as React.CSSProperties}
        />
      ))}
      <div
        className={`levelup-card ${show.tierUp ? "levelup-card--tier" : ""}`}
      >
        <div className="levelup-rays" style={{ color: tier.ring }} />
        <div
          className="levelup-avatar"
          style={{
            boxShadow: `0 0 0 3px ${tier.ring}, 0 0 46px ${tier.ring}66`,
          }}
        >
          {avatar?.emoji ?? "🙂"}
          <span className="levelup-gear">{tier.gear}</span>
        </div>
        <div className="levelup-head">
          {show.tierUp ? t("tierup_head") : t("levelup_head")}
        </div>
        <div className="levelup-level">Lv {show.level}</div>
        {show.tierUp && (
          <div className="levelup-title" style={{ color: tier.ring }}>
            {tier.gear} {L(tier.title, lang)}
          </div>
        )}
      </div>
    </div>
  );
}
