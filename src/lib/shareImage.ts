// Achievement share card: draws the player's progress as a 900×1200 PNG on a
// canvas (same pattern as tarot's shareImage.ts). Everything is emoji + text,
// so no image assets are needed. Mobile prefers the system share sheet
// (navigator.share → LINE/IG direct); desktop falls back to a PNG download.
import { COUNTRIES, countryById } from "../data/countries";
import { avatarById, OUTFIT_TIERS, tierForLevel } from "../data/avatars";
import { BADGES, badgeById } from "../data/badges";
import { evaluateBadges, earnedByRecency } from "./badges";
import { levelInfo } from "./leveling";
import { useGameStore } from "../store/gameStore";
import { tr, L, type Lang } from "../i18n";

const W = 900;
const H = 1200;
const SITE_URL = "wadasiwak.github.io/world-quest";
const FONT = "'PingFang TC','Noto Sans TC',system-ui,sans-serif";

/** Flags per row / max rows for the collected-flag wall. */
const FLAGS_PER_ROW = 13;
const MAX_FLAG_ROWS = 4;

interface ShareStats {
  lang: Lang;
  avatarEmoji: string;
  gear: string;
  ring: string;
  outfitTitle: string;
  level: number;
  points: number;
  collected: number;
  total: number;
  flags: string[];
  bests: string[];
  /** Most recently unlocked badge emojis (newest last, max 5). */
  badgeEmojis: string[];
  badgesEarned: number;
  badgesTotal: number;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function makeShareImage(s: ShareStats): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Background: app dark + soft gold / blue glows.
  ctx.fillStyle = "#0e1116";
  ctx.fillRect(0, 0, W, H);
  const g1 = ctx.createRadialGradient(W * 0.85, -60, 0, W * 0.85, -60, 720);
  g1.addColorStop(0, "rgba(255, 207, 77, 0.16)");
  g1.addColorStop(1, "rgba(255, 207, 77, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, W, H);
  const g2 = ctx.createRadialGradient(0, H, 0, 0, H, 720);
  g2.addColorStop(0, "rgba(90, 140, 200, 0.18)");
  g2.addColorStop(1, "rgba(90, 140, 200, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = "center";

  // Title + tagline.
  ctx.fillStyle = "#ffcf4d";
  ctx.font = `700 46px ${FONT}`;
  ctx.fillText(tr("app_title", s.lang), W / 2, 96);
  ctx.fillStyle = "#9aa7b5";
  ctx.font = `26px ${FONT}`;
  ctx.fillText(tr("share_img_tagline", s.lang), W / 2, 142);

  // Avatar in a rarity ring, gear badge at the bottom right.
  const ax = W / 2;
  const ay = 268;
  ctx.beginPath();
  ctx.arc(ax, ay, 78, 0, Math.PI * 2);
  ctx.fillStyle = "#1f2733";
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = s.ring;
  ctx.stroke();
  ctx.font = `86px ${FONT}`;
  ctx.fillText(s.avatarEmoji, ax, ay + 32);
  ctx.font = `44px ${FONT}`;
  ctx.fillText(s.gear, ax + 62, ay + 76);

  // Outfit title + level line.
  ctx.fillStyle = s.ring;
  ctx.font = `700 34px ${FONT}`;
  ctx.fillText(s.outfitTitle, W / 2, 408);
  ctx.fillStyle = "#e8edf3";
  ctx.font = `26px ${FONT}`;
  ctx.fillText(
    `Lv ${s.level} · ${s.points} ${tr("pts", s.lang)}`,
    W / 2,
    450,
  );

  // Collected progress: label, big count, progress bar.
  ctx.fillStyle = "#9aa7b5";
  ctx.font = `26px ${FONT}`;
  ctx.fillText(tr("collected_progress", s.lang), W / 2, 528);
  ctx.fillStyle = "#ffcf4d";
  ctx.font = `700 64px ${FONT}`;
  ctx.fillText(`${s.collected} / ${s.total}`, W / 2, 600);
  const barW = 620;
  const barX = (W - barW) / 2;
  ctx.fillStyle = "#2a333f";
  roundRect(ctx, barX, 626, barW, 16, 8);
  ctx.fill();
  if (s.collected > 0) {
    ctx.fillStyle = "#ffcf4d";
    roundRect(
      ctx,
      barX,
      626,
      Math.max(16, (barW * s.collected) / s.total),
      16,
      8,
    );
    ctx.fill();
  }

  // Flag wall of collected countries (capped; overflow shown as "+N").
  const maxFlags = FLAGS_PER_ROW * MAX_FLAG_ROWS;
  const shown = s.flags.slice(
    0,
    s.flags.length > maxFlags ? maxFlags - 1 : maxFlags,
  );
  const extra = s.flags.length - shown.length;
  const step = 56;
  const y0 = 718;
  ctx.font = `38px ${FONT}`;
  ctx.fillStyle = "#e8edf3";
  const cells = extra > 0 ? shown.length + 1 : shown.length;
  for (let i = 0; i < cells; i++) {
    const row = Math.floor(i / FLAGS_PER_ROW);
    const inRow = Math.min(FLAGS_PER_ROW, cells - row * FLAGS_PER_ROW);
    const rowX0 = (W - (inRow - 1) * step) / 2;
    const x = rowX0 + (i % FLAGS_PER_ROW) * step;
    const y = y0 + row * 58;
    if (i < shown.length) {
      ctx.fillText(shown[i], x, y);
    } else {
      ctx.fillStyle = "#9aa7b5";
      ctx.font = `700 26px ${FONT}`;
      ctx.fillText(`+${extra}`, x, y - 4);
      ctx.font = `38px ${FONT}`;
      ctx.fillStyle = "#e8edf3";
    }
  }

  // Recently unlocked badges: gold-ringed medallions in a centered row.
  if (s.badgeEmojis.length) {
    ctx.fillStyle = "#9aa7b5";
    ctx.font = `24px ${FONT}`;
    ctx.fillText(
      `${tr("share_badges", s.lang)} ${s.badgesEarned}/${s.badgesTotal}`,
      W / 2,
      946,
    );
    const r = 34;
    const gap = 88;
    const cy = 1004;
    const x0 = W / 2 - ((s.badgeEmojis.length - 1) * gap) / 2;
    for (let i = 0; i < s.badgeEmojis.length; i++) {
      const cx = x0 + i * gap;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2733";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#ffcf4d";
      ctx.stroke();
      ctx.fillStyle = "#e8edf3";
      ctx.font = `36px ${FONT}`;
      ctx.fillText(s.badgeEmojis[i], cx, cy + 13);
    }
  }

  // Best scores, one small line.
  if (s.bests.length) {
    ctx.fillStyle = "#9aa7b5";
    ctx.font = `24px ${FONT}`;
    ctx.fillText(
      `${tr("best_scores", s.lang)} · ${s.bests.join("   ")}`,
      W / 2,
      1066,
    );
  }

  // Footer: site name + URL.
  ctx.fillStyle = "#9aa7b5";
  ctx.font = `24px ${FONT}`;
  ctx.fillText(tr("app_title", s.lang), W / 2, H - 96);
  ctx.fillStyle = "#ffcf4d";
  ctx.font = `600 26px ${FONT}`;
  ctx.fillText(SITE_URL, W / 2, H - 56);

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
      "image/png",
    ),
  );
}

