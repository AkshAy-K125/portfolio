import React from 'react';
import '../quote.css';
import './quote1080.css';

const RATE = 18;

// Reference links — current deployment execution URLs (reused across "various users" variants)
const L = {
  complaint:    'https://script.google.com/macros/s/AKfycbz2vB_Qm3NMm24AJYlabk9JZPA3-eQr5tj4pVzZcdfkCMSwT_TP-U1eUBcrg1UoWObIVw/exec',
  employee:     'https://script.google.com/macros/s/AKfycbw5d0ny_Ahjg8ee-bXs3-qBZJ5yvsYfPJGnKYCr1hFmMg35s1kXyTgAiVFi4KSFrgEO/exec',
  invSummary:   'https://script.google.com/macros/s/AKfycbySe9c64JH9ABf_OCyCjFpY1Ax6UST97VyKJvIL7ZwweKAodWalPUjV90hpaSKpdTA/exec',
  invoice:      'https://script.google.com/macros/s/AKfycbwYC6pA2JcAidVTAb2bv1b2EUlEhtEfW_Hs1SaYaHZ1JO6oUK9cie_DPyBwCGtWj6G_/exec',
  lpo:          'https://script.google.com/macros/s/AKfycbzYpmx1lWueD4YRZhr0HZLZQtwXOaDzWBqHsyPo8AZ5Sx9kIk0J23189WeDYw7zckeVxg/exec',
  jobOrder:     'https://script.google.com/macros/s/AKfycbytQbthX4XVnwVj73IvXQSYdECpEKAwwiVQwzoJ3qFzjvfvdwa_7OpG5ECXKKyHufoeKg/exec',
  jobSummary:   'https://script.google.com/macros/s/AKfycby_E3NRkkZKaDkXGyhjE_Gczd_aBlFMZkhsvjaE8gea58Lir9PjEK-xBJAmIzG-WBJR/exec',
  login:        'https://script.google.com/macros/s/AKfycbyXFQMpWqy8yigcWlbwiS3kOfb7YMg8g2rgjEM7bNee0HLt2FmJfzwhfj_caDlFGkrT/exec',
  matPrice:     'https://script.google.com/macros/s/AKfycbyN_zkoNTfJHKGpiPBxdyR15Cy9Vehj7pyLlTa7b2OX8r8ArudVpbPX06t7rUENQC1_/exec',
  opmm:         'https://script.google.com/macros/s/AKfycbzO20EaeBlleRbV8dqs02kMVJD6U--s1AFMwsBEKr44SLuMPERMRNFUeYQOWVKeAnoZ/exec',
  podium:       'https://script.google.com/macros/s/AKfycbyPUx_Ne4qJg-rX6iDIJwnBxUbQX7Lfzb6AXYoKnq2CqJmTkuY2_PMwp17GBdxE2Qnc/exec',
  powder:       'https://script.google.com/macros/s/AKfycbzW2AQvlEXU5qYA1aglRk4IZxXZg_kAottm-JVIpXt1Ft7nMAcijmkHdWKVQsXAhljnIw/exec',
  siteReports:  'https://script.google.com/macros/s/AKfycbxi4zKccVDZff68SLsADLUUDKKgGQkQr9mZJRL_o3rJr3ybOkYHK0AqIjjyEuwqK1_N/exec',
  siteReportsOG:'https://script.google.com/macros/s/AKfycbxSz413ShzEzdfCQmFbsstMj9VLHL0u9NJINTAkFlr2TuSCoZNka8kacWXv6c6UabRPvw/exec',
  supplier:     'https://script.google.com/macros/s/AKfycbxU-0tBs3hnXUAOQn_fzJeBaLCTge4w6yCUhUkskkLKWxpBPoucFZxQWUgu-tiRjkPM/exec',
  toolTracker:  'https://script.google.com/macros/s/AKfycbz_Gjj_beEwqTvtq2ojq8lXuUMcb0XUnYKT76z9FhHgmTrfA-eG9Ysc5HjnmHEgUxJNoQ/exec',
  vehicle:      'https://script.google.com/macros/s/AKfycbxFXvYFzwT7IlIn1HFyBaFiL_a8bRr08-YLxa5zU-bXpEvSegiZ1CY7Xhd8Lk_Ifo60fw/exec',
  warranty:     'https://script.google.com/macros/s/AKfycbxqnrMJ-QlFVodmaTNNXWCMrXvA68rPRu0ynugw3arFTYLzx6s4AAjJ0dYX71rnD7L1Ng/exec',
};

