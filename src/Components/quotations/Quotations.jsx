import React from 'react';
import { Link } from 'react-router-dom';
import './quotations.css';

const Quotations = () => {
  // List of available company quotations
  const quotations = [
    {
      id: 'Nisr',
      company: 'Al Nisr Aluminium & Metal Fabrication Co WLL',
      description: 'Software Development Quotation',
      date: 'September 10, 2025',
      category: 'Software Development'
    }
    // Add more company quotations here as you create them
    // Just add new objects to this array and create corresponding routes in App.js
  ];

  return (
    <div className="quotations-container">
      <div className="quotations-header">
        <h1>Quotations</h1>
        <p>Professional quotations and proposals for various companies</p>
      </div>

      <div className="quotations-grid">
        {quotations.map((quotation) => (
          <div key={quotation.id} className="quotation-card">
            <div className="quotation-content">
              <h3 className="quotation-title">{quotation.company}</h3>
              <p className="quotation-description">{quotation.description}</p>
              <div className="quotation-meta">
                <span className="quotation-category">{quotation.category}</span>
                <span className="quotation-date">{quotation.date}</span>
              </div>
              <div className="quotation-actions">
                <Link 
                  to={`/quotations/${quotation.id}`} 
                  className="view-quotation-btn"
                >
                  View Quotation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {quotations.length === 0 && (
        <div className="no-quotations">
          <p>No quotations available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Quotations;
