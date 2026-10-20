import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#smart-upload)" />
          <path d="M24 20L16 28H20V36H28V28H32L24 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 24H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="smart-upload" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E65100" />
              <stop offset="1" stopColor="#FF9800" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Smart Shipment Upload",
      description: "Automated documentation with intelligent validation and requirement matching",
      stats: "90% faster uploads",
      color: '#E65100'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#optimization)" />
          <path d="M32 24C32 28.42 28.42 32 24 32C19.58 32 16 28.42 16 24C16 19.58 19.58 16 24 16C28.42 16 32 19.58 32 24Z" stroke="white" strokeWidth="2" />
          <path d="M24 16V24L28 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 20L28 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="optimization" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1B5E20" />
              <stop offset="1" stopColor="#4CAF50" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "AI Optimization Engine",
      description: "Matches shipments with optimal trucks using 50+ parameters in milliseconds",
      stats: "<100ms match time",
      color: '#1B5E20'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#tracking)" />
          <path d="M24 16C18 16 14 22 14 28C14 34 18 40 24 40C30 40 34 34 34 28C34 22 30 16 24 16Z" stroke="white" strokeWidth="2" />
          <path d="M24 16V28L30 34" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="28" r="4" fill="white" />
          <defs>
            <linearGradient id="tracking" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2196F3" />
              <stop offset="1" stopColor="#42A5F5" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Real-time Tracking",
      description: "Live GPS tracking with automated alerts and ETA predictions for all stakeholders",
      stats: "99.9% accuracy",
      color: '#2196F3'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#analytics)" />
          <path d="M16 32H20V20H16V32ZM24 32H28V24H24V32ZM32 32H36V28H32V32Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 36H34" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="analytics" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C27B0" />
              <stop offset="1" stopColor="#E91E63" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Analytics Dashboard",
      description: "Comprehensive insights on utilization, costs, and sustainability metrics",
      stats: "30+ KPIs tracked",
      color: '#9C27B0'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#sustainability)" />
          <path d="M24 12C16 12 12 18 12 24C12 30 16 36 24 36C32 36 36 30 36 24C36 18 32 12 24 12Z" stroke="white" strokeWidth="2" />
          <path d="M24 12V24L30 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 18L30 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="sustainability" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4CAF50" />
              <stop offset="1" stopColor="#8BC34A" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "CO₂ Impact Reports",
      description: "Automated emission tracking and sustainability reporting",
      stats: "40% emissions reduced",
      color: '#4CAF50'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="12" fill="url(#security)" />
          <path d="M32 20H30C30 16.69 27.31 14 24 14C20.69 14 18 16.69 18 20H16C16 15.58 19.58 12 24 12C28.42 12 32 15.58 32 20ZM24 18C25.1 18 26 18.9 26 20H22C22 18.9 22.9 18 24 18ZM36 30V24H12V30C12 33.31 14.69 36 18 36H30C33.31 36 36 33.31 36 30Z" fill="white" />
          <defs>
            <linearGradient id="security" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9800" />
              <stop offset="1" stopColor="#FFB74D" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Secure Role-based Access",
      description: "Enterprise-grade security with customizable permissions and audit trails",
      stats: "ISO 27001 certified",
      color: '#FF9800'
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="features-header">
          <div className="features-badge">
            <div className="features-badge-dot"></div>
            <span className="features-badge-text">
              Platform Features
            </span>
          </div>

          <h2 className="features-title">
            <span className="features-title-highlight">
              Intelligent Features
            </span>
            <br />
            <span className="features-title-sub">
              Built for Modern Logistics
            </span>
          </h2>

          <p className="features-desc">
            Comprehensive tools designed to streamline every aspect of your logistics operations
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover features-card"
              style={{
                borderTopColor: feature.color
              }}
            >
              <div
                className="features-card-bg-decor"
                style={{ background: `${feature.color}10` }}
              ></div>

              <div className="features-card-content">
                <div className="features-card-icon">
                  {feature.icon}
                </div>

                <h3 className="features-card-title">
                  {feature.title}
                </h3>

                <p className="features-card-desc">
                  {feature.description}
                </p>

                <div
                  className="features-stats-badge"
                  style={{
                    background: `${feature.color}10`,
                    borderColor: `${feature.color}20`
                  }}
                >
                  <div
                    className="features-stats-dot"
                    style={{ background: feature.color }}
                  ></div>
                  <span
                    className="features-stats-text"
                    style={{ color: feature.color }}
                  >
                    {feature.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-enterprise-card">
          <h3 className="features-ent-title">
            Enterprise Ready Platform
          </h3>

          <div className="features-ent-grid">
            <div>
              <div
                className="features-ent-value"
                style={{ color: '#2196F3' }}
              >99.9%</div>
              <div className="features-ent-label">Uptime SLA</div>
            </div>

            <div>
              <div
                className="features-ent-value"
                style={{ color: '#4CAF50' }}
              >256-bit</div>
              <div className="features-ent-label">SSL Encryption</div>
            </div>

            <div>
              <div
                className="features-ent-value"
                style={{ color: '#9C27B0' }}
              >24/7</div>
              <div className="features-ent-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;