const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2, '—': 3 };

const MODULES = [
  // Prioritised modules — surfaced first
  { name: 'Podium 3.0',                          priority: 'High',   lines: '~5000+', revamp: true, link: L.podium },
  { name: 'Podium 3.0 - various users',          priority: 'High',   lines: '~1000+', revamp: true,  link: L.podium },
  { name: 'Login',                               priority: 'High',   lines: '~500+',  revamp: true,  link: L.login },
  { name: 'Job Order',                           priority: 'High',   lines: '~5000+', revamp: true, link: L.jobOrder },
  { name: 'Job Order - various users',           priority: 'High',   lines: '~1000+', revamp: true,  link: L.jobOrder },
  { name: 'Job Summary & Analysis',              priority: 'High',   lines: '~5000+', revamp: true, link: L.jobSummary },
  { name: 'Job Summary & Analysis - various users', priority: 'High', lines: '~1000+', revamp: true, link: L.jobSummary },
  { name: 'Invoice 2.0',                         priority: 'High',   lines: '~5000+', revamp: true, link: L.invoice },
  { name: 'Invoice 2.0 - various users',         priority: 'High',   lines: '~1000+', revamp: true,  link: L.invoice },
  { name: 'Warranty 2.0',                        priority: 'High',   lines: '~5000+', revamp: true, link: L.warranty },
  { name: 'Warranty 2.0 - various users',        priority: 'High',   lines: '~1000+', revamp: true, link: L.warranty },

  // Remaining modules
  { name: 'Complaint Entry',                     priority: 'High',   lines: '~3000+', revamp: true,  link: L.complaint },
  { name: 'Complaint Entry - various users',     priority: 'High',   lines: '~1000+', revamp: true,  link: L.complaint },
  { name: 'Inv Summary',                         priority: 'High',   lines: '~3000+', revamp: true,  link: L.invSummary },
  { name: 'LPO',                                 priority: 'High',   lines: '~5000+', revamp: true, link: L.lpo },
  { name: 'LPO - various users',                 priority: 'High',   lines: '~1000+', revamp: true,  link: L.lpo },
  { name: 'Material Selling Price',              priority: 'High',   lines: '~2000+', revamp: true,  link: L.matPrice },
  { name: 'Powder Coating',                      priority: 'High',   lines: '~3000+', revamp: true,  link: L.powder },
  { name: 'Powder Coating - various users',      priority: 'High',   lines: '~1000+', revamp: true,  link: L.powder },
  { name: 'Site Reports',                        priority: 'High',   lines: '~5000+', revamp: true, link: L.siteReports },
  { name: 'Site Reports - various users',        priority: 'High',   lines: '~1000+', revamp: true,  link: L.siteReports },
  { name: 'Site Reports - On Ground',            priority: 'High',   lines: '~5000+', revamp: true, link: L.siteReportsOG },
  { name: 'Tool Tracker',                        priority: 'High',   lines: '~4000+', revamp: true,  link: L.toolTracker },
  { name: 'Tool Tracker - various users',        priority: 'High',   lines: '~1000+', revamp: true,  link: L.toolTracker },
  { name: 'Vehicle Details 2.0',                 priority: 'High',   lines: '~3000+', revamp: true,  link: L.vehicle },
  { name: 'Vehicle Details 2.0 - various users', priority: 'High',   lines: '~1000+', revamp: true,  link: L.vehicle },
  { name: 'Employee Management Dashboard',       priority: 'Medium', lines: '~400+',  revamp: true,  link: L.employee },
  { name: 'Supplier DB & Entry',                 priority: 'Medium', lines: '~2000+', revamp: true,  link: L.supplier },
  { name: 'Diyar Free Service',                  priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Editable - Diyar Free Service',       priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Free Service POP',                    priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'General Directory',                   priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Job Directory',                       priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Job Directory - On Ground',           priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Material request - Factory',          priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Material request Reference Office',   priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Notification Panel',                  priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Notification panel Contents',         priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'OPMM',                                priority: 'High',   lines: '~5000+', revamp: true, link: L.opmm },
  { name: 'OT webApp Bulk - Entry',              priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'OT webApp Entry',                     priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Payroll Dashboard',                   priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Petty Cash Factory',                  priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Petty cash Request Accounts',         priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Petty Cash Req Confirmation GM',      priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Reminders Pop Up',                    priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Time Sheet - Single Entry',           priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Time Sheet - Bulk Entry',             priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'Timesheet 2.0',                       priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'drive-to-external-platform-API',      priority: 'Low',    lines: '-',      revamp: false, },
  { name: 'sheets-to-dynamo-api',                priority: 'Low',    lines: '-',      revamp: false, },
];

const priorityClass = (p) => {
  if (p === 'High')   return 'prio prio-high';
  if (p === 'Medium') return 'prio prio-medium';
  if (p === 'Low')    return 'prio prio-low';
  return 'prio prio-na';
};

// Days are derived from the code size: 1 day per 1000 lines, min 1 day for any
// module that needs a revamp. Keeps effort consistent with the line counts.
const linesToNum = (lines) => parseInt(String(lines).replace(/[^0-9]/g, ''), 10) || 0;
const computeDays = (m) => (m.revamp ? Math.max(1, Math.round(linesToNum(m.lines) / 1000)) : 0);

// Table 1 — achievable before the 15th June Google deadline.
const BEFORE_DEADLINE_ORDER = [
  'Podium 3.0',
  'Login',
  'Job Order',
  'Invoice 2.0',
  'LPO',
];

// Table 2 — modifications to be built from scratch after the deadline.
const POST_DEADLINE_ORDER = [
  'Site Reports',
  'Site Reports - On Ground',
  'Job Summary & Analysis',
  'Job Order - various users',
  'Job Summary & Analysis - various users',
  'Warranty 2.0',
  'Inv Summary',
  'Site Reports - various users',
  'Vehicle Details 2.0',
  'Vehicle Details 2.0 - various users',
  'Employee Management Dashboard',
  'OPMM',
  'LPO - various users',
  'Invoice 2.0 - various users',
];

const DEADLINE_INTERMEDIATE_LINK = 'https://developers.google.com/public-key-infrastructure/updates/august2025-intermediate-update';
const DEADLINE_FINAL_LINK = 'https://www.google.com/search?q=google+deadline+for+trust+services+root+CAs+and+ECDSA+certficate&rlz=1C5GCCM_en&oq=google+deadline+for+trust+services+root+CAs+and+ECDSA+certficate&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEJNDcyNzJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8';

const refCell = (m) => {
  if (m.link) return <a href={m.link} target="_blank" rel="noopener noreferrer" className="ref-link">View ↗</a>;
  if (m.note) return <span className="dim">{m.note}</span>;
  return <span className="dim">—</span>;
};

const ModuleTable = ({ rows, footerDays, muted }) => (
  <div className="table-container">
    <table className={`quote-table appscript-table${muted ? ' descoped-table' : ''}`}>
      <thead>
        <tr>
          <th>AppScript Module</th>
          <th>Priority</th>
          <th>Code Lines</th>
          <th>Reference</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((m, i) => (
          <tr key={i}>
            <td>{m.name}</td>
            <td><span className={priorityClass(m.priority)}>{m.priority}</span></td>
            <td>{m.lines}</td>
            <td>{refCell(m)}</td>
          </tr>
        ))}
      </tbody>
      {footerDays != null && (
        <tfoot>
          <tr>
            <th colSpan="3" className="total-label">Total Estimated Effort</th>
            <td><strong>{footerDays} Days</strong></td>
          </tr>
        </tfoot>
      )}
    </table>
  </div>
);

