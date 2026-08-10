"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import { lenisRef } from "@/lib/lenis-store";
import Scramble from "./Scramble";
import { EASE } from "./Reveal";

export default function Navbar({ loaded }: { loaded: boolean }) {
  const [open, setOpen] = useState(false);

  // lock scroll while the menu is open
  useEffect(() => {
    if (open) {
      lenisRef.current?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference"
        initial={{ y: -64, opacity: 0 }}
        animate={loaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        <nav className="pointer-events-auto flex items-center justify-between px-5 py-4 text-white md:px-8">
          <a href="#top" className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest">
            <span className="inline-block h-2.5 w-2.5 bg-white" aria-hidden />
            SK — {site.role}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-widest">
                <Scramble text={l.label} />
              </a>
            ))}
            <a
              href="#contact"
              className="border border-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
            >
              OPEN TO WORK <span className="animate-blink">●</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="font-mono text-xs uppercase tracking-widest md:hidden"
            aria-label="Open menu"
          >
            MENU [+]
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink px-5 py-4 text-paper"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-paper/70">
                NAVIGATION
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest"
                aria-label="Close menu"
              >
                CLOSE [—]
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col justify-center gap-1">
              {navLinks.map((l, i) => (
                <div key={l.href} className="overflow-hidden border-b-2 border-paper/15 py-1">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between font-display text-[clamp(3rem,14vw,6rem)] uppercase leading-none"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.07 }}
                  >
                    <span className="transition-colors group-active:text-cobalt">{l.label}</span>
                    <span className="font-mono text-sm text-cobalt">0{i + 1}</span>
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              className="flex items-end justify-between font-mono text-[11px] uppercase tracking-widest text-paper/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
