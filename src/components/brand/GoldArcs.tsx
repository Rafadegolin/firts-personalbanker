import { cn } from "@/lib/utils";

// Feixes de luz dourada nos cantos, como nas composições de referência da marca.
// A arte estica com a seção (preserveAspectRatio="none") para ficar sempre nos
// cantos, sem cruzar o texto; o traço mantém a espessura (non-scaling-stroke).
const ARCS = [
  { d: "M-220 960C80 740 400 790 720 1080", opacity: 1 },
  { d: "M-220 1010C40 820 330 860 560 1080", opacity: 0.45 },
  { d: "M1640 560C1440 500 1310 340 1200 -80", opacity: 1 },
  { d: "M1640 640C1480 600 1380 470 1300 -80", opacity: 0.45 },
];

export function GoldArcs({
  idPrefix,
  className,
}: {
  idPrefix: string;
  className?: string;
}) {
  const gradient = `${idPrefix}-arc-gradient`;
  const glow = `${idPrefix}-arc-glow`;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
    >
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e6cc8c" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f0dfb0" stopOpacity="0.9" />
          <stop offset="1" stopColor="#d4b06a" stopOpacity="0" />
        </linearGradient>
        <filter id={glow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {ARCS.map(({ d, opacity }) => (
        <g key={d} opacity={opacity}>
          <path
            d={d}
            stroke={`url(#${gradient})`}
            strokeWidth="9"
            opacity="0.28"
            filter={`url(#${glow})`}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={d}
            stroke={`url(#${gradient})`}
            strokeWidth="1.1"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </svg>
  );
}
