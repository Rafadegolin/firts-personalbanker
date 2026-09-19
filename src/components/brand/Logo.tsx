import { cn } from "@/lib/utils";
import { site } from "@/config/site";

type LogoProps = {
  className?: string;
  size?: "md" | "lg";
  /** Exibe "Hub Especializado · Brasil · Portugal" abaixo do nome */
  tagline?: boolean;
};

const sizes = {
  md: {
    emblem: "h-10 md:h-11",
    name: "text-[0.95rem] md:text-[1.05rem]",
    tagline: "text-[0.5rem] tracking-[0.3em] md:text-[0.53rem]",
    gap: "gap-3",
  },
  lg: {
    emblem: "h-16 md:h-20",
    name: "text-xl md:text-2xl",
    tagline:
      "text-[0.55rem] tracking-[0.22em] sm:text-[0.6rem] sm:tracking-[0.3em] md:text-[0.68rem]",
    // No celular o emblema fica acima do nome, para caber na largura
    gap: "flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5",
  },
};

export function Logo({ className, size = "md", tagline = true }: LogoProps) {
  const s = sizes[size];

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <svg
        aria-hidden
        focusable="false"
        className={cn("w-auto shrink-0", s.emblem)}
        style={{ aspectRatio: "643 / 445" }}
      >
        <use href="#eg-emblem" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display whitespace-nowrap tracking-[0.14em] text-foreground",
            s.name
          )}
        >
          EG CAPITAL HUB
        </span>
        {tagline && (
          <span
            className={cn(
              "mt-2 whitespace-nowrap font-medium uppercase text-gold",
              s.tagline
            )}
          >
            {site.descriptor} · {site.regions}
          </span>
        )}
      </span>
    </span>
  );
}
