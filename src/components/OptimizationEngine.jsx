import React, { useState } from 'react';
import { Cpu, ArrowRight, CheckCircle2, AlertTriangle, Zap, TrendingUp } from 'lucide-react';
import '../styles/LandingSections.css';

const OptimizationEngine = () => {
  const [selectedRoute, setSelectedRoute] = useState('mumbai-delhi');

  const routeData = {
    'mumbai-delhi': {
      distance: '1,420 km',
      beforeUtilization: 48,
      afterUtilization: 94,
      beforeCost: '₹84,000',
      afterCost: '₹52,000',
      co2Saved: '380 kg',
      traditionalTrips: 3,
      optimizedTrips: 1,
    },
    'chennai-bangalore': {
      distance: '345 km',
      beforeUtilization: 52,
      afterUtilization: 96,
      beforeCost: '₹28,500',
      afterCost: '₹17,200',
      co2Saved: '115 kg',
      traditionalTrips: 2,
      optimizedTrips: 1,
    },
    'kolkata-patna': {
      distance: '580 km',
      beforeUtilization: 44,
      afterUtilization: 91,
      beforeCost: '₹42,000',
      afterCost: '₹26,800',
      co2Saved: '190 kg',
      traditionalTrips: 2,
      optimizedTrips: 1,
    }
  };

  const current = routeData[selectedRoute];

  return (
    <section id="optimization" className="landing-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-tag">
            <Cpu size={14} />
            Proprietary AI Matching Engine
          </div>
          <h2 className="section-heading-main">
            Turn Wasted Truck Space Into High-Margin Shipments
          </h2>
          <p className="section-heading-sub">
            Our multi-stop cargo consolidation engine dynamically pairs partial consignments 
            with verified empty haul return trips in under 3 seconds.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            { id: 'mumbai-delhi', label: 'Mumbai → Delhi Corridor' },
            { id: 'chennai-bangalore', label: 'Chennai → Bengaluru Corridor' },
            { id: 'kolkata-patna', label: 'Kolkata → Patna Corridor' }
          ].map((route) => (
            <button
              key={route.id}
              onClick={() => setSelectedRoute(route.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: selectedRoute === route.id ? 'var(--primary-orange, #E65100)' : '#e2e8f0',
                background: selectedRoute === route.id ? '#fff7ed' : '#ffffff',
                color: selectedRoute === route.id ? 'var(--primary-orange, #E65100)' : '#475569',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {route.label}
            </button>
          ))}
        </div>

        <div className="engine-grid">
          {/* Card 1: Traditional Logistics */}
          <div className="engine-card">
            <span className="engine-badge traditional">Legacy Dispatch Model</span>
            <h3 className="engine-card-title">Fragmented Single-Load Runs</h3>
            <p className="engine-card-subtitle">
              Shippers pay for full container loads while transporting partial cubic volume, 
              forcing trucks to return empty on deadhead return legs.
            </p>

            <div className="truck-visual">
              <div className="truck-bar-header">
                <span>Truck Capacity Loaded</span>
                <span>{current.beforeUtilization}% Utilized</span>
              </div>
              <div className="truck-bar-track">
                <div 
                  className="truck-bar-fill waste" 
                  style={{ width: `${current.beforeUtilization}%` }}
                >
                  {current.beforeUtilization}%
                </div>
              </div>
              <div className="truck-bar-legend">
                <span><span className="legend-dot" style={{ background: '#94a3b8' }}></span>Cargo Space ({current.beforeUtilization}%)</span>
                <span><span className="legend-dot" style={{ background: '#e2e8f0' }}></span>Wasted Empty Air ({100 - current.beforeUtilization}%)</span>
              </div>
            </div>

            <div className="engine-metrics-list">
              <div className="engine-metric-item">
                <span className="engine-metric-label">Separate Trips Required</span>
                <span className="engine-metric-val val-negative">{current.traditionalTrips} Trucks Dispatched</span>
              </div>
              <div className="engine-metric-item">
                <span className="engine-metric-label">Estimated Total Freight Spend</span>
                <span className="engine-metric-val val-negative">{current.beforeCost}</span>
              </div>
              <div className="engine-metric-item">
                <span className="engine-metric-label">Deadhead Return Rate</span>
                <span className="engine-metric-val val-negative">41% Unproductive Miles</span>
              </div>
            </div>
          </div>

          {/* Card 2: CargoSathi AI Optimization */}
          <div className="engine-card optimized">
            <span className="engine-badge smart">CargoSathi Neural Routing</span>
            <h3 className="engine-card-title">Algorithmic Load Consolidation</h3>
            <p className="engine-card-subtitle">
              Multi-consignment 3D spatial packing automatically maximizes volume and payload, 
              slashing shipping overhead and eliminating idle transit.
            </p>

            <div className="truck-visual" style={{ background: '#fffaf5', borderColor: '#fed7aa' }}>
              <div className="truck-bar-header">
                <span style={{ color: '#c2410c' }}>Optimized Load Fill</span>
                <span style={{ color: '#c2410c' }}>{current.afterUtilization}% Utilized</span>
              </div>
              <div className="truck-bar-track" style={{ background: '#ffedd5' }}>
                <div 
                  className="truck-bar-fill optimal" 
                  style={{ width: `${current.afterUtilization}%` }}
                >
                  {current.afterUtilization}%
                </div>
              </div>
              <div className="truck-bar-legend">
                <span><span className="legend-dot" style={{ background: '#ea580c' }}></span>Consolidated Freight ({current.afterUtilization}%)</span>
                <span><span className="legend-dot" style={{ background: '#fed7aa' }}></span>Buffer Margin ({100 - current.afterUtilization}%)</span>
              </div>
            </div>

            <div className="engine-metrics-list">
              <div className="engine-metric-item" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <span className="engine-metric-label">Single Unified Trip</span>
                <span className="engine-metric-val val-positive">{current.optimizedTrips} Consolidated Truck</span>
              </div>
              <div className="engine-metric-item" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <span className="engine-metric-label">Optimized Freight Spend</span>
                <span className="engine-metric-val val-positive">{current.afterCost} (-38% Savings)</span>
              </div>
              <div className="engine-metric-item" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <span className="engine-metric-label">Carbon Abated This Corridor</span>
                <span className="engine-metric-val val-positive">{current.co2Saved} CO₂ Prevented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationEngine;
