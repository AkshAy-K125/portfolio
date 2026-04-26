import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { companies } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">02 — Experience</p>
            <h2
              id="experience-heading"
              className="font-display text-[clamp(1.8rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-fg"
            >
              A timeline of work.
            </h2>
          </div>
        </div>

        <ol className="relative border-l border-border pl-6 md:pl-10">
          {companies.map((c, idx) => (
            <motion.li
              key={c.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
              className="group relative mb-12 last:mb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center rounded-full border border-border bg-bg-elev md:-left-[43px]"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to" />
              </span>

              <article className="rounded-[var(--radius-token)] border border-border bg-bg-elev/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/60 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-bg ring-1 ring-border">
                      <img src={c.logo} alt={`${c.header} logo`} className="h-9 w-9 object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          {c.header}
                        </a>
                      </h3>
                      <p className="mt-0.5 text-sm text-muted">{c.role}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">{c.location}</span>
                </div>
                <div className="prose-experience mt-5 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                  {parse(c.body)}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
