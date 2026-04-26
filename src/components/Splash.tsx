import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const SESSION_KEY = 'portfolio-splash-shown';

export function Splash({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!show || reduced) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setShow(false);
      onDone();
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1');
      setShow(false);
      onDone();
    }, 1400);
    return () => clearTimeout(t);
  }, [show, reduced, onDone]);

  if (!show) return null;

  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-[80] grid place-items-center bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.svg
        viewBox="0 0 200 80"
        width="180"
        height="72"
        aria-label="AK monogram"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <defs>
          <linearGradient id="ak-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-from)" />
            <stop offset="100%" stopColor="var(--accent-to)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M10 70 L40 10 L70 70 M20 50 L60 50"
          fill="none"
          stroke="url(#ak-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M100 10 L100 70 M100 40 L140 10 M100 40 L150 70"
          fill="none"
          stroke="url(#ak-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </motion.svg>
    </motion.div>
  );
}
