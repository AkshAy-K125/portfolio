import { socials, profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-elev/40">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="text-sm text-muted">
          © {year} {profile.name}. Crafted with React, Tailwind & Framer Motion.
        </div>
        <ul className="flex flex-wrap items-center gap-4 text-sm">
          {socials.map((s) => (
            <li key={s.key}>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
