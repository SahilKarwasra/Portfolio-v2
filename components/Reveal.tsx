"use client";

import { motion, useReducedMotion } from "motion/react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  note,
  invert = false,
}: {
  index: string;
  title: string;
  note?: string;
  invert?: boolean;
}) {
  const reduced = useReducedMotion();
  const line = invert ? "bg-paper" : "bg-ink";

  return (
    <div className="relative mb-12 md:mb-16">
      <motion.div
        className={`h-[2px] w-full origin-left ${line}`}
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pt-4">
        <Reveal delay={0.1} y={20}>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] md:text-xs">
            [ {index} ]{note ? <span className="opacity-50"> — {note}</span> : null}
          </span>
        </Reveal>
        <Reveal delay={0.15} y={28} className="ml-auto">
          <h2 className="text-right font-display text-[clamp(2.75rem,9vw,7.5rem)] uppercase leading-[0.85]">
            {title}
          </h2>
        </Reveal>
      </div>
    </div>
  );
}
