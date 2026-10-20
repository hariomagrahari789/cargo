import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cpu, 
  Leaf, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Fuel, 
  Trees, 
  Building2, 
  Truck 
} from 'lucide-react';
import '../styles/UnifiedPlatform.css';

const UnifiedPlatform = () => {
  const [activePillar, setActivePillar] = useState('optimization');
  const [selectedCorridor, setSelectedCorridor] = useState('mumbai-delhi');
  const [tons, setTons] = useState(200);
  const navigate = useNavigate();

  const corridors = {
    'mumbai-delhi': {
      name: 'Mumbai ↔ Delhi',
      legacyFill: 48,
      smartFill: 94,
      costBefore: '₹84,000',
      costAfter: '₹52,000',
      tripsSaved: '3 Trucks → 1 Consolidated'
    },
    'chennai-bangalore': {
      name: 'Chennai ↔ Bengaluru',
      legacyFill: 52,
      smartFill: 96,
      costBefore: '₹28,500',
      costAfter: '₹17,200',
      tripsSaved: '2 Trucks → 1 Consolidated'
    },
    'kolkata-patna': {
      name: 'Kolkata ↔ Patna',
      legacyFill: 44,
      smartFill: 91,
      costBefore: '₹42,000',
      costAfter: '₹26,800',
      tripsSaved: '2 Trucks → 1 Consolidated'
    }
  };

  const currCorridor = corridors[selectedCorridor];
  const calculatedCO2 = Math.round(tons * 1.8);
  const calculatedSavings = Math.round(tons * 1850).toLocaleString('en-IN');

  const handleLaunch = (role) => {
    localStorage.setItem('token', 'test-dummy-token');
    localStorage.setItem('role', role);
    navigate(role === 'warehouse' ? '/warehouse-dashboard' : '/truck-dealer-dashboard');
  };

  return (
    <section id="platform" className="unified-platform-section">
      <div className="platform-container">
        {/* Section Header */}
        <div className="platform-header">
          <div className="platform-badge">
            <Zap size={14} />
            Unified Intelligence Platform
          </div>
          <h2 className="platform-title">
            Optimization, Sustainability & Real-Time Portals
          </h2>
          <p className="platform-subtitle">
            Everything logistics managers and transporters need to eliminate empty miles, 
            cut freight spend by up to 38%, and automate end-to-end dispatching.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="pillar-tabs">
          <button
            className={`pillar-tab-btn ${activePillar === 'optimization' ? 'active' : ''}`}
            onClick={() => setActivePillar('optimization')}
          >
            <span className="tab-icon-dot"></span>
            <Cpu size={16} />
            Load Optimization
          </button>
          <button
            className={`pillar-tab-btn ${activePillar === 'sustainability' ? 'active' : ''}`}
            onClick={() => setActivePillar('sustainability')}
          >
            <span className="tab-icon-dot"></span>
            <Leaf size={16} />
            Green Fleet & ESG
          </button>
          <button
            className={`pillar-tab-btn ${activePillar === 'portals' ? 'active' : ''}`}
            onClick={() => setActivePillar('portals')}
          >
            <span className="tab-icon-dot"></span>
            <Monitor size={16} />
            Role Portals
          </button>
        </div>

        {/* Pillar 1: Load Optimization */}
        {activePillar === 'optimization' && (
          <div className="pillar-panel-card">
            <div className="opt-corridor-chips">
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', alignSelf: 'center', marginRight: '0.5rem' }}>
                Corridor:
              </span>
              {Object.keys(corridors).map((key) => (
                <button
                  key={key}
                  className={`corridor-chip ${selectedCorridor === key ? 'active' : ''}`}
                  onClick={() => setSelectedCorridor(key)}
                >
                  {corridors[key].name}
                </button>
              ))}
            </div>

            <div className="opt-grid">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Dynamic 3D Volumetric Consolidation
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Our neural packing engine bundles partial consignments with verified empty return trips, 
                  cutting empty air and slashing logistics costs.
                </p>

                <div className="compare-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem' }}>
                    <span style={{ color: '#64748b' }}>Legacy Dispatch Fill</span>
                    <strong style={{ color: '#0f172a' }}>{currCorridor.legacyFill}% Filled</strong>
                  </div>
                  <div className="fill-bar-track">
                    <div className="fill-bar-progress" style={{ width: `${currCorridor.legacyFill}%`, background: '#94a3b8' }}></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>52% Wasted Empty Space • High Freight Cost: {currCorridor.costBefore}</span>
                </div>

                <div className="compare-card highlight">
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem' }}>
                    <span style={{ color: '#c2410c', fontWeight: 700 }}>Bhramanvahini AI Optimization</span>
                    <strong style={{ color: '#c2410c' }}>{currCorridor.smartFill}% Fill Rate</strong>
                  </div>
                  <div className="fill-bar-track" style={{ background: '#ffedd5' }}>
                    <div className="fill-bar-progress" style={{ width: `${currCorridor.smartFill}%`, background: 'linear-gradient(90deg, #ea580c, #f97316)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>Optimized Freight: {currCorridor.costAfter} (-38% Savings)</span>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                  Corridor Impact Summary
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Consolidation Efficiency:</span>
                    <strong style={{ color: '#16a34a' }}>{currCorridor.tripsSaved}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Turnaround SLA:</span>
                    <strong style={{ color: '#0f172a' }}>Under 2.5 Hours Departure</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Carrier Match Speed:</span>
                    <strong style={{ color: '#0f172a' }}>Instant (&lt;3.2 sec)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pillar 2: Green Fleet & Sustainability */}
        {activePillar === 'sustainability' && (
          <div className="pillar-panel-card">
            <div className="eco-summary-grid">
              <div className="eco-stat-box">
                <Leaf size={22} color="#16a34a" style={{ margin: '0 auto' }} />
                <div className="eco-stat-val">12,480+</div>
                <span style={{ fontSize: '0.825rem', color: '#166534', fontWeight: 600 }}>Tons CO₂ Prevented</span>
              </div>
              <div className="eco-stat-box" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                <Fuel size={22} color="#2563eb" style={{ margin: '0 auto' }} />
                <div className="eco-stat-val" style={{ color: '#1d4ed8' }}>4.6M</div>
                <span style={{ fontSize: '0.825rem', color: '#1e40af', fontWeight: 600 }}>Liters Diesel Conserved</span>
              </div>
              <div className="eco-stat-box" style={{ background: '#fef3c7', borderColor: '#fde68a' }}>
                <Trees size={22} color="#d97706" style={{ margin: '0 auto' }} />
                <div className="eco-stat-val" style={{ color: '#b45309' }}>594k</div>
                <span style={{ fontSize: '0.825rem', color: '#92400e', fontWeight: 600 }}>Trees Equivalent Offset</span>
              </div>
            </div>

            <div className="calc-compact">
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Enterprise ESG Savings Estimator
                </h4>
                <p style={{ fontSize: '0.825rem', color: '#64748b', marginBottom: '0.75rem' }}>
                  Adjust your monthly freight tonnage to preview verified scope-3 emission reductions:
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.35rem' }}>
                  <span>Monthly Freight:</span>
                  <span style={{ color: '#16a34a' }}>{tons} Metric Tons</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={tons}
                  onChange={(e) => setTons(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#16a34a' }}
                />
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#16a34a' }}>{calculatedCO2} Tons</div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Monthly CO₂ Abated</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginTop: '0.35rem', display: 'block' }}>
                  Est. Savings: ₹{calculatedSavings}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Pillar 3: Role Portals */}
        {activePillar === 'portals' && (
          <div className="pillar-panel-card">
            <div className="portals-dual-grid">
              {/* Warehouse Portal */}
              <div className="portal-box">
                <div className="portal-box-header">
                  <div className="portal-box-icon warehouse">🏭</div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Warehouse & 3PL Console</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>For Shippers & Dispatch Managers</span>
                  </div>
                </div>

                <ul className="portal-features-list">
                  <li><CheckCircle size={15} color="#16a34a" /> Bulk CSV & ERP consignment ingestion</li>
                  <li><CheckCircle size={15} color="#16a34a" /> Automated 3D volume & weight clustering</li>
                  <li><CheckCircle size={15} color="#16a34a" /> Live tracking with e-POD & ETA alerts</li>
                </ul>

                <button className="portal-launch-btn" onClick={() => handleLaunch('warehouse')}>
                  Launch Warehouse Demo
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Truck Dealer Portal */}
              <div className="portal-box">
                <div className="portal-box-header">
                  <div className="portal-box-icon dealer">🚛</div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Transporter & Fleet Portal</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>For Fleet Owners & Brokers</span>
                  </div>
                </div>

                <ul className="portal-features-list">
                  <li><CheckCircle size={15} color="#16a34a" /> Zero empty return runs with algorithmic backhauls</li>
                  <li><CheckCircle size={15} color="#16a34a" /> Up to 80% guaranteed trip advance on loading</li>
                  <li><CheckCircle size={15} color="#16a34a" /> Fleet health telemetry & automated toll routing</li>
                </ul>

                <button className="portal-launch-btn" onClick={() => handleLaunch('truckDealer')}>
                  Launch Transporter Demo
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Integrated Compact CTA Bar */}
        <div className="compact-cta-bar">
          <div className="compact-cta-text">
            <h3>Experience Live Freight Optimization</h3>
            <p>Access pre-configured demo workspaces with active telemetry data.</p>
          </div>

          <div className="compact-cta-buttons">
            <button className="cta-btn-main" onClick={() => handleLaunch('warehouse')}>
              Warehouse Manager Console →
            </button>
            <button className="cta-btn-sub" onClick={() => handleLaunch('truckDealer')}>
              Truck Dealer Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
