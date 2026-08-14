import { ArrowRight } from "lucide-react";
import { aiWorkflow } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function BuildingWithAI() {
  return (
    <section
      id="building-with-ai"
      className="border-t border-paper-line bg-white"
    >
      <div className="mx-auto max-w-wrap px-6 py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo">
            Building with AI
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            AI is a workflow decision, not a feature.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            How I actually think about shipping an AI capability, using the
            AI Governance Console as the working example: the model is one
            component, the product decision is where the confidence
            threshold sits and who reviews the rest.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {aiWorkflow.map((step, i) => (
            <RevealItem key={step.step} className="relative">
              <div className="h-full rounded-2xl border border-paper-line bg-paper-subtle p-6">
                <span className="font-mono text-xs font-semibold text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-bold tracking-tight text-ink">
                  {step.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.line}
                </p>
              </div>
              {i < aiWorkflow.length - 1 && i % 3 !== 2 && (
                <ArrowRight
                  className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-paper-line sm:block lg:block"
                  strokeWidth={2.5}
                />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
