import React, { useState } from 'react';
import { Leaf, Award, Fuel, Trees, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/LandingSections.css';

const Sustainability = () => {
  const [monthlyTonnage, setMonthlyTonnage] = useState(250);

  // Carbon calculation logic:
  // Avg freight savings per ton-km with load consolidation: ~0.42 kg CO2 saved per ton
  // Diesel saved: approx 0.16 liters per ton moved optimally
  const calculatedCO2 = Math.round(monthlyTonnage * 1.8);
  const calculatedDiesel = Math.round(monthlyTonnage * 0.65);
  const calculatedTrees = Math.round(calculatedCO2 / 21); // 1 mature tree absorbs ~21kg CO2/year
  const calculatedCostSavings = Math.round(monthlyTonnage * 1850).toLocaleString('en-IN');

  return (
    <section id="sustainability" className="landing-section alt-bg">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-tag green-tag">
            <Leaf size={14} />
            Green Logistics & ESG Compliance
          </div>
          <h2 className="section-heading-main">
            Measurable Carbon Reduction on Every Mile
          </h2>
          <p className="section-heading-sub">
            Freight transport accounts for over 7% of global emissions. By removing empty backhauls 
            and maximizing volumetric efficiency, CargoSathi enables verified decarbonization.
          </p>
        </div>

        {/* Global Impact Highlights */}
        <div className="sustainability-stats-grid">
          <div className="stat-card-eco">
            <div className="eco-icon">
              <Leaf size={24} />
            </div>
            <div className="eco-number">12,480+</div>
            <div className="eco-label">Tons CO₂ Prevented</div>
            <div className="eco-subtext">Verified under ISO 14064-1 standard</div>
          </div>

          <div className="stat-card-eco">
            <div className="eco-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
              <Fuel size={24} />
            </div>
            <div className="eco-number">4.6M</div>
            <div className="eco-label">Liters Diesel Saved</div>
            <div className="eco-subtext">Through route chaining & load stacking</div>
          </div>

          <div className="stat-card-eco">
            <div className="eco-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
              <Trees size={24} />
            </div>
            <div className="eco-number">594,000</div>
            <div className="eco-label">Trees Equivalent</div>
            <div className="eco-subtext">Annual carbon absorption parity</div>
          </div>

          <div className="stat-card-eco">
            <div className="eco-icon" style={{ background: '#fdf4ff', color: '#c026d3' }}>
              <Award size={24} />
            </div>
            <div className="eco-number">100%</div>
            <div className="eco-label">Green Fleet Certification</div>
            <div className="eco-subtext">Auditable ESG certificates for your audits</div>
          </div>
        </div>

        {/* Interactive Emission Estimator Widget */}
        <div className="calc-wrapper">
          <div>
            <h3 className="calc-title">Calculate Your Enterprise Impact</h3>
            <p className="calc-desc">
              Adjust your monthly outbound freight volume to forecast immediate scope-3 emissions 
              abatement and operational logistics cost savings.
            </p>

            <div className="calc-slider-box">
              <label htmlFor="tonnage-slider">
                <span>Monthly Freight Volume</span>
                <span style={{ color: '#34d399', fontWeight: 700 }}>{monthlyTonnage} Metric Tons</span>
              </label>
              <input
                id="tonnage-slider"
                type="range"
                min="50"
                max="2000"
                step="25"
                value={monthlyTonnage}
                onChange={(e) => setMonthlyTonnage(Number(e.target.value))}
                className="calc-slider-input"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                <span>50 Tons</span>
                <span>1,000 Tons</span>
                <span>2,000 Tons</span>
              </div>
            </div>
          </div>

          <div className="calc-results-card">
            <div className="calc-result-metric">{calculatedCO2} Tons</div>
            <div className="calc-result-label">Estimated Monthly CO₂ Abatement</div>

            <div className="calc-mini-stats">
              <div className="calc-mini-item">
                <span className="calc-mini-val">₹{calculatedCostSavings}</span>
                <span className="calc-mini-sub">Estimated Savings</span>
              </div>
              <div className="calc-mini-item">
                <span className="calc-mini-val">{calculatedDiesel}k L</span>
                <span className="calc-mini-sub">Fuel Conserved</span>
              </div>
              <div className="calc-mini-item">
                <span className="calc-mini-val">{calculatedTrees}</span>
                <span className="calc-mini-sub">Trees Planted Eq.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
