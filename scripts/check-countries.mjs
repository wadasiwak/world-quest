// Validates country content against the map data:
//   node scripts/check-countries.mjs
// - every Country.id resolves to a GeoJSON polygon (or is flagged as marker-only)
// - exactly 3 cities per country, each with a well-formed 4-option trivia
// - bilingual fields are non-empty on both sides, no cross-language leakage
// - no duplicate ids
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// The data files are TypeScript; strip the type-only bits so node can eval
// them as plain JS. They are plain literals, so this is safe.
async function evalTs(path, exportPattern) {
  const src = readFileSync(path, "utf8")
    .replace(/import type .*?;\n/gs, "")
    .replace(exportPattern, "export default");
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(src).toString("base64")}`
  );
  return mod.default;
}

async function loadCountries() {
  const dir = join(root, "src/data/countries");
  const files = readdirSync(dir)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(".ts", ""));
  const all = [];
  for (const f of files) {
    const list = await evalTs(
      join(dir, `${f}.ts`),
      /export const \w+: Country\[\] =/,
    );
    all.push(...list.map((c) => ({ ...c, __file: f })));
  }
  return all;
}

async function loadExtras() {
  const dir = join(root, "src/data/extras");
  const merged = {};
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const rec = await evalTs(
      join(dir, f),
      /export const \w+: Record<string, CountryExtras> =/,
    );
    for (const [k, v] of Object.entries(rec)) {
      if (merged[k]) console.log(`ERROR extras: duplicate key ${k} in ${f}`);
      merged[k] = { ...v, __file: f };
    }
  }
  return merged;
}

const geo = JSON.parse(
  readFileSync(join(root, "public/data/countries.geo.json"), "utf8"),
);
const polygonIsos = new Set(geo.features.map((f) => f.properties.iso));

const countries = await loadCountries();
const errors = [];
const warnings = [];
const seen = new Set();

const hasZh = (s) => /[一-鿿]/.test(s);
const checkLS = (ls, path, { expectZhHan = true } = {}) => {
  if (!ls || typeof ls !== "object") {
    errors.push(`${path}: missing localized string`);
    return;
  }
  for (const lang of ["zh", "en"]) {
    if (!ls[lang] || !ls[lang].trim()) errors.push(`${path}.${lang}: empty`);
  }
  if (expectZhHan && ls.zh && !hasZh(ls.zh))
    warnings.push(`${path}.zh: no Chinese characters — "${ls.zh}"`);
  if (ls.en && hasZh(ls.en))
    errors.push(`${path}.en: contains Chinese characters — "${ls.en}"`);
};

for (const c of countries) {
  const p = `${c.__file}/${c.id}`;
  if (seen.has(c.id)) errors.push(`${p}: duplicate id`);
  seen.add(c.id);

  if (!/^[A-Z]{3}$/.test(c.id)) errors.push(`${p}: bad ISO id`);
  if (!polygonIsos.has(c.id))
    warnings.push(`${p}: no polygon in GeoJSON (marker fallback)`);
  checkLS(c.name, `${p}.name`);
  checkLS(c.capital, `${p}.capital`);
  checkLS(c.intro, `${p}.intro`);
  checkLS(c.history, `${p}.history`);
  if (!c.flag) errors.push(`${p}: missing flag`);
  if (
    !c.center ||
    Math.abs(c.center.lat) > 90 ||
    Math.abs(c.center.lng) > 180
  )
    errors.push(`${p}: bad center`);
  if (!["asia", "europe", "africa", "americas", "oceania"].includes(c.region))
    errors.push(`${p}: bad region "${c.region}"`);
  if (!c.__file.startsWith(c.region))
    errors.push(`${p}: region "${c.region}" doesn't match file`);
  if (c.climate) checkLS(c.climate, `${p}.climate`);
  if (c.travelTips) {
    if (c.travelTips.length < 2 || c.travelTips.length > 4)
      warnings.push(`${p}: ${c.travelTips.length} travelTips (expect 2–4)`);
    c.travelTips.forEach((tip, i) => checkLS(tip, `${p}.travelTips[${i}]`));
  }

  if (!Array.isArray(c.cities) || c.cities.length !== 3)
    errors.push(`${p}: expected exactly 3 cities, got ${c.cities?.length}`);
  for (const [i, city] of (c.cities ?? []).entries()) {
    const cp = `${p}.cities[${i}]`;
    checkLS(city.name, `${cp}.name`);
    checkLS(city.blurb, `${cp}.blurb`);
    const tv = city.trivia;
    if (!tv) {
      errors.push(`${cp}: missing trivia`);
      continue;
    }
    checkLS(tv.question, `${cp}.question`);
    checkLS(tv.explanation, `${cp}.explanation`);
    if (!Array.isArray(tv.options) || tv.options.length !== 4)
      errors.push(`${cp}: expected 4 options, got ${tv.options?.length}`);
    else tv.options.forEach((o, j) => checkLS(o, `${cp}.options[${j}]`));
    if (
      !Number.isInteger(tv.answerIndex) ||
      tv.answerIndex < 0 ||
      tv.answerIndex >= (tv.options?.length ?? 0)
    )
      errors.push(`${cp}: answerIndex out of range`);
  }
}

