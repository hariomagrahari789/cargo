import React, { useState } from 'react';
import WarehouseSidebar from '../components/warehouse/WarehouseSideBar';
import TopHeader from '../components/common/TopHeader';
import KPISummary from '../components/warehouse/KPISummary';
import ShipmentManagement from '../components/warehouse/ShipmentManagement';
import OptimizationResults from '../components/warehouse/OptimizationResults';
import LiveTracking from '../components/warehouse/LiveTracking';
import AnalyticsReports from '../components/warehouse/AnalyticsReports';
import { 
    Upload, 
    FileText, 
    CheckCircle, 
    Sliders, 
    Leaf, 
    Settings, 
    Building2, 
    Save, 
    Truck, 
    Plus, 
    AlertCircle 
} from 'lucide-react';
import '../styles/dashboard.css';

const WarehouseDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [showOptimization, setShowOptimization] = useState(false);
    const [shipments, setShipments] = useState([
        { id: 'SH001', destination: 'Mumbai Hub', volume: '45m³', weight: '8T', deadline: '24 Dec', status: 'pending' },
        { id: 'SH002', destination: 'Delhi ICD', volume: '32m³', weight: '6T', deadline: '26 Dec', status: 'optimized' },
        { id: 'SH003', destination: 'Bengaluru Logistics Park', volume: '60m³', weight: '12T', deadline: '28 Dec', status: 'in-transit' },
        { id: 'SH004', destination: 'Hyderabad Gachibowli', volume: '22m³', weight: '4.5T', deadline: '29 Dec', status: 'pending' },
        { id: 'SH005', destination: 'Kolkata Port Depot', volume: '50m³', weight: '10T', deadline: '30 Dec', status: 'delivered' }
    ]);

    // New consignment form state
    const [newShipment, setNewShipment] = useState({
        destination: '',
        volume: '',
        weight: '',
        deadline: '',
        category: 'FMCG'
    });
    const [uploadSuccess, setUploadSuccess] = useState(false);

    // Settings state
    const [facilityDetails, setFacilityDetails] = useState({
        warehouseName: 'Bhiwandi Central Mega Hub - Unit 4',
        location: 'Bhiwandi, Maharashtra 421302',
        gstin: '27AABCS1429B1Z8',
        loadingDocks: 12,
        managerName: 'Sunil Patil',
        contactPhone: '+91 98210 55431',
        emailNotifications: true,
        smsAlerts: true
    });
    const [settingsSaved, setSettingsSaved] = useState(false);

    const kpiData = {
        activeShipments: shipments.length,
        pendingOptimization: shipments.filter(s => s.status === 'pending').length,
        avgUtilization: 88,
        co2Saved: 540
    };

    const handleCreateConsignment = (e) => {
        e.preventDefault();
        if (!newShipment.destination || !newShipment.volume || !newShipment.weight) return;

        const created = {
            id: `SH00${shipments.length + 1}`,
            destination: newShipment.destination,
            volume: `${newShipment.volume}m³`,
            weight: `${newShipment.weight}T`,
            deadline: newShipment.deadline || '30 Dec',
            status: 'pending'
        };

        setShipments([created, ...shipments]);
        setUploadSuccess(true);
        setNewShipment({ destination: '', volume: '', weight: '', deadline: '', category: 'FMCG' });
        setTimeout(() => setUploadSuccess(false), 3500);
    };

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <>
                        <KPISummary data={kpiData} />
                        <ShipmentManagement
                            shipments={shipments}
                            onRunOptimization={() => setShowOptimization(true)}
                        />
                        {showOptimization && <OptimizationResults />}
                        <LiveTracking />
                        <AnalyticsReports />
                    </>
                );

            case 'upload':
                return (
                    <div className="dashboard-section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Upload Consignment & Batch Manifest</h2>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                    Add individual packages or upload manifest spreadsheets for automated 3D volumetric clustering.
                                </span>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                                Active Consignments: {shipments.length}
                            </span>
                        </div>

                        {uploadSuccess && (
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <CheckCircle size={18} />
                                <strong>Consignment successfully queued!</strong> Ready for next optimization run.
                            </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                            {/* Manual Entry Form */}
                            <form onSubmit={handleCreateConsignment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Single Consignment Entry</h3>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        Destination Logistics Hub / City *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Delhi NCR North Depot"
                                        value={newShipment.destination}
                                        onChange={(e) => setNewShipment({ ...newShipment, destination: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                            Cargo Volume (m³) *
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 35"
                                            value={newShipment.volume}
                                            onChange={(e) => setNewShipment({ ...newShipment, volume: e.target.value })}
                                            required
                                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                            Payload Weight (Tons) *
                                        </label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            placeholder="e.g. 7.5"
                                            value={newShipment.weight}
                                            onChange={(e) => setNewShipment({ ...newShipment, weight: e.target.value })}
                                            required
                                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                            Dispatch Deadline
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 29 Dec, 18:00"
                                            value={newShipment.deadline}
                                            onChange={(e) => setNewShipment({ ...newShipment, deadline: e.target.value })}
                                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                            Cargo Category
                                        </label>
                                        <select
                                            value={newShipment.category}
                                            onChange={(e) => setNewShipment({ ...newShipment, category: e.target.value })}
                                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', background: '#fff' }}
                                        >
                                            <option value="FMCG">FMCG & Consumer Goods</option>
                                            <option value="Industrial">Heavy Industrial & Spares</option>
                                            <option value="Pharma">Pharmaceuticals (Ambient)</option>
                                            <option value="Electronics">Electronics & Hardware</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <Plus size={18} />
                                    Add Consignment to Queue
                                </button>
                            </form>

                            {/* Manifest Bulk Dropzone */}
                            <div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Bulk Manifest Upload</h3>
                                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '2.5rem 1.5rem', textAlign: 'center', background: '#f8fafc' }}>
                                    <Upload size={36} color="var(--color-primary, #E65100)" style={{ margin: '0 auto 0.75rem auto' }} />
                                    <strong style={{ display: 'block', color: '#0f172a', marginBottom: '0.25rem' }}>Drop your CSV / Excel manifest here</strong>
                                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>Supports standard SAP, Oracle WMS, and custom CSV schemas</p>
                                    <button type="button" className="btn-outline action-btn" onClick={() => alert('Sample manifest template (cargosathi_manifest_sample.csv) ready for download.')}>
                                        Download Sample Template (.CSV)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'optimize':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="dashboard-section">
                            <div className="section-header">
                                <div>
                                    <h2 className="section-title">Neural Load Optimization Studio</h2>
                                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                        Tune multi-stop consolidation parameters and match return backhaul trucks.
                                    </span>
                                </div>
                                <button className="btn btn-primary" onClick={() => setShowOptimization(true)}>
                                    Execute Optimization Engine
                                </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
                                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Pending Queue Volume</span>
                                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginTop: '0.2rem' }}>147 m³</div>
                                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>3 Target Corridors</span>
                                </div>
                                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Available Verified Trucks</span>
                                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary, #E65100)', marginTop: '0.2rem' }}>18 Carriers</div>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Within 25km radius</span>
                                </div>
                                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Projected Freight Savings</span>
                                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#16a34a', marginTop: '0.2rem' }}>₹68,400</div>
                                    <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>-34% vs isolated bookings</span>
                                </div>
                            </div>
                        </div>

                        <OptimizationResults />
                    </div>
                );

            case 'active':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <LiveTracking />
                        <ShipmentManagement
                            shipments={shipments}
                            onRunOptimization={() => setShowOptimization(true)}
                        />
                    </div>
                );

            case 'analytics':
                return <AnalyticsReports />;

            case 'co2':
                return (
                    <div className="dashboard-section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Green Logistics & ESG Compliance Report</h2>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                    Audited scope-3 greenhouse gas reductions generated through backhaul load matching.
                                </span>
                            </div>
                            <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.3rem 0.85rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                                ISO 14064-1 Compliant
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', margin: '1.5rem 0' }}>
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px' }}>
                                <Leaf size={24} color="#16a34a" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>540 kg</div>
                                <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>CO₂ Saved This Month</span>
                            </div>
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px' }}>
                                <Truck size={24} color="#16a34a" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>1,840 km</div>
                                <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>Empty Backhaul Avoided</span>
                            </div>
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px' }}>
                                <CheckCircle size={24} color="#16a34a" />
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.2rem 0' }}>94/100</div>
                                <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>Warehouse Eco Rating</span>
                            </div>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <strong style={{ display: 'block', color: '#0f172a', fontSize: '1rem' }}>Certificate of Carbon Offset (Q3 2026)</strong>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>Certified by Bhramanvahini ESG Registry • Cert ID: BV-ESG-2026-9041</span>
                            </div>
                            <button className="btn-outline action-btn" onClick={() => alert('Certificate PDF downloaded for auditor verification.')}>
                                Download ESG Certificate
                            </button>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="dashboard-section" style={{ maxWidth: '800px' }}>
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Warehouse Facility Profile & Dispatch Rules</h2>
                                <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                                    Manage loading bay capacity, dispatch contacts, and automated notifications.
                                </span>
                            </div>
                        </div>

                        {settingsSaved && (
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <CheckCircle size={18} />
                                Profile changes saved successfully.
                            </div>
                        )}

                        <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                    Warehouse Facility Name
                                </label>
                                <input
                                    type="text"
                                    value={facilityDetails.warehouseName}
                                    onChange={(e) => setFacilityDetails({ ...facilityDetails, warehouseName: e.target.value })}
                                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                    Facility Address & PIN
                                </label>
                                <input
                                    type="text"
                                    value={facilityDetails.location}
                                    onChange={(e) => setFacilityDetails({ ...facilityDetails, location: e.target.value })}
                                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        GSTIN Identification
                                    </label>
                                    <input
                                        type="text"
                                        value={facilityDetails.gstin}
                                        onChange={(e) => setFacilityDetails({ ...facilityDetails, gstin: e.target.value })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                                        Loading Bay / Dock Count
                                    </label>
                                    <input
                                        type="number"
                                        value={facilityDetails.loadingDocks}
                                        onChange={(e) => setFacilityDetails({ ...facilityDetails, loadingDocks: Number(e.target.value) })}
                                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: 'fit-content', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <Save size={16} />
                                Save Facility Preferences
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
            <WarehouseSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="main-content">
                <TopHeader
                    title="Warehouse Dashboard"
                    userRole="warehouse"
                    subtitle="Control Centre for Shipments & Optimization"
                />
                <div className="content-wrapper">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default WarehouseDashboard;