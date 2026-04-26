import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export function Skills() {
  const [paused, setPaused] = useState(false);
  const looped = [...skills, ...skills];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative py-24 md:py-28">
      <div className="container-page mb-12">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-muted">03 — Toolkit</p>
        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium italic leading-tight tracking-[-0.02em] text-fg"
        >
          Things I reach for.
        </motion.h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="marquee-track flex w-max gap-3 px-4"
          data-paused={paused ? 'true' : 'false'}
        >
          {looped.map((s, i) => (
            <a
              key={`${s.key}-${i}`}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="group flex shrink-0 items-center gap-3 rounded-full border border-border bg-bg-elev/70 px-5 py-3 transition-colors hover:border-accent/70 hover:bg-surface"
            >
              <img src={s.icon} alt={s.alt} className="h-6 w-6 object-contain" loading="lazy" />
              <span className="text-sm font-medium text-fg group-hover:text-accent">{s.name}</span>
            </a>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent"
        />
      </div>
    </section>
  );
}
