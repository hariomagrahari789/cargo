import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const benefits = [
    { text: 'Maximize truck utilization', icon: '↑' },
    { text: 'Reduce logistics cost by 30%', icon: '↓' },
    { text: 'Real-time shipment tracking', icon: '📍' },
    { text: 'Measure CO₂ savings', icon: '🌱' }
  ];

  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            <div className="hero-content">
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <span className="hero-badge-text">India's Smart Logistics Platform</span>
              </div>

              <h1 className="hero-title">
                Optimize Every Mile,<br />
                <span className="hero-title-sub">
                  Empower Every Driver
                </span>
              </h1>

              <p className="hero-description">
                Bhramanvahini intelligently connects warehouses and truck dealers,
                reducing empty runs by 60% and cutting logistics costs while
                building a sustainable future for Bharat.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="hero-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="hero-benefit-item">
                  <div className="hero-benefit-icon">
                    {benefit.icon}
                  </div>
                  <span className="hero-benefit-text">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-container">
              <a href="#cta" className="btn btn-primary hero-btn-primary">
                <span>Start Free Trial</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="hero-btn-arrow">
                  <path d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" fill="currentColor" />
                </svg>
              </a>

              <a href="#demo" className="btn btn-outline hero-btn-watch">
                <div className="hero-watch-icon-container">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0L20 10L10 20L8.8 18.8L15.6 10L8.8 1.2L10 0Z" fill="var(--primary-orange)" />
                  </svg>
                </div>
                <span>Watch Demo</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual-container">
            {/* Main Visual Container */}
            <div className="hero-visual-bg">
              {/* Floating Cards */}
              <div className="hero-float-card top-left">
                <div className="hero-card-header">
                  <div className="hero-card-icon orange">
                    <span className="hero-card-arrow">↑</span>
                  </div>
                  <span className="hero-card-value">85%</span>
                </div>
                <span className="hero-card-label">Truck Utilization</span>
              </div>

              <div className="hero-float-card bottom-right">
                <div className="hero-card-header">
                  <div className="hero-card-icon green">
                    <span className="hero-card-arrow">↓</span>
                  </div>
                  <span className="hero-card-value">40%</span>
                </div>
                <span className="hero-card-label">CO₂ Reduction</span>
              </div>

              {/* Central Illustration */}
              <div className="hero-map-container">
                {/* Map Background */}
                <div className="hero-map-bg"></div>

                {/* Route Lines */}
                <svg width="100%" height="100%" viewBox="0 0 300 200">
                  <path
                    d="M50,100 Q150,50 250,100"
                    stroke="var(--primary-orange)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M70,120 Q150,150 230,120"
                    stroke="var(--secondary-green)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />

                  {/* Trucks */}
                  <g style={{ animation: 'moveTruck 20s linear infinite' }}>
                    <rect x="40" y="90" width="40" height="20" rx="4" fill="#FF5722" />
                    <rect x="45" y="75" width="30" height="15" rx="3" fill="#FF5722" />
                    <circle cx="50" cy="110" r="6" fill="#333" />
                    <circle cx="70" cy="110" r="6" fill="#333" />
                  </g>

                  <g style={{ animation: 'moveTruck 20s linear infinite 10s' }}>
                    <rect x="220" y="90" width="40" height="20" rx="4" fill="#388E3C" />
                    <rect x="225" y="75" width="30" height="15" rx="3" fill="#388E3C" />
                    <circle cx="230" cy="110" r="6" fill="#333" />
                    <circle cx="250" cy="110" r="6" fill="#333" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hero-decor-box top-right"></div>
            <div className="hero-decor-box bottom-left"></div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-trust-bar">
          <div className="hero-trust-item">
            <div className="hero-trust-number orange">500+</div>
            <div className="hero-trust-label">Happy Clients</div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-number orange">10,000+</div>
            <div className="hero-trust-label">Trucks Optimized</div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-number green">25,000+</div>
            <div className="hero-trust-label">Tonnes CO₂ Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;