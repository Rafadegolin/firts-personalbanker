import Image from "next/image";
import { cn } from "@/lib/utils";

type FramedPortraitProps = {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  /** Posição da moldura dourada deslocada */
  frame?: "right" | "left";
  children?: React.ReactNode;
};

// Retrato editorial: recorte alto, leve banho marinho e moldura em linha dourada.
export function FramedPortrait({
  src,
  alt,
  sizes,
  preload = false,
  className,
  frame = "right",
  children,
}: FramedPortraitProps) {
  return (
    <figure className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 border border-gold/45",
          frame === "right"
            ? "translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"
            : "-translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6"
        )}
      />
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-800">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-navy-800/25 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
        />
      </div>
      {children}
    </figure>
  );
}
