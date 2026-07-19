import { useMemo, useState } from "react";
import { COUNTRIES } from "../data/countries";
import {
  avatarById,
  OUTFIT_TIERS,
  tierForLevel,
  LEVELS_PER_TIER,
} from "../data/avatars";
import { BADGES } from "../data/badges";
import { evaluateBadges } from "../lib/badges";
import { levelInfo } from "../lib/leveling";
import { shareAchievement } from "../lib/shareImage";
import { useGameStore } from "../store/gameStore";
import { todayKey } from "../lib/rng";
import { useT, L } from "../i18n";

interface Props {
  onClose: () => void;
  onChangeAvatar: () => void;
}

/** Player stats card — opened from the avatar chip on the map panel. */
export default function ProfileCard({ onClose, onChangeAvatar }: Props) {
  const t = useT();
  const lang = useGameStore((s) => s.lang);
  const avatarId = useGameStore((s) => s.avatarId);
  const points = useGameStore((s) => s.points);
  const xp = useGameStore((s) => s.xp);
  const correctAnswers = useGameStore((s) => s.correctAnswers);
  const collectedCountryIds = useGameStore((s) => s.collectedCountryIds);
  const advancedDoneIds = useGameStore((s) => s.advancedDoneIds);
  const bestPointing = useGameStore((s) => s.bestPointing);
  const bestPointingWorld = useGameStore((s) => s.bestPointingWorld);
  const bestShape = useGameStore((s) => s.bestShape);
  const bestFlash = useGameStore((s) => s.bestFlash);
  const dailyScores = useGameStore((s) => s.dailyScores);
  const todayScore = dailyScores[todayKey()];
  const resetProgress = useGameStore((s) => s.resetProgress);
  const [confirmReset, setConfirmReset] = useState(false);
  const [pickedBadge, setPickedBadge] = useState<string | null>(null);
  const collectedCount = collectedCountryIds.length;
  const advancedCount = advancedDoneIds.length;

  const earnedBadges = useMemo(
    () =>
      new Set(
        evaluateBadges({
          collectedCountryIds,
          advancedDoneIds,
          xp,
          bestPointing,
          bestPointingWorld,
          bestShape,
          bestFlash,
          dailyScores,
        }),
      ),
    [
      collectedCountryIds,
      advancedDoneIds,
      xp,
      bestPointing,
      bestPointingWorld,
      bestShape,
      bestFlash,
      dailyScores,
    ],
  );
  const picked = BADGES.find((b) => b.id === pickedBadge);

  const info = levelInfo(xp);
  const tier = tierForLevel(info.level);
  const outfit = OUTFIT_TIERS[tier];
  const avatar = avatarId ? avatarById(avatarId) : undefined;

  const bests: [string, string | number][] = [];
  if (bestPointing !== null)
    bests.push([`📍 ${t("pointing_classic")}`, `${bestPointing}/10`]);
  if (bestPointingWorld !== null)
    bests.push([`📍 ${t("pointing_world")}`, `${bestPointingWorld}/10`]);
  if (bestShape !== null) bests.push(["🧩", `${bestShape}/10`]);
  if (bestFlash !== null) bests.push(["⚡", bestFlash]);
  if (todayScore !== undefined) bests.push(["📅", `${todayScore}/10`]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal modal--celebrate profile-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="country-card-close" onClick={onClose}>
          ✕
        </button>
        <div
          className="profile-avatar"
          style={{ boxShadow: `0 0 0 3px ${outfit.ring}, 0 0 26px ${outfit.ring}44` }}
        >
          {avatar?.emoji ?? "🙂"}
          <span className="profile-gear">{outfit.gear}</span>
        </div>
        <div>
          <div className="profile-title" style={{ color: outfit.ring }}>
            {L(outfit.title, lang)}
          </div>
          {avatar && (
            <div className="profile-name">{L(avatar.name, lang)}</div>
          )}
        </div>

        <div className="profile-xp">
          <div className="collect-progress-row">
            <span>Lv {info.level}</span>
            <strong>
              {info.into} / {info.need} XP
            </strong>
          </div>
          <div className="xp-bar">
            <div
              className="xp-fill"
              style={{ width: `${(info.into / info.need) * 100}%` }}
            />
          </div>
          <div className="profile-xp-hint">
            {t("xp_to_next", { l: info.level + 1, x: info.need - info.into })}
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <strong>{points}</strong>
            <span>{t("stat_points")}</span>
          </div>
          <div className="profile-stat">
            <strong>
              {collectedCount}
              <small>/{COUNTRIES.length}</small>
            </strong>
            <span>{t("stat_collected")}</span>
          </div>
          <div className="profile-stat">
            <strong>{advancedCount}</strong>
            <span>{t("stat_advanced")}</span>
          </div>
          <div className="profile-stat">
            <strong>{correctAnswers}</strong>
            <span>{t("stat_correct")}</span>
          </div>
        </div>

        <div className="profile-track">
          <div className="explore-card-head">{t("outfit_track")}</div>
          <div className="profile-track-tiers">
            {OUTFIT_TIERS.map((ot, i) => (
              <div
                key={i}
                className={`profile-tier ${
                  i < tier
                    ? "profile-tier--done"
                    : i === tier
                      ? "profile-tier--now"
                      : ""
                }`}
                style={i === tier ? { borderColor: ot.ring } : undefined}
              >
                <span className="profile-tier-gear">{ot.gear}</span>
                <span className="profile-tier-lv">
                  Lv {i * LEVELS_PER_TIER + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-track">
          <div className="explore-card-head">
            {t("badge_wall")}{" "}
            <span className="badge-wall-count">
              {earnedBadges.size}/{BADGES.length}
            </span>
          </div>
          <div className="badge-grid">
            {BADGES.map((b) => {
              const earned = earnedBadges.has(b.id);
              return (
                <button
                  key={b.id}
                  className={`badge-tile ${earned ? "" : "badge-tile--locked"} ${
                    pickedBadge === b.id ? "badge-tile--picked" : ""
                  }`}
                  title={`${L(b.name, lang)} — ${L(b.desc, lang)}`}
                  onClick={() =>
                    setPickedBadge(pickedBadge === b.id ? null : b.id)
                  }
                >
                  {b.emoji}
                </button>
              );
            })}
          </div>
          <div className="badge-detail">
            {picked ? (
              <>
                <strong>
                  {picked.emoji} {L(picked.name, lang)}
                </strong>{" "}
                — {L(picked.desc, lang)}
                {earnedBadges.has(picked.id) && " ✓"}
              </>
            ) : (
              t("badge_hint")
            )}
          </div>
        </div>

        {bests.length > 0 && (
          <div className="profile-track">
            <div className="explore-card-head">{t("best_scores")}</div>
            <div className="profile-bests">
              {bests.map(([label, value], i) => (
                <span key={i} className="profile-best">
                  {label} <strong>{value}</strong>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="profile-actions">
          <button
            className="btn btn--primary btn--sm share-btn"
            onClick={() => void shareAchievement().catch(console.error)}
          >
            {t("share_btn")}
          </button>
          <button className="btn btn--ghost btn--sm" onClick={onChangeAvatar}>
            {t("change_avatar")}
          </button>
        </div>

        {confirmReset ? (
          <div className="reset-confirm">
            <p>{t("reset_warn")}</p>
            <div className="reset-confirm-btns">
              <button
                className="btn btn--sm btn--danger-solid"
                onClick={() => {
                  resetProgress();
                  onClose();
                }}
              >
                {t("reset_confirm")}
              </button>
              <button
                className="btn btn--ghost btn--sm"
                onClick={() => setConfirmReset(false)}
              >
                {t("reset_cancel")}
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn--ghost btn--sm btn--danger"
            onClick={() => setConfirmReset(true)}
          >
            {t("reset_btn")}
          </button>
        )}
      </div>
    </div>
  );
}
