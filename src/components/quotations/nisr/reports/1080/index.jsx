import React from 'react';
import '../report.css';
import './report1080.css';

const SAMPLE_URL = 'https://nisr-platform.pages.dev';

// Structural risks of the current Google Apps Script + Sheets foundation.
const RISKS = [
  {
    ico: '⚠️',
    title: 'Exposure to Google’s changes',
    desc: 'Google periodically changes quotas, deprecates APIs, and alters Apps Script behaviour. These changes land without our consent and on Google’s timeline, and each one risks downtime — we have already experienced this first-hand (script-quota blocks, and restoring a large batch of scripts from backup).',
  },
  {
    ico: '🗄️',
    title: 'Sheets is not a real database',
    desc: 'It has no proper data integrity, no transactions, degrades with large data volumes, and is fragile under concurrent edits.',
  },
  {
    ico: '🔧',
    title: 'Hard to maintain safely',
    desc: 'Difficult to version, test, secure, and hand over; logic is spread across many disconnected scripts and spreadsheets.',
  },
  {
    ico: '🔒',
    title: 'Single-vendor lock-in',
    desc: 'Tied to a scripting runtime we cannot pin, mirror, or fully control.',
  },
];

// Current vs Proposed — area-by-area comparison.
const COMPARISON = [
  {
    area: 'Cost',
    current: 'Tied to Google Workspace; quota ceilings.',
    proposed: 'Very generous free tier — comfortably covers Al Nisr’s usage at effectively no monthly cost (e.g. Workers includes 100,000 requests/day free; static hosting requests are unlimited; the database free tier includes several GB of storage). Our volume sits far inside these limits.',
  },
  {
    area: 'Stability / longevity',
    current: 'Subject to Google’s quota & API changes.',
    proposed: 'Built on long-lived web standards (standard HTTP APIs, SQLite database, static front-end). Designed to run unchanged for years.',
  },
  {
    area: 'Database',
    current: 'Google Sheets (not a true DB).',
    proposed: 'D1 — a real SQL (SQLite) database: integrity, transactions, fast queries, and proper backups/exports.',
  },
  {
    area: 'Performance',
    current: 'Variable; spreadsheet-bound.',
    proposed: 'Served from Cloudflare’s global edge network — fast page loads everywhere.',
  },
  {
    area: 'Security & access',
    current: 'Script-level, ad hoc.',
    proposed: 'Centralised auth, device-bound login, and per-page read-only locks managed from Admin.',
  },
  {
    area: 'Maintainability',
    current: 'Scattered scripts + sheets.',
    proposed: 'One codebase, versioned in Git, testable, documented, and easy to hand over.',
  },
  {
    area: 'Ownership & portability',
    current: 'Locked to Google’s runtime.',
    proposed: 'Standard, portable stack — data and code can be exported and moved at any time; no proprietary scripting lock-in.',
  },
  {
    area: 'Scalability',
    current: 'Bound by Sheets/Apps Script quotas.',
    proposed: 'Scales automatically with demand; pay only if usage grows far beyond today’s.',
  },
  {
    area: 'Reliability',
    current: 'One Google change can break a tool.',
    proposed: 'Independent of any single product’s roadmap.',
  },
];

// Why a move to Cloudflare could become a long-lived platform.
const BENEFITS = [
  {
    ico: '🧩',
    title: 'Portable, standard technology',
    desc: 'SQLite, a static web front-end, and plain HTTP APIs are industry standards that will be supported for the foreseeable future — unlike a proprietary scripting runtime.',
  },
  {
    ico: '🛡️',
    title: 'Independence from Google’s product decisions',
    desc: 'No more disruption from quota cuts, deprecations, or forced migrations on someone else’s schedule.',
  },
  {
    ico: '💸',
    title: 'Cost certainty',
    desc: 'The free tier covers current operations with large headroom, so there is no creeping cost as usage grows modestly.',
  },
  {
    ico: '📚',
    title: 'Single, documented codebase',
    desc: 'Straightforward to maintain and hand over for years to come.',
  },
];

