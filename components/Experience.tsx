"use client";

import { experience } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ink px-5 py-24 text-paper md:px-8 md:py-36">
      <div className="bg-grid-paper pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative">
        <SectionHeading index="003" title="EXPERIENCE" note="CAREER, READ AS A CHANGELOG" invert />

        <div className="space-y-16 md:space-y-20">
          {experience.map((job, i) => (
            <Reveal key={job.tag} delay={0.05}>
              <article className="relative grid gap-x-10 gap-y-4 border-t border-paper/25 pt-6 md:grid-cols-[13rem_1fr] md:pt-8">
                {/* left rail */}
                <div className="flex items-baseline justify-between gap-4 md:block">
                  <span className="inline-block border border-cobalt bg-cobalt/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper md:text-[11px]">
                    {job.tag}
                  </span>
                  <p className="mt-0 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50 md:mt-4">
                    {job.period}
                  </p>
                </div>

                {/* body */}
                <div>
                  <h3 className="font-display text-[clamp(2.25rem,7vw,5.5rem)] uppercase leading-[0.85]">
                    {job.company}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-cobalt md:text-sm">
                    {job.role}
                  </p>

                  <ul className="mt-6 max-w-3xl space-y-3">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-paper/80 md:text-[15px]">
                        <span aria-hidden className="select-none font-mono text-cobalt">
                          —
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-paper/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/70 transition-colors hover:border-cobalt hover:bg-cobalt hover:text-paper md:text-[11px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-8 hidden font-display text-8xl leading-none text-paper/[0.07] lg:block"
                >
                  0{experience.length - i}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 border-2 border-paper/25 p-4 md:mt-20 md:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 md:text-[11px]">
              <span className="text-cobalt">BASE_BUILD</span> — B.S. COMPUTER APPLICATION, PANJAB
              UNIVERSITY · FULL CHANGELOG IN THE{" "}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-paper underline underline-offset-4 hover:text-cobalt">
                RESUME ↗
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
