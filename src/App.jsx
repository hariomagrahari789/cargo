import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UnifiedPlatform from './components/UnifiedPlatform';
import Footer from './components/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import './styles/theme.css';
import './styles/global.css';

import WarehouseDashboard from './pages/WarehouseDashboard';
import TruckDealerDashboard from './pages/TruckDealerDashboard';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <UnifiedPlatform />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/warehouse-dashboard"
            element={
              <ProtectedRoute allowedRole="warehouse">
                <WarehouseDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/truck-dealer-dashboard"
            element={
              <ProtectedRoute allowedRole="truckDealer">
                <TruckDealerDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;