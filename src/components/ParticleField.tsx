import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // depth — drives size, brightness, parallax weight
}

interface Props {
  density?: number; // particles per 100k px²
  connectDistance?: number;
  className?: string;
}

/**
 * Lightweight 2D-canvas constellation field. Particles drift, repel from cursor,
 * and faintly link to nearby neighbours. Reads --accent-from / --accent-to from
 * CSS so it tracks theme. Skipped on prefers-reduced-motion.
 */
export function ParticleField({ density = 0.04, connectDistance = 130, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, active: false };

    const cssVar = (name: string) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || '#ffffff';
    };
    const hexToRgb = (hex: string) => {
      const m = hex.replace('#', '');
      const full = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
      const n = parseInt(full, 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
    };

    const seed = () => {
      const target = Math.round((w * h * density) / 1000);
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        z: Math.random() * 0.7 + 0.3,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let accentRgb = hexToRgb(cssVar('--accent-from'));
    let accentRgb2 = hexToRgb(cssVar('--accent-to'));
    const refreshColors = () => {
      accentRgb = hexToRgb(cssVar('--accent-from'));
      accentRgb2 = hexToRgb(cssVar('--accent-to'));
    };
    const themeObserver = new MutationObserver(refreshColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges seamlessly.
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;

        // Cursor repulsion within radius.
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const r = 140;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 1;
            const force = ((r - d) / r) * 0.6;
            p.x += (dx / d) * force;
            p.y += (dy / d) * force;
          }
        }
      }

      // Connection lines — quadratic in particle count, so density is kept low.
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < connectDistance * connectDistance) {
            const d = Math.sqrt(d2);
            const t = 1 - d / connectDistance;
            const alpha = t * 0.18 * Math.min(a.z, b.z);
            // Blend the two accents along the line midpoint for a subtle gradient.
            const mix = (a.x + b.x) / (2 * w);
            const r = Math.round(accentRgb[0] * (1 - mix) + accentRgb2[0] * mix);
            const g = Math.round(accentRgb[1] * (1 - mix) + accentRgb2[1] * mix);
            const bl = Math.round(accentRgb[2] * (1 - mix) + accentRgb2[2] * mix);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Particle dots last so they sit on top.
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const radius = 1.1 + p.z * 1.4;
        const alpha = 0.35 + p.z * 0.55;
        ctx.fillStyle = `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      themeObserver.disconnect();
    };
  }, [reduced, density, connectDistance]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        'pointer-events-none fixed inset-0 z-0 h-full w-full ' + (className ?? '')
      }
    />
  );
}
