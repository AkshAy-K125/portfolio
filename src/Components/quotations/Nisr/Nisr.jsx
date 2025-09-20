import React from 'react';
import './nisr.css';

const Nisr = () => {
  console.log(process.env.REACT_APP_NISR_PASSWORD)
  return (
    <div className="container">

      <header className="header">
        <h1>Akshay Jogi</h1>
        <p>Freelance Software Developer</p>
        <a 
          href="https://akshayjogi.dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-button"
        >
          View My Portfolio
        </a>
      </header>

      <main className="main-card">
        <section id="introduction">
          <h2 className="section-heading">Quotation</h2>
          <div className="intro-text">
            <p className="text-center">
              <strong>Dear Al Nisr Aluminium & Metal Fabrication Co WLL,</strong>
            </p>
            <p>
              It has been a pleasure to work with the organization over the past few years. 
              I am grateful for the knowledge and guidance provided by the Board Members and the wider team.
            </p>
            <p>Regarding the freelance opportunity, I currently have commitments in the Indian market.</p>
            <p>
              My standard daily rate is <strong>₹4500</strong>, which is approximately <strong>20 BHD</strong>. 
              With an estimated commitment of four days per week,
            </p>
            <p> 
              I have submitted a proposal that reflects this valuation. As a gesture of goodwill and to show my respect, 
            </p>
            <p>
              I have also included a discounted rate. I am open to negotiation and would be happy to discuss any aspect of the proposal further.
            </p>
            <p>I hope this message finds you well. Thank you for considering me for your software development needs.</p>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="text-center mb-8">
            <h3>My Daily Rate</h3>
            <p className="text-small text-justify">A transparent breakdown of my pricing.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div>
                <h4>Standard Rate</h4>
                <p className="price">20 BHD / Day</p>
                <p className="text-small text-justify">
                  Equivalent to my standard rate of <strong>₹4,000</strong> per day.
                </p>
              </div>
            </div>
            <div className="discount-card">
              <span className="offer-tag">YOUR OFFER</span>
              <div>
                <h4>Discounted Rate</h4>
                <p className="price">17 BHD / Day</p>
                <p className="text-special text-justify">
                  A special rate as a gesture of goodwill and respect.
                </p>
              </div>
              <p className="text-small text-justify">
                I am excited about the potential of working together and believe this collaboration will be mutually beneficial.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="contact-info">admin@akshayjogi.dev</p>
        <p className="date">Quotation prepared on September 10, 2025</p>
      </footer>
    </div>
  );
};

export default Nisr;
