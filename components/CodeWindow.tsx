"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { experience, site } from "@/lib/data";
import { ease } from "./motion";

type Lang = "go" | "rust" | "json";

const files: { id: Lang; name: string; label: string; run: string; output: string[] }[] = [
  {
    id: "go",
    name: "engineer.go",
    label: "Go",
    run: "go run ./cmd/sahil",
    output: [`→ ${site.name}, ${site.role}`, "→ concurrent backends, real-time hubs, mobile", "✓ open to new roles"],
  },
  {
    id: "rust",
    name: "engineer.rs",
    label: "Rust",
    run: "cargo run --release",
    output: ["   Compiling sahil v0.1.0", "    Finished release in 0.84s", "✓ open_to_work = true"],
  },
  {
    id: "json",
    name: "GET /sahil",
    label: "HTTP",
    run: `curl ${site.url.replace("https://", "")}/api/sahil`,
    output: ["HTTP/2 200", "content-type: application/json", "✓ 1 engineer found"],
  },
];

const source: Record<Lang, string> = {
  go: `package sahil

// Engineer is the person behind this page.
type Engineer struct {
	Name     string
	Role     string
	Location string
	Stack    []string
	Open     bool
}

func New() *Engineer {
	return &Engineer{
		Name:     "${site.name}",
		Role:     "${site.role}",
		Location: "${site.shortLocation}",
		Stack:    []string{"Go", "Rust", "Kotlin", "AI"},
		Open:     true, // to new roles
	}
}`,
  rust: `/// Same engineer, now with a borrow checker.
#[derive(Debug, Clone)]
pub struct Engineer {
    pub name: &'static str,
    pub focus: Vec<&'static str>,
    pub open_to_work: bool,
}

impl Engineer {
    pub fn new() -> Self {
        Self {
            name: "${site.name}",
            focus: vec!["backend", "real-time", "mobile", "llm"],
            open_to_work: true,
        }
    }
}`,
  json: JSON.stringify(
    {
      name: site.name,
      role: site.role,
      location: site.location,
      now: "MSc Advanced Computing Science @ UEA",
      previously: experience.map((j) => j.company),
      stack: ["Go", "Rust", "Kotlin", "Python", "Claude API"],
      open_to_work: true,
    },
    null,
    2,
  ),
};

/* ------------------------------------------------------------ highlighter */

const keywords: Record<Lang, string[]> = {
  go: ["package", "type", "struct", "func", "return", "true", "false"],
  rust: ["pub", "struct", "impl", "fn", "Self", "true", "false", "static"],
  json: ["true", "false", "null"],
};

type Tok = { t: string; c: string };

function highlight(line: string, lang: Lang): Tok[] {
  const out: Tok[] = [];
  const re = /(\/\/.*$|#\[.*\]$)|("(?:[^"\\]|\\.)*")|(&'static|[A-Za-z_][A-Za-z0-9_]*!?)|(\d+(?:\.\d+)?)|(\s+)|(.)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    const [tok, comment, str, ident, num] = m;
    let c = "text-ink/80";
    if (comment) c = "text-[#5F6670] italic";
    else if (str) {
      // JSON keys read as properties, values as strings.
      const isKey = lang === "json" && line.slice(re.lastIndex).trimStart().startsWith(":");
      c = isKey ? "text-go-soft" : "text-[#E5C07B]";
    } else if (ident) {
      if (keywords[lang].includes(ident)) c = ident === "true" || ident === "false" ? "text-[#F78C6C]" : "text-[#C792EA]";
      else if (/^[A-Z]/.test(ident)) c = "text-ink";
      else if (ident.endsWith("!")) c = "text-go-soft";
      else if (ident === "&'static") c = "text-[#C792EA]";
    } else if (num) c = "text-[#F78C6C]";
    else if (/[{}()[\]]/.test(tok)) c = "text-mute";
    out.push({ t: tok, c });
  }
  return out;
}

/* ------------------------------------------------------------ component */

