"use client";

import { useEffect, useRef, useState } from "react";

// Renderiza o valor final no servidor; anima só se o número ainda estiver
// fora da tela ao carregar (evita "piscar" de 20 → 0 → 20 em telas altas).
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setDisplay(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setDisplay(Math.round((1 - Math.pow(1 - t, 3)) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </>
  );
}
