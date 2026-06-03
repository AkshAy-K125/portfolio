import React from 'react';
import { NISR_QUOTES } from './data';
import './dashboard.css';

const BASE = '/quotations/nisr';

const PAYMENT_LABEL = {
  paid:        { label: '✓ Paid',        cls: 'status-paid' },
  pending:     { label: '⏳ Pending',     cls: 'status-pending' },
  outstanding: { label: '⚠ Outstanding', cls: 'status-outstanding' },
};

const PROJECT_LABEL = {
  completed: { label: 'Completed', cls: 'proj-completed' },
  active:    { label: 'Active',    cls: 'proj-active' },
  draft:     { label: 'Draft',     cls: 'proj-draft' },
};

const NisrDashboard = () => {
  const totalValue = NISR_QUOTES.reduce((s, q) => s + q.total, 0);
  const totalDays  = NISR_QUOTES.reduce((s, q) => s + q.days, 0);
  const completed  = NISR_QUOTES.filter(q => q.status === 'completed').length;

  return (
    <div className="dash-page">
      <div className="dash-wrap">

        {/* Header */}
        <header className="dash-header">
          <div className="dash-header-left">
            <img
              src="https://www.alnisraluminium.com/images/logo-circle.png"
              alt="Al Nisr"
              className="dash-logo"
            />
            <div>
              <p className="dash-client-name">Al Nisr Aluminium & Metal Fabrication Co WLL</p>
              <p className="dash-client-sub">Kingdom of Bahrain</p>
            </div>
          </div>
          <div className="dash-header-right">
            <p className="dash-brand">akshayjogi.dev</p>
            <p className="dash-brand-sub">Client Dashboard</p>
          </div>
        </header>

        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <span className="kpi-value">{NISR_QUOTES.length}</span>
            <span className="kpi-label">Quotations</span>
          </div>
          <div className="kpi-card kpi-accent">
            <span className="kpi-value">{totalValue} BHD</span>
            <span className="kpi-label">Total Value</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-value">{totalDays}</span>
            <span className="kpi-label">Days Delivered</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-value">{completed}</span>
            <span className="kpi-label">Completed</span>
          </div>
        </div>

        {/* Quote cards */}
        <section className="dash-section">
          <h2 className="dash-section-title">Quotations</h2>
          <div className="cards-grid">
            {NISR_QUOTES.map(q => {
              const proj = PROJECT_LABEL[q.status];
              const pay  = PAYMENT_LABEL[q.paymentStatus];
              return (
                <div className="qcard" key={q.number}>
                  <div className="qcard-top">
                    <span className="qcard-num">Q-{q.number}</span>
                    <div className="qcard-pills">
                      <span className={`pill ${proj.cls}`}>{proj.label}</span>
                      <span className={`pill ${pay.cls}`}>{pay.label}</span>
                    </div>
                  </div>
                  <p className="qcard-date">{q.date}</p>
                  <p className="qcard-title">{q.shortTitle}</p>
                  <p className="qcard-desc">{q.description}</p>
                  <div className="qcard-meta">
                    <span>{q.days} days</span>
                    <span>·</span>
                    <span>{q.rate} BHD/day</span>
                    <span>·</span>
                    <strong>{q.total} BHD</strong>
                  </div>
                  <div className="qcard-links">
                    <a href={`${BASE}/${q.number}`} className="qlink qlink-primary">
                      Quote ↗
                    </a>
                    {q.hasTimeline && (
                      <a href={`${BASE}/${q.number}/timeline`} className="qlink">
                        Timeline ↗
                      </a>
                    )}
                    {q.hasReport && (
                      <a href={`${BASE}/${q.number}/report`} className="qlink">
                        Report ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Financial summary */}
        <section className="dash-section">
          <h2 className="dash-section-title">Financial Summary</h2>
          <div className="fin-wrap">
            <table className="fin-table">
              <thead>
                <tr>
                  <th>Quote</th>
                  <th>Description</th>
                  <th>Days</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {NISR_QUOTES.map(q => {
                  const pay = PAYMENT_LABEL[q.paymentStatus];
                  return (
                    <tr key={q.number}>
                      <td>
                        <a href={`${BASE}/${q.number}`} className="fin-link">
                          Q-{q.number}
                        </a>
                      </td>
                      <td>{q.shortTitle}</td>
                      <td>{q.days}</td>
                      <td>{q.rate} BHD</td>
                      <td><strong>{q.total} BHD</strong></td>
                      <td>
                        <span className={`pill pill-sm ${pay.cls}`}>{pay.label}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="fin-total-row">
                  <td colSpan="2"><strong>Total</strong></td>
                  <td><strong>{totalDays}</strong></td>
                  <td>17 BHD/day</td>
                  <td><strong>{totalValue} BHD</strong></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <footer className="dash-footer">
          <p>
            Prepared by <strong>Akshay Jogi</strong> &middot;{' '}
            <a href="mailto:admin@akshayjogi.dev">admin@akshayjogi.dev</a>
          </p>
          <a href="/" className="dash-back">← Back to Portfolio</a>
        </footer>

      </div>
    </div>
  );
};

export default NisrDashboard;
