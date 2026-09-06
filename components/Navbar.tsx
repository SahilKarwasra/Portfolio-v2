"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import { Button, Container } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-ink bg-paper">
      <Container>
        <nav className="flex h-[var(--nav-h)] items-center justify-between" aria-label="Primary">
          <a href="#main" className="group flex items-center gap-3" aria-label={`${site.name}, back to top`}>
            <span className="press nb-sm flex h-11 w-11 items-center justify-center bg-sun font-display text-lg leading-none">
              SK
            </span>
            <span className="hidden font-display text-base leading-none sm:block">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-block border-3 border-transparent px-3 py-2 text-base font-bold transition-colors hover:border-ink hover:bg-sun"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={`mailto:${site.email}`} variant="ink">
              Hire me
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="press nb-sm flex h-11 w-11 items-center justify-center bg-white lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-[3px] w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span className={`absolute left-0 top-[6.5px] h-[3px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute left-0 top-[13px] h-[3px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[var(--nav-h)] z-40 h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-t-3 border-ink bg-sun dots transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <Container className="flex h-full flex-col justify-between py-8">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="press nb block bg-white px-5 py-4 font-display text-3xl leading-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="press nb block bg-ink px-5 py-4 text-center font-display text-2xl leading-none text-white"
            >
              Hire me
            </a>
            <p className="text-center text-sm font-semibold">{site.email}</p>
          </div>
        </Container>
      </div>
    </header>
  );
}
