"use client";

import { useEffect, useState } from "react";

/** Live Norwich time, rendered client-side only to avoid a hydration mismatch. */
export default function LocalTime({ prefix, className = "" }: { prefix?: string; className?: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {time ? `, ${time}` : ""}
    </span>
  );
}
