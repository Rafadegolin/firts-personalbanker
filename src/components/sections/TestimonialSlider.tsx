"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

export function TestimonialSlider({ items }: { items: readonly Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const autoplay = visible && !hovered && !focused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % items.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(id);
  }, [autoplay, index, items.length]);

  const go = (delta: number) =>
    setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Depoimentos de clientes"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <div className="grid" aria-live={autoplay ? "off" : "polite"}>
        {items.map((item, i) => {
          const current = i === index;
          return (
            <figure
              key={item.name}
              aria-hidden={!current}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${items.length}`}
              className={cn(
                "[grid-area:1/1] transition-[opacity,transform,filter] duration-700 ease-luxe",
                current
                  ? "opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0 blur-[2px]"
              )}
            >
              <blockquote className="text-balance font-serif text-[1.65rem] leading-[1.35] md:text-[2.15rem] lg:text-[2.4rem]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-5">
                <span aria-hidden className="h-px w-12 shrink-0 bg-gold" />
                <span>
                  <span className="block font-display text-sm tracking-[0.18em] uppercase">
                    {item.name}
                  </span>
                  <span className="mt-1.5 block text-sm text-muted-foreground">
                    {item.position} · {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-14 flex items-center gap-4 md:gap-6">
        <SliderButton label="Depoimento anterior" onClick={() => go(-1)}>
          <ArrowLeft className="size-4" />
        </SliderButton>
        <SliderButton label="Próximo depoimento" onClick={() => go(1)}>
          <ArrowRight className="size-4" />
        </SliderButton>
        <p className="numeral ml-2 text-sm">
          <span className="text-gold">{pad(index + 1)}</span>
          <span className="text-muted-foreground"> / {pad(items.length)}</span>
        </p>
        <span
          aria-hidden
          className="relative h-px flex-1 overflow-hidden bg-border"
        >
          <span
            className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-700 ease-luxe"
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          />
        </span>
      </div>
    </div>
  );
}

function SliderButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-12 cursor-pointer place-items-center rounded-full border border-input text-foreground transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </button>
  );
}
