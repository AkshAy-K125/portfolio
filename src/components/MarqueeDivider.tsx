import { useRef } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from 'framer-motion';

interface Props {
  items: string[];
  baseSpeed?: number; // pixels per second baseline
}

/**
 * Infinite horizontal marquee whose drift speed is augmented by scroll velocity.
 * Idle: slow constant scroll. Scrolling: bursts faster in the scroll direction.
 * Built without GSAP — Framer's useAnimationFrame + useTransform handles it cleanly.
 */
export function MarqueeDivider({ items, baseSpeed = 50 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  // Map scroll velocity to a [-5, 5] multiplier so each scroll burst kicks the marquee.
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // wrap(-25, 0) keeps x looping over the duplicated track. We render items twice in CSS,
  // so wrapping at -25% lands seamlessly on the next copy.
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  let lastTime: number | null = null;
  useAnimationFrame((t) => {
    if (lastTime === null) {
      lastTime = t;
      return;
    }
    const delta = (t - lastTime) / 1000;
    lastTime = t;

    let move = baseSpeed * delta * 0.04; // base drift in % units (track width is 200%)
    move += velocityFactor.get() * delta * 0.4;
    baseX.set(baseX.get() + move);
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative my-6 overflow-hidden border-y border-border bg-bg-elev/40 py-6 md:py-8"
    >
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-10 px-5 md:gap-16">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="font-display text-3xl italic tracking-tight text-fg md:text-5xl lg:text-6xl"
              >
                {item}
                <span className="ml-10 inline-block h-2 w-2 rounded-full bg-accent align-middle md:ml-16" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
