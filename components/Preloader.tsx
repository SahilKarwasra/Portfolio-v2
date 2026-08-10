"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 120 : 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!done.current) {
        done.current = true;
        setExiting(true);
        onDone();
      }
    };
    raf = requestAnimationFrame(tick);

    document.documentElement.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [onDone]);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => {
        document.documentElement.style.overflow = "";
      }, 100);
      return () => clearTimeout(t);
    }
  }, [exiting]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col justify-between bg-ink px-5 py-6 text-paper md:px-8"
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
    >
      <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-widest text-paper/70">
        <span>SAHIL KARWASRA</span>
        <span>PORTFOLIO </span>
      </div>
      <div className="flex items-end justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-paper/70">
          LOADING<span className="animate-blink">_</span>
        </span>
        <span className="font-display text-[clamp(6rem,22vw,18rem)] leading-[0.8] tabular-nums">
          {count}
          <span className="text-cobalt">%</span>
        </span>
      </div>
    </motion.div>
  );
}
