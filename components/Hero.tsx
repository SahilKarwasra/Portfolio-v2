"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/data";
import { EASE } from "./Reveal";

function PosterLine({
  text,
  sizeClass,
  loaded,
  delay,
}: {
  text: string;
  sizeClass: string;
  loaded: boolean;
  delay: number;
}) {
  const reduced = useReducedMotion();
  return (
    <span aria-hidden className={`flex w-full justify-between overflow-hidden ${sizeClass}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="block font-display uppercase leading-[0.82]"
          initial={reduced ? false : { y: "112%" }}
          animate={loaded ? { y: 0 } : {}}
          transition={{ duration: 1, ease: EASE, delay: delay + i * 0.04 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function FadeIn({
  loaded,
  delay,
  className,
  children,
}: {
  loaded: boolean;
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ loaded }: { loaded: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -90]);
  const metaOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-5 pt-20 md:px-8 md:pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />

      {/* registration marks */}
      <div aria-hidden className="pointer-events-none absolute inset-x-5 top-20 hidden justify-between font-mono text-ink/30 md:flex">
        <span>+</span>
        <span>+</span>
      </div>

      {/* top spec row */}
      <motion.div style={{ opacity: metaOpacity }} className="relative">
        <FadeIn loaded={loaded} delay={0.2}>
          <div className="flex flex-wrap items-start justify-between gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] md:text-xs">
            <span>
              PORTFOLIO 
              <span className="ml-3 hidden text-ink/40 sm:inline">/ EST. 2024</span>
            </span>
            <span className="hidden text-right sm:inline">
              {site.coords}
              <span className="ml-3 text-ink/40">/ GMT</span>
            </span>
          </div>
        </FadeIn>
      </motion.div>

      {/* the name */}
      <motion.div style={{ y: nameY }} className="relative my-6 md:my-4">
        <h1 className="sr-only">
          {site.name} — Software Engineer, {site.location}
        </h1>

        <div className="relative">
          <PosterLine
            text={site.firstName}
            sizeClass="text-[clamp(4.25rem,25.5vw,23rem)]"
            loaded={loaded}
            delay={0.25}
          />
          <motion.span
            aria-hidden
            className="absolute -top-[0.55em] right-0 animate-spin-slow font-display text-[clamp(1.75rem,5vw,4.25rem)] leading-none text-cobalt"
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 1 }}
          >
            ✱
          </motion.span>
        </div>

        {/* spec strip sandwiched between the two name lines */}
        <FadeIn loaded={loaded} delay={0.75}>
          <div className="my-3 flex items-center justify-between border-y-2 border-ink py-2 font-mono text-[10px] uppercase tracking-[0.25em] sm:text-[11px] md:my-4 md:text-xs">
            <span>({site.role})</span>
            <span className="hidden text-ink/50 sm:inline">KOTLIN — COMPOSE — FLUTTER</span>
            <span>({site.subRole})</span>
          </div>
        </FadeIn>

        <PosterLine
          text={site.lastName}
          sizeClass="text-[clamp(2.6rem,15.5vw,14rem)]"
          loaded={loaded}
          delay={0.55}
        />
      </motion.div>

      {/* bottom rows */}
      <motion.div style={{ opacity: metaOpacity }} className="relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <FadeIn loaded={loaded} delay={0.95} className="max-w-md">
            <p className="text-sm leading-relaxed text-ink/80 md:text-base">{site.heroIntro}</p>
          </FadeIn>

          <FadeIn loaded={loaded} delay={1.05}>
            <ul className="space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] md:text-right md:text-xs">
              <li>
                <span className="text-ink/40">BASE —</span> {site.location}
              </li>
              <li>
                <span className="text-ink/40">STATUS —</span> AVAILABLE FOR WORK{" "}
                <span className="animate-blink text-cobalt">●</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn loaded={loaded} delay={1.15}>
          <div className="mt-6 flex items-center justify-between border-t-2 border-ink pt-3 font-mono text-[11px] uppercase tracking-[0.25em] md:text-xs">
            <a href="#about" className="group inline-flex items-center gap-2">
              SCROLL
              <motion.span
                aria-hidden
                animate={reduced ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
            <span className="text-ink/40">01 / 05</span>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
