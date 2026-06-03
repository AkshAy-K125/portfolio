import React from 'react';
import '../timeline.css';

const NisrQuote818TimeLine = () => {
  const timelineData = [
    { date: "6th October 2025",  title: "Payment Widget",                description: "Integration of a user-facing widget for payment expected on the quote.", icon: "🎯" },
    { date: "7th October 2025",  title: "Payment Receivables Page",      description: "Skeleton build of the page, to be filled with sample data from the backend.", icon: "🎯" },
    { date: "8th October 2025",  title: "Payment Receivables Page",      description: "Designing the backend API for the page, and creating the database schema.", icon: "🎯" },
    { date: "9th October 2025",  title: "Payment Receivables Page",      description: "Adding the backend API to the page, and connecting to the individual components.", icon: "🎯" },
    { date: "10th October 2025", title: "Payment Receivables Page",      description: "CSS designs of the page, and adding minute details to the components.", icon: "🎯" },
    { date: "11th October 2025", title: "Payment Receivables Page",      description: "Testing the page and fixing any bugs, and adding any final touches.", icon: "🎯" },
    { date: "12th October 2025", title: "Job completion status with Note", description: "Skeleton build of the page, to be filled with sample data from the backend.", icon: "🎯" },
    { date: "13th October 2025", title: "Job completion status with Note", description: "Adding the backend API to the page, and connecting to the individual components, and testing the page and fixing any bugs.", icon: "🎯" },
    { date: "14th October 2025", title: "New Formatted report",           description: "Designing the format of the report, and the backend API for the report.", icon: "🎯" },
    { date: "15th October 2025", title: "New Formatted report",           description: "Testing the report and fixing any bugs, and adding any final touches.", icon: "🎯" },
    { date: "16th October 2025", title: "Tax Toggle",                     description: "Designing and implementing a toggle function to switch tax calculations on and off for LPOs.", icon: "🎯" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1 className="timeline-main-title">Al Nisr Aluminium & Metal Fabrication Co WLL</h1>
        <h2 className="timeline-subtitle">PROJECT TIMELINE</h2>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <div key={item.date + index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-week-badge">
                <span className="week-number">{item.date}</span>
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
        ))}
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
};

export default NisrQuote818TimeLine;
