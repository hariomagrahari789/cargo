import React from 'react';
import '../styles/Problem.css';

// Moved static data outside component
const PROBLEMS = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="12" fill="rgba(230, 81, 0, 0.1)" />
        <path d="M24 32L16 24H20V16H28V24H32L24 32Z" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20H28M24 16V24" stroke="#E65100" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Half-filled Trucks',
    description: 'Average truck utilization in India is only 45%, leading to wasted capacity and revenue loss',
    stats: '45% avg utilization',
    color: '#E65100'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="12" fill="rgba(27, 94, 32, 0.1)" />
        <path d="M16 28L24 20L32 28" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 32L24 28L28 32" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="#1B5E20" />
        <path d="M16 16L32 32" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      </svg>
    ),
    title: 'Empty Return Trips',
    description: '40% of trucks return empty after delivery, burning fuel without revenue',
    stats: '40% empty returns',
    color: '#1B5E20'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="12" fill="rgba(255, 152, 0, 0.1)" />
        <path d="M32 20H30C30 16.69 27.31 14 24 14C20.69 14 18 16.69 18 20H16C16 15.58 19.58 12 24 12C28.42 12 32 15.58 32 20ZM24 18C25.1 18 26 18.9 26 20H22C22 18.9 22.9 18 24 18ZM36 30V24H12V30C12 33.31 14.69 36 18 36H30C33.31 36 36 33.31 36 30Z" fill="#FF9800" />
      </svg>
    ),
    title: 'Manual Coordination',
    description: 'Phone calls and paperwork waste 3-4 hours daily per logistics manager',
    stats: '3-4 hours wasted daily',
    color: '#FF9800'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="12" fill="rgba(183, 28, 28, 0.1)" />
        <path d="M24 12L16 20H20V28H28V20H32L24 12Z" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20H28" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="32" r="2" fill="#B71C1C" />
      </svg>
    ),
    title: 'High Operational Costs',
    description: 'Inefficient routing increases fuel and maintenance costs by 25-30%',
    stats: '25-30% higher costs',
    color: '#B71C1C'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="12" fill="rgba(27, 94, 32, 0.1)" />
        <path d="M24 12C16.8 12 12 18 12 24C12 30 16.8 36 24 36C31.2 36 36 30 36 24C36 18 31.2 12 24 12Z" stroke="#1B5E20" strokeWidth="2" />
        <path d="M24 12V24L30 30" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 18L30 30" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      </svg>
    ),
    title: 'CO₂ Emissions',
    description: 'Empty runs contribute 12% of India\'s total logistics emissions unnecessarily',
    stats: '12% unnecessary emissions',
    color: '#1B5E20'
  }
];

const Problem = () => {
  return (
    <section id="problem" className="section problem-section">
      {/* Background Elements */}
      <div className="problem-bg-decor-top"></div>
      <div className="problem-bg-decor-bottom"></div>

      <div className="container">
        {/* Section Header */}
        <div className="problem-header">
          <div className="problem-badge">
            <div className="problem-badge-dot"></div>
            <span className="problem-badge-text">
              The Current Challenge
            </span>
          </div>

          <h2 className="problem-title">
            <span className="problem-title-text">
              India's Logistics Crisis
            </span>
          </h2>

          <p className="problem-desc">
            Traditional logistics in India suffers from systemic inefficiencies that cost the
            economy ₹10,000+ crores annually in wasted resources and environmental impact.
          </p>

          <div className="problem-loss-badge">
            <div className="problem-loss-dot"></div>
            <span className="problem-loss-text">
              Annual Loss: ₹10,000+ Crores
            </span>
          </div>
        </div>

        {/* Problem Cards Grid */}
        <div className="problem-grid">
          {PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="card card-hover problem-card"
              style={{
                borderColor: problem.color
              }}
            >
              {/* Background Pattern */}
              <div
                className="problem-card-bg-decor"
                style={{ background: `${problem.color}05` }}
              ></div>

              <div className="problem-card-content">
                {/* Icon */}
                <div className="problem-card-icon">
                  {problem.icon}
                </div>

                {/* Title */}
                <h3
                  className="problem-card-title"
                  style={{ color: problem.color }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="problem-card-desc">
                  {problem.description}
                </p>

                {/* Stats Badge */}
                <div
                  className="problem-card-stats"
                  style={{
                    background: `${problem.color}10`,
                    borderColor: `${problem.color}20`
                  }}
                >
                  <div
                    className="problem-card-stats-dot"
                    style={{ background: problem.color }}
                  ></div>
                  <span
                    className="problem-card-stats-text"
                    style={{ color: problem.color }}
                  >
                    {problem.stats}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className="problem-card-hover-overlay"
                style={{ background: `linear-gradient(135deg, ${problem.color}05, transparent)` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="problem-summary">
          {/* Background Pattern */}
          <div className="problem-summary-bg-decor"></div>

          <div className="problem-summary-content">
            <div className="problem-summary-grid">
              <div>
                <h3 className="problem-summary-title">
                  The Ripple Effect
                </h3>
                <p className="problem-summary-text">
                  These inefficiencies don't just affect logistics companies—they increase
                  costs for consumers, damage infrastructure, and harm the environment.
                </p>
              </div>

              <div className="problem-stats-grid">
                <div className="problem-stat-item">
                  <div className="problem-stat-number">₹14,000</div>
                  <div className="problem-stat-label">Increased product cost/ton</div>
                </div>

                <div className="problem-stat-item">
                  <div className="problem-stat-number">28%</div>
                  <div className="problem-stat-label">Road wear increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;