import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import '../styles/LandingSections.css';

const CTA = () => {
  const navigate = useNavigate();

  const handleTestAccess = (role) => {
    localStorage.setItem('token', 'test-dummy-token');
    localStorage.setItem('role', role);
    navigate(role === 'warehouse' ? '/warehouse-dashboard' : '/truck-dealer-dashboard');
  };

  return (
    <section id="cta" className="landing-section" style={{ background: '#0a0f1d', borderBottom: 'none' }}>
      <div className="section-container">
        <div className="cta-box">
          <div className="cta-box-glow"></div>
          
          <h2 className="cta-heading">
            Modernize Your Freight Operations Today
          </h2>
          
          <p className="cta-subtext">
            Join hundreds of forward-thinking Indian logistics operators reducing empty miles, 
            cutting operational overhead, and building sustainable supply chains.
          </p>

          <div className="cta-actions-group">
            <button
              className="btn-cta-primary"
              onClick={() => handleTestAccess('warehouse')}
            >
              Explore Warehouse Dashboard
              <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline' }} />
            </button>

            <button
              className="btn-cta-outline"
              onClick={() => handleTestAccess('truckDealer')}
            >
              Explore Fleet Dealer Dashboard
            </button>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <div className="cta-quick-access">
              <span className="cta-badge-pill">INSTANT ACCESS</span>
              <span>Test credentials active: no credit card or setup required</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap', color: '#94a3b8', fontSize: '0.85rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={16} color="#34d399" />
              ISO 27001 Certified Security
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={16} color="#34d399" />
              GST & E-Way Bill Compliant
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={16} color="#34d399" />
              99.98% High Availability SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
