import { toolkit } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function Toolkit() {
  return (
    <section id="toolkit" className="border-t border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            The tools behind the decisions.
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3" stagger={0.08}>
          {toolkit.map((group) => (
            <RevealItem key={group.category}>
              <div className="h-full rounded-2xl border border-paper-line bg-white p-6">
                <h3 className="font-display text-base font-bold tracking-tight text-ink">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-indigo-tint px-3 py-1.5 text-xs font-semibold text-indigo"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
