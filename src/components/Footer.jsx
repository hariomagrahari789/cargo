import React from 'react';
import '../styles/Footer.css';

const FOOTER_NAV = [
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Optimization Engine', href: '#platform' },
      { label: 'Green Logistics', href: '#platform' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Warehouses & 3PLs', href: '#platform' },
      { label: 'For Fleet Operators', href: '#platform' },
      { label: 'Load Consolidation', href: '#platform' },
      { label: 'Backhaul Matching', href: '#platform' }
    ]
  },
  {
    title: 'Governance',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'E-Way Bill Compliance', href: '#compliance' },
      { label: 'Security & SLA', href: '#security' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer fa-section">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ maxWidth: '360px' }}>
            <div className="footer-brand-header">
              <div className="footer-brand-logo">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L20 10L10 20L8.8 18.8L15.6 10L8.8 1.2L10 0Z" fill="white" />
                </svg>
              </div>
              <div>
                <h2 className="footer-brand-name">
                  Bhramanvahini
                </h2>
                <p className="footer-brand-tagline">
                  Har Truck Ka Sahi Sathi
                </p>
              </div>
            </div>

            <p className="footer-brand-desc" style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              India's intelligent logistics optimization platform empowering shippers and transporters 
              with algorithmic load consolidation, verified return backhauls, and reduced carbon emissions.
            </p>
          </div>

          {/* Links Columns */}
          {FOOTER_NAV.map((col, idx) => (
            <div key={idx}>
              <h3 className="footer-links-title">
                {col.title}
              </h3>
              <ul className="footer-links-list">
                {col.links.map((link, i) => (
                  <li key={i} className="footer-links-item">
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '3rem', paddingTop: '1.75rem' }}>
          <div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Bhramanvahini Technologies Pvt. Ltd. All rights reserved.
            </p>
            <p className="footer-love">
              Building sustainable supply chains for Bharat
            </p>
          </div>

          {/* Trust Badges */}
          <div className="footer-trust" style={{ marginTop: 0 }}>
            <div className="footer-trust-item">
              <div className="footer-trust-dot" style={{ background: '#16a34a' }}></div>
              ISO 27001 Certified
            </div>

            <div className="footer-trust-item">
              <div className="footer-trust-dot" style={{ background: '#2563eb' }}></div>
              GST & E-Way Bill Compliant
            </div>

            <div className="footer-trust-item">
              <div className="footer-trust-dot" style={{ background: '#ea580c' }}></div>
              99.98% Platform SLA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;