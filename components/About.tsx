"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { aboutMeta, aboutStatement, site, stats } from "@/lib/data";
import CountUp from "./CountUp";
import { ease, Reveal, Spotlight } from "./motion";
import { Container } from "./ui";

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="py-24 md:py-32" aria-labelledby="about-title">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal blur>
              <h2 id="about-title" className="text-sm text-mute">
                About
              </h2>
              <p className="mt-6 text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.03em]">
                {aboutStatement[0]} <span className="text-mute">{aboutStatement[1]}</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <Spotlight className="overflow-hidden rounded-2xl border border-line bg-panel">
              <div ref={photoRef} className="relative aspect-[5/4] overflow-hidden border-b border-line">
                <motion.div className="absolute inset-[-10%_0]" style={{ y: photoY }}>
                  <Image
                    src="/sahil.png"
                    alt={`${site.name} sitting at a rooftop table in the evening`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <dl className="divide-y divide-line">
                {aboutMeta.map((m) => (
                  <div key={m.k} className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-3.5 text-[15px]">
                    <dt className="text-mute">{m.k}</dt>
                    <dd className={m.highlight ? "text-go-soft" : "text-ink"}>{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Spotlight>
          </Reveal>
        </div>

        <motion.ul
          className="mt-20 grid grid-cols-2 border-y border-line md:mt-28 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              className={`px-4 py-8 md:px-6 md:py-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            >
              <CountUp
                value={s.value}
                decimals={s.decimals}
                suffix={s.suffix}
                className="block text-5xl font-medium tabular-nums tracking-[-0.04em] md:text-6xl"
              />
              <span className="mt-3 block max-w-[22ch] text-[15px] leading-snug text-mute">{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
