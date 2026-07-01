import React from 'react';
import '../timeline.css';
import './timeline1089.css';

// Anchored to the project commencement in Quote Q-2026-1089.
const PROJECT_START = new Date('2026-06-18T00:00:00');
const TOTAL_PRICE = 1773;
const INSTALLMENT = (TOTAL_PRICE * 0.25).toFixed(2); // 443.25 BHD per 25% installment

const addDays = (date, n) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};
const fmtDay = (date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const fmtFull = (date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Date range from two cumulative day-offsets since commencement.
const range = (startOffset, endOffset) => {
  const s = addDays(PROJECT_START, startOffset);
  const e = addDays(PROJECT_START, endOffset);
  return `${fmtDay(s)} – ${fmtFull(e)}`;
};
const on = (offset) => fmtFull(addDays(PROJECT_START, offset));

// Ordered delivery plan. Each module carries its committed effort (days); the
// running total drives the start/end date of every card so the schedule stays
// consistent with the 70-day commitment in the quote.
const MODULES = [
  {
    phase: 'Phase 1', priority: 'Priority 1', days: 11, icon: '📊',
    title: 'Job Summary & Analysis',
    description:
      'Ground-up rebuild of the Job Summary & Analysis module on the new Cloudflare platform — data model, summary computations, filtering, and the analysis dashboard, tested end to end.',
  },
  {
    phase: 'Phase 1', priority: 'Priority 1', days: 2, icon: '👥',
    title: 'Job Summary & Analysis — various users',
    description:
      'Role-based views and access control for Job Summary across the different user types (office, supervisor, management).',
  },
  {
    phase: 'Phase 1', priority: 'Priority 2', days: 8, icon: '📝',
    title: 'Site Reports',
    description:
      'Rebuild of the Site Reports module — report structure, entry forms, listing, and export, wired to the new backend.',
  },
  {
    phase: 'Phase 1', priority: 'Priority 2', days: 7, icon: '🏗️',
    title: 'Site Reports — On Ground',
    description:
      'The on-ground field variant of Site Reports — a mobile-friendly capture flow with photo/notes handling that syncs back to the office view.',
  },
  {
    phase: 'Phase 1', priority: 'Priority 2', days: 2, icon: '👥',
    title: 'Site Reports — various users',
    description:
      'Role-based access and per-user views layered onto the Site Reports module.',
  },
  {
    phase: 'Phase 2', priority: 'Priority 3', days: 3, icon: '👥',
    title: 'Job Order — various users',
    description:
      'Multi-user access, roles, and per-user views for the Job Order module.',
  },
  {
    phase: 'Phase 2', priority: 'Priority 4', days: 13, icon: '🛡️',
    title: 'Warranty 2.0',
    description:
      'Full Warranty 2.0 rebuild — warranty records, coverage tracking, document generation, and lifecycle status, tested end to end.',
  },
  {
    phase: 'Phase 2', priority: 'Priority 5', days: 8, icon: '🚚',
    title: 'Vehicle Details 2.0',
    description:
      'Vehicle Details 2.0 — the vehicle register, document/renewal tracking, and the detail and listing screens on the new platform.',
  },
  {
    phase: 'Phase 2', priority: 'Priority 5', days: 3, icon: '👥',
    title: 'Vehicle Details 2.0 — various users',
    description:
      'Role-based access and per-user views for Vehicle Details 2.0.',
  },
  {
    phase: 'Phase 2', priority: 'Priority 6', days: 13, icon: '⚙️',
    title: 'OPMM',
    description:
      'OPMM module build — structure, workflows, and reporting, with full testing before project sign-off.',
  },
];

// Attach cumulative start/end offsets to each module.
let cursor = 0;
const SCHEDULE = MODULES.map((m) => {
  const start = cursor;
  cursor += m.days;
  return { ...m, kind: 'module', start, end: cursor };
});
const PHASE1_END = 30; // Priorities 1 & 2
const PROJECT_END = cursor; // 70

// Milestones interleaved with the module cards, positioned by day-offset.
const MILESTONES = [
  {
    kind: 'milestone', at: 0, icon: '🚀', title: 'Project Kickoff',
    description:
      'Commencement on the dedicated Cloudflare platform. 25% advance (' + INSTALLMENT + ' BHD) initiates the work.',
  },
  {
    kind: 'milestone', at: 15, icon: '💳', title: 'Interim Payment — Day 15',
    description:
      'Second 25% installment (' + INSTALLMENT + ' BHD) due on ' + on(15) + '.',
  },
  {
    kind: 'milestone', at: PHASE1_END, icon: '✅', title: 'Phase 1 Complete',
    description:
      'Priorities 1 & 2 delivered (Job Summary & Site Reports). Third 25% installment (' + INSTALLMENT + ' BHD) due on ' + on(PHASE1_END) + '.',
  },
  {
    kind: 'milestone', at: PROJECT_END, icon: '🏁', title: 'Project Complete',
    description:
      'All prioritised modules (Priorities 1–6) delivered and signed off on ' + on(PROJECT_END) + ' — the full 70-day committed scope.',
  },
  {
    kind: 'milestone', at: PROJECT_END, icon: '💳', title: 'Final Payment — On Completion',
    description:
      'Fourth and final 25% installment (' + INSTALLMENT + ' BHD) due on completion of the project — ' + on(PROJECT_END) + '. This settles the fixed ' + TOTAL_PRICE + ' BHD total in full.',
  },
  {
    kind: 'milestone', at: PROJECT_END + 30, icon: '🎁', title: 'Goodwill Delivery — Free',
    description:
      'The complimentary modules — Inv Summary, Employee Management Dashboard, LPO & Invoice 2.0 (various users) — delivered free of charge, within one month of project completion (by ' + on(PROJECT_END + 30) + ').',
  },
];

// Merge modules + milestones into a single ordered stream. Items are ordered by
// day-offset; on a tie a milestone sorts ahead of a module (e.g. Phase 1
// Complete lands before the Priority 3 kickoff on day 30), and equal items keep
// their original insertion order (e.g. Project Complete before Final Payment on
// day 70).
const dayOf = (item) => (item.kind === 'module' ? item.start : item.at);
const ITEMS = [...SCHEDULE, ...MILESTONES]
  .map((item, i) => ({ item, i }))
  .sort((a, b) => {
    if (dayOf(a.item) !== dayOf(b.item)) return dayOf(a.item) - dayOf(b.item);
    if (a.item.kind !== b.item.kind) return a.item.kind === 'milestone' ? -1 : 1;
    return a.i - b.i;
  })
  .map(({ item }) => item);

const NisrQuote1089TimeLine = () => (
  <div className="timeline-container">
    <div className="timeline-header">
      <h1 className="timeline-main-title">Al Nisr Aluminium & Metal Fabrication Co WLL</h1>
      <h2 className="timeline-subtitle">PROJECT TIMELINE</h2>
      <p className="timeline-meta">
        Quote Q-2026-1089 · Post-Deadline Modifications · 70-day committed delivery
      </p>
      <div className="timeline-legend">
        <span className="tl-legend-item"><span className="tl-dot tl-dot--p1" /> Phase 1 — Priorities 1 &amp; 2</span>
        <span className="tl-legend-item"><span className="tl-dot tl-dot--p2" /> Phase 2 — Priorities 3–6</span>
        <span className="tl-legend-item"><span className="tl-dot tl-dot--ms" /> Milestone</span>
      </div>
    </div>

    <div className="timeline-wrapper">
      <div className="timeline-line" />
      {ITEMS.map((item, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        if (item.kind === 'milestone') {
          return (
            <div key={`ms-${item.title}`} className={`timeline-item ${side} is-milestone`}>
              <div className="timeline-content">
                <div className="timeline-week-badge">
                  <span className="week-number">{on(item.at)}</span>
                  <h3 className="week-title">{item.title}</h3>
                </div>
                <div className="timeline-description">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="timeline-icon">
                <div className="icon-circle icon-circle--milestone">
                  <span className="icon-emoji">{item.icon}</span>
                </div>
              </div>
            </div>
          );
        }
        const phaseClass = item.phase === 'Phase 1' ? 'is-phase1' : 'is-phase2';
        return (
          <div key={`mod-${item.title}`} className={`timeline-item ${side} ${phaseClass}`}>
            <div className="timeline-content">
              <div className="timeline-week-badge">
                <div className="tl-badge-tags">
                  <span className="tl-tag tl-tag--phase">{item.phase}</span>
                  <span className="tl-tag tl-tag--prio">{item.priority}</span>
                  <span className="tl-tag tl-tag--effort">{item.days} {item.days === 1 ? 'day' : 'days'}</span>
                </div>
                <span className="week-number">{range(item.start, item.end)}</span>
                <h3 className="week-title">{item.title}</h3>
              </div>
              <div className="timeline-description">
                <p>{item.description}</p>
              </div>
            </div>
            <div className="timeline-icon">
              <div className="icon-circle">
                <span className="icon-emoji">{item.icon}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div className="timeline-footer">
      <div className="company-website">
        <a href="https://www.akshayjogi.dev" target="_blank" rel="noopener noreferrer">
          www.akshayjogi.dev
        </a>
      </div>
    </div>
  </div>
);

export default NisrQuote1089TimeLine;
