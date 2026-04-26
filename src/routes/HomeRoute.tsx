import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useLenis } from '@/hooks/useLenis';
import { Splash } from '@/components/Splash';
import { Cursor } from '@/components/Cursor';
import { CursorHalo } from '@/components/CursorHalo';
import { Navbar } from '@/components/Navbar';
import { ParticleField } from '@/components/ParticleField';
import { MarqueeDivider } from '@/components/MarqueeDivider';

import { Hero } from '@/features/hero/Hero';
import { About } from '@/features/about/About';
import { Experience } from '@/features/experience/Experience';
import { Skills } from '@/features/skills/Skills';
import { Projects } from '@/features/projects/Projects';
import { Contact } from '@/features/contact/Contact';
import { Footer } from '@/features/footer/Footer';

const marqueeItems = [
  'Distributed systems',
  'Crafted web',
  'Data engineering',
  'Application engineering',
  'Bengaluru, India',
];

export default function HomeRoute() {
  useLenis();
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      </AnimatePresence>

      <CursorHalo />
      <ParticleField />
      <Cursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <MarqueeDivider items={marqueeItems} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
