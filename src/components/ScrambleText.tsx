import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/?#@*';

interface Props {
  text: string;
  trigger: 'hover' | 'mount';
  duration?: number;
  className?: string;
}

/**
 * Animated letter scramble: each character cycles through random glyphs
 * before settling on its final value. Stagger is per-character index.
 */
export function ScrambleText({ text, trigger, duration = 600, className }: Props) {
  const [display, setDisplay] = useState(text);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  const run = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const final = text;
    const len = final.length;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      let out = '';
      for (let i = 0; i < len; i++) {
        // Each char "settles" at progress >= i/len (with smoothing).
        const settleAt = i / Math.max(len - 1, 1);
        if (progress >= settleAt) {
          out += final[i];
        } else if (final[i] === ' ') {
          out += ' ';
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(final);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (trigger === 'mount') run();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  if (trigger === 'hover') {
    return (
      <span
        className={className}
        onMouseEnter={() => {
          if (!hovered) {
            setHovered(true);
            run();
          }
        }}
        onMouseLeave={() => setHovered(false)}
      >
        {display}
      </span>
    );
  }

  return <span className={className}>{display}</span>;
}
