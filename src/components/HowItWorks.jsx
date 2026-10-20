import React, { useState, useEffect, memo } from 'react';
import '../styles/HowItWorks.css';

// Static Data Definitions (Moved outside component to prevent recreation on render)
const STEPS = [
  {
    id: 1,
    number: '01',
    title: 'Shipment Upload',
    description: 'Warehouses upload shipment details with automated documentation and requirements',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="12" width="40" height="40" rx="12" fill="url(#upload-gradient)" />
        <path d="M32 24L24 32H28V40H36V32H40L32 24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 28H36" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="upload-gradient" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E65100" />
            <stop offset="1" stopColor="#FF9800" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: ['Automated documentation', 'Capacity requirements', 'Route preferences'],
    color: '#E65100'
  },
  {
    id: 2,
    number: '02',
    title: 'AI Matchmaking',
    description: 'Our algorithm analyzes 50+ parameters to find optimal truck matches in milliseconds',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="12" width="40" height="40" rx="12" fill="url(#ai-gradient)" />
        <path d="M32 16C24.8 16 20 22 20 28C20 34 24.8 40 32 40C39.2 40 44 34 44 28C44 22 39.2 16 32 16Z" stroke="white" strokeWidth="2" />
        <path d="M32 16V28L38 34" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 26L38 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="28" r="2" fill="white" />
        <defs>
          <linearGradient id="ai-gradient" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B5E20" />
            <stop offset="1" stopColor="#4CAF50" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: ['50+ parameters analyzed', 'Millisecond matching', 'Route optimization'],
    color: '#1B5E20'
  },
  {
    id: 3,
    number: '03',
    title: 'Smart Booking',
    description: 'Truck dealers receive intelligent alerts and approve bookings with one-click',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="12" width="40" height="40" rx="12" fill="url(#booking-gradient)" />
        <path d="M44 28H42C42 22.48 38.52 18 34 18C29.48 18 26 22.48 26 28H24C24 21.37 29.37 16 36 16C42.63 16 48 21.37 48 28C48 34.63 42.63 40 36 40C29.37 40 24 34.63 24 28H26C26 33.52 30.48 38 36 38C41.52 38 46 33.52 46 28Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 22C35.1 22 36 22.9 36 24C36 25.1 35.1 26 34 26C32.9 26 32 25.1 32 24C32 22.9 32.9 22 34 22Z" fill="white" />
        <defs>
          <linearGradient id="booking-gradient" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2196F3" />
            <stop offset="1" stopColor="#42A5F5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: ['Smart notifications', 'One-click approval', 'Auto-scheduling'],
    color: '#2196F3'
  },
  {
    id: 4,
    number: '04',
    title: 'Live Tracking',
    description: 'Real-time GPS tracking with automated alerts for all stakeholders',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="12" width="40" height="40" rx="12" fill="url(#tracking-gradient)" />
        <path d="M32 16C22 16 16 22 16 32C16 42 22 48 32 48C42 48 48 42 48 32C48 22 42 16 32 16Z" stroke="white" strokeWidth="2" />
        <path d="M32 16V32L40 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" fill="white" />
        <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="1" opacity="0.5" />
        <defs>
          <linearGradient id="tracking-gradient" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9C27B0" />
            <stop offset="1" stopColor="#E91E63" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: ['GPS live tracking', 'Automated alerts', 'ETA predictions'],
    color: '#9C27B0'
  },
  {
    id: 5,
    number: '05',
    title: 'Analytics & Reports',
    description: 'Comprehensive analytics dashboard with automated report generation',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="12" width="40" height="40" rx="12" fill="url(#analytics-gradient)" />
        <path d="M20 40H24V24H20V40ZM28 40H32V28H28V40ZM36 40H40V32H36V40ZM44 40H48V36H44V40Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 44H48" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="analytics-gradient" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9800" />
            <stop offset="1" stopColor="#FFB74D" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: ['Real-time analytics', 'Automated reports', 'Performance insights'],
    color: '#FF9800'
  }
];

// Memoized Sub-components to prevent unnecessary re-renders

