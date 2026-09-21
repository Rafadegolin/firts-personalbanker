import { MAP_PINS, MAP_VIEWBOX } from "@/content/map";

const [, , width, height] = MAP_VIEWBOX.split(" ").map(Number);
const { br, pt } = MAP_PINS;

// Arco em curva quadrática, com o ponto de controle deslocado para noroeste
const mid = { x: (br.x + pt.x) / 2, y: (br.y + pt.y) / 2 };
const dist = Math.hypot(pt.x - br.x, pt.y - br.y);
const normal = { x: -(br.y - pt.y) / dist, y: (br.x - pt.x) / dist };
const control = {
  x: mid.x + normal.x * dist * 0.34,
  y: mid.y + normal.y * dist * 0.34,
};
const arc = `M${br.x} ${br.y}Q${control.x.toFixed(2)} ${control.y.toFixed(2)} ${pt.x} ${pt.y}`;

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function AtlanticMap() {
  return (
    <div
      data-reveal
      className="relative mx-auto aspect-[78/72] w-full max-w-[680px]"
    >
      <img
        src="/brand/map-dots.svg"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
      <svg
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-label="Mapa do Atlântico com a conexão entre o Brasil e Portugal"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="mapa-arco"
            gradientUnits="userSpaceOnUse"
            x1={br.x}
            y1={br.y}
            x2={pt.x}
            y2={pt.y}
          >
            <stop offset="0" stopColor="#b8964f" />
            <stop offset="1" stopColor="#f0dfb0" />
          </linearGradient>
        </defs>
        <path
          d={arc}
          pathLength={1}
          className="map-arc"
          fill="none"
          stroke="url(#mapa-arco)"
          strokeWidth={0.32}
          strokeLinecap="round"
        />
        {[br, pt].map((pin) => (
          <g key={pin.label}>
            <circle
              className="map-pulse"
              cx={pin.x}
              cy={pin.y}
              r={0.9}
              fill="none"
              stroke="#d4b06a"
              strokeWidth={0.2}
            />
            <circle cx={pin.x} cy={pin.y} r={0.7} fill="#e6cc8c" />
          </g>
        ))}
      </svg>

      {[
        { pin: br, align: "translate-x-4 -translate-y-1/2" },
        { pin: pt, align: "translate-x-4 -translate-y-[160%]" },
      ].map(({ pin, align }) => (
        <span
          key={pin.label}
          aria-hidden
          style={{ left: pct(pin.x, width), top: pct(pin.y, height) }}
          className={`absolute ${align} border border-hairline bg-navy-950/80 px-3 py-1.5 text-[0.58rem] font-semibold whitespace-nowrap uppercase tracking-[0.24em] text-gold backdrop-blur-sm md:text-[0.62rem]`}
        >
          {pin.label}
        </span>
      ))}
    </div>
  );
}
