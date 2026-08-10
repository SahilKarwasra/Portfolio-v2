"use client";

import { useEffect, useState } from "react";
import { site, socials } from "@/lib/data";
import Marquee from "./Marquee";
import { Reveal, SectionHeading } from "./Reveal";

function LondonTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {site.timezoneLabel} {time ?? "--:--:--"}
    </span>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative flex min-h-[100svh] flex-col bg-ink text-paper">
      <div className="bg-grid-paper pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative flex-1 px-5 pt-24 md:px-8 md:pt-36">
        <SectionHeading index="005" title="CONTACT" note="THE PART THAT MATTERS" invert />

        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60 md:text-xs">
            OPEN TO SENIOR ANDROID / FULL-STACK ROLES — LONDON OR REMOTE
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-6 font-display text-[clamp(3.25rem,12vw,11rem)] uppercase leading-[0.85]">
            HAVE A ROLE
            <br />
            IN MIND<span className="text-cobalt">?</span>
          </h3>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-block max-w-full break-all font-sans text-[clamp(1.25rem,3.4vw,3rem)] font-medium tracking-tight underline decoration-2 underline-offset-8 transition-colors hover:text-cobalt hover:decoration-cobalt md:mt-14"
          >
            {site.email}
            <span aria-hidden className="ml-3 inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-14 grid grid-cols-2 border-l border-t border-paper/25 md:mt-20 md:grid-cols-4">
            {socials.map((s) => (
              <li key={s.label} className="border-b border-r border-paper/25">
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-5 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-cobalt hover:text-paper md:px-5 md:text-xs"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* outlined name ticker */}
      <div className="relative mt-16 md:mt-24" aria-hidden>
        <Marquee
          items={[site.name.toUpperCase(), "SOFTWARE ENGINEER", site.name.toUpperCase(), "Delhi, INDIA"]}
          variant="outline"
          speed={34}
          className="border-t border-paper/25 py-5 [&_span]:text-[clamp(3rem,8vw,7rem)] md:[&_span]:text-[clamp(3rem,8vw,7rem)]"
        />
      </div>

      {/* footer bar */}
      <footer className="relative border-t border-paper/25 px-5 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 md:text-[11px]">
          <span>© {year} {site.name.toUpperCase()}</span>
          <span className="hidden sm:inline">
            {site.location} — <LondonTime />
          </span>
          <a href="#top" className="transition-colors hover:text-cobalt">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
