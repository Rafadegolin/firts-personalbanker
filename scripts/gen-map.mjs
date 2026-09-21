// Gera o mapa pontilhado do Atlântico (Brasil ↔ Portugal) usado na seção
// Internacional. Rode uma vez: node scripts/gen-map.mjs
//
// Saídas: public/brand/map-dots.svg (pontos, servido como <img>) e
//         src/content/map.ts (viewBox + posição dos pinos no mesmo sistema).

import DottedMap from "dotted-map";
import { writeFile } from "node:fs/promises";

const PLACES = {
  br: { lat: -22.37, lng: -46.94, label: "Brasil" },
  pt: { lat: 38.72, lng: -9.14, label: "Portugal" },
};

const map = new DottedMap({
  height: 72,
  grid: "diagonal",
  region: { lat: { min: -45, max: 62 }, lng: { min: -100, max: 40 } },
});

// O getSVG() emite um <circle> por ponto (~165 KB). Aqui cada ponto vira um
// segmento "h0" de traço arredondado num único <path> (~6× menor).
const viewBox = /viewBox="([^"]+)"/.exec(map.getSVG({}))?.[1];
if (!viewBox) throw new Error("viewBox não encontrado no SVG gerado");

const d = map
  .getPoints()
  .map(({ x, y }) => `M${round(x)} ${round(y)}h0`)
  .join("");
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">` +
  `<path d="${d}" stroke="#5B6F92" stroke-width=".44" stroke-linecap="round"/>` +
  `</svg>`;

const pins = Object.fromEntries(
  Object.entries(PLACES).map(([key, place]) => {
    const { x, y } = map.getPin({ lat: place.lat, lng: place.lng });
    return [key, { x: round(x), y: round(y), label: place.label }];
  })
);

await writeFile("public/brand/map-dots.svg", svg);
await writeFile(
  "src/content/map.ts",
  `// Gerado por scripts/gen-map.mjs — não edite à mão.

export const MAP_VIEWBOX = "${viewBox}";

export const MAP_PINS = ${JSON.stringify(pins, null, 2)} as const;
`
);

console.log("viewBox", viewBox, "pins", pins, `${(svg.length / 1024).toFixed(1)} KB`);

function round(n) {
  return Math.round(n * 100) / 100;
}
