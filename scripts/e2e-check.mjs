// End-to-end smoke test: drives the running dev server (port 5190) in system
// Chrome. Usage: node scripts/e2e-check.mjs [--headed]
import { chromium } from "playwright";

const headed = process.argv.includes("--headed");
const BASE = "http://localhost:5190";
const shots = "/tmp/world-quest-e2e";
import { mkdirSync } from "node:fs";
mkdirSync(shots, { recursive: true });

const browser = await chromium.launch({
  channel: "chrome",
  headless: !headed,
  args: ["--use-angle=metal"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const fails = [];
const check = (name, ok) => {
  console.log(`${ok ? "✓" : "✗"} ${name}`);
  if (!ok) fails.push(name);
};

page.on("pageerror", (e) => console.log("PAGE ERROR:", e.message));

await page.goto(BASE);
await page.waitForFunction(() => window.__wqMap?.isStyleLoaded?.(), null, {
  timeout: 30_000,
});
// Let feature-state painting settle.
await page.waitForTimeout(1500);
check("map loaded", true);
check("side panel", await page.locator(".worldmap-panel").isVisible());

// --- first-run character select blocks everything until a pick is made ---
await page.waitForSelector(".avatar-grid");
check("character select on first run", true);
await page.screenshot({ path: `${shots}/0-character-select.png` });
await page.locator(".avatar-option", { hasText: "狐狸" }).click();
await page.locator(".modal--celebrate .btn--primary").click();
await page.waitForSelector(".avatar-chip");
check(
  "avatar chip shows outfit title",
  (await page.locator(".avatar-chip").innerText()).includes("見習旅人"),
);
await page.screenshot({ path: `${shots}/1-worldmap.png` });

// --- click Japan → country card ---
const jp = await page.evaluate(() => window.__wqMap.project([138.3, 36.2]));
await page.mouse.click(jp.x, jp.y);
await page.waitForSelector(".country-card", { timeout: 5000 });
const cardText = await page.locator(".country-card").innerText();
check("country card shows 日本", cardText.includes("日本"));
await page.screenshot({ path: `${shots}/2-country-card.png` });

// --- quiz flow. Options are shuffled, so pass 1 learns the correct answers
// (highlighted green in feedback); if collection fails, retry using them. ---
await page.locator(".country-card .btn--primary").click();
await page.waitForSelector(".modal .choice-list");
const correctByQuestion = new Map();
let sawLevelUp = false;
// The level-up overlay (z-40) intercepts clicks — screenshot it, then tap
// to dismiss before touching the result modal underneath.
const dismissLevelUp = async () => {
  if (await page.locator(".levelup-backdrop").count()) {
    if (!sawLevelUp) {
      sawLevelUp = true;
      await page.screenshot({ path: `${shots}/12-levelup.png` });
    }
    await page.locator(".levelup-backdrop").click();
    await page.waitForTimeout(300);
  }
};
const playQuiz = async () => {
  for (let q = 0; q < 3; q++) {
    const question = await page.locator(".modal h2").innerText();
    const known = correctByQuestion.get(question);
    const target = known
      ? page.locator(".choice-list .btn--choice", { hasText: known }).first()
      : page.locator(".choice-list .btn--choice").first();
    await target.click();
    await page.waitForSelector(".choice-result");
    correctByQuestion.set(
      question,
      await page.locator(".choice-result .btn--right").innerText(),
    );
    await page.locator(".choice-result .btn--primary").click();
    await page.waitForTimeout(300);
  }
  await page.waitForSelector(".modal--celebrate", { timeout: 5000 });
  await dismissLevelUp();
  return page.locator(".modal--celebrate").innerText();
};
let resultText = await playQuiz();
if (resultText.includes("差一點")) {
  await page.locator(".modal--celebrate .btn--primary").click(); // 再挑戰
  await page.waitForSelector(".modal .choice-list");
  resultText = await playQuiz();
}
check("quiz collects country", resultText.includes("收集成功"));
check("level-up animation fired", sawLevelUp);
await page.screenshot({ path: `${shots}/3-quiz-result.png` });
await page.locator(".modal--celebrate .btn").last().click();

// --- codex + knowledge ---
await page.locator(".explore-row:has-text('圖鑑') .btn--primary").click();
await page.waitForSelector(".codex-grid");
const tileCount = await page.locator(".codex-tile").count();
check(`codex has tiles (${tileCount})`, tileCount >= 16);
await page.screenshot({ path: `${shots}/4-codex.png` });
await page.locator(".codex-tile").first().click();
await page.waitForSelector(".knowledge-section");
check(
  "knowledge sections",
  (await page.locator(".knowledge-section").count()) >= 3,
);
await page.screenshot({ path: `${shots}/5-knowledge.png` });
await page.locator(".page-topbar .btn").last().click(); // back to map

// --- country search panel: bilingual search, ✓ mark, fly-to opens the card ---
await page.fill(".country-search-input", "日本");
await page.waitForTimeout(300); // let React re-filter
const jpRows = page.locator(".country-search-row");
check("search finds 日本 (1 row)", (await jpRows.count()) === 1);
check(
  "search row shows collected ✓",
  (await jpRows.first().innerText()).includes("✓"),
);
await jpRows.first().click();
await page.waitForSelector(".country-card", { timeout: 5000 });
check(
  "search pick opens country card",
  (await page.locator(".country-card").innerText()).includes("日本"),
);
await page.screenshot({ path: `${shots}/14-search.png` });
await page.locator(".country-card-close").click();
await page.fill(".country-search-input", "france");
await page.waitForTimeout(300);
check(
  "search matches EN name too",
  (await page.locator(".country-search-row").count()) === 1 &&
    (await page.locator(".country-search-row").innerText()).includes("法國"),
);
await page.fill(".country-search-input", "");
// The fly-to moved the camera; restore the world view for the pointing
// game's geo→pixel projections below.
await page.evaluate(() =>
  window.__wqMap.jumpTo({ center: [30, 25], zoom: 1.6 }),
);
await page.waitForTimeout(400);

// --- pointing game (classic): wrong guess must reveal the target in green ---
await page.locator(".btn", { hasText: "經典" }).click();
await page.waitForSelector(".pointing-hud");
const mid = await page.evaluate(() => window.__wqMap.project([0, -30])); // south atlantic
await page.mouse.click(mid.x, mid.y);
await page.waitForSelector(".pointing-feedback", { timeout: 5000 });
check("pointing feedback", true);
await page.waitForTimeout(1500); // flyTo to the revealed country
await page.screenshot({ path: `${shots}/6-pointing-reveal.png` });
await page.locator(".pointing-quit").click();

// --- pointing (world mode) starts and shows a target ---
await page.locator(".btn", { hasText: "全世界" }).click();
await page.waitForSelector(".pointing-hud");
check(
  "world pointing hud",
  (await page.locator(".pointing-target").innerText()).length > 3,
);
await page.locator(".pointing-quit").click();

// --- daily challenge row exists and starts ---
await page.locator(".explore-row:has-text('每日') .btn--primary").click();
await page.waitForSelector(".pointing-hud");
check("daily pointing starts", true);
await page.locator(".pointing-quit").click();

// --- shape game: silhouette canvas renders and a round can be answered ---
await page.locator(".explore-row:has-text('形狀') .btn--primary").click();
await page.waitForSelector(".shape-canvas-wrap canvas");
const canvasDrawn = await page.evaluate(() => {
  const c = document.querySelector(".shape-canvas-wrap canvas");
  const ctx = c.getContext("2d");
  return ctx.getImageData(0, 0, c.width, c.height).data.some((v) => v !== 0);
});
check("shape silhouette drawn", canvasDrawn);
await page.locator(".choice-list .btn--choice").first().click();
await page.waitForSelector(".flash-wrap > .btn--primary"); // next button
check("shape answer accepted", true);
await page.screenshot({ path: `${shots}/9-shape.png` });
await page.locator(".page-topbar .btn--ghost").click(); // quit

// --- advanced quiz: collected Japan should now offer ⭐ 進階挑戰 ---
// Earlier games moved the camera; bring Japan back into view first.
await page.evaluate(() =>
  window.__wqMap.jumpTo({ center: [138.3, 36.2], zoom: 4 }),
);
await page.waitForTimeout(600);
const jp2 = await page.evaluate(() => window.__wqMap.project([138.3, 36.2]));
await page.mouse.click(jp2.x, jp2.y);
await page.waitForSelector(".country-card");
const cardBtn = await page.locator(".country-card .btn--primary").innerText();
check("advanced quiz offered", cardBtn.includes("進階"));
await page.locator(".country-card .btn--primary").click();
await page.waitForSelector(".modal .choice-list");
check(
  "advanced tag shown",
  (await page.locator(".quiz-meta").innerText()).includes("進階"),
);
await page.screenshot({ path: `${shots}/10-advanced.png` });
// Play the advanced quiz through (learn-then-retry, same as the base quiz).
let advResult = await playQuiz();
for (let i = 0; i < 2 && advResult.includes("差一點"); i++) {
  await page.locator(".modal--celebrate .btn--primary").click(); // 再挑戰
  await page.waitForSelector(".modal .choice-list");
  advResult = await playQuiz();
}
check("advanced quiz cleared", advResult.includes("進階挑戰完成"));
await page
  .locator(".modal--celebrate .btn", { hasText: "回世界地圖" })
  .click();
// Cleared-advanced marks: ⭐ in the codex tile.
await page.locator(".explore-row:has-text('圖鑑') .btn--primary").click();
await page.waitForSelector(".codex-grid");
const jpTile = await page
  .locator(".codex-tile", { hasText: "日本" })
  .innerText();
check("codex shows advanced ⭐", jpTile.includes("⭐"));
await page.screenshot({ path: `${shots}/13-codex-advanced.png` });
await page.locator(".page-topbar .btn").click(); // back to map

// --- advanced-challenge entry in the mode menu lists cleared Japan ---
await page.locator(".explore-row:has-text('進階挑戰') .btn--primary").click();
await page.waitForSelector(".advanced-picker");
const pickerText = await page.locator(".advanced-picker").innerText();
check("advanced picker lists 日本 as cleared", pickerText.includes("日本"));
await page.screenshot({ path: `${shots}/15-advanced-picker.png` });
await page.locator(".advanced-picker .country-card-close").click();

// --- knowledge page shows climate + travel tips for extras-backed country ---
await page.locator(".explore-row:has-text('圖鑑') .btn--primary").click();
await page.waitForSelector(".codex-grid");
await page.locator(".codex-tile", { hasText: "台灣" }).click();
await page.waitForSelector(".knowledge-section");
const knowledgeText = await page.locator(".page-inner").innerText();
check("climate section", knowledgeText.includes("氣候"));
check("travel tips section", knowledgeText.includes("旅遊注意事項"));
await page.screenshot({ path: `${shots}/11-knowledge-climate.png` });
await page.locator(".page-topbar .btn").last().click();

// --- flash quiz: start, answer 2, quit via reload ---
await page.locator(".explore-row:has-text('快問快答') .btn--primary").click();
await page.locator(".flash-wrap .btn--primary").click(); // GO
await page.waitForSelector(".flash-question");
for (let i = 0; i < 2; i++) {
  await page.locator(".choice-list .btn--choice").first().click();
  await page.waitForTimeout(600);
}
check("flash quiz answers", true);
await page.screenshot({ path: `${shots}/7-flash.png` });

// --- persistence: reload, collected count survives ---
await page.goto(BASE);
await page.waitForFunction(() => window.__wqMap?.isStyleLoaded?.(), null, {
  timeout: 30_000,
});
const progress = await page
  .locator(".collect-progress .collect-progress-row strong")
  .first()
  .innerText();
console.log("progress after reload:", progress);
check("progress persisted", !progress.trim().startsWith("0 /"));
check(
  "avatar persisted (no re-select)",
  (await page.locator(".avatar-grid").count()) === 0,
);
check(
  "level advanced past 1 (non-linear curve)",
  !(await page.locator(".avatar-chip").innerText()).includes("Lv 1 ·"),
);

// --- language toggle ---
await page.locator(".lang-toggle button", { hasText: "EN" }).click();
check(
  "EN toggle",
  (await page.locator(".worldmap-banner h1").innerText()).includes("World Quest"),
);
await page.screenshot({ path: `${shots}/8-english.png` });

// --- profile: share button present; reset needs a double confirm and wipes ---
await page.locator(".avatar-chip").click();
await page.waitForSelector(".profile-card");
check(
  "share button in profile",
  (await page.locator(".profile-card .share-btn").count()) === 1,
);
await page.locator(".profile-card .btn--danger").click();
await page.waitForSelector(".reset-confirm");
check("reset asks to confirm", true);
await page.screenshot({ path: `${shots}/16-reset-confirm.png` });
await page.locator(".reset-confirm .btn--danger-solid").click();
await page.waitForSelector(".avatar-grid"); // fresh start → character select
check("reset reopens character select", true);
check(
  "reset wipes progress to 0",
  (
    await page
      .locator(".collect-progress .collect-progress-row strong")
      .first()
      .innerText()
  )
    .trim()
    .startsWith("0 /"),
);

await browser.close();
console.log(fails.length ? `\nFAILED: ${fails.join(", ")}` : "\nall e2e checks passed ✓");
process.exit(fails.length ? 1 : 0);
