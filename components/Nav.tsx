"use client";

import { useEffect, useState } from "react";
import Avatar from "./Avatar";

const links = [
  { href: "#impact", label: "Impact", id: "impact" },
  { href: "#how-i-work", label: "How I Work", id: "how-i-work" },
  { href: "#toolkit", label: "Toolkit", id: "toolkit" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#building-with-ai", label: "Building with AI", id: "building-with-ai" },
  { href: "#career", label: "Career", id: "career" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav({ hasPhoto }: { hasPhoto: boolean }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <Avatar size={30} hasPhoto={hasPhoto} />
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            PK<span className="text-indigo">.</span>
          </span>
        </a>
        <nav className="hide-scrollbar flex items-center gap-1 overflow-x-auto text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 transition-colors ${
                active === link.id
                  ? "bg-indigo-tint text-indigo"
                  : "text-ink-muted hover:bg-paper-subtle hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          className="shrink-0 rounded-lg bg-indigo px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
