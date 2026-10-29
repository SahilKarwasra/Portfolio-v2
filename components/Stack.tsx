"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { stack } from "@/lib/data";
import { ease, Reveal, Spotlight } from "./motion";
import TechIcon from "./TechIcon";
import { Container, SectionHeading } from "./ui";

const all = "Everything";
const categories = [all, ...stack.map((g) => g.category)];
const total = stack.reduce((n, g) => n + g.items.length, 0);

export default function Stack() {
  const [active, setActive] = useState(all);
  const groups = active === all ? stack : stack.filter((g) => g.category === active);

  return (
    <section id="stack" className="py-24 md:py-32" aria-labelledby="stack-title">
      <Container>
        <SectionHeading id="stack-title" title="Stack." lede="Go and Rust at the core, AI built in, mobile when the product needs it." />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Category filter: sticky on desktop, a scrolling row of chips on mobile */}
          <Reveal className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <ul
                className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
                aria-label="Filter stack by category"
              >
                {categories.map((c) => {
                  const isActive = c === active;
                  const count = c === all ? total : stack.find((g) => g.category === c)!.items.length;
                  return (
                    <li key={c} className="relative shrink-0">
                      {isActive ? (
                        <motion.span
                          layoutId="stack-pill"
                          className="absolute inset-0 rounded-lg bg-white/[0.07]"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        />
                      ) : null}
                      <button
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActive(c)}
                        className={`relative flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-lg px-3 py-2 text-left text-[15px] transition-colors ${
                          isActive ? "text-ink" : "text-mute hover:text-ink"
                        }`}
                      >
                        {c}
                        <span className="font-mono text-xs tabular-nums text-mute">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-9">
            <AnimatePresence mode="popLayout" initial={false}>
              {groups.map((g) => (
                <motion.div
                  key={g.category}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.45, ease }}
                  className="mb-10 last:mb-0"
                >
                  <h3 className="mb-3 text-sm text-mute">{g.category}</h3>
                  <motion.ul
                    className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
                  >
                    {g.items.map((item) => (
                      <motion.li
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                          show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease } },
                        }}
                      >
                        <Spotlight className="group flex h-14 items-center gap-3 rounded-xl border border-line bg-panel px-4 transition-colors hover:bg-raised">
                          <TechIcon
                            slug={item.icon}
                            className="h-[18px] w-[18px] shrink-0 text-mute transition-colors duration-300 group-hover:text-ink"
                          />
                          <span className="truncate text-[15px]" translate="no">
                            {item.name}
                          </span>
                        </Spotlight>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
