import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-muted">04 — Selected work</p>
            <h2
              id="projects-heading"
              className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium italic leading-tight tracking-[-0.02em] text-fg"
            >
              Things I've shipped & broken.
            </h2>
          </div>
          <a
            href="https://github.com/AkshAy-K125"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm text-muted hover:text-accent md:inline-flex"
          >
            More on GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.key} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = index < 2 && !!project.thumbnail;

  // Mouse-tracked 3D tilt with spring damping. Rotates around card center; the cursor
  // 'lifts' the corner closest to it, giving a tactile, magnetic-feeling card.
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { damping: 22, stiffness: 220 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { damping: 22, stiffness: 220 });
  const lift = useSpring(0, { damping: 22, stiffness: 220 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onEnter = () => lift.set(-6);
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    lift.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.05 }}
      style={{ rotateX, rotateY, y: lift, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={
        'group relative flex flex-col overflow-hidden rounded-[var(--radius-token)] border border-border bg-bg-elev/60 transition-colors hover:border-accent/60 hover:shadow-[0_30px_60px_-25px_color-mix(in_oklab,var(--accent)_45%,transparent)] ' +
        (featured ? 'md:col-span-2' : '')
      }
    >
      <CardImage project={project} mx={mx} my={my} />

      <div className="relative z-10 flex flex-1 flex-col gap-4 p-6 md:p-7" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-medium italic tracking-tight text-fg">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </a>
          </h3>
          <div className="flex items-center gap-1 text-muted">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={14} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live link`}
              className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted md:text-base">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stacks.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function CardImage({
  project,
  mx,
  my,
}: {
  project: Project;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  // Slight inverse parallax on the image so it counter-shifts against the card tilt —
  // makes the image feel like it sits *behind* the card surface.
  const imgX = useTransform(mx, [-0.5, 0.5], ['2%', '-2%']);
  const imgY = useTransform(my, [-0.5, 0.5], ['2%', '-2%']);

  if (!project.thumbnail) {
    return (
      <div
        aria-hidden
        className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent-from)_30%,transparent),transparent_60%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--accent-to)_30%,transparent),transparent_60%)]"
      />
    );
  }

  return (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-[16/9] overflow-hidden bg-bg"
      aria-label={`${project.title} — open live demo`}
    >
      <motion.img
        src={project.thumbnail}
        alt={`${project.title} cover`}
        style={{ x: imgX, y: imgY }}
        className="absolute inset-[-3%] h-[106%] w-[106%] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-fg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-bg">
          View <ArrowUpRight size={12} />
        </div>
      </div>
    </a>
  );
}
