# SAHIL KARWASRA — PORTFOLIO V2.0

Brutalist single-page portfolio. Next.js 15 · React 19 · Tailwind CSS · Motion (Framer Motion v12) · Lenis smooth scroll.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — zero config needed, it detects Next.js.
3. Point your domain at it. Update `metadataBase` in `app/layout.tsx` if the domain changes.

## Edit content

Every word on the site lives in **`lib/data.ts`** — name, hero copy, about statement, stats, capabilities, experience entries, stack, socials. Change it there; no component edits needed.

- **Resume PDF** → replace `public/resume.pdf` with any newer version (keep the filename).
- **Colors** → `tailwind.config.ts` (`paper`, `ink`, `cobalt`). The grain, grid and stroke utilities are in `app/globals.css`.
- **Fonts** → `app/layout.tsx` (Anton / Space Grotesk / JetBrains Mono via `next/font`).
- **OG image** → `public/og.png` (1200×630), referenced in `app/layout.tsx`.

## Structure

```
app/
  layout.tsx      fonts + SEO metadata
  page.tsx        section order + preloader gate
  globals.css     brutalist utilities (grid, grain, strokes)
components/
  Preloader       percentage counter curtain
  Navbar          difference-blend nav + fullscreen mobile menu
  Hero            full-bleed kinetic name poster
  Marquee         seamless ticker (ink / cobalt / outline variants)
  About           scroll-linked word fill + count-up stats
  Capabilities    invert-on-hover rows
  Experience      career-as-changelog (ink section)
  Stack           spec-sheet grid
  Contact         CTA + socials + live London clock + footer
  Cursor          difference-blend custom cursor (desktop only)
  SmoothScroll    Lenis provider + anchor routing
lib/data.ts       ALL content
```

Accessibility: keyboard focus styles, semantic headings, `prefers-reduced-motion` disables the preloader ramp, smooth scroll, marquees, cursor and parallax.
