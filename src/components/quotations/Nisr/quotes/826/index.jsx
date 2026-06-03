import React from 'react';
import '../quote.css';

const NisrQuote826 = () => {
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
            <p><strong>Quote #:</strong> Q-2025-826</p>
            <p><strong>Date:</strong> September 20, 2025</p>
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
          <p>This quote covers the development and delivery of the following new features:</p>
          <div className="table-container">
            <table className="quote-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                  <th>Estimated Effort (Days)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>In-progress Toggle</td><td>Implementation of an In-progress toggle for the factory and office to reflect this accordingly in its panel</td><td>2</td></tr>
                <tr><td>Delayed Flag System</td><td>Add a delayed flag in the job order panel (both factory and office views) to automatically indicate when the expected completion date has passed and the job remains incomplete</td><td>2</td></tr>
                <tr><td>Inhouse & Tally Data Review</td><td>Comprehensive review and integration of inhouse data and Tally data systems <em>(effort may increase based on data complexity)</em></td><td>3</td></tr>
                <tr><td>Odoo Data Requirements</td><td>Analysis and implementation of Odoo data requirements for seamless integration <em>(effort may increase based on data complexity)</em></td><td>1</td></tr>
                <tr><td>Data Cleaning & Reformatting</td><td>Data cleaning and reformatting processes for improved data quality and standardization <em>(effort may increase based on data complexity)</em></td><td>4</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2" className="total-label">Total Estimated Effort</th>
                  <td><strong>12 Days</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p>The daily rate for this project is <strong>17 BHD</strong>.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Revisions</h2>
          <p>This quote includes three (3) minor revisions and one (1) major revision to ensure the final product meets your expectations.</p>
          <ul className="revisions-list">
            <li><strong>Minor Revisions:</strong> Small adjustments to the user interface, such as moving a component on a page.</li>
            <li><strong>Major Revisions:</strong> Significant changes to core functionality, such as adding a new filter or a PDF generation feature to a report.</li>
          </ul>
          <p>Any additional changes will require a new quote. No revisions are possible after the project is formally completed and signed off.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Exclusions</h2>
          <p>This quote is for development services only and does not include any long-term maintenance or support for the features once they have been delivered and accepted.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Project Timeline</h2>
          <p>The project timeline will be established in a detailed plan once this quote is officially approved and the advance payment is received. The estimated timeline is approximately 2–3 weeks depending on data complexity.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Terms & Conditions</h2>
          <ul className="terms-list">
            <li><strong>1. Payment Schedule:</strong> Total cost is <strong>204 BHD</strong> (12 days × 17 BHD). Advance payment of <strong>40% (81.60 BHD)</strong> required; remaining <strong>60% (122.40 BHD)</strong> due upon completion. Additional charges may apply if data complexity exceeds estimated effort.</li>
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

export default NisrQuote826;
