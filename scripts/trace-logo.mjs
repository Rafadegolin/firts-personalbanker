// Vetoriza o emblema EG Capital Hub a partir de docs/EG BRANCO NORMAL.png.
//
// Uso: node scripts/trace-logo.mjs
//
// - Separa as tintas marinho e dourado por "desmistura" linear de cor
//   (cada pixel = a·marinho + b·dourado + c·branco), gerando mapas de cobertura.
// - Vetoriza continentes, "E" e "G" com potrace sobre os mapas ampliados 4×.
// - Redesenha o arco do globo e a linha vertical como geometria (círculo e
//   fuso ajustados às medidas da imagem), pois são finos demais para o traçado.
//
// Saídas: src/components/brand/emblem-paths.ts, public/brand/*.svg,
//         src/app/icon.svg, src/app/apple-icon.png, src/app/opengraph-image.jpg

import sharp from "sharp";
import potrace from "potrace";
import { optimize } from "svgo";
import { mkdir, writeFile } from "node:fs/promises";

const SRC = "docs/EG BRANCO NORMAL.png";
const OG_SRC = "docs/Editedimage_1789577977790.png";

const NAVY = [16, 37, 63]; // #10253F — marinho do logo
const GOLD = [173, 142, 89]; // #AD8E59 — dourado do logo
const WHITE = [248, 248, 248];

// Região do emblema (globo + linha + EG) na imagem 1024×1024
const CROP = { left: 130, top: 170, width: 740, height: 460 };
const SCALE = 4;

// Geometria medida (coordenadas do recorte, 1×)
const DIVIDER = { x: 377.5, top: 14, bottom: 447, xMin: 370, xMax: 385 };
const ARC = {
  cx: 298.6,
  cy: 224.0,
  r: 218.7, // raio médio entre borda externa (221.1) e interna (216.2)
  halfWidth: 3.1,
  from: 254.5, // ponta superior (graus, y para baixo)
  to: 92, // ponta inferior
  taperFrom: 14,
  taperTo: 26,
};

// ---------------------------------------------------------------------------
// 1) Mapas de cobertura
// ---------------------------------------------------------------------------
const { data, info } = await sharp(SRC)
  .extract(CROP)
  .raw()
  .toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;
const C = info.channels;

const u = NAVY.map((v, i) => v - WHITE[i]);
const v = GOLD.map((x, i) => x - WHITE[i]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const uu = dot(u, u);
const vv = dot(v, v);
const uv = dot(u, v);
const det = uu * vv - uv * uv;

const navy = new Float32Array(W * H);
const gold = new Float32Array(W * H);
for (let p = 0; p < W * H; p++) {
  const d = [0, 1, 2].map((i) => data[p * C + i] - WHITE[i]);
  const du = dot(d, u);
  const dv = dot(d, v);
  navy[p] = clamp01((du * vv - dv * uv) / det);
  gold[p] = clamp01((dv * uu - du * uv) / det);
}

// Remove o arco e a linha do mapa marinho (serão redesenhados)
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x;
    const r = Math.hypot(x + 0.5 - ARC.cx, y + 0.5 - ARC.cy);
    const onArc =
      x < DIVIDER.xMin - 4 &&
      r > ARC.r - ARC.halfWidth - 0.3 &&
      r < ARC.r + ARC.halfWidth + 2.5;
    const onDivider = x >= DIVIDER.xMin && x <= DIVIDER.xMax;
    if (onArc || onDivider) navy[p] = 0;
  }
}

const region = (map, x0, x1) => {
  const out = new Float32Array(W * H);
  for (let y = 0; y < H; y++)
    for (let x = x0; x < x1; x++) out[y * W + x] = map[y * W + x];
  return out;
};

// ---------------------------------------------------------------------------
// 2) Traçado (potrace sobre o mapa ampliado)
// ---------------------------------------------------------------------------
async function trace(map) {
  const gray = Buffer.alloc(W * H);
  for (let p = 0; p < W * H; p++) gray[p] = 255 - Math.round(map[p] * 255);
  const png = await sharp(gray, { raw: { width: W, height: H, channels: 1 } })
    .resize(W * SCALE, H * SCALE, { kernel: "lanczos3" })
    .png()
    .toBuffer();
  const tracer = new potrace.Potrace();
  tracer.setParameters({
    turdSize: 60,
    optTolerance: 0.2,
    alphaMax: 1,
    threshold: 128,
    blackOnWhite: true,
  });
  await new Promise((resolve, reject) =>
    tracer.loadImage(png, (err) => (err ? reject(err) : resolve()))
  );
  const tag = tracer.getPathTag();
  const d = /d="([^"]+)"/.exec(tag)?.[1] ?? "";
  // potrace usa apenas comandos absolutos (M, L, C) com pares x,y
  return d.replace(/(-?\d+(?:\.\d+)?)[ ,](-?\d+(?:\.\d+)?)/g, (_, x, y) =>
    `${fmt(Number(x) / SCALE)} ${fmt(Number(y) / SCALE)}`
  );
}

const paths = {
  globe: await trace(region(navy, 0, DIVIDER.xMin)),
  e: await trace(region(navy, DIVIDER.xMax + 1, W)),
  g: await trace(gold),
  arc: arcPath(),
  divider: dividerPath(),
};

