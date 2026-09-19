import { CountUp } from "@/components/brand/CountUp";
import { numbers } from "@/content/home";
import { cn } from "@/lib/utils";

export function Numbers() {
  return (
    <section
      id="numeros"
      aria-label="A EG Capital Hub em números"
      className="theme-navy relative border-y border-hairline bg-navy-950 text-foreground"
    >
      <dl className="shell grid grid-cols-2 lg:grid-cols-4">
        {numbers.map((item, i) => (
          <div
            key={item.label}
            data-reveal
            style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            className={cn(
              "flex flex-col items-center justify-start gap-4 px-3 py-12 text-center md:py-16",
              i % 2 === 1 && "border-l border-hairline",
              i >= 2 && "border-t border-hairline lg:border-t-0",
              i === 2 && "lg:border-l"
            )}
          >
            <dt className="order-2 max-w-[14rem] text-[0.62rem] font-medium uppercase tracking-[0.26em] text-muted-foreground md:text-[0.68rem]">
              {item.label}
            </dt>
            <dd className="text-gold-gradient numeral order-1 text-[2rem] leading-none md:text-[2.9rem]">
              {"value" in item ? (
                <CountUp
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              ) : (
                item.text
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
