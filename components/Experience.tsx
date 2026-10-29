"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience, now } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Container, SectionHeading } from "./ui";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="py-32 md:py-48" aria-labelledby="experience-title">
      <Container>
        <SectionHeading
          id="experience-title"
          title="Experience."
          lede="Three years shipping production apps across fintech, gaming and client work."
        />

        <ol ref={listRef} className="relative pl-7 sm:pl-12">
          {/* Timeline that fills as you read */}
          <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-ink/10" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-[2px] origin-top rounded-full bg-go"
            style={{ scaleY: progress }}
          />

          <li className="relative pb-20 md:pb-28">
            <span aria-hidden="true" className="absolute -left-7 top-3 h-3 w-3 -translate-x-[5px] rounded-full bg-go sm:-left-12" />
            <Reveal>
              <p className="text-base text-go">
                {now.label}, {now.period}
              </p>
              <h3 className="mt-3 max-w-4xl font-display text-[clamp(1.9rem,3.6vw,3.4rem)] font-bold leading-[1] tracking-tightest">
                {now.title}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{now.desc}</p>
            </Reveal>
          </li>

          {experience.map((job) => (
            <li key={job.company} className="relative grid grid-cols-1 gap-8 pb-20 last:pb-0 md:pb-28 lg:grid-cols-12 lg:gap-12">
              <span aria-hidden="true" className="absolute -left-7 top-3 h-3 w-3 -translate-x-[5px] rounded-full bg-ink sm:-left-12" />

              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <p className="text-base tabular-nums text-ink/60">{job.period}</p>
                    <h3 className="mt-3 font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[0.92] tracking-crush">
                      {job.company}
                    </h3>
                    <p className="mt-4 text-xl">{job.role}</p>
                    <p className="mt-1 text-base text-ink/60">{job.location}</p>
                  </Reveal>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="font-display text-2xl font-semibold leading-snug tracking-tightest text-go-soft md:text-[1.7rem]">
                    {job.summary}
                  </p>
                </Reveal>
                <Stagger className="mt-8 space-y-5">
                  {job.points.map((p) => (
                    <StaggerItem key={p} className="flex gap-4 text-lg leading-relaxed text-ink/85">
                      <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
                      <span>{p}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
                <Reveal delay={0.1}>
                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-base text-ink/55" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <li key={t} className="whitespace-nowrap" translate="no">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
