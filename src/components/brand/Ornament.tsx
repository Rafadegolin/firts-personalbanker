import { cn } from "@/lib/utils";

// Linha — estrela de quatro pontas — linha, o divisor presente no logo.
export function Ornament({
  className,
  wide = false,
}: {
  className?: string;
  wide?: boolean;
}) {
  const line = wide ? "flex-1" : "w-16 md:w-20";

  return (
    <div
      aria-hidden
      className={cn("flex items-center gap-3 text-gold", className)}
    >
      <span
        className={cn(
          "h-px bg-gradient-to-r from-transparent to-current opacity-70",
          line
        )}
      />
      <Star className="size-3 shrink-0" />
      <span
        className={cn(
          "h-px bg-gradient-to-l from-transparent to-current opacity-70",
          line
        )}
      />
    </div>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={className}>
      <path
        d="M8 0Q9.1 6.9 16 8Q9.1 9.1 8 16Q6.9 9.1 0 8Q6.9 6.9 8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
