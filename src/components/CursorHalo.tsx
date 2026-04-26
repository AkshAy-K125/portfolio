import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * A large, soft, accent-tinted radial gradient that lazily follows the cursor.
 * Adds living warmth to the background; sits below content but above the page bg.
 */
export function CursorHalo() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { damping: 30, stiffness: 60, mass: 0.9 });
  const sy = useSpring(y, { damping: 30, stiffness: 60, mass: 0.9 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[60vmin] w-[60vmin] rounded-full opacity-50 mix-blend-screen blur-3xl"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--accent-from) 55%, transparent) 0%, color-mix(in oklab, var(--accent-to) 35%, transparent) 35%, transparent 65%)',
        }}
      />
    </motion.div>
  );
}
