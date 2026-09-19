"use client";

import { useRef, useState } from "react";
import type { CreditGroup } from "@/content/credit";
import { cn } from "@/lib/utils";

export function CreditTabs({ groups }: { groups: readonly CreditGroup[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + groups.length) % groups.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: groups.length - 1,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    select(keys[e.key]);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div
        role="tablist"
        aria-label="Categorias de crédito"
        className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-hairline lg:px-0 lg:pb-0"
      >
        {groups.map((group, i) => {
          const selected = i === active;
          return (
            <button
              key={group.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`credito-aba-${group.id}`}
              aria-selected={selected}
              aria-controls={`credito-painel-${group.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative shrink-0 cursor-pointer rounded-sm border px-5 py-3 text-left text-[0.68rem] font-semibold whitespace-nowrap uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "lg:flex lg:items-baseline lg:justify-between lg:rounded-none lg:border-0 lg:py-5 lg:pr-4 lg:pl-8 lg:font-serif lg:text-[1.65rem] lg:font-normal lg:tracking-normal lg:normal-case",
                selected
                  ? "border-gold/70 text-gold"
                  : "border-hairline text-foreground/65 hover:text-foreground"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-0 -left-px hidden h-full w-px origin-top bg-gold transition-transform duration-500 ease-luxe lg:block",
                  selected ? "scale-y-100" : "scale-y-0"
                )}
              />
              {group.label}
              <span className="ml-3 font-sans text-xs tracking-[0.2em] text-muted-foreground">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {groups.map((group, i) => (
        <div
          key={group.id}
          role="tabpanel"
          id={`credito-painel-${group.id}`}
          aria-labelledby={`credito-aba-${group.id}`}
          hidden={i !== active}
          className="lg:col-span-8"
        >
          <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {group.items.map((item, j) => (
              <li
                key={item.title}
                style={{ animationDelay: `${j * 80}ms` }}
                className="animate-fade-up bg-navy-900 p-7 sm:[&:last-child:nth-child(odd)]:col-span-2 lg:p-9"
              >
                <h3 className="font-serif text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
