import React from 'react';
import '../styles/Solution.css';

// Static data moved outside to prevent re-creation on render
const METRICS = [
  {
    value: '↑ 85%',
    label: 'Truck Utilization',
    change: '+40% improvement',
    icon: '📈',
    color: '#E65100'
  },
  {
    value: '↓ 60%',
    label: 'Empty Runs',
    change: '-40% reduction',
    icon: '🔄',
    color: '#1B5E20'
  },
  {
    value: '↓ 30%',
    label: 'Logistics Cost',
    change: 'Avg savings',
    icon: '💰',
    color: '#2196F3'
  },
  {
    value: '↓ 40%',
    label: 'Carbon Emissions',
    change: 'Per shipment',
    icon: '🌱',
    color: '#4CAF50'
  }
];

const FEATURES = [
  {
    title: 'Intelligent Matching',
    description: 'AI algorithms match shipments with optimal trucks based on capacity, route, and timing',
    icon: '🤖'
  },
  {
    title: 'Real-time Tracking',
    description: 'GPS-enabled live tracking with automated alerts and ETAs for all stakeholders',
    icon: '📍'
  },
  {
    title: 'Automated Documentation',
    description: 'Digital PODs, invoices, and compliance documents generated automatically',
    icon: '📄'
  },
  {
    title: 'Smart Analytics',
    description: 'Dashboard with actionable insights on utilization, costs, and sustainability metrics',
    icon: '📊'
  }
];

const Solution = () => {
  return (
    <section id="solution" className="section solution-section">
      {/* Background Elements */}
      <div className="solution-bg-gradient"></div>

      <div className="container solution-container">
        <div className="solution-grid-main">
          {/* Left Content */}
          <div>
            <div className="solution-content-wrapper">
              <div className="solution-badge">
                <div className="solution-badge-dot"></div>
                <span className="solution-badge-text">
                  Our Solution
                </span>
              </div>

              <h2 className="solution-title">
                <span className="solution-title-highlight">
                  Smart Logistics,
                </span>
                <br />
                <span className="solution-title-sub">
                  Sustainable Future
                </span>
              </h2>

              <p className="solution-description">
                Bhramanvahini is an intelligent platform that connects warehouses and truck dealers
                using advanced algorithms to optimize every aspect of logistics—from matching to
                delivery, reducing costs while building a greener supply chain.
              </p>
            </div>

            {/* Features Grid */}
            <div className="solution-features-grid">
              {FEATURES.map((feature, index) => (
                <div key={index} className="solution-feature-item">
                  <div className="solution-feature-icon">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="solution-feature-title">
                      {feature.title}
                    </h3>
                    <p className="solution-feature-desc">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Metrics */}
          <div>
            <div className="solution-metrics-card">
              {/* Decorative Background */}
              <div className="solution-metrics-bg-decor"></div>

              <div className="solution-metrics-content">
                <div className="solution-metrics-grid">
                  {METRICS.map((metric, index) => (
                    <div
                      key={index}
                      className="card-hover solution-metric-item"
                      style={{
                        background: `${metric.color}08`,
                        border: `1px solid ${metric.color}20`
                      }}
                    >
                      <div className="solution-metric-icon">
                        {metric.icon}
                      </div>
                      <div
                        className="solution-metric-value"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </div>
                      <div className="solution-metric-label">
                        {metric.label}
                      </div>
                      <div
                        className="solution-metric-change"
                        style={{ color: metric.color }}
                      >
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Card */}
                <div className="solution-summary-card">
                  <div className="solution-summary-header">
                    <div className="solution-check-icon">
                      ✓
                    </div>
                    <span className="solution-summary-title">
                      Proven Results
                    </span>
                  </div>
                  <p className="solution-summary-text">
                    Based on 6 months of pilot operations across 500+ shipments,
                    Bhramanvahini delivers measurable improvements across all key metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Architecture */}
        <div className="solution-architecture-card">
          <div className="solution-arch-grid">
            <div>
              <h3 className="solution-arch-title">
                Built for Scale
              </h3>
              <p className="solution-arch-desc">
                Our cloud-native platform handles thousands of simultaneous matches,
                scales with your business, and integrates with existing ERP and TMS systems.
              </p>
            </div>

            <div className="solution-arch-stats">
              <div className="solution-arch-stat-item">
                <div className="solution-arch-stat-value">&lt; 100ms</div>
                <div className="solution-arch-stat-label">Match time</div>
              </div>

              <div className="solution-arch-stat-item">
                <div className="solution-arch-stat-value">99.9%</div>
                <div className="solution-arch-stat-label">Uptime SLA</div>
              </div>

              <div className="solution-arch-stat-item">
                <div className="solution-arch-stat-value">10k+</div>
                <div className="solution-arch-stat-label">Matches/hour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;