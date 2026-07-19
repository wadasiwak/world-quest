import { useEffect, useMemo, useRef, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { badgeById } from "../data/badges";
import { evaluateBadges } from "../lib/badges";
import { playBadge } from "../lib/sound";
import { useT, L } from "../i18n";

const CONFETTI_COLORS = ["#ffcf4d", "#05cb63", "#3aa0ff", "#ff7a5c", "#b07aff"];
const PIECES = 24;
/** Medallions shown before collapsing into a "+N". */
const MAX_SHOWN = 5;
const AUTO_DISMISS_MS = 6500;

/**
 * "New badge!" celebration, same visual language as LevelUpOverlay. Mounted
 * once at app level: it re-derives earned badges from the save on every
 * change and celebrates any not yet in badgesSeen — which also fires the
 * retro-award moment for veteran saves on their first visit. Defers while
 * the level-up overlay is on screen so the two never stack.
 */
export default function BadgeUnlockOverlay() {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  // Join to a string so zustand's Object.is check skips no-op recomputes.
  const earnedKey = useGameStore((s) => evaluateBadges(s).join("|"));
  const badgesSeen = useGameStore((s) => s.badgesSeen);
  const markBadgesSeen = useGameStore((s) => s.markBadgesSeen);
  const levelUpShowing = useGameStore((s) => s.levelUpShowing);

  const newIds = useMemo(() => {
    const earned = earnedKey ? earnedKey.split("|") : [];
    return earned.filter((id) => !badgesSeen.includes(id));
  }, [earnedKey, badgesSeen]);

  // Freeze the celebrated set while showing, so more unlocks mid-showing
  // queue up as the next celebration instead of mutating this one.
  const [shownIds, setShownIds] = useState<string[] | null>(null);
  const shownRef = useRef<string[] | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (shownRef.current) {
      markBadgesSeen(shownRef.current);
      shownRef.current = null;
    }
    setShownIds(null);
  };

  useEffect(() => {
    if (shownIds || levelUpShowing || newIds.length === 0) return;
    // Deferred: the level-up overlay flags itself one render after the XP
    // lands, so an immediate show would race it. Re-check at fire time —
    // if a level-up won, this effect re-runs when its flag clears.
    const defer = setTimeout(() => {
      if (useGameStore.getState().levelUpShowing) return;
      shownRef.current = newIds;
      setShownIds(newIds);
      playBadge();
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(dismiss, AUTO_DISMISS_MS);
    }, 400);
    return () => clearTimeout(defer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIds, shownIds, levelUpShowing]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const confetti = useMemo(
    () =>
      Array.from({ length: PIECES }, (_, i) => ({
        left: (i * 41 + (shownIds?.length ?? 0) * 17) % 100,
        delay: (i % 8) * 0.1,
        duration: 1.9 + (i % 5) * 0.35,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rotate: (i * 53) % 360,
        sway: i % 2 === 0 ? 1 : -1,
      })),
    [shownIds],
  );

  if (!shownIds) return null;

  const badges = shownIds
    .map(badgeById)
    .filter((b): b is NonNullable<typeof b> => !!b);
  const shown = badges.slice(0, MAX_SHOWN);
  const extra = badges.length - shown.length;

  return (
    <div className="badgeup-backdrop" onClick={dismiss}>
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
      <div className="badgeup-card">
        <div className="levelup-rays" style={{ color: "#ffcf4d" }} />
        <div className="levelup-head">
          {badges.length > 1 ? t("badgeup_head_multi") : t("badgeup_head")}
        </div>
        <div className="badgeup-row">
          {shown.map((b, i) => (
            <div
              key={b.id}
              className="badgeup-medal"
              style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            >
              {b.emoji}
            </div>
          ))}
          {extra > 0 && <div className="badgeup-medal badgeup-medal--extra">+{extra}</div>}
        </div>
        <div className="badgeup-names">
          {shown.map((b) => L(b.name, lang)).join(" · ")}
          {extra > 0 ? " …" : ""}
        </div>
        {badges.length === 1 && (
          <div className="badgeup-desc">{L(badges[0].desc, lang)}</div>
        )}
      </div>
    </div>
  );
}
