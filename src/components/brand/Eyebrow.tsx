import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  centered = false,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold",
        centered && "justify-center",
        className
      )}
    >
      <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-60" />
      <span>{children}</span>
      {centered && (
        <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-60" />
      )}
    </p>
  );
}
