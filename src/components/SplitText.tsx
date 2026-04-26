import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextProps {
  text: string;
  className?: string;
  by?: 'word' | 'char';
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const wrap: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const item: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function SplitText({
  text,
  className,
  by = 'word',
  delay = 0,
  stagger = 0.06,
  as: Tag = 'h1',
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const tokens = by === 'word' ? text.split(/(\s+)/) : Array.from(text);

  if (reduced) {
    const Comp = Tag as 'h1';
    return <Comp className={className}>{text}</Comp>;
  }

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
      variants={wrap}
      custom={stagger}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      aria-label={text}
    >
      {tokens.map((tok, i) =>
        /^\s+$/.test(tok) ? (
          <span key={i} aria-hidden>
            {tok}
          </span>
        ) : (
          <span
            key={i}
            aria-hidden
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
              // Italic glyphs in Fraunces overshoot their box on top-right (letter slant)
              // and bottom (descender). Pad the mask on those sides so nothing gets clipped,
              // negative margins keep layout/leading unchanged.
              paddingBottom: '0.22em',
              marginBottom: '-0.22em',
              paddingTop: '0.08em',
              marginTop: '-0.08em',
              paddingRight: '0.18em',
              marginRight: '-0.18em',
            }}
          >
            <motion.span variants={item} style={{ display: 'inline-block' }}>
              {tok}
            </motion.span>
          </span>
        ),
      )}
    </motion.span>
  );
}
