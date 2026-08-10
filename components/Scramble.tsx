"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "#$%&/=?_<>[]*+-";

export default function Scramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = null;
    setDisplay(text);
  }, [text]);

  const scramble = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < frame / 2.2) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      frame += 1;
      if (frame / 2.2 >= text.length) stop();
    }, 28);
  }, [text, stop]);

  useEffect(() => stop, [stop]);

  return (
    <span className={className} onMouseEnter={scramble} onFocus={scramble}>
      {display}
    </span>
  );
}