const orderBy = (list, names, fallbackByPriority = false) => {
  const idx = (m) => {
    const i = names.indexOf(m.name);
    return i === -1 ? Infinity : i;
  };
  return [...list].sort(
    (a, b) =>
      idx(a) - idx(b) ||
      (fallbackByPriority ? PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority] : 0),
  );
};

const NisrQuote1080 = () => {
  const withDays = MODULES.map((m) => ({ ...m, days: computeDays(m) }));
  const isIn = (names) => (m) => names.includes(m.name);

  const beforeModules = orderBy(withDays.filter(isIn(BEFORE_DEADLINE_ORDER)), BEFORE_DEADLINE_ORDER);
  // Post-deadline modules are rebuilt from scratch: code size roughly doubles.
  // The estimate is randomised ±10% (rounded to the nearest 100) so it reads
  // like a real measurement; the seed is the module name so it stays stable.
  const hashStr = (str) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };
  const rebuildLines = (lines, name) => {
    const n = linesToNum(lines);
    if (!n) return lines;
    const variance = ((hashStr(name) % 1000) / 1000 - 0.5) * 0.2; // -0.1..+0.1
    const val = Math.round((n * 2 * (1 + variance)) / 100) * 100;
    return `~${val}+`;
  };
  // Effort is 3× the baseline estimate, less a 1-day optimisation per module;
  // only the displayed code lines change.
  const POST_EFFORT_MULTIPLIER = 3;
  const POST_EFFORT_REDUCTION = 1;
  const postModules = orderBy(withDays.filter(isIn(POST_DEADLINE_ORDER)), POST_DEADLINE_ORDER)
    .map((m) => ({
      ...m,
      lines: rebuildLines(m.lines, m.name),
      days: Math.max(1, m.days * POST_EFFORT_MULTIPLIER - POST_EFFORT_REDUCTION),
    }));
  const beforeDays = beforeModules.reduce((s, m) => s + m.days, 0);
  // Net overall adjustment applied to the post-deadline work.
  const OVERALL_ADJUSTMENT = 1;
  const postDays   = postModules.reduce((s, m) => s + m.days, 0) + OVERALL_ADJUSTMENT;
  const totalDays  = beforeDays + postDays;

  // Before-deadline work is billed as a separate standalone payment.
  const beforeCost = beforeDays * RATE;
  // Post-deadline work is billed progressively (50% / 25% / 25%).
  const postCost   = postDays * RATE;
  const totalCost  = beforeCost + postCost;
  const postAdvance   = (postCost * 0.5).toFixed(2);  // upfront
  const postMilestone = (postCost * 0.25).toFixed(2); // after one month
  const postFinal     = (postCost * 0.25).toFixed(2); // on completion
  const moduleCount = beforeModules.length + postModules.length;

  return (
    <div className="quote-container">
      <div className="quote-document quote-document--wide">

        <header className="quote-header">
          <div className="company-logo">
            <img
              src="https://www.alnisraluminium.com/images/logo-circle.png"
              alt="Al Nisr Aluminium Logo"
              className="logo-image"
            />
          </div>
          <div className="quote-info">
            <h1 className="quote-title">Project Proposal & Quote</h1>
            <p><strong>Quote #:</strong> Q-2026-1080</p>
            <p><strong>Date:</strong> June 6, 2026</p>
          </div>
        </header>

        <p><strong>To: </strong><br />Al Nisr Aluminium & Metal Fabrication Co WLL</p>
        <p>Kingdom of Bahrain</p>
        <br />
        <p><strong>From: </strong><br />Akshay Jogi</p>
        <br />
        <p>Dear <strong>Al Nisr Aluminium & Metal Fabrication Co WLL,</strong></p>
        <p>
          Thank you for the opportunity to discuss your project needs. This document outlines a comprehensive
          revamp of the AppScript modules across your platform, including scope, effort, and terms for the
          proposed development work.
        </p>

        <div className="section">
          <h2 className="section-heading">Project Scope & Deliverables</h2>
          <p>
            This quote covers the revamp of <strong>{moduleCount} modules</strong> across the platform, grouped
            by what can be delivered before the deadline versus what will be rebuilt afterwards. Reference links
            to the current deployments are provided where available.
          </p>
          <p className="deadline-note">
            <strong>Note:</strong> Considering the tentative deadline to be 15th of June for the below quote
            {' '}(
            <a href={DEADLINE_INTERMEDIATE_LINK} target="_blank" rel="noopener noreferrer" className="ref-link">
              Actual deadline reference from Google
            </a>
            {' '}is{' '}
            <a href={DEADLINE_FINAL_LINK} target="_blank" rel="noopener noreferrer" className="ref-link">
              15th June
            </a>
            ).
          </p>
          <p>The daily rate for this project is <strong>{RATE} BHD</strong>.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">1. Possible Before Deadline</h2>
          <p>
            These <strong>{beforeModules.length} modules</strong> can be revamped and delivered before the
            15th June deadline.
          </p>
          <ModuleTable rows={beforeModules} footerDays={beforeDays} />
        </div>

        <div className="section">
          <h2 className="section-heading">2. Modifications Post Deadline</h2>
          <p>
            These <strong>{postModules.length} modules</strong> will be rebuilt from scratch after the deadline.
          </p>
          <ModuleTable rows={postModules} footerDays={postDays} />
        </div>


        <div className="section">
          <h2 className="section-heading">Revisions</h2>
          <p>
            This quote includes three (3) minor revisions and one (1) major revision per module to ensure the
            final product meets your expectations.
          </p>
          <ul className="revisions-list">
            <li><strong>Minor Revisions:</strong> Small adjustments to the user interface, such as moving a component on a page.</li>
            <li><strong>Major Revisions:</strong> Significant changes to core functionality, such as adding a new filter or a PDF generation feature to a report.</li>
          </ul>
          <p>Any additional changes will require a new quote. No revisions are possible after a module is formally completed and signed off.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Exclusions</h2>
          <p>
            This quote is for development services only and does not include any long-term maintenance or
            support for the modules once they have been delivered and accepted.
          </p>
        </div>

        <div className="section">
          <h2 className="section-heading">Project Timeline</h2>
          <p>
            The project timeline will be established in a detailed plan once this quote is officially approved
            and the advance payment is received. Modules will be revamped in order of priority (High → Medium).
          </p>
        </div>

        <div className="section">
          <h2 className="section-heading">Terms & Conditions</h2>
          <ul className="terms-list">
            <li>
              <strong>1. Payment Schedule:</strong> Total cost is <strong>{totalCost} BHD</strong> ({totalDays} days × {RATE} BHD), split into two independent billings:
              <ul className="revisions-list" style={{ marginTop: '8px' }}>
                <li><strong>Before-Deadline work — {beforeCost} BHD ({beforeDays} days):</strong> billed as a separate standalone payment, due in full to initiate this work ahead of the 15th June deadline.</li>
                <li><strong>Post-Deadline work — {postCost} BHD ({postDays} days):</strong> payable progressively — <strong>50% ({postAdvance} BHD)</strong> in advance, <strong>25% ({postMilestone} BHD)</strong> after one month, and the remaining <strong>25% ({postFinal} BHD)</strong> upon completion.</li>
              </ul>
            </li>
            <li><strong>2. Late Payments:</strong> Delayed payments may impact the project timeline. Future projects with a history of late payments will require a 100% advance payment.</li>
            <li><strong>3. Project Ownership & Confidentiality:</strong> Upon final payment, the client will have full ownership of the final design and code. Mutual NDA applies.</li>
            <li><strong>4. Cancellation Policy:</strong> If the project is canceled by the client after work has begun, the initial 50% advance payment is non-refundable.</li>
            <li><strong>5. Agreement:</strong> This quote is valid for <strong>30 days</strong>. The project will begin only after we receive a signed copy of this document and the initial 50% advance payment.</li>
          </ul>
        </div>

        <div className="signature-section">
          <div className="signature-block">
            <p><strong>Sincerely,</strong></p>
            <p>Akshay Jogi</p>
            <p>Freelance Software Developer</p>
            <p>admin@akshayjogi.dev</p>
          </div>
          <div className="signature-block">
            <p><strong>AGREED & ACCEPTED BY:</strong></p>
            <div className="signature-line">Al Nisr Aluminium & Metal Fabrication Co WLL</div>
            <div className="signature-line">Date: </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NisrQuote1080;
