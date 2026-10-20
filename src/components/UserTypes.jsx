import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Truck, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import '../styles/LandingSections.css';

const UserTypes = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem('token', 'test-dummy-token');
    localStorage.setItem('role', role);
    navigate(role === 'warehouse' ? '/warehouse-dashboard' : '/truck-dealer-dashboard');
  };

  return (
    <section id="user-types" className="landing-section alt-bg">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-tag">
            <Zap size={14} />
            Ecosystem Stakeholders
          </div>
          <h2 className="section-heading-main">
            Designed for Both Sides of the Freight Highway
          </h2>
          <p className="section-heading-sub">
            Whether managing thousands of pallets or operating a 50-truck fleet, CargoSathi 
            delivers seamless automation with transparent terms.
          </p>
        </div>

        <div className="user-types-grid">
          {/* Warehouse Operators */}
          <div className="user-type-card">
            <div className="user-type-icon warehouse-icon">
              <Building2 size={28} />
            </div>
            <div className="user-type-role">For Shippers & 3PLs</div>
            <h3 className="user-type-title">Warehouse & Supply Chain Managers</h3>
            <p className="user-type-desc">
              Eliminate logistics cost volatility with algorithmic consolidation, verified carrier networks, 
              and automated e-way bill generation.
            </p>

            <ul className="user-type-features">
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>CSV & API Ingestion:</strong> Bulk upload daily consignments with one click.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Volumetric 3D Packing:</strong> Maximize cubic container space automatically.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Dynamic Spot & Contract Bidding:</strong> Access transparent lane pricing instantly.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Automated Digital PODs:</strong> Instant delivery confirmation & tamper-proof audit trails.</span>
              </li>
            </ul>

            <button 
              className="user-type-action-btn"
              onClick={() => handleSelectRole('warehouse')}
            >
              Enter as Warehouse Manager
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Truck Dealers / Transporters */}
          <div className="user-type-card">
            <div className="user-type-icon dealer-icon">
              <Truck size={28} />
            </div>
            <div className="user-type-role">For Fleet Owners & Brokers</div>
            <h3 className="user-type-title">Truck Dealers & Transporters</h3>
            <p className="user-type-desc">
              Transform deadhead kilometers into profitable freight. Secure guaranteed return loads 
              and receive instant advance payouts directly to your account.
            </p>

            <ul className="user-type-features">
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Zero Idle Return Legs:</strong> Algorithmic backhaul matching for every scheduled corridor.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Instant Advance Settlements:</strong> Up to 80% fuel and trip advance upon loading.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Live Fleet Telematics:</strong> Monitor vehicle speed, maintenance cycles, and driver routes.</span>
              </li>
              <li>
                <Check size={18} className="check-bullet" />
                <span><strong>Verified Enterprise Loads:</strong> Work directly with top FMCG and industrial manufacturing clients.</span>
              </li>
            </ul>

            <button 
              className="user-type-action-btn"
              onClick={() => handleSelectRole('truckDealer')}
            >
              Enter as Truck Dealer
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
