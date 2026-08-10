"use client";

import { stack } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="004" title="THE STACK" note="TOOLS OF THE TRADE" />

      <div className="grid border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, i) => (
          <div
            key={group.category}
            className="group relative border-b-2 border-r-2 border-ink p-5 transition-colors duration-300 hover:bg-ink hover:text-paper md:p-6"
          >
            <Reveal delay={(i % 3) * 0.06} y={20}>
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] md:text-xs">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-ink/30 transition-colors group-hover:text-paper/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`px-2.5 py-1 font-sans text-[13px] font-medium transition-colors md:text-sm ${
                      group.dashed
                        ? "border border-dashed border-current opacity-70"
                        : "border-2 border-current"
                    } group-hover:hover:border-cobalt group-hover:hover:bg-cobalt group-hover:hover:text-paper hover:bg-ink hover:text-paper`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