const StepsList = memo(({ activeStep, setActiveStep }) => {
  return (
    <div className="hiw-steps-list-container">
      {/* Connecting Line */}
      <div className="hiw-step-line"></div>

      {STEPS.map((step, index) => (
        <div
          key={step.id}
          onClick={() => setActiveStep(index)}
          className={`hiw-step-item ${index < STEPS.length - 1 ? 'hiw-step-margin' : ''}`}
          style={{ opacity: activeStep === index ? '1' : '0.7' }}
        >
          {/* Step Number */}
          <div className="hiw-step-number-container">
            <div
              className="hiw-step-circle"
              style={{
                background: activeStep === index ? step.color : `${step.color}20`,
                color: activeStep === index ? 'white' : step.color,
              }}
            >
              {step.number}
            </div>

            {/* Connecting Dot */}
            {index < STEPS.length - 1 && (
              <div
                className="hiw-step-dot"
                style={{
                  background: activeStep === index ? step.color : `${step.color}30`,
                }}
              ></div>
            )}
          </div>

          {/* Step Content */}
          <div
            className="hiw-step-content"
            style={{
              background: activeStep === index ? `${step.color}08` : 'transparent',
              borderColor: activeStep === index ? `${step.color}20` : 'transparent'
            }}
          >
            <h3
              className="hiw-step-title"
              style={{ color: activeStep === index ? step.color : 'var(--text-dark)' }}
            >
              {step.title}
            </h3>

            <p className="hiw-step-desc">
              {step.description}
            </p>

            {/* Features List */}
            <div className="hiw-step-features">
              {step.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="hiw-feature-tag"
                  style={{
                    background: `${step.color}15`,
                    color: step.color
                  }}
                >
                  <div
                    className="hiw-feature-dot"
                    style={{ background: step.color }}
                  ></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Active Indicator */}
          {activeStep === index && (
            <div
              className="hiw-active-indicator"
              style={{ background: step.color }}
            >
              <div className="hiw-active-dot-inner"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

const VisualDemo = memo(({ activeStep }) => {
  return (
    <div className="hiw-visual-wrapper">
      {/* Main Visual Container */}
      <div className="hiw-visual-container">
        {/* Animated Background */}
        <div className="hiw-visual-bg-anim"></div>

        {/* Step-Specific Visual */}
        <div className="hiw-visual-content">
          {activeStep === 0 && (
            <div className="hiw-step0-container">
              <div className="hiw-step0-icon">
                📦
              </div>
              <div className="hiw-visual-title">
                Upload Shipment
              </div>
              <div className="hiw-visual-desc">
                Drag & drop or upload shipment details with automated validation
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="hiw-step1-container">
              {/* AI Visualization */}
              <div className="hiw-ai-viz">
                <div className="hiw-ai-core">
                  <div className="hiw-ai-icon">
                    🤖
                  </div>
                </div>

                {/* Orbiting Nodes */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="hiw-orbit-node"
                    style={{
                      transform: `rotate(${i * 90}deg) translate(100px) rotate(-${i * 90}deg)`,
                      animation: `orbit ${4 + i * 0.5}s linear infinite`
                    }}
                  >
                    {['🚛', '📦', '📍', '💰'][i - 1]}
                  </div>
                ))}
              </div>

              <div className="hiw-visual-title">
                AI Matchmaking Engine
              </div>
              <div className="hiw-visual-desc">
                Analyzing capacity, route, cost, and timing parameters
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="hiw-step2-container">
              {/* Booking Interface */}
              <div className="hiw-booking-grid">
                <div className="hiw-card-simple">
                  <div className="hiw-card-icon">
                    🚚
                  </div>
                  <div className="hiw-card-title">
                    Truck Available
                  </div>
                  <div className="hiw-card-desc">
                    Capacity: 20T
                  </div>
                </div>

                <div className="hiw-card-simple">
                  <div className="hiw-card-icon">
                    📦
                  </div>
                  <div className="hiw-card-title">
                    Shipment Ready
                  </div>
                  <div className="hiw-card-desc">
                    Weight: 15T
                  </div>
                </div>
              </div>

              <div className="hiw-match-alert">
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: 'var(--space-xs)'
                }}>
                  🎯 Perfect Match!
                </div>
                <div style={{ fontSize: '0.875rem' }}>
                  95% capacity utilization • ₹8,000 savings
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="hiw-step3-container">
              {/* Tracking Visualization */}
              <div className="hiw-tracking-map">
                {/* Map Background */}
                <div className="hiw-map-bg"></div>

                {/* Route */}
                <svg width="100%" height="100%" viewBox="0 0 300 200">
                  <path
                    d="M50,100 Q150,50 250,100"
                    stroke="#9C27B0"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />

                  {/* Moving Truck */}
                  <g style={{ animation: 'moveTruck 4s linear infinite' }}>
                    <rect x="40" y="90" width="40" height="20" rx="4" fill="#9C27B0" />
                    <rect x="45" y="75" width="30" height="15" rx="3" fill="#9C27B0" />
                    <circle cx="50" cy="110" r="6" fill="#333" />
                    <circle cx="70" cy="110" r="6" fill="#333" />
                  </g>

                  {/* Start Point */}
                  <circle cx="50" cy="100" r="8" fill="#4CAF50">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* End Point */}
                  <circle cx="250" cy="100" r="8" fill="#FF9800">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                </svg>
              </div>

              <div className="hiw-tracking-stats">
                <div>
                  <div className="hiw-analytics-value" style={{ color: '#4CAF50' }}>
                    85%
                  </div>
                  <div className="hiw-card-desc">
                    Route Complete
                  </div>
                </div>

                <div>
                  <div className="hiw-analytics-value" style={{ color: '#2196F3' }}>
                    2.5h
                  </div>
                  <div className="hiw-card-desc">
                    ETA Remaining
                  </div>
                </div>

                <div>
                  <div className="hiw-analytics-value" style={{ color: '#9C27B0' }}>
                    Live
                  </div>
                  <div className="hiw-card-desc">
                    Tracking Active
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="hiw-step4-container">
              {/* Analytics Dashboard */}
              <div className="hiw-analytics-grid">
                <div className="hiw-analytics-card">
                  <div className="hiw-analytics-value" style={{ color: '#FF9800' }}>
                    85%
                  </div>
                  <div className="hiw-card-desc">
                    Utilization
                  </div>
                </div>

                <div className="hiw-analytics-card">
                  <div className="hiw-analytics-value" style={{ color: '#4CAF50' }}>
                    40%
                  </div>
                  <div className="hiw-card-desc">
                    CO₂ Saved
                  </div>
                </div>

                <div className="hiw-analytics-card">
                  <div className="hiw-analytics-value" style={{ color: '#2196F3' }}>
                    ₹42K
                  </div>
                  <div className="hiw-card-desc">
                    Savings
                  </div>
                </div>

                <div className="hiw-analytics-card">
                  <div className="hiw-analytics-value" style={{ color: '#9C27B0' }}>
                    28
                  </div>
                  <div className="hiw-card-desc">
                    Shipments
                  </div>
                </div>
              </div>

              <div className="hiw-reports">
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  📊 Automated Reports
                </div>
                <div className="hiw-card-desc">
                  Real-time insights and downloadable analytics
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="section hiw-section">
      {/* Background Elements */}
      <div className="hiw-bg-line"></div>
      <div className="hiw-bg-glow-left"></div>
      <div className="hiw-bg-glow-right"></div>

      <div className="container hiw-container">
        {/* Section Header */}
        <div className="hiw-header">
          <div className="hiw-badge">
            <div className="hiw-badge-dot"></div>
            <span className="hiw-badge-text">
              Process
            </span>
          </div>

          <h2 className="hiw-title">
            <span className="hiw-title-text">
              How Bhramanvahini Works
            </span>
          </h2>

          <p className="hiw-subtitle">
            Seamlessly find loads, optimize routes, and get paid instantly.
            Our platform simplifies the entire logistics lifecycle.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="hiw-grid">
          {/* Steps List */}
          <StepsList activeStep={activeStep} setActiveStep={setActiveStep} />

          {/* Visual Demo */}
          <VisualDemo activeStep={activeStep} />
        </div>

        {/* Call to Action */}
        <div className="hiw-cta-section">
          <p className="hiw-cta-desc">
            Join 500+ businesses already optimizing their supply chain with Bhramanvahini
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-lg)'
          }}>
            <button className="btn btn-primary hiw-cta-btn">
              Get Started Now
            </button>
            <button className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;