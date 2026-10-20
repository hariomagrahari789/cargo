import React, { useState } from 'react';
import { Truck, Plus, CheckCircle, AlertTriangle, ShieldCheck, Wrench } from 'lucide-react';

const FleetManagement = () => {
    const [fleet, setFleet] = useState([
        { id: 'TRK-101', regNo: 'MH-12-RN-9901', type: '32ft Multi-Axle Container', capacity: '16T / 82m³', driver: 'Gurpreet Singh', status: 'In Transit', health: 96 },
        { id: 'TRK-102', regNo: 'DL-01-AX-4822', type: '24ft Closed Container', capacity: '9T / 45m³', driver: 'Ramesh Yadav', status: 'Available', health: 92 },
        { id: 'TRK-103', regNo: 'KA-05-MK-3108', type: '32ft MXL High-Cube', capacity: '18T / 90m³', driver: 'M. Selvam', status: 'In Transit', health: 98 },
        { id: 'TRK-104', regNo: 'GJ-06-TT-7740', type: '20ft Direct Express', capacity: '7T / 32m³', driver: 'Imran Khan', status: 'Maintenance', health: 74 },
        { id: 'TRK-105', regNo: 'TN-09-BK-4112', type: '32ft Multi-Axle Container', capacity: '16T / 82m³', driver: 'K. Balaji', status: 'Available', health: 95 }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newTruck, setNewTruck] = useState({
        regNo: '',
        type: '32ft Multi-Axle Container',
        capacity: '',
        driver: ''
    });

    const handleAddTruck = (e) => {
        e.preventDefault();
        if (!newTruck.regNo || !newTruck.driver) return;

        const created = {
            id: `TRK-${100 + fleet.length + 1}`,
            regNo: newTruck.regNo,
            type: newTruck.type,
            capacity: newTruck.capacity || '14T / 70m³',
            driver: newTruck.driver,
            status: 'Available',
            health: 98
        };

        setFleet([created, ...fleet]);
        setShowAddModal(false);
        setNewTruck({ regNo: '', type: '32ft Multi-Axle Container', capacity: '', driver: '' });
    };

    return (
        <section className="dashboard-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Fleet Asset & Driver Management</h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Manage vehicle health telemetry, driver assignments, and active road availability.
                    </span>
                </div>
                <button
                    className="btn-primary action-btn"
                    onClick={() => setShowAddModal(!showAddModal)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                    <Plus size={16} />
                    {showAddModal ? 'Cancel' : 'Register Vehicle'}
                </button>
            </div>

            {showAddModal && (
                <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                        Register New Fleet Vehicle
                    </h3>
                    <form onSubmit={handleAddTruck} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'flex-end' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>Vehicle Registration No. *</label>
                            <input
                                type="text"
                                placeholder="e.g. MH-04-AB-1234"
                                value={newTruck.regNo}
                                onChange={(e) => setNewTruck({ ...newTruck, regNo: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>Vehicle Configuration</label>
                            <select
                                value={newTruck.type}
                                onChange={(e) => setNewTruck({ ...newTruck, type: e.target.value })}
                                style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', background: '#fff' }}
                            >
                                <option>32ft Multi-Axle Container</option>
                                <option>24ft Closed Container</option>
                                <option>20ft Direct Express</option>
                                <option>32ft MXL High-Cube</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>Assigned Primary Driver *</label>
                            <input
                                type="text"
                                placeholder="e.g. Sandeep Patil"
                                value={newTruck.driver}
                                onChange={(e) => setNewTruck({ ...newTruck, driver: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ padding: '0.55rem 1rem', height: 'fit-content' }}>
                            Save Vehicle
                        </button>
                    </form>
                </div>
            )}

            <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Vehicle ID & Reg</th>
                            <th>Body Type</th>
                            <th>Rated Capacity</th>
                            <th>Assigned Driver</th>
                            <th>Telemetry Status</th>
                            <th>Asset Health</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fleet.map((t) => (
                            <tr key={t.id}>
                                <td>
                                    <strong style={{ color: '#0f172a' }}>{t.regNo}</strong>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>{t.id}</span>
                                </td>
                                <td>{t.type}</td>
                                <td>{t.capacity}</td>
                                <td>{t.driver}</td>
                                <td>
                                    <span
                                        className="status-badge"
                                        style={{
                                            background: t.status === 'Available' ? '#dcfce7' : t.status === 'In Transit' ? '#e0f2fe' : '#fef3c7',
                                            color: t.status === 'Available' ? '#15803d' : t.status === 'In Transit' ? '#0369a1' : '#b45309'
                                        }}
                                    >
                                        {t.status}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '60px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ width: `${t.health}%`, height: '100%', background: t.health > 80 ? '#16a34a' : '#eab308' }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.health}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FleetManagement;
