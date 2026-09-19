import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/brand/Eyebrow";

type SectionProps = React.ComponentProps<"section"> & {
  theme?: "navy" | "ivory";
  /** Marinho mais profundo, para faixas de contraste */
  deep?: boolean;
};

export function Section({
  theme = "navy",
  deep = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        theme === "ivory" ? "theme-ivory" : "theme-navy",
        "relative bg-background py-24 text-foreground md:py-32 lg:py-36",
        deep && "bg-navy-950",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={cn(centered && "mx-auto text-center", className)}
    >
      <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      <h2 className="mt-7 text-balance font-serif text-[2.4rem] leading-[1.06] font-normal md:text-5xl lg:text-[3.5rem]">
        {title}{" "}
        {emphasis && (
          <em className="text-gold-gradient box-decoration-clone pr-1 italic">
            {emphasis}
          </em>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