const NisrQuote1080FinalReport = () => {
  return (
    <div className="report-container">
      <div className="report-wrapper">

        <header className="report-header">
          <h1 className="report-title">Platform Update &amp; Migration Report</h1>
          <p className="report-subtitle">
            Quotation 1080 — the scripts due before Google’s deadline are completed, plus a
            recommendation to consolidate Al Nisr onto Cloudflare{' '}
            <span className="subtitle-highlight">possibly for a stable 10-year platform</span>.
          </p>
          <div className="report-meta">
            <span className="report-meta-pill">Reference: Quotation No. 1080</span>
            <span className="report-meta-pill">15 June 2026</span>
          </div>
        </header>

        <div className="report-content">

          {/* Executive summary */}
          <p className="report-lead">
            The scripts scoped for completion before Google’s deadline are <strong>done</strong>.
            Alongside this, we raise an important recommendation: the current systems run on Google
            Apps Script, which is repeatedly subject to major changes from Google’s side that are
            outside our control. Since we are already planning to retain and rebuild the remaining
            pages from scratch, this is the right moment to systematically move all code and data onto{' '}
            <strong>Cloudflare</strong> — a platform with a very generous free tier — so the system
            could stay stable and supportable for the next decade.
          </p>

          <div className="metrics-grid">
            <div className="metric-card metric-card-blue">
              <span className="metric-icon">✅</span>
              <div>
                <p className="metric-label">Project Status</p>
                <p className="metric-value metric-value-sm">Scripts before the deadline are completed</p>
              </div>
            </div>
            <div className="metric-card metric-card-purple">
              <span className="metric-icon">📦</span>
              <div>
                <p className="metric-label">Scripts Fixed for Google’s Update</p>
                <p className="metric-value">5</p>
                <p className="metric-sub">Podium · Login · Job Order · Invoice · LPO</p>
              </div>
            </div>
          </div>

          {/* What was done */}
          <section className="report-section">
            <h2 className="section-title">What Was Done</h2>
            <p className="section-intro">
              No new platform was built. The code that was already in place — the existing scripts in
              the current architecture — was fixed to work with Google’s recent update, so the affected
              modules keep running.
            </p>
          </section>

          {/* The problem with the current architecture */}
          <section className="report-section">
            <h2 className="section-title">The Problem With the Current Architecture</h2>
            <p className="section-intro">
              The legacy apps are built on Google Apps Script with Google Sheets acting as the
              database. This carries structural risk — the foundation itself is the risk, not any
              single bug.
            </p>
            <ul className="point-list">
              {RISKS.map((r, i) => (
                <li className="point-item point-item-risk" key={i}>
                  <span className="point-ico">{r.ico}</span>
                  <p><strong>{r.title}.</strong> {r.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommendation & why Cloudflare */}
          <section className="report-section">
            <h2 className="section-title">Recommendation — Consolidate Onto Cloudflare</h2>
            <p className="section-intro">
              Because a working sample of the proposed design is already live (see the live sample at
              the end of this report), the apps can be rebuilt to the same standard and pointed at one
              shared database, then the old Apps Script tools retired. This is not a rewrite for its own
              sake — it is moving off a foundation Google can change under us, onto one we control.
              Area by area:
            </p>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Current — Apps Script + Sheets</th>
                    <th>
                      Proposed — Cloudflare
                      <span className="compare-tag">Recommended</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((c, i) => (
                    <tr key={i}>
                      <td className="compare-area">{c.area}</td>
                      <td className="compare-current">{c.current}</td>
                      <td className="compare-proposed">{c.proposed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why this could give a long-lived platform */}
          <section className="report-section">
            <h2 className="section-title">Why This Could Give a 10-Year Platform</h2>
            <ul className="point-list">
              {BENEFITS.map((b, i) => (
                <li className="point-item point-item-benefit" key={i}>
                  <span className="point-ico">{b.ico}</span>
                  <p><strong>{b.title}.</strong> {b.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Live sample of the new design — closing call to action */}
          <div className="cta-box">
            <h2 className="cta-title">Live Sample of the New Design</h2>
            <p className="cta-text">
              We have prepared a live sample of the proposed new design. Please go through it to
              understand the look, feel, and direction of the recommended Cloudflare platform.
              Use the sample login below to sign in.
            </p>
            <a href={SAMPLE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">
              View Live Sample ↗
            </a>
            <div className="cta-creds">
              <span className="cta-creds-label">Sample login</span>
              <span className="cta-cred">
                <span className="cta-cred-key">User</span>
                <span className="cta-cred-val">test</span>
              </span>
              <span className="cta-cred">
                <span className="cta-cred-key">Pass</span>
                <span className="cta-cred-val">1234</span>
              </span>
            </div>
          </div>

          <footer className="report-footer">
            <p>Prepared for Al Nisr Aluminium management. Reference: Quotation No. 1080.</p>
            <p>Report generated 15 June 2026.</p>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default NisrQuote1080FinalReport;
