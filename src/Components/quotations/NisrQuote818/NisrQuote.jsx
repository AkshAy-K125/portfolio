import React from 'react';
import './nisrquote.css';

const NisrQuote = () => {
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
            <p><strong>Quote #:</strong> Q-2025-818</p>
            <p><strong>Date:</strong> September 17, 2025</p>
          </div>
        </header>

        <p><strong>To: </strong>
        <br/>
        Al Nisr Aluminium & Metal Fabrication Co WLL</p>
        <p>Kingdom of Bahrain</p>
        <br/>
        <p><strong>From: </strong>
        <br/>
        Akshay Jogi</p>
        <br/>
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
                <tr>
                  <td>Payment Widget</td>
                  <td>Integration of a user-facing widget for processing payments.</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Payment Receivables Page</td>
                  <td>Creation of a new administrative page to manage and track payment receivables.</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Job completion status with Note</td>
                  <td>Creation of a new widgetto manage and track job completion status with Note field</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tax Toggle</td>
                  <td>Implementation of a toggle function to switch tax calculations on and off for LPOs.</td>
                  <td>1</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2" className="total-label">Total Estimated Effort</th>
                  <td><strong>9 Days</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p>The daily rate for this project is <strong>17 BHD</strong>.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Revisions</h2>
          <p>This quote includes **three (3) minor revisions** and **one (1) major revision** to ensure the final product meets your expectations.</p>
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
          <p>The project timeline will be established in a detailed plan once this quote is officially approved and the advance payment is received.</p>
        </div>

        <div className="section">
          <h2 className="section-heading">Terms & Conditions</h2>
          <ul className="terms-list">
            <li><strong>1. Payment Schedule:</strong> This is a fixed-fee project based on the total estimated effort. The total cost is <strong>153 BHD</strong>. An advance payment of <strong>40% (61.20 BHD)</strong> is required to initiate the project, with the remaining <strong>60% (91.80 BHD)</strong> due upon project completion.</li>
            <li><strong>2. Late Payments:</strong> Delayed payments may impact the project timeline. Future projects with a history of late payments will require a 100% advance payment.</li>
            <li><strong>3. Project Ownership & Confidentiality:</strong> Upon final payment, the client will have full ownership of the final design and code. We agree to a mutual, non-disclosure agreement (NDA) to ensure all shared information remains private and confidential.</li>
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

export default NisrQuote;