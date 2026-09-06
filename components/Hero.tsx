"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data";
import { ArrowDown, Button, Container, GitHubIcon, IconButton, LinkedInIcon, MailIcon, Sticker } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  return (
    <section className="relative overflow-hidden border-b-3 border-ink bg-sun" aria-labelledby="hero-title">
      <div className="dots pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-var(--nav-h))] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <motion.div {...rise(0)}>
              <Sticker color="droid" rotate="-rotate-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-ink" />
                </span>
                {site.status}
              </Sticker>
            </motion.div>

            <h1
              id="hero-title"
              className="mt-6 font-display uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.75rem,13.2vw,6rem)] lg:text-[clamp(3rem,9.4vw,7rem)]"
            >
              <motion.span className="block" {...rise(0.08)}>
                {site.firstName}
              </motion.span>
              <motion.span className="block" {...rise(0.16)}>
                {site.lastName}
              </motion.span>
            </h1>

            <motion.div className="mt-7 flex flex-wrap items-center gap-3" {...rise(0.26)}>
              <span className="nb inline-block bg-white px-4 py-2 font-display text-xl leading-none md:text-2xl">
                {site.role}
              </span>
              <span className="text-lg font-bold md:text-xl">{site.subRole}</span>
            </motion.div>

            <motion.p className="mt-7 max-w-xl text-lg font-medium leading-relaxed md:text-xl" {...rise(0.34)}>
              {site.heroIntro}
            </motion.p>

            <motion.div className="mt-9 flex flex-wrap items-center gap-4" {...rise(0.42)}>
              <Button href={site.resumePath} external variant="ink" size="lg">
                Download resume
              </Button>
              <Button href="#contact" variant="white" size="lg">
                Get in touch
              </Button>
              <div className="flex items-center gap-3 sm:ml-2">
                <IconButton href={site.linkedin} label="LinkedIn" external>
                  <LinkedInIcon />
                </IconButton>
                <IconButton href={site.github} label="GitHub" external>
                  <GitHubIcon />
                </IconButton>
                <IconButton href={`mailto:${site.email}`} label="Email">
                  <MailIcon />
                </IconButton>
              </div>
            </motion.div>
          </div>

          {/* Photo */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end">
            <motion.div
              className="relative w-[min(78vw,320px)] sm:w-[360px] lg:w-[340px] xl:w-[370px]"
              initial={reduce ? false : { opacity: 0, rotate: -8, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              {/* Backing shape */}
              <div className="nb absolute -left-5 -top-5 h-full w-full rotate-[-4deg] bg-violet" aria-hidden="true" />

              {/* Polaroid */}
              <figure className="nb-lg relative rotate-2 bg-white p-3 pb-4">
                <div className="relative aspect-square w-full overflow-hidden border-3 border-ink bg-paper">
                  <Image
                    src="/sahil.png"
                    alt={`${site.name} sitting at a rooftop table in the evening`}
                    fill
                    priority
                    sizes="(max-width: 640px) 78vw, 400px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between font-display text-sm leading-none">
                  <span>{site.name}</span>
                  <span className="text-ink/60">{site.shortLocation}</span>
                </figcaption>
              </figure>

              <Sticker
                color="pink"
                rotate="rotate-6 sm:-rotate-6"
                className="absolute -right-3 -top-4 text-sm sm:-bottom-4 sm:-left-6 sm:right-auto sm:top-auto sm:text-base"
              >
                MSc at UEA, 2026 to 27
              </Sticker>
            </motion.div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-5 hidden items-center gap-2 font-bold sm:left-8 lg:flex"
          aria-label="Scroll to about section"
        >
          <span className="nb-sm flex h-9 w-9 items-center justify-center bg-white">
            <ArrowDown className="h-4 w-4" />
          </span>
          <span>Scroll</span>
        </a>
      </Container>
    </section>
  );
}
