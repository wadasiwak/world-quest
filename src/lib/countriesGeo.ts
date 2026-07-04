// Shared, cached loader for the slim Natural Earth GeoJSON. Used by the map,
// the pointing game's worldwide pool, and the shape-guessing game.
import type { LS } from "../i18n";

export interface GeoCountry {
  iso: string;
  iso2: string;
  name: LS;
  continent: string;
  featureId: number;
  /** Centroid of the largest polygon ring (stable for multi-part countries). */
  center: { lat: number; lng: number };
  geometry: GeoJSON.Geometry;
}

export interface CountriesGeo {
  raw: GeoJSON.FeatureCollection;
  byIso: Map<string, GeoCountry>;
  list: GeoCountry[];
}

/** ISO2 → 🇽🇽 regional-indicator flag emoji. */
export function iso2Flag(iso2: string): string {
  if (!/^[A-Z]{2}$/.test(iso2)) return "🌍";
  return String.fromCodePoint(
    ...[...iso2].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
  );
}

function ringAreaAndCentroid(ring: number[][]): {
  area: number;
  lat: number;
  lng: number;
} {
  // Planar shoelace on lng/lat — fine for "which part is biggest" and a
  // display centroid; not for real geodesy.
  let area = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    const f = x1 * y2 - x2 * y1;
    area += f;
    cx += (x1 + x2) * f;
    cy += (y1 + y2) * f;
  }
  area /= 2;
  if (Math.abs(area) < 1e-9) {
    const [lng, lat] = ring[0];
    return { area: 0, lat, lng };
  }
  return { area: Math.abs(area), lng: cx / (6 * area), lat: cy / (6 * area) };
}

function centroidOf(geom: GeoJSON.Geometry): { lat: number; lng: number } {
  const polys: number[][][][] =
    geom.type === "Polygon"
      ? [(geom as GeoJSON.Polygon).coordinates]
      : geom.type === "MultiPolygon"
        ? (geom as GeoJSON.MultiPolygon).coordinates
        : [];
  let best = { area: -1, lat: 0, lng: 0 };
  for (const poly of polys) {
    const c = ringAreaAndCentroid(poly[0]);
    if (c.area > best.area) best = c;
  }
  return { lat: best.lat, lng: best.lng };
}

let cached: Promise<CountriesGeo> | null = null;

export function loadCountriesGeo(): Promise<CountriesGeo> {
  cached ??= fetch(`${import.meta.env.BASE_URL}data/countries.geo.json`)
    .then((r) => r.json())
    .then((raw: GeoJSON.FeatureCollection) => {
      const list: GeoCountry[] = raw.features.map((f) => {
        const p = f.properties as {
          iso: string;
          iso2: string;
          name: string;
          name_zht: string;
          continent: string;
        };
        return {
          iso: p.iso,
          iso2: p.iso2,
          name: { zh: p.name_zht, en: p.name },
          continent: p.continent,
          featureId: f.id as number,
          center: centroidOf(f.geometry),
          geometry: f.geometry,
        };
      });
      return { raw, byIso: new Map(list.map((c) => [c.iso, c])), list };
    })
    .catch((err) => {
      cached = null; // allow retry
      throw err;
    });
  return cached;
}
