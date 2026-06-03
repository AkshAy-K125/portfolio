import React from 'react';
import '../timeline.css';

const NisrQuote826TimeLine = () => {
  const timelineData = [
    { date: "12th November 2025",                    title: "In-progress Toggle",           description: "Skeleton build of the in-progress toggle feature for factory and office panels, including UI components and basic state management.", icon: "🎯" },
    { date: "13th November 2025",                    title: "In-progress Toggle",           description: "Backend API integration, connecting toggle functionality to the database, and testing the feature across both panels.", icon: "🎯" },
    { date: "14th November 2025",                    title: "Delayed Flag System",          description: "Designing the delayed flag system architecture and implementing the logic to detect when expected completion dates have passed.", icon: "🎯" },
    { date: "15th November 2025",                    title: "Delayed Flag System",          description: "Adding the delayed flag UI components to job order panels (factory and office views), and testing the automatic flagging system.", icon: "🎯" },
    { date: "Date: Subject to availability of Odoo Team", title: "Odoo Data Requirements", description: "Discussion with the Odoo Team to understand the data requirements, and designing scripts to extract the data from the In-House system and Tally system.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Inhouse & Tally Data Review", description: "Initial analysis of inhouse data structures and Tally data systems, identifying integration points and data mapping requirements.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Inhouse & Tally Data Review", description: "Designing the integration architecture and database schema modifications needed for seamless data synchronization.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Inhouse & Tally Data Review", description: "Implementing the integration logic, and checking for the data flow between inhouse and Tally systems and validating the data.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Data Cleaning & Reformatting", description: "Assessment of data quality, identifying inconsistencies and formatting issues across all data sources.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Data Cleaning & Reformatting", description: "Developing automated cleaning scripts and data standardization processes for improved data quality.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Data Cleaning & Reformatting", description: "Implementing data validation and integrity checks, and creating migration tools for legacy data processing.", icon: "🎯" },
    { date: "Date: Subject to availability of data", title: "Data Cleaning & Reformatting", description: "Performance optimization for data processing, final clean-up of all data and preparing the data for the Odoo system.", icon: "🎯" },
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
          <div key={item.title + index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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

export default NisrQuote826TimeLine;
