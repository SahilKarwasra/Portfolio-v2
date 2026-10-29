"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { companies, site } from "@/lib/data";
import CodeWindow from "./CodeWindow";
import LocalTime from "./LocalTime";
import { ease } from "./motion";
import { Button, Container } from "./ui";

/** Words sharpen in one after another from a soft blur. */
function BlurWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease, delay: delay + i * 0.045 }}
        >
          {w}
          {" "}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const windowRef = useRef<HTMLDivElement>(null);
  // The product window starts tilted back and settles flat as it scrolls up.
  const { scrollYProgress } = useScroll({ target: windowRef, offset: ["start end", "start 0.25"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, ease, delay },
  });

  const headlineLead = site.headline[0];
  const leadWords = headlineLead.split(" ").length;

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40" aria-labelledby="hero-title">
      {/* Faint grid that fades out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,#000_20%,transparent_70%)]"
      />

      <Container className="relative">
        <motion.div className="flex flex-wrap items-center gap-3 text-sm" {...rise(0)}>
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image src="/sahil.png" alt={site.name} fill priority sizes="36px" className="object-cover" />
          </span>
          <span className="font-medium">{site.role}</span>
          <span className="text-mute">{site.shortLocation}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-go/10 px-2.5 py-1 text-[13px] text-go-soft ring-1 ring-inset ring-go/25">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-go opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-go" />
            </span>
            {site.status}
          </span>
        </motion.div>

        <h1
          id="hero-title"
          className="mt-8 max-w-[19ch] text-[clamp(2.4rem,6vw,4.9rem)] font-medium leading-[1.02] tracking-[-0.045em]"
        >
          <BlurWords text={headlineLead} delay={0.1} />
          <BlurWords text={site.headline[1]} className="text-mute" delay={0.1 + leadWords * 0.045} />
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p className="max-w-xl text-lg leading-relaxed text-mute" {...rise(0.55)}>
            {site.tagline}
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-3" {...rise(0.65)}>
            <Button href={site.resumePath} external>
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 [perspective:1400px] md:mt-24">
          <motion.div
            ref={windowRef}
            style={{ rotateX, scale, y, transformOrigin: "50% 0%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
          >
            <CodeWindow />
          </motion.div>
        </div>

        {/* Where the work has happened */}
        <motion.div
          className="mt-20 grid grid-cols-2 border-y border-line md:mt-28 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              className={`group px-4 py-7 md:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i > 1 ? "border-t border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
              variants={{
                hidden: { opacity: 0, filter: "blur(8px)" },
                show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
              }}
            >
              <p className="text-lg font-medium tracking-[-0.02em] text-ink/70 transition-colors group-hover:text-ink md:text-xl">
                {c.name}
              </p>
              <p className="mt-1 text-sm text-mute">{c.kind}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-4 flex items-center justify-between gap-4 text-sm text-mute">
          <span>Where I have shipped and studied</span>
          <LocalTime prefix={site.shortLocation} />
        </p>
      </Container>
    </section>
  );
}