/** Mobile: system share sheet; desktop (or share declined): download. */
async function shareOrDownload(blob: Blob, filename: string): Promise<void> {
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return;
    } catch {
      // User dismissed the share sheet — fall through to download.
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

/** Build the card from the current save and share/download it. */
export async function shareAchievement(): Promise<void> {
  const s = useGameStore.getState();
  const info = levelInfo(s.xp);
  const outfit = OUTFIT_TIERS[tierForLevel(info.level)];
  const flags = s.collectedCountryIds
    .map((id) => countryById(id)?.flag)
    .filter((f): f is string => !!f);

  const bests: string[] = [];
  if (s.bestPointing !== null) bests.push(`📍 ${s.bestPointing}/10`);
  if (s.bestPointingWorld !== null) bests.push(`🌐 ${s.bestPointingWorld}/10`);
  if (s.bestShape !== null) bests.push(`🧩 ${s.bestShape}/10`);
  if (s.bestFlash !== null) bests.push(`⚡ ${s.bestFlash}`);

  // Up to 5 most recently unlocked badges (badgesSeen keeps unlock order).
  const earned = evaluateBadges(s);
  const badgeEmojis = earnedByRecency(earned, s.badgesSeen)
    .slice(-5)
    .map((id) => badgeById(id)?.emoji)
    .filter((e): e is string => !!e);

  const blob = await makeShareImage({
    lang: s.lang,
    avatarEmoji: s.avatarId ? (avatarById(s.avatarId)?.emoji ?? "🙂") : "🙂",
    gear: outfit.gear,
    ring: outfit.ring,
    outfitTitle: L(outfit.title, s.lang),
    level: info.level,
    points: s.points,
    collected: s.collectedCountryIds.length,
    total: COUNTRIES.length,
    flags,
    bests,
    badgeEmojis,
    badgesEarned: earned.length,
    badgesTotal: BADGES.length,
  });
  await shareOrDownload(blob, "world-quest-achievement.png");
}
