import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted">01 — About</p>
          <h2
            id="about-heading"
            className="max-w-3xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-fg"
          >
            I build <span className="text-accent">data-driven systems</span> and ship{' '}
            <span className="text-accent">crafted web experiences</span> — at the seam between
            backend rigor and frontend polish.
          </h2>
          <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted md:grid-cols-2 md:text-lg">
            <p>
              Currently an Application Engineer at <span className="text-fg">Flipkart</span>,
              owning end-to-end design, implementation, and ops of services that handle real
              traffic. Past life: shipping in-house ERP-style tools at{' '}
              <span className="text-fg">Al Nisr Aluminium</span> in Bahrain across a Python +
              MongoDB + GCP stack.
            </p>
            <p>
              PGDM in Data Engineering from <span className="text-fg">IIIT Bangalore</span>. I
              gravitate toward problems with messy data and ambiguous edges — and toward
              interfaces that feel like someone cared. Based in {profile.location}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
