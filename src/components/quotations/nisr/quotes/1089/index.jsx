import React from 'react';
import '../quote.css';
import './quote1089.css';

// Fixed-price engagement. The full post-deadline scope was originally estimated
// at 101 days (1818 BHD at the standard 18 BHD/day rate in Q-2026-1080). The
// committed delivery is now compressed to 70 days at no change in price.
const TOTAL_PRICE = 1818;
const STANDARD_RATE = 18;
const ORIGINAL_DAYS = 101;
const COMMITTED_DAYS = 70;

// Live sample of the proposed Cloudflare platform.
const SAMPLE_LINK = 'https://nisr-platform.pages.dev';

// Reference links — current deployment execution URLs.
const L = {
  jobSummary:   'https://script.google.com/macros/s/AKfycby_E3NRkkZKaDkXGyhjE_Gczd_aBlFMZkhsvjaE8gea58Lir9PjEK-xBJAmIzG-WBJR/exec',
  siteReports:  'https://script.google.com/macros/s/AKfycbxi4zKccVDZff68SLsADLUUDKKgGQkQr9mZJRL_o3rJr3ybOkYHK0AqIjjyEuwqK1_N/exec',
  siteReportsOG:'https://script.google.com/macros/s/AKfycbxSz413ShzEzdfCQmFbsstMj9VLHL0u9NJINTAkFlr2TuSCoZNka8kacWXv6c6UabRPvw/exec',
  jobOrder:     'https://script.google.com/macros/s/AKfycbytQbthX4XVnwVj73IvXQSYdECpEKAwwiVQwzoJ3qFzjvfvdwa_7OpG5ECXKKyHufoeKg/exec',
  warranty:     'https://script.google.com/macros/s/AKfycbxqnrMJ-QlFVodmaTNNXWCMrXvA68rPRu0ynugw3arFTYLzx6s4AAjJ0dYX71rnD7L1Ng/exec',
  vehicle:      'https://script.google.com/macros/s/AKfycbxFXvYFzwT7IlIn1HFyBaFiL_a8bRr08-YLxa5zU-bXpEvSegiZ1CY7Xhd8Lk_Ifo60fw/exec',
  opmm:         'https://script.google.com/macros/s/AKfycbzO20EaeBlleRbV8dqs02kMVJD6U--s1AFMwsBEKr44SLuMPERMRNFUeYQOWVKeAnoZ/exec',
  invSummary:   'https://script.google.com/macros/s/AKfycbySe9c64JH9ABf_OCyCjFpY1Ax6UST97VyKJvIL7ZwweKAodWalPUjV90hpaSKpdTA/exec',
  employee:     'https://script.google.com/macros/s/AKfycbw5d0ny_Ahjg8ee-bXs3-qBZJ5yvsYfPJGnKYCr1hFmMg35s1kXyTgAiVFi4KSFrgEO/exec',
  lpo:          'https://script.google.com/macros/s/AKfycbzYpmx1lWueD4YRZhr0HZLZQtwXOaDzWBqHsyPo8AZ5Sx9kIk0J23189WeDYw7zckeVxg/exec',
  invoice:      'https://script.google.com/macros/s/AKfycbwYC6pA2JcAidVTAb2bv1b2EUlEhtEfW_Hs1SaYaHZ1JO6oUK9cie_DPyBwCGtWj6G_/exec',
};

// Phase 1 — Priorities 1 & 2, delivered within the first 30 days.
const PHASE1 = [
  {
    priority: 'Priority 1',
    modules: [
      { name: 'Job Summary & Analysis',                 link: L.jobSummary, days: 11 },
      { name: 'Job Summary & Analysis - various users',  link: L.jobSummary, days: 2 },
    ],
  },
  {
    priority: 'Priority 2',
    modules: [
      { name: 'Site Reports',                link: L.siteReports,   days: 8 },
      { name: 'Site Reports - On Ground',    link: L.siteReportsOG, days: 7 },
      { name: 'Site Reports - various users', link: L.siteReports,  days: 2 },
    ],
  },
];

// Phase 2 — Priorities 3 to 6, delivered across the remaining 40 days.
const PHASE2 = [
  {
    priority: 'Priority 3',
    modules: [
      { name: 'Job Order - various users', link: L.jobOrder, days: 3 },
    ],
  },
  {
    priority: 'Priority 4',
    modules: [
      { name: 'Warranty 2.0', link: L.warranty, days: 13 },
    ],
  },
  {
    priority: 'Priority 5',
    modules: [
      { name: 'Vehicle Details 2.0',                link: L.vehicle, days: 8 },
      { name: 'Vehicle Details 2.0 - various users', link: L.vehicle, days: 3 },
    ],
  },
  {
    priority: 'Priority 6',
    modules: [
      { name: 'OPMM', link: L.opmm, days: 13 },
    ],
  },
];