// ---------------------------------------------------------------------------
// 3) Geometria redesenhada
// ---------------------------------------------------------------------------
function arcPath() {
  const N = 160;
  const outer = [];
  const inner = [];
  const span = ARC.from - ARC.to;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const deg = ARC.from - span * t;
    const fromTop = span * t;
    const fromBottom = span * (1 - t);
    const k =
      Math.min(ease(fromTop / ARC.taperFrom), ease(fromBottom / ARC.taperTo));
    const h = ARC.halfWidth * k;
    const a = (deg * Math.PI) / 180;
    outer.push([ARC.cx + (ARC.r + h) * Math.cos(a), ARC.cy + (ARC.r + h) * Math.sin(a)]);
    inner.push([ARC.cx + (ARC.r - h) * Math.cos(a), ARC.cy + (ARC.r - h) * Math.sin(a)]);
  }
  return polygon([...outer, ...inner.reverse()]);
}

function dividerPath() {
  const N = 60;
  const len = DIVIDER.bottom - DIVIDER.top;
  const right = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const y = DIVIDER.top + len * t;
    const tip = Math.min(1, (len * Math.min(t, 1 - t)) / 6);
    const w = (1.8 + 4.4 * Math.pow(Math.sin(Math.PI * t), 0.6)) * tip;
    right.push([DIVIDER.x + w / 2, y]);
  }
  const left = right.map(([x, y]) => [2 * DIVIDER.x - x, y]).reverse();
  return polygon([...right, ...left]);
}

function ease(x) {
  return Math.sin((Math.min(1, Math.max(0, x)) * Math.PI) / 2);
}

function polygon(points) {
  return (
    "M" +
    points.map(([x, y]) => `${fmt(x)} ${fmt(y)}`).join("L") +
    "Z"
  );
}

// ---------------------------------------------------------------------------
// 4) Enquadramento e saídas
// ---------------------------------------------------------------------------
const PAD = 4;
const box = { x0: 77 - PAD, y0: 11 - PAD, x1: 712 + PAD, y1: 448 + PAD };
const VB = `${box.x0} ${box.y0} ${fmt(box.x1 - box.x0)} ${fmt(box.y1 - box.y0)}`;
// Monograma (só E + G) para ícones
const mono = { x0: 395, y0: 116, x1: 715, y1: 411 };

const svgo = (svg) =>
  optimize(svg, {
    multipass: true,
    floatPrecision: 1,
    plugins: ["preset-default"],
  }).data;

// Otimiza cada path isoladamente (mantém os d finais para o componente React)
const optimized = {};
for (const [key, d] of Object.entries(paths)) {
  const out = svgo(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB}"><path d="${d}"/></svg>`);
  optimized[key] = /d="([^"]+)"/.exec(out)?.[1] ?? d;
}

const emblemSvg = ({ ink, line, gold: g }) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB}">` +
  `<path fill="${ink}" d="${optimized.globe}"/>` +
  `<path fill="${line}" d="${optimized.arc}"/>` +
  `<path fill="${line}" d="${optimized.divider}"/>` +
  `<path fill="${ink}" d="${optimized.e}"/>` +
  `<path fill="${g}" d="${optimized.g}"/>` +
  `</svg>`;

await mkdir("public/brand", { recursive: true });
await writeFile(
  "public/brand/eg-emblem-navy.svg",
  emblemSvg({ ink: "#10253F", line: "#10253F", gold: "#AD8E59" })
);
await writeFile(
  "public/brand/eg-emblem-ivory.svg",
  emblemSvg({ ink: "#F1EBDD", line: "#D4B06A", gold: "#D4B06A" })
);

await writeFile(
  "src/components/brand/emblem-paths.ts",
  `// Gerado por scripts/trace-logo.mjs a partir de docs/EG BRANCO NORMAL.png.
// Não edite à mão: ajuste o script e rode \`node scripts/trace-logo.mjs\`.

export const EMBLEM_VIEWBOX = "${VB}";
export const MONOGRAM_VIEWBOX = "${mono.x0} ${mono.y0} ${mono.x1 - mono.x0} ${mono.y1 - mono.y0}";

export const EMBLEM_PATHS = {
${Object.entries(optimized)
  .map(([k, d]) => `  ${k}: "${d}",`)
  .join("\n")}
} as const;
`
);

// Favicon: monograma sobre quadrado marinho
const monoW = mono.x1 - mono.x0;
const monoH = mono.y1 - mono.y0;
const side = Math.max(monoW, monoH) * 1.36;
const iconSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fmt(side)} ${fmt(side)}">` +
  `<rect width="${fmt(side)}" height="${fmt(side)}" rx="${fmt(side * 0.14)}" fill="#0A1629"/>` +
  `<g transform="translate(${fmt((side - monoW) / 2 - mono.x0)} ${fmt((side - monoH) / 2 - mono.y0)})">` +
  `<path fill="#F1EBDD" d="${optimized.e}"/>` +
  `<path fill="#D4B06A" d="${optimized.g}"/>` +
  `</g></svg>`;
await writeFile("src/app/icon.svg", iconSvg);
await sharp(Buffer.from(iconSvg), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile("src/app/apple-icon.png");

// Imagem de compartilhamento (OpenGraph)
await sharp(OG_SRC)
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile("src/app/opengraph-image.jpg");

for (const [k, d] of Object.entries(optimized))
  console.log(k.padEnd(8), `${(d.length / 1024).toFixed(1)} KB`);
console.log("viewBox", VB);

function clamp01(x) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}
function fmt(n) {
  return String(Math.round(n * 100) / 100);
}
