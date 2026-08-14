import type { CaseStudy } from "@/lib/data";
import { iconMap } from "@/lib/icons";

const statusStyles: Record<CaseStudy["status"], string> = {
  SHIPPED: "bg-indigo-tint text-indigo",
  LIVE: "bg-teal-tint text-teal",
  "IN BUILD": "bg-paper-subtle text-ink-muted",
};

const iconBg: Record<CaseStudy["status"], string> = {
  SHIPPED: "bg-indigo-tint text-indigo",
  LIVE: "bg-teal-tint text-teal",
  "IN BUILD": "bg-paper-subtle text-ink-muted",
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = iconMap[study.icon];
  return (
    <article className="group rounded-2xl border border-paper-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(18,20,42,0.25)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 ${iconBg[study.status]}`}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2 text-right">
          <span
            className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${statusStyles[study.status]}`}
          >
            {study.status}
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-muted">
        {study.timeframe}
      </p>
      <h3 className="mt-1 font-display text-[1.7rem] font-bold tracking-tight text-ink">
        {study.name}
      </h3>
      <p className="mt-1 text-sm font-semibold text-indigo">{study.role}</p>

      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
        {study.summary}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-paper-line pt-5">
        {study.metrics.map((metric) => (
          <li
            key={metric}
            className="flex items-baseline gap-2.5 text-sm font-medium text-ink"
          >
            <span className="text-teal">▪</span>
            {metric}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-5">
        <p className="text-xs font-medium text-ink-muted">
          {study.stack.join("  ·  ")}
        </p>
        {study.links.length > 0 && (
          <div className="flex gap-4">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-indigo hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
