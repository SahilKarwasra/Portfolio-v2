"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { navLinks, site } from "@/lib/data";
import { Container } from "./ui";
import { ease } from "./motion";

/** Which section is currently under the reading line (scroll-spy). */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled || open ? "border-line bg-night/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between" aria-label="Primary">
            <a href="#main" className="flex items-center gap-2.5" aria-label={`${site.name}, back to top`}>
              <span className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image src="/sahil.png" alt="" fill sizes="28px" className="object-cover" />
              </span>
              <span className="text-[15px] font-medium tracking-[-0.01em]">{site.name}</span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.href} className="relative">
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <a
                      href={l.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                        isActive ? "text-ink" : "text-mute hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden h-8 items-center rounded-full bg-ink px-3.5 text-sm font-medium text-night transition-colors hover:bg-white md:inline-flex"
              >
                Get in Touch
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
              >
                <span className="relative block h-2.5 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[4.5px] rotate-45" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-[9px] h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-40 overscroll-contain bg-night/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="pt-6">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              >
                {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
                  <motion.li
                    key={l.href}
                    className="border-b border-line"
                    variants={{
                      hidden: { opacity: 0, y: -8, filter: "blur(6px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease } },
                    }}
                  >
                    <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-medium tracking-[-0.02em]">
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <a href={`mailto:${site.email}`} className="mt-8 block text-mute">
                {site.email}
              </a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
