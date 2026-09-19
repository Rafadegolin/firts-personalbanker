import { cn } from "@/lib/utils";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-b border-border py-12 first:pt-0 last:border-b-0"
    >
      <h2 className="font-serif text-3xl leading-tight md:text-[2.15rem]">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.85] text-foreground/85">
        {children}
      </div>
    </section>
  );
}

export function LegalList({
  items,
  columns = 1,
}: {
  items: React.ReactNode[];
  columns?: 1 | 2;
}) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2 sm:gap-x-8")}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span aria-hidden className="mt-[0.9em] h-px w-4 shrink-0 bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalCallout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold bg-secondary px-6 py-5">
      <p className="text-[0.65rem] font-semibold tracking-[0.26em] text-gold uppercase">
        {title}
      </p>
      <div className="mt-2 text-[0.98rem] leading-relaxed">{children}</div>
    </div>
  );
}

export function LegalPairs({
  items,
}: {
  items: { label: string; value: React.ReactNode }[];
}) {
  return (
    <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="min-w-0 bg-card px-6 py-5">
          <dt className="text-[0.62rem] font-semibold tracking-[0.26em] text-gold uppercase">
            {item.label}
          </dt>
          <dd className="mt-2 font-serif text-xl [overflow-wrap:anywhere]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function LegalSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-[0.72rem] font-semibold tracking-[0.22em] text-foreground uppercase">
      {children}
    </h3>
  );
}
