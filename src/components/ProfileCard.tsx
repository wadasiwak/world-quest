import { COUNTRIES } from "../data/countries";
import {
  avatarById,
  OUTFIT_TIERS,
  tierForLevel,
  LEVELS_PER_TIER,
} from "../data/avatars";
import { levelInfo } from "../lib/leveling";
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
  const collectedCount = useGameStore((s) => s.collectedCountryIds.length);
  const advancedCount = useGameStore((s) => s.advancedDoneIds.length);
  const bestPointing = useGameStore((s) => s.bestPointing);
  const bestPointingWorld = useGameStore((s) => s.bestPointingWorld);
  const bestShape = useGameStore((s) => s.bestShape);
  const bestFlash = useGameStore((s) => s.bestFlash);
  const todayScore = useGameStore((s) => s.dailyScores[todayKey()]);

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

        <button className="btn btn--ghost btn--sm" onClick={onChangeAvatar}>
          {t("change_avatar")}
        </button>
      </div>
    </div>
  );
}
