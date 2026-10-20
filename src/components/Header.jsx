import React, { useState, useEffect } from 'react';
import '../styles/theme.css';
import '../styles/Header.css';
import AuthPopup from './Authpopup';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-background"></div>
      <nav className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                <path d="M8 20L16 12L24 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 24L16 20L20 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E65100" />
                    <stop offset="1" stopColor="#FF6F00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <h1 className="logo-title">Bhramanvahini</h1>
              <span className="logo-tagline">Har Truck Ka Sahi Sathi</span>
            </div>
          </div>
        </div>

        <div className="nav-main">
          <a href="#how-it-works" className="nav-link">
            <span className="nav-number">01</span>
            <span>How It Works</span>
          </a>
          <a href="#features" className="nav-link">
            <span className="nav-number">02</span>
            <span>Features</span>
          </a>
          <a href="#platform" className="nav-link">
            <span className="nav-number">03</span>
            <span>Platform & Portals</span>
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.5rem' }}
            onClick={() => setShowAuth(true)}
          >
            <span>Login</span>
          </button>
          {showAuth && <AuthPopup onClose={() => setShowAuth(false)} />}

          <button
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.5rem' }}
            onClick={() => setShowAuth(true)}
          >
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '0.5rem' }}>
              <path d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;