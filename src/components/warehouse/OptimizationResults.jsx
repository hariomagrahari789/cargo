import React, { useState } from 'react';
import { Truck, CheckCircle, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

const OptimizationResults = () => {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <section className="dashboard-section" style={{ borderLeft: '4px solid var(--color-primary, #E65100)' }}>
            <div className="section-header">
                <div>
                    <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Zap size={20} color="var(--color-primary, #E65100)" />
                        AI Optimization Results • Instant Match
                    </h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Algorithmic bundling paired 2 pending consignments into a single high-fill container.
                    </span>
                </div>
                <span className="kpi-trend positive" style={{ background: '#dcfce7', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                    94% Capacity Fill
                </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>Consolidated Batch: Mumbai → Delhi Direct</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Matched Carrier: VRL Prime Logistics</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
                        <span>• Bundled: <strong>SH001 (8T) + SH002 (6T)</strong></span>
                        <span>• Total Volume: <strong>77 m³ / 82 m³</strong></span>
                    </div>

                    <div style={{ height: '14px', background: '#e2e8f0', borderRadius: '7px', overflow: 'hidden', display: 'flex' }}>
                        <div style={{ width: '55%', background: '#ea580c', height: '100%' }}></div>
                        <div style={{ width: '39%', background: '#f97316', height: '100%' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem' }}>
                        <span>SH001 (55%)</span>
                        <span>SH002 (39%)</span>
                        <span>Buffer (6%)</span>
                    </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                            <span style={{ color: '#64748b' }}>Consolidated Quote:</span>
                            <strong style={{ color: '#0f172a' }}>₹52,000</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                            <span style={{ color: '#64748b' }}>Estimated Savings:</span>
                            <strong style={{ color: '#16a34a' }}>-₹32,000 (38%)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                            <span style={{ color: '#64748b' }}>Carbon Saved:</span>
                            <strong style={{ color: '#16a34a' }}>340 kg CO₂</strong>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: '1rem', padding: '0.65rem' }}
                        onClick={() => setConfirmed(true)}
                        disabled={confirmed}
                    >
                        {confirmed ? (
                            <>
                                <CheckCircle size={16} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} />
                                Dispatched to Transporter
                            </>
                        ) : (
                            'Accept & Confirm Load Match'
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OptimizationResults;
