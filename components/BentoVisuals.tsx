"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import type { Capability } from "@/lib/data";
import { ease } from "./motion";

/** Advances a step counter every `ms` while the element is on screen. */
function useTicker(steps: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduce = useReducedMotion();
  // Start at 0 on both server and client; reduced motion jumps to the final frame after mount.
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) {
      setStep(steps - 1);
      return;
    }
    if (!inView) return;
    const id = setInterval(() => setStep((s) => (s + 1) % steps), ms);
    return () => clearInterval(id);
  }, [inView, reduce, steps, ms]);
  return { ref, step };
}

/* ----------------------------------------------------- Go worker pool */

function Goroutines() {
  const { ref, step } = useTicker(1000, 650);
  const lanes = [0, 1, 2, 3, 4];
  return (
    <div ref={ref} className="flex h-full flex-col justify-center gap-2.5 px-6 font-mono text-[12px]">
      <div className="mb-1 flex items-center justify-between text-mute">
        <span>jobs := make(chan Job, 64)</span>
        <span className="tabular-nums text-go-soft">done: {96 + step}</span>
      </div>
      {lanes.map((l) => (
        <div key={l} className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-mute">worker {l + 1}</span>
          <div className="relative h-7 flex-1 overflow-hidden rounded-md border border-line bg-white/[0.02]">
            {/* Jobs travelling down each lane; hidden under reduced motion */}
            <motion.div
                className="absolute inset-y-0 left-0 w-full motion-reduce:hidden"
                initial={{ x: "-12%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.2 + l * 0.35, repeat: Infinity, ease: "linear", delay: l * 0.45 }}
              >
                <span className="absolute left-0 top-1/2 h-3.5 w-10 -translate-y-1/2 rounded bg-go/80 shadow-[0_0_12px_rgba(0,173,216,0.6)]" />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------- WebSocket chat */

const messages = [
  { who: "client", text: "subscribe room:orders" },
  { who: "hub", text: "ack · 3 peers online" },
  { who: "client", text: "order #2048 → paid" },
  { who: "hub", text: "broadcast to 3 peers" },
];

function Realtime() {
  const { ref, step } = useTicker(messages.length + 2, 1100);
  const shown = messages.slice(0, Math.min(step + 1, messages.length));
  return (
    <div ref={ref} className="flex h-full flex-col px-5 pt-5">
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-mute">
        <span className="h-1.5 w-1.5 rounded-full bg-[#98C379]" /> wss://hub/ws · connected
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        <AnimatePresence initial={false}>
          {shown.map((m) => (
            <motion.div
              key={m.text}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className={`max-w-[85%] rounded-xl px-3 py-2 font-mono text-[12px] ${
                m.who === "hub" ? "self-start bg-white/[0.06] text-ink" : "self-end bg-go/15 text-go-soft"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ----------------------------------------------------- LLM streaming */

const answer = "Root cause: the payout worker retried without idempotency keys. Patch adds a key per transfer and a dedupe check.";

function AI() {
  const words = answer.split(" ");
  const { ref, step } = useTicker(words.length + 12, 110);
  const n = Math.min(step, words.length);
  return (
    <div ref={ref} className="flex h-full flex-col gap-3 px-5 pt-5 font-mono text-[12px] leading-relaxed">
      <p className="text-mute">
        <span className="text-go">›</span> why did payouts double-send?
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className={`rounded-md px-2 py-0.5 ring-1 ring-inset transition-colors ${n > 2 ? "text-ink ring-line-strong" : "text-mute ring-line"}`}>
          search_logs()
        </span>
        <span className={`rounded-md px-2 py-0.5 ring-1 ring-inset transition-colors ${n > 6 ? "text-ink ring-line-strong" : "text-mute ring-line"}`}>
          read_diff()
        </span>
      </div>
      <p className="text-ink/85">
        {words.slice(0, n).join(" ")}
        {n < words.length ? <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-go" /> : null}
      </p>
    </div>
  );
}

/* ----------------------------------------------------- Compose app */

const rows = [
  { k: "Merchant payout", v: "+ £240.00" },
  { k: "Ride to station", v: "− £8.40" },
  { k: "Order #2048", v: "− £32.10" },
];

function Mobile() {
  const { ref, step } = useTicker(rows.length + 3, 900);
  return (
    <div ref={ref} className="flex h-full items-end justify-center pt-6">
      <div className="h-[200px] w-[180px] overflow-hidden rounded-t-[26px] border border-b-0 border-line-strong bg-night p-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          {["Pay", "Shop", "Ride"].map((t, i) => (
            <div key={t} className={`rounded-lg py-2 transition-colors duration-500 ${step % 3 === i ? "bg-go/20 text-go-soft" : "bg-white/[0.05] text-mute"}`}>
              {t}
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {rows.map((r, i) => (
            <motion.div
              key={r.k}
              className="flex justify-between rounded-md bg-white/[0.03] px-2 py-1.5 text-[10px]"
              animate={{ opacity: step > i ? 1 : 0.25, x: step > i ? 0 : 6 }}
              transition={{ duration: 0.4, ease }}
            >
              <span className="text-ink/80">{r.k}</span>
              <span className={r.v.startsWith("+") ? "text-[#98C379]" : "text-mute"}>{r.v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------- Code review */

function Review() {
  const { ref, step } = useTicker(6, 900);
  const approved = step >= 3;
  return (
    <div ref={ref} className="flex h-full flex-col justify-center gap-2 px-5 font-mono text-[11.5px]">
      <p className="text-mute">network/Client.kt</p>
      <div className="overflow-hidden rounded-lg border border-line">
        <p className="truncate bg-[#E06C75]/10 px-3 py-1.5 text-[#E06C75]">- Retrofit.Builder().baseUrl(api)</p>
        <p className="truncate bg-[#98C379]/10 px-3 py-1.5 text-[#98C379]">+ HttpClient(OkHttp) {"{"} install(Json) {"}"}</p>
      </div>
      <div className="flex h-7 items-center">
        <AnimatePresence>
          {approved ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#98C379]/15 px-2.5 py-1 text-[#98C379]"
            >
              ✓ Approved · merge when ready
            </motion.span>
          ) : (
            <span className="text-mute">Reviewing…</span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function BentoVisual({ kind }: { kind: Capability["visual"] }) {
  switch (kind) {
    case "goroutines":
      return <Goroutines />;
    case "realtime":
      return <Realtime />;
    case "ai":
      return <AI />;
    case "mobile":
      return <Mobile />;
    case "review":
      return <Review />;
  }
}
