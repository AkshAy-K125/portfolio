import React from 'react';
import '../quote.css';

const NisrQuote916 = () => {
  return (
    <div className="quote-container">
      <div className="quote-document">
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
            <p><strong>Quote #:</strong> Q-2026-916</p>
            <p><strong>Date:</strong> February 3, 2026</p>
          </div>
        </header>

        <p><strong>To: </strong><br />Al Nisr Aluminium & Metal Fabrication Co WLL</p>
        <p>Kingdom of Bahrain</p>
        <br />
        <p><strong>From: </strong><br />Akshay Jogi</p>
        <br />
        <p>Dear <strong>Al Nisr Aluminium & Metal Fabrication Co WLL,</strong></p>
        <p>Thank you for the opportunity to discuss your project needs. I am excited to partner with you to enhance your platform. This document outlines the scope, timeline, and terms for the proposed feature development.</p>

        <div className="section">
          <h2 className="section-heading">Project Scope & Deliverables</h2>
          <p>This quote covers the development and delivery of the following:</p>
          <div className="table-container">
            <table className="quote-table">
              <thead>
                <tr>
                  <th>Task in hand</th>
                  <th>Description</th>
                  <th>Estimated Effort (Days)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Code revamp for Job Summary and Analysis Page</td><td>Refactor and improve the Job Summary and Analysis Page codebase; include the new libraries and modules related to the current version of google open source code.</td><td>3</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2" className="total-label">Total Estimated Effort</th>
                  <td><strong>3 Days</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p>The daily rate for this project is <strong>17 BHD</strong>.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Revisions</h2>
          <ul className="revisions-list">
            <li><p>Any additional changes will require a new quote. No revisions are possible after the project is formally completed and signed off.</p></li>
            <li><p>This quote includes the work pertaining to the major enterprise level changes made by google open source and any further future scope of google into the project not included in this refactor.</p></li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-heading">Exclusions</h2>
          <p>This quote is for development services only and does not include any long-term maintenance or support for the features once they have been delivered and accepted.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Terms & Conditions</h2>
          <ul className="terms-list">
            <li><strong>1. Payment Schedule:</strong> Total cost is <strong>51 BHD</strong> (3 days × 17 BHD). Advance payment of <strong>40% (20.40 BHD)</strong> required; remaining <strong>60% (30.60 BHD)</strong> due upon completion.</li>
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

export default NisrQuote916;