// Goodwill delivery — remaining post-deadline modules, included free of charge.
const BONUS = [
  { name: 'Inv Summary',                  link: L.invSummary },
  { name: 'Employee Management Dashboard', link: L.employee },
  { name: 'LPO - various users',          link: L.lpo },
  { name: 'Invoice 2.0 - various users',  link: L.invoice },
];

const sumGroups = (groups) =>
  groups.reduce((s, g) => s + g.modules.reduce((a, m) => a + m.days, 0), 0);

const dayLabel = (d) => `${d} ${d === 1 ? 'day' : 'days'}`;

const PhaseTable = ({ groups, footerDays, footerLabel }) => (
  <div className="table-container">
    <table className="quote-table appscript-table">
      <thead>
        <tr>
          <th>Priority</th>
          <th>AppScript Module</th>
          <th>Reference</th>
          <th>Effort</th>
        </tr>
      </thead>
      <tbody>
        {groups.map((g, gi) =>
          g.modules.map((m, mi) => (
            <tr key={`${gi}-${mi}`}>
              {mi === 0 && (
                <td rowSpan={g.modules.length} className="prio-cell">
                  <span className="prio prio-high">{g.priority}</span>
                </td>
              )}
              <td>{m.name}</td>
              <td>
                <a href={m.link} target="_blank" rel="noopener noreferrer" className="ref-link">
                  View ↗
                </a>
              </td>
              <td>{dayLabel(m.days)}</td>
            </tr>
          )),
        )}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="3" className="total-label">{footerLabel}</th>
          <td><strong>{footerDays} Days</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>
);

