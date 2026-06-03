import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { useLenis } from '@/hooks/useLenis';
import { useAuthGate } from '@/context/AuthGateContext';
import { PasswordModal } from '@/components/quotations/PasswordModal';
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

const SCROLL_SPEED = 0.75; // px per frame (~36px/s at 60fps)

export default function HomeRoute() {
  const lenisRef = useLenis();
  const navigate = useNavigate();
  const { gate, clearGate } = useAuthGate();
  const [splashDone, setSplashDone] = useState(false);
  const scrollRafRef = useRef<number>(0);

  useEffect(() => {
    if (!gate) return;

    lenisRef.current?.stop();

    const tick = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const next = window.scrollY + SCROLL_SPEED;
      window.scrollTo(0, next >= maxScroll ? 0 : next);
      scrollRafRef.current = requestAnimationFrame(tick);
    };
    scrollRafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(scrollRafRef.current);
      lenisRef.current?.start();
    };
  }, [gate, lenisRef]);

  const handlePasswordSuccess = () => {
    if (!gate) return;
    localStorage.setItem(
      gate.authKey,
      JSON.stringify({ authenticated: true, timestamp: Date.now() }),
    );
    const destination = gate.destination;
    clearGate();
    navigate(destination);
  };

  return (
    <>
      <AnimatePresence>
        {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      </AnimatePresence>

      {gate && (
        <PasswordModal password={gate.password} onSuccess={handlePasswordSuccess} />
      )}

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
