"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { contact, navLinks, site, socials } from "@/lib/data";
import LocalTime from "./LocalTime";
import { ease, Reveal } from "./motion";
import { ArrowUpRight, Button, Container } from "./ui";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(site.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = `mailto:${site.email}`;
        }
      }}
      className="inline-flex h-11 items-center gap-2 rounded-full bg-white/[0.04] px-5 text-[15px] font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-colors hover:bg-white/[0.08]"
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.svg key="ok" viewBox="0 0 24 24" className="h-4 w-4 text-[#98C379]" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <path d="M5 12.5 10 17 19 7" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          ) : (
            <motion.svg key="copy" viewBox="0 0 24 24" className="h-4 w-4" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <rect x="8" y="8" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth={2} />
              <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" fill="none" stroke="currentColor" strokeWidth={2} />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
      <span aria-live="polite">{copied ? "Copied" : "Copy Email"}</span>
    </button>
  );
}

export default function Contact() {
  const markRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: markRef, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["45%", "12%"]);

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line" aria-labelledby="contact-title">
      <Container className="py-24 md:py-32">
        <Reveal blur className="flex flex-col items-center text-center">
          <span className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image src="/sahil.png" alt="" fill sizes="56px" className="object-cover" />
          </span>
          <h2 id="contact-title" className="mt-8 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em]">
            {contact.headline[0]} <span className="text-mute">{contact.headline[1]}</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">{contact.sub}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${site.email}`}>Send an Email</Button>
            <CopyEmail />
          </div>
        </Reveal>
      </Container>

      <Container>
        <div className="grid grid-cols-2 gap-10 border-t border-line py-14 text-[15px] md:grid-cols-4">
        <div className="col-span-2">
          <p className="font-medium">{site.name}</p>
          <p className="mt-2 max-w-xs text-mute">{site.role}. Go, Rust, mobile and AI. Based in {site.location}.</p>
          <p className="mt-6 text-mute">
            <LocalTime prefix="Local time" />
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-mute">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-go-soft">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-mute">Elsewhere</p>
          <ul className="mt-4 space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group inline-flex items-center gap-1 transition-colors hover:text-go-soft"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </Container>

      {/* Oversized wordmark that rises into view at the very end of the page */}
      <div ref={markRef} className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <motion.p
          style={{ y: markY }}
          transition={{ ease }}
          className="whitespace-nowrap bg-gradient-to-b from-white/[0.14] to-transparent bg-clip-text text-center text-[12.6vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent"
        >
          {site.name}
        </motion.p>
      </div>
    </footer>
  );
}