const NisrQuote1089 = () => {
  const phase1Days = sumGroups(PHASE1);            // 30
  const phase2Days = sumGroups(PHASE2);            // 40
  const totalDays  = phase1Days + phase2Days;      // 70
  const allGroups  = [...PHASE1, ...PHASE2];
  const moduleCount = allGroups.reduce((s, g) => s + g.modules.length, 0);

  // Payment schedule — fixed price, billed progressively across the two phases.
  const advance   = (TOTAL_PRICE * 0.5).toFixed(2);  // upfront
  const milestone = (TOTAL_PRICE * 0.25).toFixed(2); // on Phase 1 completion (~day 30)
  const final     = (TOTAL_PRICE * 0.25).toFixed(2); // on final delivery

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
            <h1 className="quote-title">Post-Deadline Modifications</h1>
            <p><strong>Quote #:</strong> Q-2026-1089</p>
            <p><strong>Date:</strong> June 18, 2026</p>
          </div>
        </header>

        <p><strong>To: </strong><br />Al Nisr Aluminium & Metal Fabrication Co WLL</p>
        <p>Kingdom of Bahrain</p>
        <br />
        <p><strong>From: </strong><br />Akshay Jogi</p>
        <br />
        <p>Dear <strong>Al Nisr Aluminium & Metal Fabrication Co WLL,</strong></p>
        <p>
          This quote covers the <strong>post-deadline modifications</strong> scope previously outlined in
          Quote <strong>Q-2026-1080</strong>, now reorganised around the priorities Al Nisr has confirmed are
          needed at this stage. The committed delivery has been compressed and the scope re-grouped so the work
          you need most lands first.
        </p>

        <div className="section">
          <h2 className="section-heading">Scope & Delivery</h2>
          <p>
            Al Nisr has confirmed that the <strong>{moduleCount} modules</strong> below are what is required for
            now. These are delivered across a committed <strong>{totalDays}-day</strong> timeline, split into two
            phases by priority:
          </p>
          <ul className="revisions-list">
            <li><strong>Phase 1 — first {phase1Days} days:</strong> everything through <strong>Priority 2</strong> (Job Summary &amp; Site Reports).</li>
            <li><strong>Phase 2 — remaining {phase2Days} days:</strong> <strong>Priority 3 to Priority 6</strong> (Job Order various users, Warranty, Vehicle Details, OPMM).</li>
          </ul>
          <p className="deadline-note">
            <strong>Note:</strong> The full post-deadline scope was originally estimated at {ORIGINAL_DAYS} days
            ({TOTAL_PRICE} BHD at the standard {STANDARD_RATE} BHD/day rate). Out of genuine respect for Al Nisr
            and our continued relationship, I have committed to delivering this in <strong>{COMMITTED_DAYS} days </strong>
            with <strong>no compromise to the quality of the work</strong>, by dedicating additional hours and
            carefully setting aside time from my primary work to prioritise this engagement.
            <br /><br />
            <strong>Important:</strong> this crunch in the number of days is only possible if we shift to a
            dedicated <strong>Cloudflare platform</strong> (as recommended earlier). The existing Google Apps
            Script and Sheets architecture is a tedious architecture to work on and would need considerably more
            time to deliver the same scope.
          </p>
          <p className="sample-cta">
            <a href={SAMPLE_LINK} target="_blank" rel="noopener noreferrer" className="sample-cta-btn">
              View the live sample of the proposed Cloudflare platform ↗
            </a>
            <span className="sample-cta-creds">
              Sample login — User: <strong>test</strong> &middot; Pass: <strong>1234</strong>
            </span>
          </p>
        </div>

        <div className="section">
          <h2 className="section-heading">Phase 1 — Priorities 1 &amp; 2 (first {phase1Days} days)</h2>
          <p>
            Delivered within the first <strong>{phase1Days} days</strong> of the engagement.
          </p>
          <PhaseTable groups={PHASE1} footerDays={phase1Days} footerLabel="Phase 1 Delivery" />
        </div>

        <div className="section">
          <h2 className="section-heading">Phase 2 — Priorities 3 to 6 (remaining {phase2Days} days)</h2>
          <p>
            Delivered across the remaining <strong>{phase2Days} days</strong>, in priority order.
          </p>
          <PhaseTable groups={PHASE2} footerDays={phase2Days} footerLabel="Phase 2 Delivery" />
        </div>

        <div className="section">
          <h2 className="section-heading">Goodwill Delivery — Included Free</h2>
          <p>
            As a token of gratitude for our ongoing relationship, the remaining post-deadline modules below will
            also be delivered as a <strong>separate, complimentary delivery at no additional cost</strong>. They
            sit outside the {totalDays}-day committed timeline and follow once the prioritised scope is complete.
          </p>
          <div className="table-container">
            <table className="quote-table appscript-table bonus-table">
              <thead>
                <tr>
                  <th>AppScript Module</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                {BONUS.map((m, i) => (
                  <tr key={i}>
                    <td>{m.name}</td>
                    <td>
                      <a href={m.link} target="_blank" rel="noopener noreferrer" className="ref-link">
                        View ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2" className="free-footer">Included Free of Charge</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="deadline-note">
            <strong>Note:</strong> The Goodwill Delivery modules will be delivered <strong>within one month
            of the completion of Phase 1 and Phase 2</strong>.
          </p>
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
          <h2 className="section-heading">Terms & Conditions</h2>
          <ul className="terms-list">
            <li>
              <strong>1. Payment Schedule:</strong> This is a fixed-price engagement of <strong>{TOTAL_PRICE} BHD</strong> for the {moduleCount} prioritised modules, billed progressively across the two delivery phases:
              <ul className="revisions-list" style={{ marginTop: '8px' }}>
                <li><strong>50% ({advance} BHD)</strong> in advance, to initiate the work.</li>
                <li><strong>25% ({milestone} BHD)</strong> on completion of Phase 1 (Priorities 1 &amp; 2, ~day {phase1Days}).</li>
                <li><strong>25% ({final} BHD)</strong> on final delivery of Phase 2.</li>
              </ul>
            </li>
            <li><strong>2. Goodwill Delivery:</strong> The complimentary modules are provided free of charge and carry no payment obligation. They are delivered on a best-effort basis after the prioritised {totalDays}-day scope is complete.</li>
            <li><strong>3. Late Payments:</strong> Delayed payments may impact the project timeline. Future projects with a history of late payments will require a 100% advance payment.</li>
            <li><strong>4. Project Ownership & Confidentiality:</strong> Upon final payment, the client will have full ownership of the final design and code. Mutual NDA applies.</li>
            <li><strong>5. Cancellation Policy:</strong> If the project is canceled by the client after work has begun, the initial 50% advance payment is non-refundable.</li>
            <li><strong>6. Agreement:</strong> This quote is valid for <strong>30 days</strong>. The project will begin only after we receive a signed copy of this document and the initial 50% advance payment.</li>
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

export default NisrQuote1089;
