# World Quest 🗺️

Collect all **197 countries** of the world by answering trivia about their
cities, then read their story — history, climate, and travel tips — in the
codex. A fully static sibling of [Street Quest](../zelda-irl): same world map,
no street imagery, no API tokens, no backend.

## Run it

```bash
npm install
npm run dev        # http://localhost:5190
```

`npm run build` produces a fully static `dist/` — every piece of content ships
with the app (the only network dependency is the OpenFreeMap dark basemap).

## Play — six modes

- **答題收集 Collect** — click a country (or hit 隨機挑戰) and answer 3
  questions about its cities. 2+ correct collects it: the map turns gold, the
  camera flies in, fanfare plays. Completing a whole region earns a 🏆.
- **進階挑戰 Advanced quiz** — every collected country unlocks a harder
  country-level question bank for bonus points, once.
- **地圖指認 Find-the-country** — 10 rounds of "click Brazil". Three flavors:
  **經典** (content countries), **全世界** (all 177 map polygons), and a
  **每日挑戰** with a date-seeded set shared by everyone. Basemap labels and
  the gold/blue fills are hidden during play; a wrong guess lights the answer
  up in green and flies to it.
- **形狀猜國家 Shape quiz** — name the country from its silhouette (canvas-
  rendered from the map polygons, same-region distractors).
- **快問快答 Blitz** — 60 seconds of flag→country, country→capital, and
  country→flag questions with combo bonuses.
- **國家圖鑑 Codex / knowledge mode** — every country's intro, history,
  climate, key cities, travel tips, and fun facts. Never locked.

All UI and content is bilingual (繁中/EN). Progress persists in
`localStorage` (`world-quest-save`). Synthesized SFX via Web Audio (🔇
toggle). Mobile gets a bottom-sheet layout.

## Architecture

```
public/data/countries.geo.json   # Natural Earth 110m, slimmed:
                                 #   {iso, iso2, name, name_zht, continent} + numeric ids
src/
  data/
    types.ts                     # Country / CountryCity / Trivia / CountryExtras
    countries/*.ts               # 197 countries, one file per continent batch
    extras/*.ts                  # advanced quiz for all 197 (+ climate/tips for the first 61)
  lib/
    countriesGeo.ts              # cached GeoJSON loader + centroids + iso2→emoji
    rng.ts                       # seeded shuffle (daily challenge)
    sound.ts                     # Web Audio SFX
  store/gameStore.ts             # zustand + persist (only progression persists)
  components/
    WorldMap.tsx                 # always-mounted map: fills, hover, click routing,
                                 #   pointing target pools, collection ceremony
    CountryQuiz.tsx              # base (city) + advanced (country) quiz flows
    PointingGame.tsx  ShapeGame.tsx  FlashQuiz.tsx
    Codex.tsx  KnowledgePanel.tsx
```

Design notes:

- The map mounts once and stays under every view; full-page views and modals
  render on top, so returning to it is instant.
- Feature-state coloring keyed by numeric ids baked into the GeoJSON.
- 28 microstates with no 110m polygon (Singapore, Malta, the Caribbean and
  Pacific islands…) render as clickable circle markers; the pointing game
  gives them a 150 km near-miss tolerance over open water.
- Content files store the correct answer at `answerIndex` (usually 0); quizzes
  shuffle options at display time.
- Non-UN territories (Greenland, W. Sahara, N. Cyprus, …) stay on the map as
  "coming soon".

## Content pipeline

Country content is plain TS literals (see `src/data/types.ts`), written per
continent batch — designed to be LLM-generated and human-reviewed. After
touching content, run:

```bash
npm run check              # ids ↔ GeoJSON, 3 cities × 4 options, bilingual completeness,
                           # extras shape (3 advanced questions each, climate/tips coverage)
node scripts/e2e-check.mjs # Playwright + system Chrome, drives every mode end-to-end
```

The dev/test hook `window.__wqMap` exposes the MapLibre map for geo→pixel
clicks in e2e scripts.

## 版權聲明 / Copyright

© 2026 wadasiwak. All rights reserved.

本專案的程式碼與內容（含題庫、國家介紹、歷史、氣候、旅遊提示等原創文字）
均為 wadasiwak 所有,保留一切權利。未經授權,禁止轉載、重製、散布或商業使用。

The source code and content of this project (including the quiz question
banks and the original country intros, history, climate, and travel-tip
texts) are © 2026 wadasiwak, all rights reserved. Unauthorized reproduction,
redistribution, or commercial use is prohibited.

Third-party data — 上述聲明不含下列第三方素材,其著作權與授權依原出處:

- Basemap tiles & style: [OpenFreeMap](https://openfreemap.org/) ·
  © [OpenMapTiles](https://openmaptiles.org/) ·
  Data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors
  (shown in the in-map attribution control)
- Country boundaries (`public/data/countries.geo.json`): derived from
  [Natural Earth](https://www.naturalearthdata.com/) 110m (public domain)