// Extras: extraQuiz for every country; climate/travelTips only for
// countries whose base entry doesn't carry them inline.
const extras = await loadExtras();
const countryIds = new Set(countries.map((c) => c.id));
const countryById = new Map(countries.map((c) => [c.id, c]));
for (const [id, ex] of Object.entries(extras)) {
  const p = `extras/${id}`;
  if (!countryIds.has(id)) errors.push(`${p}: unknown country id`);
  const base = countryById.get(id);
  if (ex.climate) checkLS(ex.climate, `${p}.climate`);
  else if (base && !base.climate)
    errors.push(`${p}: no climate here nor inline`);
  if (ex.travelTips) {
    if (!Array.isArray(ex.travelTips) || ex.travelTips.length < 2)
      errors.push(`${p}: needs 2+ travelTips`);
    else
      ex.travelTips.forEach((tip, i) => checkLS(tip, `${p}.travelTips[${i}]`));
  } else if (base && !(base.travelTips?.length >= 2)) {
    errors.push(`${p}: no travelTips here nor inline`);
  }
  if (!Array.isArray(ex.extraQuiz) || ex.extraQuiz.length !== 3)
    errors.push(`${p}: expected 3 extraQuiz, got ${ex.extraQuiz?.length}`);
  else
    for (const [i, tv] of ex.extraQuiz.entries()) {
      const qp = `${p}.extraQuiz[${i}]`;
      checkLS(tv.question, `${qp}.question`);
      checkLS(tv.explanation, `${qp}.explanation`);
      if (!Array.isArray(tv.options) || tv.options.length !== 4)
        errors.push(`${qp}: expected 4 options`);
      else tv.options.forEach((o, j) => checkLS(o, `${qp}.options[${j}]`));
      if (
        !Number.isInteger(tv.answerIndex) ||
        tv.answerIndex < 0 ||
        tv.answerIndex >= (tv.options?.length ?? 0)
      )
        errors.push(`${qp}: answerIndex out of range`);
    }
}
// Countries still missing climate/tips from either source.
const noClimate = countries.filter((c) => !c.climate && !extras[c.id]?.climate);
if (noClimate.length)
  warnings.push(
    `${noClimate.length} countries missing climate/travelTips: ${noClimate
      .map((c) => c.id)
      .join(",")}`,
  );
// Countries still missing an advanced question bank.
const noQuiz = countries.filter((c) => !extras[c.id]?.extraQuiz?.length);
if (noQuiz.length)
  warnings.push(
    `${noQuiz.length} countries missing extraQuiz: ${noQuiz
      .map((c) => c.id)
      .join(",")}`,
  );

console.log(`countries: ${countries.length}, extras: ${Object.keys(extras).length}`);
for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s)`);
  process.exit(1);
}
console.log("all checks passed ✓");
