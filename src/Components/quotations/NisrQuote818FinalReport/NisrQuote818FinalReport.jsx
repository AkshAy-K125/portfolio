import React from 'react'
import './nisrquote818finalreport.css'

const NisrQuote818FinalReport = () => {
    return (
        <div className="report-container">

            <div className="report-wrapper">

                {/* Header & Summary Section */}
                <header className="report-header">
                    <h1 className="report-title">Project Completion Report</h1>
                    <p className="report-subtitle">A summary of the latest feature integrations and effort expenditure.</p>
                </header>

                <div className="report-content">
                    {/* Key Metrics Panel */}
                    <div className="metrics-grid">

                        {/* Total Tasks */}
                        <div className="metric-card metric-card-blue">
                            <span className="metric-icon metric-icon-blue">✅</span>
                            <div>
                                <p className="metric-label">Total Features Delivered</p>
                                <p className="metric-value">5</p>
                            </div>
                        </div>

                        {/* Total Effort */}
                        <div className="metric-card metric-card-purple">
                            <span className="metric-icon metric-icon-purple">⏱️</span>
                            <div>
                                <p className="metric-label">Total Estimated Effort</p>
                                <p className="metric-value">11 Days</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="section-title">Feature Deployment Details</h2>

                    {/* Tasks Grid */}
                    <div className="tasks-container">

                        {/* Task 1: Payment Widget */}
                        <div className="feature-card">
                            <div className="feature-header">
                                <h3 className="feature-title">1. Payment Widget Integration</h3>
                                <span className="effort-badge">
                                    Effort: 1 Day
                                </span>
                            </div>
                            <p className="feature-description">Integration of a user-facing widget for processing payments.</p>
                            <div className="feature-details">
                                <p className="status-text">Status: <span className="status-completed">Completed & Integrated</span></p>
                                <a href="https://sites.google.com/view/al-nisr-nffsjpnfn45sdg08sdg6sf/main-sections/j-orders" target="_blank" rel="noopener noreferrer" className="feature-link">
                                    View Integration Link
                                </a>
                            </div>
                        </div>

                        {/* Task 2: Payment Receivables Page */}
                        <div className="feature-card">
                            <div className="feature-header">
                                <h3 className="feature-title">2. Payment Receivables Page</h3>
                                <span className="effort-badge">
                                    Effort: 5 Days
                                </span>
                            </div>
                            <p className="feature-description">Creation of a new administrative page to manage and track payment receivables.</p>
                            <div className="feature-details">
                                <p className="status-text">Status: <span className="status-completed">Completed & Integrated</span></p>
                                <a href="https://sites.google.com/view/al-nisr-nffsjpnfn45sdg08sdg6sf/main-sections/job-summary-analysis" target="_blank" rel="noopener noreferrer" className="feature-link">
                                    View Integration Link
                                </a>
                            </div>
                        </div>

                        {/* Task 3: Job completion status with Note */}
                        <div className="feature-card">
                            <div className="feature-header">
                                <h3 className="feature-title">3. Job Completion Status & Note Widget</h3>
                                <span className="effort-badge">
                                    Effort: 2 Days
                                </span>
                            </div>
                            <p className="feature-description">Creation of a new widget to manage and track job completion status with a Note field.</p>
                            <div className="feature-details">
                                <p className="status-text">Status: <span className="status-completed">Completed & Integrated</span></p>
                                <a href="https://sites.google.com/view/al-nisr-nffsjpnfn45sdg08sdg6sf/main-sections/j-orders" target="_blank" rel="noopener noreferrer" className="feature-link">
                                    View Integration Link
                                </a>
                            </div>
                        </div>

                        {/* Task 4: New Formatted report */}
                        <div className="feature-card">
                            <div className="feature-header">
                                <h3 className="feature-title">4. New Formatted Report (PDF/CSV)</h3>
                                <span className="effort-badge">
                                    Effort: 2 Days
                                </span>
                            </div>
                            <p className="feature-description">Creation of a new formatted PDF/CSV report for improved data analysis.</p>
                            <div className="feature-details">
                                <p className="status-text">Status: <span className="status-completed">Completed & Integrated</span></p>
                                <div className="feature-links-container">
                                    <a href="https://sites.google.com/view/al-nisr-nffsjpnfn45sdg08sdg6sf/main-sections/job-summary-analysis" target="_blank" rel="noopener noreferrer" className="feature-link feature-link-block">
                                        View Report Interface Link
                                    </a>
                                    <a href="https://docs.google.com/spreadsheets/d/1TuEPCPIx9mdfbIPFJgIUV5_OwiIKvbKqT5uQdgsVRHY/edit?gid=525864780#gid=525864780" target="_blank" rel="noopener noreferrer" className="feature-link feature-link-block">
                                        View Sample Report Output (Spreadsheet)
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Task 5: Tax Toggle */}
                        <div className="feature-card">
                            <div className="feature-header">
                                <h3 className="feature-title">5. Tax Toggle for LPOs</h3>
                                <span className="effort-badge">
                                    Effort: 1 Day
                                </span>
                            </div>
                            <p className="feature-description">Implementation of a toggle function to switch tax calculations on and off for LPOs.</p>
                            <div className="feature-details">
                                <p className="status-text">Status: <span className="status-completed">Completed & Integrated</span></p>
                                <a href="https://sites.google.com/view/alnisr-master-acces/office/azeen/invoice" target="_blank" rel="noopener noreferrer" className="feature-link">
                                    View Integration Link
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Footer Conclusion */}
                    <footer className="report-footer">
                        <p>All items successfully delivered and integrated. Report generated on Oct 2025.</p>
                        <p>There would be a settling time of one week i.e till 22nd October 2025 for any minor modifications required</p>
                        <p> </p>
                        <p>Requesting you to please proceed with the reamining payment of 60% (112.20 BHD) within this settling date, failing of which would result in Future projects requiring a 100% advance payment.</p>
                        <p></p>
                    </footer>

                </div>

            </div>
        </div>

    )
}

export default NisrQuote818FinalReport