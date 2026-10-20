import React from 'react';
import { MapPin, Navigation, Clock, Phone, AlertCircle } from 'lucide-react';

const LiveTracking = () => {
    const liveShipments = [
        {
            id: 'TRK-9021',
            consignmentId: 'SH003',
            carrier: 'GATI KWE Express',
            vehicleNo: 'MH-04-GP-8119',
            driver: 'Rajesh Sharma',
            phone: '+91 98201 44512',
            route: 'Mumbai Hub → Bengaluru Logistics Park',
            progress: 72,
            currentLocation: 'Hubballi Toll Plaza (NH 48)',
            eta: 'Today, 18:30 IST',
            status: 'On Schedule'
        },
        {
            id: 'TRK-9025',
            consignmentId: 'SH002',
            carrier: 'VRL Logistics Ltd',
            vehicleNo: 'DL-1L-AB-3341',
            driver: 'Vikram Singh',
            phone: '+91 94140 88219',
            route: 'Delhi ICD → Pune Talegaon Hub',
            progress: 38,
            currentLocation: 'Jaipur Bypass Exit 4',
            eta: 'Tomorrow, 06:15 IST',
            status: 'Normal Transit'
        }
    ];

    return (
        <section className="dashboard-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Live Active In-Transit Tracking</h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Real-time GPS telematics with automated checkpoint updates.
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#16a34a', background: '#f0fdf4', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                    <span style={{ width: '8px', height: '8px', background: '#16a34a', borderRadius: '50%', display: 'inline-block' }}></span>
                    2 Active GPS Feeds Live
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {liveShipments.map((shipment) => (
                    <div
                        key={shipment.id}
                        style={{
                            background: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.85rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div>
                                <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>{shipment.route}</strong>
                                <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '0.75rem' }}>
                                    ID: {shipment.id} ({shipment.consignmentId})
                                </span>
                            </div>
                            <span style={{ background: '#e0f2fe', color: '#0284c7', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                                {shipment.status}
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: '#64748b', marginBottom: '0.35rem' }}>
                                <span>Progress: {shipment.progress}%</span>
                                <span>ETA: {shipment.eta}</span>
                            </div>
                            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${shipment.progress}%`, height: '100%', background: 'linear-gradient(90deg, #ea580c, #f97316)', borderRadius: '4px' }}></div>
                            </div>
                        </div>

                        {/* Telemetry info */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.825rem', color: '#475569', background: '#f8fafc', padding: '0.75rem', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <MapPin size={15} color="#ea580c" />
                                <span>{shipment.currentLocation}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Navigation size={15} color="#2563eb" />
                                <span>{shipment.vehicleNo} ({shipment.carrier})</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Phone size={15} color="#16a34a" />
                                <span>{shipment.driver}: {shipment.phone}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiveTracking;
