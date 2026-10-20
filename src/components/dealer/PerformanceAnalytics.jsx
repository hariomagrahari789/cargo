import React, { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Fuel, Award, ArrowUpRight } from 'lucide-react';

const PerformanceAnalytics = () => {
    const [period, setPeriod] = useState('7d');

    return (
        <section className="dashboard-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Fleet Revenue & Efficiency Analytics</h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Monetized backhaul performance, fuel economy indices, and driver trip efficiency.
                    </span>
                </div>
                <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="btn-outline action-btn"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
                >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Quarter to Date</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Total Gross Revenue</span>
                        <DollarSign size={16} color="#16a34a" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0' }}>₹4,86,200</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <TrendingUp size={14} /> +24% vs last period
                    </span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Backhaul Match Rate</span>
                        <Award size={16} color="#ea580c" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary, #E65100)', margin: '0.35rem 0' }}>92.4%</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>Only 7.6% empty runs</span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Fleet Fuel Economy</span>
                        <Fuel size={16} color="#2563eb" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0' }}>4.8 km/L</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>+0.6 km/L efficiency gain</span>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.775rem', color: '#64748b' }}>Average Turnaround Time</span>
                        <ArrowUpRight size={16} color="#0891b2" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0' }}>1.4 Days</div>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>Fast dock departure</span>
                </div>
            </div>

            {/* Top performing corridors */}
            <div style={{ background: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                    Top Earning Corridors & Backhaul Yield
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                        { route: 'Delhi → Mumbai return loop', trips: 14, revenue: '₹1,96,000', margin: '34%' },
                        { route: 'Chennai → Bengaluru industrial belt', trips: 22, revenue: '₹1,43,000', margin: '29%' },
                        { route: 'Kolkata → Patna freight corridor', trips: 9, revenue: '₹84,000', margin: '31%' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                            <strong style={{ color: '#334155' }}>{item.route}</strong>
                            <span style={{ color: '#64748b' }}>{item.trips} completed trips</span>
                            <span style={{ color: '#16a34a', fontWeight: 600 }}>{item.margin} net margin</span>
                            <strong style={{ color: '#0f172a' }}>{item.revenue}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerformanceAnalytics;