export default function CodeWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [tab, setTab] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hover, setHover] = useState(false);

  // Cycle through the files until the visitor picks one themselves.
  useEffect(() => {
    if (!auto || reduce || !inView || hover) return;
    const id = setTimeout(() => setTab((t) => (t + 1) % files.length), 7000);
    return () => clearTimeout(id);
  }, [tab, auto, reduce, inView, hover]);

  const file = files[tab];
  const lines = source[file.id].split("\n");

  return (
    <div
      ref={ref}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.03)_inset]"
    >
      {/* Title bar with tabs */}
      <div className="flex items-center gap-4 border-b border-line bg-white/[0.015] pl-4 pr-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-white/10" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
        </div>
        <div role="tablist" aria-label="Profile source files" className="flex min-w-0 overflow-x-auto">
          {files.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              id={`tab-${f.id}`}
              aria-selected={i === tab}
              aria-controls="code-panel"
              onClick={() => {
                setTab(i);
                setAuto(false);
              }}
              className={`relative whitespace-nowrap px-3.5 py-3 font-mono text-[13px] transition-colors ${
                i === tab ? "text-ink" : "text-mute hover:text-ink"
              }`}
            >
              {f.name}
              {i === tab ? (
                <motion.span layoutId="code-tab" className="absolute inset-x-2 -bottom-px h-px bg-go" transition={{ duration: 0.35, ease }} />
              ) : null}
            </button>
          ))}
        </div>
        <span className="ml-auto hidden font-mono text-xs text-mute sm:block">main · {file.label}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_300px]">
        {/* Explorer */}
        <aside className="hidden border-r border-line p-4 font-mono text-[13px] lg:block" aria-hidden="true">
          <p className="mb-3 text-[11px] uppercase tracking-[0.08em] text-mute">Explorer</p>
          <p className="text-mute">▾ sahil</p>
          <ul className="mt-1 space-y-0.5 pl-3">
            {files.map((f, i) => (
              <li key={f.id} className={`truncate rounded px-2 py-1 ${i === tab ? "bg-white/[0.06] text-ink" : "text-mute"}`}>
                {f.id === "json" ? "api/sahil.json" : f.name}
              </li>
            ))}
            <li className="px-2 py-1 text-mute">resume.pdf</li>
            <li className="px-2 py-1 text-mute">README.md</li>
          </ul>
        </aside>

        {/* Editor */}
        <div
          id="code-panel"
          role="tabpanel"
          aria-labelledby={`tab-${file.id}`}
          className="relative h-[400px] overflow-auto py-4 font-mono text-[12px] leading-[1.75] sm:h-[528px] sm:text-[13px]"
        >
          <AnimatePresence mode="wait">
            <motion.pre
              key={file.id}
              className="min-w-max"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
            >
              <code>
                {lines.map((line, i) => (
                  <motion.span
                    key={i}
                    className="flex"
                    variants={{
                      hidden: { opacity: 0, x: -6 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.3, ease } },
                    }}
                  >
                    <span className="w-12 shrink-0 select-none pr-4 text-right text-white/20">{i + 1}</span>
                    <span className="whitespace-pre pr-6">
                      {highlight(line.replace(/\t/g, "    "), file.id).map((tk, j) => (
                        <span key={j} className={tk.c}>
                          {tk.t}
                        </span>
                      ))}
                      {i === lines.length - 1 ? (
                        <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-pulse bg-go" aria-hidden="true" />
                      ) : null}
                    </span>
                  </motion.span>
                ))}
              </code>
            </motion.pre>
          </AnimatePresence>
        </div>

        {/* Terminal */}
        <div className="border-t border-line bg-black/30 p-4 font-mono text-[12px] leading-relaxed lg:border-l lg:border-t-0 lg:text-[13px]">
          <p className="mb-3 text-[11px] uppercase tracking-[0.08em] text-mute">Terminal</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={file.id}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}
            >
              <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="break-all text-ink">
                <span className="text-go">$</span> {file.run}
              </motion.p>
              {file.output.map((o) => (
                <motion.p
                  key={o}
                  variants={{ hidden: { opacity: 0, y: 4 }, show: { opacity: 1, y: 0 } }}
                  className={o.startsWith("✓") ? "mt-1 text-[#98C379]" : "mt-1 text-mute"}
                >
                  {o}
                </motion.p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
