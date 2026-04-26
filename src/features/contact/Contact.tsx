import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticLink } from '@/components/MagneticLink';
import { profile, socials } from '@/data/portfolio';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-32 md:py-40">
      <div className="container-page">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-muted">05 — Contact</p>
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl font-display text-[clamp(2.4rem,8vw,6rem)] font-semibold italic leading-[1.02] tracking-[-0.03em] text-fg"
        >
          Have an idea?{' '}
          <a
            href={`mailto:${profile.email}`}
            data-magnetic
            className="bg-gradient-to-br from-accent-from via-accent to-accent-to bg-clip-text text-transparent transition-opacity hover:opacity-80"
          >
            Let's talk.
          </a>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          Open to collaborations, side projects, and interesting engineering problems. I read every
          message.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <MagneticLink
            href={`mailto:${profile.email}`}
            external={false}
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg hover:bg-accent"
          >
            {profile.email}
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </MagneticLink>
          {socials.map((s) => (
            <MagneticLink
              key={s.key}
              href={s.link}
              ariaLabel={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elev/60 px-5 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {s.label}
            </MagneticLink>
          ))}
        </div>
      </div>
    </section>
  );
}
