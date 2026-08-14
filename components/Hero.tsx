"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Avatar from "./Avatar";
import { contact } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-indigo/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-56 h-[320px] w-[320px] rounded-full bg-teal/[0.06] blur-3xl"
      />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto grid max-w-wrap gap-12 px-6 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:pb-24"
      >
        <div>
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo"
          >
            AI SaaS · API-first Platforms
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.75rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.25rem]"
          >
            Prerna Kakkar
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 text-xl font-semibold text-ink-soft sm:text-2xl"
          >
            Building AI products the metrics can defend.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            Senior Product Manager with 10+ years across conversational AI,
            API-first platforms, and analytics products. Known for taking
            AI capabilities from PRD to production and the number that
            proves it worked.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2.25} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-paper-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Download résumé
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
            <li className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              {contact.email}
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              {contact.location}
            </li>
          </motion.ul>
        </div>

        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <div className="rounded-3xl border border-paper-line bg-paper-subtle p-3 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.18)]">
            <Avatar size={260} hasPhoto={hasPhoto} rounded="rounded-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
