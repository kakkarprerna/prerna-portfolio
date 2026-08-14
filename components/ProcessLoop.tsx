"use client";

import { useState } from "react";
import { iconMap } from "@/lib/icons";
import { processStages } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function ProcessLoop() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = processStages[activeIdx];
  const ActiveIcon = iconMap[active.icon];

  return (
    <section id="how-i-work" className="border-t border-paper-line bg-white">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo">
            How I work
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            From ambiguity to shipped, one loop.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Six stages, on repeat. Select a stage to see what it actually
            looks like day to day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {processStages.map((s, i) => (
              <button
                key={s.stage}
                onClick={() => setActiveIdx(i)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  i === activeIdx
                    ? "bg-indigo text-white"
                    : "bg-paper-subtle text-ink-muted hover:text-ink"
                }`}
              >
                <span className="mr-1.5 font-mono text-xs opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.stage}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-paper-line bg-paper-subtle p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-tint text-indigo">
                <ActiveIcon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {active.stage}
                </h3>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {active.line}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-paper-line pt-6">
              {active.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
