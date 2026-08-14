import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-paper-line bg-white">
      <div className="mx-auto max-w-wrap px-6 py-16 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo">
            {contact.openTo}
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Let's talk about what you're building.
          </h2>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 rounded-lg bg-indigo px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" strokeWidth={2.25} />
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-paper-line px-5 py-3.5 text-base font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2.25} />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-paper-line px-5 py-3.5 text-base font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <Github className="h-4 w-4" strokeWidth={2.25} />
              GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-6 text-xs font-medium uppercase tracking-widest text-ink-muted">
          <span>Prerna Kakkar · {contact.location}</span>
          <span className="flex items-center gap-1">
            Built with Next.js, deployed on Vercel
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </footer>
  );
}
