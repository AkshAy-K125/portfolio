import { useRef } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SplitText } from '@/components/SplitText';
import { MagneticLink } from '@/components/MagneticLink';
import { profile } from '@/data/portfolio';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Page scroll velocity drives a small skew + translate on the title — gives the headline
  // a heavy, inertial feel as you scroll without distorting layout.
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-3000, 0, 3000], [-7, 0, 7]);
  const drift = useTransform(smoothVelocity, [-3000, 0, 3000], [-30, 0, 30]);

  // Scroll-driven parallax — aurora drifts down slower than scroll so background
  // appears layered behind foreground content.
  const auroraScroll = useTransform(scrollY, [0, 1000], [0, 220]);
  const grainScroll = useTransform(scrollY, [0, 1000], [0, 80]);

  // Mouse parallax on the aurora — subtle drift toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const auroraX = useSpring(px, { damping: 25, stiffness: 80 });
  const auroraY = useSpring(py, { damping: 25, stiffness: 80 });
  const auroraYTotal = useTransform<number, number>(
    [auroraY, auroraScroll],
    ([mouseY, scrolled]) => mouseY + scrolled,
  );

  useMotionValueEvent(scrollY, 'change', () => {});

  const onMouseMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      <motion.div className="aurora" style={{ x: auroraX, y: auroraYTotal }} aria-hidden />
      <motion.div className="grain" style={{ y: grainScroll }} aria-hidden />

      <div className="container-page relative z-10 flex min-h-[88svh] flex-col justify-between pb-16 pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span>Issue 01 — Available for collaboration</span>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10">
          <motion.h1
            id="hero-heading"
            style={{ skewY: skew, y: drift }}
            className="font-display text-[clamp(3.4rem,12vw,10rem)] font-medium italic leading-[0.92] tracking-[-0.025em] text-fg will-change-transform"
          >
            <SplitText as="span" text="Akshay" className="block" delay={0.3} />
            <span className="block bg-gradient-to-br from-accent-from via-accent to-accent-to bg-clip-text text-transparent">
              <SplitText as="span" text="Kumar." delay={0.55} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            <span className="text-fg">{profile.role}</span> at{' '}
            <span className="text-fg">{profile.company}</span>. {profile.tagline} Currently shipping
            distributed systems & exploring crafted web experiences from {profile.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticLink
              href={`mailto:${profile.email}`}
              external={false}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-bg"
            >
              Get in touch
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </MagneticLink>
            <MagneticLink
              href="#projects"
              external={false}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elev/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:border-accent"
            >
              See selected work
            </MagneticLink>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          aria-label="Scroll to about section"
          className="mt-12 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.32em] text-muted hover:text-fg"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
