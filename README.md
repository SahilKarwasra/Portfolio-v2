# Sahil Karwasra — Portfolio 

Neo-brutalist single-page portfolio. Next.js 15 · React 19 · Tailwind CSS · Motion (Framer Motion v12).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — zero config, it detects Next.js.
3. Update `metadataBase` in `app/layout.tsx` if the domain changes.

## Edit content

Every word on the site lives in **`lib/data.ts`** — name, status, hero copy, about,
stats, capabilities, experience, education, projects, stack, socials.
Change it there; no component edits needed.

- **Photo** → replace `public/sahil.jpg` (square works best). Currently the GitHub avatar.
- **Resume** → replace `public/resume.pdf` (keep the filename).
- **Location** → `site.location` / `site.shortLocation` in `lib/data.ts`.
- **Colors** → `tailwind.config.ts` (`sun`, `droid`, `violet`, `sky`, `pink`, `paper`).
- **Fonts** → `app/layout.tsx` (Archivo Black + Archivo via `next/font`).
- **OG image** → `public/og.png` (1200×630).

## Structure

```
app/
  layout.tsx       fonts + SEO metadata
  page.tsx         section order
  globals.css      neo-brutalist utilities (.nb borders/shadows, .press hover, .dots grid)
  icon.svg         favicon
components/
  Navbar           sticky nav + full-screen mobile menu
  Hero             yellow hero, giant name, polaroid photo card, entrance animation
  Marquee          skills ticker
  About            statement + status card + count-up stats
  Capabilities     "What I do" cards
  Experience       timeline with "Now" marker (MSc) + 3 roles
  Education        UEA MSc + Panjab University
  Projects         pinned GitHub projects
  Stack            grouped tool chips
  Contact          email CTA, socials, footer with live UK clock
  CountUp          in-view number animation
  ui.tsx           Button, Sticker, Chip, SectionHeading, icons
lib/data.ts        ALL content
```

Accessibility: semantic headings, skip link, keyboard focus styles, `prefers-reduced-motion`
disables the entrance animation, marquee and count-up.
