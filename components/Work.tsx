import { caseStudies } from "@/lib/data";
import CaseStudyCard from "./CaseStudyCard";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="border-t border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Four builds, four different constraints.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            An enterprise conversational AI product, a platform built from
            zero as founding PM, an AI governance tool built solo end to
            end, and a coaching app still in progress. Different stage,
            different stakes, same habit of writing down the number before
            I ship.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {caseStudies.map((study) => (
            <RevealItem key={study.id}>
              <CaseStudyCard study={study} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
