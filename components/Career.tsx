import { career, credentials } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function Career() {
  return (
    <section id="career" className="border-t border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Career
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Company, scope, and what changed.
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 space-y-4" stagger={0.08}>
          {career.map((role) => (
            <RevealItem key={role.company}>
              <div className="rounded-2xl border border-paper-line bg-white p-7 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                      {role.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo">
                      {role.company}
                      {role.location ? ` · ${role.location}` : ""}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    {role.dates}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 border-t border-paper-line pt-4">
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-2.5 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="text-teal">▪</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-paper-line bg-white p-6">
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Certifications
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {credentials.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-paper-line bg-white p-6">
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Education
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {credentials.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
