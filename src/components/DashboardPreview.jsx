import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Building2, Truck, ArrowRight, CheckCircle2, TrendingUp, PackageCheck } from 'lucide-react';
import '../styles/LandingSections.css';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('warehouse');
  const navigate = useNavigate();

  const handleLaunch = () => {
    localStorage.setItem('token', 'test-dummy-token');
    localStorage.setItem('role', activeTab === 'warehouse' ? 'warehouse' : 'truckDealer');
    navigate(activeTab === 'warehouse' ? '/warehouse-dashboard' : '/truck-dealer-dashboard');
  };

  return (
    <section id="dashboard-preview" className="landing-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-tag">
            <Monitor size={14} />
            Unified Control Plane
          </div>
          <h2 className="section-heading-main">
            Purpose-Built Portals for Shippers & Transporters
          </h2>
          <p className="section-heading-sub">
            Real-time telematics, AI optimization runs, and transparent financial settlements 
            built into a distraction-free, high-performance interface.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="preview-tabs">
          <button
            className={`preview-tab-btn ${activeTab === 'warehouse' ? 'active' : ''}`}
            onClick={() => setActiveTab('warehouse')}
          >
            <Building2 size={18} />
            Warehouse Operations Console
          </button>
          <button
            className={`preview-tab-btn ${activeTab === 'dealer' ? 'active' : ''}`}
            onClick={() => setActiveTab('dealer')}
          >
            <Truck size={18} />
            Transporter & Fleet Portal
          </button>
        </div>

        {/* Browser Mockup Window */}
        <div className="preview-mockup-window">
          <div className="mockup-header-bar">
            <div className="mockup-dots">
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
            </div>
            <div className="mockup-url-bar">
              https://app.cargosathi.com/{activeTab === 'warehouse' ? 'warehouse-dashboard' : 'truck-dealer-dashboard'}
            </div>
          </div>

          <div className="mockup-body">
            {activeTab === 'warehouse' ? (
              <div className="preview-inner-grid">
                <div className="preview-main-panel">
                  <div className="preview-card-title">
                    <span>Active Shipment Consolidation Queue</span>
                    <span className="preview-chip" style={{ background: '#ffedd5', color: '#c2410c' }}>3 Batches Ready</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>SHP-8921 • Mumbai → Delhi Hub</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>45m³ Vol • 8.2T FMCG Packages • Priority Standard</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#dcfce7', color: '#15803d' }}>Optimized 94%</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>SHP-8924 • Pune → Ahmedabad Hub</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>32m³ Vol • 5.8T Auto Components</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#e0f2fe', color: '#0369a1' }}>In Transit</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>SHP-8930 • Chennai → Bangalore Logistics Hub</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>60m³ Vol • 11.5T Consumer Electronics</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#fef3c7', color: '#b45309' }}>Awaiting Carrier</span>
                  </div>
                </div>

                <div className="preview-side-panel">
                  <div className="preview-card-title">
                    <span>Facility Utilization</span>
                  </div>
                  <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-orange, #E65100)' }}>87%</div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 1rem 0' }}>Average Fleet Fill Efficiency</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                      <span style={{ color: '#64748b' }}>CO₂ Abated</span>
                      <strong style={{ color: '#16a34a' }}>+450 kg</strong>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="preview-inner-grid">
                <div className="preview-main-panel">
                  <div className="preview-card-title">
                    <span>Active Fleet Dispatches & Return Match Requests</span>
                    <span className="preview-chip" style={{ background: '#dcfce7', color: '#15803d' }}>5 Trucks En Route</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>MH-12-RN-9901 • 32ft Multi-Axle Container</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Delhi → Mumbai Return Leg • 92% Backhaul Match</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#f0fdf4', color: '#15803d' }}>₹52,000 Payout</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>TN-09-BK-4112 • 24ft Closed Container</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Bangalore → Hyderabad • Loading Scheduled 14:00</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#e0f2fe', color: '#0369a1' }}>Assigned</span>
                  </div>

                  <div className="preview-item-row">
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>KA-01-MJ-5520 • 20ft Direct Express</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Chennai Port → Coimbatore • Delivered • e-POD Uploaded</span>
                    </div>
                    <span className="preview-chip" style={{ background: '#f1f5f9', color: '#475569' }}>Completed</span>
                  </div>
                </div>

                <div className="preview-side-panel">
                  <div className="preview-card-title">
                    <span>Revenue & Health</span>
                  </div>
                  <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#16a34a' }}>₹3.85L</div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 1rem 0' }}>Gross Bookings This Week</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                      <span style={{ color: '#64748b' }}>Idle Time</span>
                      <strong style={{ color: '#16a34a' }}>-68% Down</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="preview-cta-bar">
            <p>
              Experience the full interactive workspace with real-time operational state.
            </p>
            <button className="btn-cta-primary" onClick={handleLaunch} style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
              Launch {activeTab === 'warehouse' ? 'Warehouse' : 'Fleet'} Demo
              <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle', display: 'inline' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
