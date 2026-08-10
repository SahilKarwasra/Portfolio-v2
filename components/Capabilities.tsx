"use client";

import { capabilities } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export default function Capabilities() {
  return (
    <section className="px-5 pb-24 md:px-8 md:pb-36">
      <SectionHeading index="002" title="WHAT I DO" note="CAPABILITIES" />

      <div>
        {capabilities.map((c, i) => (
          <Reveal key={c.index} delay={i * 0.07} y={28}>
            <div className="group relative overflow-hidden border-t-2 border-ink transition-colors duration-300 last:border-b-2 hover:bg-ink hover:text-paper">
              <div className="grid grid-cols-[2.5rem_1fr] items-center gap-x-4 px-1 py-6 md:grid-cols-[6rem_1fr_20rem_4rem] md:gap-x-8 md:py-8">
                <span className="font-mono text-xs uppercase tracking-widest text-cobalt md:text-sm">
                  /{c.index}
                </span>
                <h3 className="font-display text-[clamp(1.75rem,5.5vw,4rem)] uppercase leading-[0.9] transition-transform duration-300 md:group-hover:translate-x-3">
                  {c.title}
                </h3>
                <p className="col-span-2 mt-3 max-w-md text-sm leading-relaxed opacity-70 md:col-span-1 md:mt-0 md:text-[15px]">
                  {c.desc}
                </p>
                <span
                  aria-hidden
                  className="hidden justify-self-end font-display text-4xl transition-transform duration-300 md:block md:-translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
