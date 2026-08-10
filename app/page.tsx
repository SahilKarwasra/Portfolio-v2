"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Stack from "@/components/Stack";
import { marqueeAvailability, marqueeTop } from "@/lib/data";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const handleDone = useCallback(() => {
    setLoaded(true);
    // let the curtain finish lifting before unmounting
    setTimeout(() => setShowPreloader(false), 1100);
  }, []);

  return (
    <SmoothScroll>
      <AnimatePresence>{showPreloader && <Preloader onDone={handleDone} />}</AnimatePresence>

      <Cursor />
      <Navbar loaded={loaded} />

      <main>
        <Hero loaded={loaded} />
        <Marquee items={marqueeTop} />
        <About />
        <Capabilities />
        <Experience />
        <Stack />
        <Marquee items={marqueeAvailability} variant="cobalt" speed={20} />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

