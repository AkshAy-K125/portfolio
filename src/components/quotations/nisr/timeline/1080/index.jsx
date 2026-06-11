import React from 'react';
import '../timeline.css';

const NisrQuote1080TimeLine = () => {
  const timelineData = [
    { date: "6th June 2026",  title: "Podium 3.0",   description: "Skeleton build of the revamped Podium 3.0 — new component structure, layout scaffolding, and navigation setup.", icon: "🎯" },
    { date: "7th June 2026",  title: "Podium 3.0",   description: "Backend API integration, state management wiring, CSS refinements, and end-to-end testing.", icon: "🎯" },
    { date: "8th June 2026",  title: "Login",         description: "Full revamp of the Login module — new frontend layout, updated authentication flow, session handling, and testing.", icon: "🎯" },
    { date: "9th June 2026",  title: "Job Order",     description: "Skeleton build of the revamped Job Order module — restructured form layout, component hierarchy, and data flow scaffolding.", icon: "🎯" },
    { date: "10th June 2026", title: "Job Order",     description: "Backend API integration, data validation logic, CSS polish, and testing.", icon: "🎯" },
    { date: "11th June 2026", title: "Invoice 2.0",   description: "Skeleton build of the Invoice 2.0 revamp — new template structure, line-item components, and print/export layout scaffolding.", icon: "🎯" },
    { date: "12th June 2026", title: "Invoice 2.0",   description: "Backend API integration, invoice calculation logic, CSS refinements, and testing.", icon: "🎯" },
    { date: "13th June 2026", title: "LPO",           description: "Skeleton build of the LPO revamp — form restructure, vendor line-item layout, and document scaffolding.", icon: "🎯" },
    { date: "14th June 2026", title: "LPO",           description: "Backend API integration, approval workflow logic, CSS polish, and final testing before the deadline.", icon: "🎯" },
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

export default NisrQuote1080TimeLine;
