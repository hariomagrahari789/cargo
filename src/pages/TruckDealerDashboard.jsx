// pages/TruckDealerDashboard.jsx
import React, { useState } from 'react';
import DealerSidebar from '../components/dealer/DealersSideBar';
import TopHeader from '../components/common/TopHeader';
import FleetKPISummary from '../components/dealer/FleetKPISummary';
import BookingRequests from '../components/dealer/BookingRequests';
import ActiveTrips from '../components/dealer/ActiveTrips';
import FleetManagement from '../components/dealer/FleetManagement';
import PerformanceAnalytics from '../components/dealer/PerformanceAnalytics';
import { Leaf, Award, Fuel, CheckCircle, Save, Truck, DollarSign } from 'lucide-react';
import '../styles/dashboard.css';

const TruckDealerDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [bookingRequests, setBookingRequests] = useState([
        { id: 'BR001', warehouse: 'Reliance Logistics Hub', volume: '45m³', route: 'Mumbai-Delhi', utilization: '85%', deadline: '24 Dec' },
        { id: 'BR002', warehouse: 'Amazon Fulfillment Centre', volume: '32m³', route: 'Chennai-Bangalore', utilization: '78%', deadline: '26 Dec' },
        { id: 'BR003', warehouse: 'Tata Motors Regional Depot', volume: '58m³', route: 'Pune-Ahmedabad', utilization: '92%', deadline: '27 Dec' },
    ]);

    const [dealerProfile, setDealerProfile] = useState({
        companyName: 'Mahalaxmi Freightways & Logistics',
        panGst: '27AALPM9012K1ZQ',
        totalTrucks: 14,
        bankAccount: 'HDFC Bank •••• 9102',
        advanceSettlementPct: '80%',
        driverContactPhone: '+91 99200 48119'
    });
    const [settingsSaved, setSettingsSaved] = useState(false);

    const fleetKPI = {
        totalTrucks: dealerProfile.totalTrucks,
        avgUtilization: 86,
        activeTrips: 5,
        co2Saved: 380
    };

    const handleSaveProfile = (e) => {
        e.preventDefault();
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <>
                        <FleetKPISummary data={fleetKPI} />
                        <BookingRequests
                            requests={bookingRequests}
                            setRequests={setBookingRequests}
                        />
                        <ActiveTrips />
                        <FleetManagement />
                        <PerformanceAnalytics />
                    </>
                );

            case 'fleet':
                return <FleetManagement />;

            case 'bookings':
                return (
                    <BookingRequests
                        requests={bookingRequests}
                        setRequests={setBookingRequests}
                    />
                );

            case 'trips':
                return <ActiveTrips />;

            case 'performance':
                return <PerformanceAnalytics />;

            case 'co2':
                return (
                    <div className="dashboard-section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Fleet Carbon Reduction & Eco-Miles</h2>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                    Emissions abated by backhaul load consolidation and optimized speed telematics.
                                </span>
                            </div>
                            <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.3rem 0.85rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                                Green Carrier Verified
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', margin: '1.5rem 0' }}>
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px' }}>
                                <Leaf size={24} color="#16a34a" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>380 kg</div>
                                <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>CO₂ Prevented This Month</span>
                            </div>
                            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1.25rem', borderRadius: '12px' }}>
                                <Fuel size={24} color="#2563eb" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>142 Liters</div>
                                <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600 }}>Diesel Conserved via Backhauls</span>
                            </div>
                            <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '1.25rem', borderRadius: '12px' }}>
                                <Award size={24} color="#d97706" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>Top 5%</div>
                                <span style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 600 }}>National Fleet Green Tier</span>
                            </div>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                                Transporter Carbon Offset Perks
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                                High eco-score carriers receive preferential allocation in Bhramanvahini's neural matching engine, 
                                resulting in 18% higher weekly backhaul volume and priority 2-hour advance settlements.
                            </p>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="dashboard-section" style={{ maxWidth: '800px' }}>
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Transporter Business Profile & Settlement Rules</h2>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                    Manage your transport entity details, bank account, and FASTag advance terms.
                                </span>
                            </div>
                        </div>

                        {settingsSaved && (
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <CheckCircle size={18} />
                                Profile updated and verified with Bhramanvahini network.
                            </div>
                        )}

                        <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                    Registered Fleet / Agency Name
                                </label>
                                <input
                                    type="text"
                                    value={dealerProfile.companyName}
                                    onChange={(e) => setDealerProfile({ ...dealerProfile, companyName: e.target.value })}
                                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        PAN / GSTIN Registration
                                    </label>
                                    <input
                                        type="text"
                                        value={dealerProfile.panGst}
                                        onChange={(e) => setDealerProfile({ ...dealerProfile, panGst: e.target.value })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        Fleet Size (Active Trucks)
                                    </label>
                                    <input
                                        type="number"
                                        value={dealerProfile.totalTrucks}
                                        onChange={(e) => setDealerProfile({ ...dealerProfile, totalTrucks: Number(e.target.value) })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        Settlement Payout Account
                                    </label>
                                    <input
                                        type="text"
                                        value={dealerProfile.bankAccount}
                                        onChange={(e) => setDealerProfile({ ...dealerProfile, bankAccount: e.target.value })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        Default Trip Advance Pct
                                    </label>
                                    <select
                                        value={dealerProfile.advanceSettlementPct}
                                        onChange={(e) => setDealerProfile({ ...dealerProfile, advanceSettlementPct: e.target.value })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', background: '#fff' }}
                                    >
                                        <option value="60%">60% Advance on Loading</option>
                                        <option value="70%">70% Advance on Loading</option>
                                        <option value="80%">80% Advance on Loading (Recommended)</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: 'fit-content', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <Save size={16} />
                                Save Profile & Banking Details
                            </button>
                        </form>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            <DealerSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="main-content">
                <TopHeader
                    title="Truck Dealer Dashboard"
                    userRole="dealer"
                    subtitle="Fleet, Bookings & Efficiency Control Panel"
                />
                <div className="content-wrapper">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default TruckDealerDashboard;