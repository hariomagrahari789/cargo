import React, { useState } from 'react';
import { BarChart3, Download, TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';

const AnalyticsReports = () => {
    const [downloading, setDownloading] = useState(false);
    const [timeframe, setTimeframe] = useState('month');

    const handleDownload = () => {
        setDownloading(true);
        setTimeout(() => {
            setDownloading(false);
            alert('Monthly Freight & ESG Performance Report (PDF) downloaded successfully.');
        }, 800);
    };

    return (
        <section className="dashboard-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Freight Analytics & Cost Efficiency</h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Consolidated volumetric savings, lane spend trends, and carrier SLA compliance.
                    </span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="btn-outline action-btn"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                    >
                        <option value="week">Last 7 Days</option>
                        <option value="month">Current Month</option>
                        <option value="quarter">Q3 2026</option>
                    </select>

                    <button
                        className="btn-outline action-btn"
                        onClick={handleDownload}
                        disabled={downloading}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
                    >
                        <Download size={15} />
                        {downloading ? 'Generating...' : 'Export Audit Report'}
                    </button>
                </div>
            </div>

            {/* Quick Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Total Logistics Spend</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.2rem 0' }}>₹14,82,500</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <TrendingDown size={14} /> -18.4% vs unoptimized baseline
                    </span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Net Optimization Savings</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#16a34a', margin: '0.2rem 0' }}>₹3,24,000</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <TrendingUp size={14} /> 21.8% margin gain
                    </span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Average Volumetric Fill</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary, #E65100)', margin: '0.2rem 0' }}>91.4%</div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Target: 85% minimum</span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.775rem', color: '#64748b' }}>On-Time Delivery (OTD)</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.2rem 0' }}>98.6%</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>Top Tier SLA</span>
                </div>
            </div>

            {/* Top Corridor Breakdown */}
            <div style={{ background: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                    Consolidation Performance by Primary Shipping Lanes
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                        { lane: 'Mumbai ↔ Delhi NCR', loads: 42, fill: 94, saved: '₹1,45,000' },
                        { lane: 'Chennai ↔ Bengaluru Hub', loads: 28, fill: 92, saved: '₹84,000' },
                        { lane: 'Pune ↔ Ahmedabad GIDC', loads: 19, fill: 89, saved: '₹56,000' }
                    ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                            <span style={{ fontWeight: 600, color: '#334155', minWidth: '180px' }}>{item.lane}</span>
                            <span style={{ color: '#64748b' }}>{item.loads} Dispatches</span>
                            <span style={{ color: '#16a34a', fontWeight: 600 }}>{item.fill}% Avg Fill</span>
                            <strong style={{ color: '#0f172a' }}>{item.saved} Saved</strong>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalyticsReports;
