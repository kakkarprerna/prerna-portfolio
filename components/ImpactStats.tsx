import { impactStats } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function ImpactStats() {
  return (
    <section id="impact" className="border-t border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-wrap px-6 py-16 sm:py-20">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Impact
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Every number below comes from shipped work.
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.06}
        >
          {impactStats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="h-full rounded-2xl border border-paper-line bg-white p-5">
                <p className="font-display text-3xl font-extrabold tracking-tight text-indigo">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-ink">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  {stat.sublabel}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
