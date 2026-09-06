"use client";

import { useEffect, useState } from "react";
import { contact, site, socials } from "@/lib/data";
import { ArrowUp, ArrowUpRight, Container, GitHubIcon, LinkedInIcon, MailIcon } from "./ui";

function useLocalTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Contact() {
  const time = useLocalTime();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 relative border-t-3 border-ink bg-violet" aria-labelledby="contact-title">
      <div className="dots pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />

      <Container className="relative py-20 md:py-28">
        <h2 id="contact-title" className="max-w-4xl font-display text-4xl leading-[0.95] sm:text-5xl md:text-7xl">
          {contact.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed md:text-xl">{contact.sub}</p>

        <a
          href={`mailto:${site.email}`}
          className="press nb-lg mt-10 inline-flex max-w-full flex-wrap items-center gap-3 bg-white px-5 py-4 font-display text-xl leading-none sm:px-7 sm:py-5 sm:text-2xl md:text-3xl"
        >
          <MailIcon className="h-7 w-7 shrink-0" />
          <span className="break-all">{site.email}</span>
        </a>

        <ul className="mt-8 flex flex-wrap gap-3">
          {socials
            .filter((s) => s.label !== "Email")
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press nb inline-flex items-center gap-2 bg-ink px-5 py-3 font-display text-base leading-none text-white"
                >
                  {s.label === "GitHub" ? <GitHubIcon className="h-5 w-5" /> : null}
                  {s.label === "LinkedIn" ? <LinkedInIcon className="h-5 w-5" /> : null}
                  {s.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            ))}
        </ul>
      </Container>

      <div className="relative border-t-3 border-ink bg-paper">
        <Container className="flex flex-col gap-4 py-6 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <p>
            
          </p>
          <div className="flex items-center gap-4">
            <p className="tabular-nums" aria-live="off">
              {site.shortLocation}
              {time ? `, ${time}` : ""}
            </p>
            <a
              href="#main"
              className="press nb-sm inline-flex h-10 w-10 items-center justify-center bg-sun"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
