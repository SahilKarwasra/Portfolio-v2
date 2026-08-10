"use client";

import {
  animate,
  motion,
  MotionValue,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { aboutMeta, aboutStatement, stats } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.3em] mt-[0.1em]">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

function WordFill({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const words = text.split(" ");

  if (reduced) {
    return (
      <p className="max-w-5xl font-sans text-[clamp(1.5rem,3.6vw,3rem)] font-medium leading-[1.25] tracking-tight">
        {text}
      </p>
    );
  }

  return (
    <p
      ref={ref}
      className="flex max-w-5xl flex-wrap font-sans text-[clamp(1.5rem,3.6vw,3rem)] font-medium leading-[1.25] tracking-tight"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Stat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <Reveal delay={index * 0.08}>
      <div ref={ref} className="border-t-2 border-ink pt-4">
        <span className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-none tabular-nums">
          {String(display).padStart(2, "0")}
          <span className="text-cobalt">{suffix}</span>
        </span>
        <p className="mt-3 max-w-[24ch] font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 md:text-[11px]">
          {label}
        </p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="001" title="ABOUT" note="WHO IS THIS" />

      <WordFill text={aboutStatement} />

      <div className="mt-14 grid gap-x-8 gap-y-3 border-t-2 border-ink pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {aboutMeta.map((m, i) => (
          <Reveal key={m.k} delay={i * 0.06}>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em]">
              <span className="text-ink/40">{m.k} — </span>
              {m.v}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-28 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
