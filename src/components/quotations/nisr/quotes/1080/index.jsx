import React from 'react';
import '../quote.css';
import './quote1080.css';

const RATE = 18;

// Reference links reused across "various users" variants
const L = {
  complaint: 'https://script.google.com/macros/s/AKfycbxiNcFLqARQw00yy87c1QeJUmHDsu3zu4Qotn-4Ojwo2jqxnJFtr6aR7JrTnxvF7xna/exec',
  employee:  'https://script.google.com/macros/s/AKfycbwRSFQD3MffYGub1mpW150GV6-tV1Qu1iPGwrRu7PsgBQB_257Lle4ykvYlXGHEoJOa/exec',
  invSummary:'https://script.google.com/macros/s/AKfycbxWb9HfbF1gmX3IK0IfIHMumsO-IKYwy5EsVAwTVZOetFe1CDu9oMn319Jq6gedJXwJ/exec',
  invoice:   'https://script.google.com/macros/s/AKfycbx8bAbNe1dFLWP0RHn3PWuChUczMg_UEGHQfEuy06LWZ-hgx7yyStg9qkmAddIqfH2T/exec',
  jobOrder:  'https://script.google.com/macros/s/AKfycbwK8pS3NxJV1zvH7epLK4Gy0Ta6O4LjnNtH9ky7PcceU-rlOGWrFZ-Vm-Muj3p6BdfY/exec',
  jobSummary:'https://script.google.com/macros/s/AKfycbxndVWbmwkfR02EkkTNw-y58yEWQriV6bpg_AWXXRE9ESdZhUdM4ykeD2jdSP24eEna/exec',
  login:     'https://script.google.com/macros/s/AKfycbwR-WP_RiHamjNb4LuxHLiLQIXjc9c2FBG1m6dqdu4-_kvhsGL1wyHQgmPU97howOlEfA/exec',
  matPrice:  'https://script.google.com/macros/s/AKfycbxnYGcXTG5cVvoo9OyhOFPNNZEPZhqpLSCKY4zA-Uf_X70yx2yF3hLO3XEM4DwbDHk67A/exec',
  podium:    'https://script.google.com/macros/s/AKfycbxlaagW4minOjPweLxIo81tbBwD5Z6RzGxCP6e0Uz1wKfN2lG4_3eoOvdAGDx45PqFa/exec',
  powder:    'https://script.google.com/macros/s/AKfycbx5nTf9USmycZ0rBPZKtr9loki7GqIA6MOQazuwbB9U1wGDFWWpY_MzGCRQtJM_bNFD/exec',
  siteReports:'https://script.google.com/macros/s/AKfycbyoR9htwWuSJ4oSBhdKNShx7pBzET-RG65rTrOP7uFS0pFvE21TdBqdeaq0aq169xul/exec',
  siteReportsOG:'https://script.google.com/macros/s/AKfycbxTt9mb0vJQChyIQX8-C7DT4493CbglfL9jXgArh3c-qos_Dl9S8NJPBfAEveDKnZ1c/exec',
  supplier:  'https://script.google.com/macros/s/AKfycbxIcaBKUnDpYAxyi2OCqWVvu_i5goyGNaab5sJrHocNHLNZKFae1y4vITZnFvFqC7Gc/exec',
  toolTracker:'https://script.google.com/macros/s/AKfycbyN6_L7hcNVrEMvfvsJrleqq3uW-Dbv3oYs7QB7bj3dzP4vG5F6K3TORJF1Smq7Oznk/exec',
  vehicle:   'https://script.google.com/macros/s/AKfycbzWPcKfnqsgkgaBLdzYS1vND-tbEVoBdcZ4LU4qwH94STkqA5clVMIpoPAuaRiHJHzCdA/exec',
  warranty:  'https://script.google.com/macros/s/AKfycbxVIufWf9csJxtvGN2cR0WiWcgmU7VzbUQ0cLJYa0obapWbtZvlmCSjh9vyCmF5Ye8Nmg/exec',
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
  { name: 'LPO',                                 priority: 'High',   lines: '~5000+', revamp: true, link: L.invoice },
  { name: 'LPO - various users',                 priority: 'High',   lines: '~1000+', revamp: true,  link: L.invoice },
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
  { name: 'OPMM',                                priority: 'Low',    lines: '-',      revamp: false, },
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

const NisrQuote1080 = () => {
  const modules = [...MODULES]
    .map((m) => ({ ...m, days: computeDays(m) }))
    .sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
  const totalDays = modules.reduce((s, m) => s + m.days, 0);
  const totalCost = totalDays * RATE;
  const advance   = (totalCost * 0.6).toFixed(2);
  const remaining = (totalCost * 0.4).toFixed(2);
  const revampCount = modules.filter(m => m.revamp).length;

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
            This quote covers the revamp of <strong>{revampCount} modules</strong> across the platform. The
            table below lists every AppScript module, its priority, approximate code size, whether a revamp is
            required, and the estimated effort. Reference links to the current deployments are provided where
            available.
          </p>
          <div className="table-container">
            <table className="quote-table appscript-table">
              <thead>
                <tr>
                  <th>AppScript Module</th>
                  <th>Priority</th>
                  <th>Code Lines</th>
                  <th>Revamp</th>
                  <th>Days</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((m, i) => (
                  <tr key={i} className={m.revamp ? '' : 'row-muted'}>
                    <td>{m.name}</td>
                    <td><span className={priorityClass(m.priority)}>{m.priority}</span></td>
                    <td>{m.lines}</td>
                    <td>{m.revamp ? <span className="revamp-yes">Yes</span> : <span className="revamp-no">No</span>}</td>
                    <td>{m.days > 0 ? m.days : <span className="dim">—</span>}</td>
                    <td>
                      {m.link
                        ? <a href={m.link} target="_blank" rel="noopener noreferrer" className="ref-link">View ↗</a>
                        : m.note
                          ? <span className="dim">{m.note}</span>
                          : <span className="dim">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="4" className="total-label">Total Estimated Effort</th>
                  <td colSpan="2"><strong>{totalDays} Days</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p>The daily rate for this project is <strong>{RATE} BHD</strong>.</p>
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
            support for the modules once they have been delivered and accepted. Modules marked as not requiring
            a revamp are excluded from the scope and effort of this quote.
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
            <li><strong>1. Payment Schedule:</strong> Total cost is <strong>{totalCost} BHD</strong> ({totalDays} days × {RATE} BHD). An advance payment of <strong>60% ({advance} BHD)</strong> is required to initiate the project, with the remaining <strong>40% ({remaining} BHD)</strong> due upon project completion.</li>
            <li><strong>2. Late Payments:</strong> Delayed payments may impact the project timeline. Future projects with a history of late payments will require a 100% advance payment.</li>
            <li><strong>3. Project Ownership & Confidentiality:</strong> Upon final payment, the client will have full ownership of the final design and code. Mutual NDA applies.</li>
            <li><strong>4. Cancellation Policy:</strong> If the project is canceled by the client after work has begun, the initial 40% advance payment is non-refundable.</li>
            <li><strong>5. Agreement:</strong> This quote is valid for <strong>30 days</strong>. The project will begin only after we receive a signed copy of this document and the initial 40% advance payment.</li>
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
