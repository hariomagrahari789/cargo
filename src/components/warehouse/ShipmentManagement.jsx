// components/warehouse/ShipmentManagement.jsx
import React, { useState } from 'react';
import { Upload, Play, Edit2 } from 'lucide-react';

const ShipmentManagement = ({ shipments, onRunOptimization }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Shipments' },
        { id: 'pending', label: 'Pending' },
        { id: 'optimized', label: 'Optimized' },
        { id: 'in-transit', label: 'In Transit' },
        { id: 'delivered', label: 'Delivered' }
    ];

    const filteredShipments = activeFilter === 'all'
        ? shipments
        : shipments.filter(s => s.status.toLowerCase() === activeFilter.toLowerCase());

    return (
        <section className="shipment-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Shipment Management</h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Track and consolidate active consignments for optimized dispatch.
                    </span>
                </div>
                <div className="section-actions">
                    <button className="btn btn-primary">
                        <Upload size={16} />
                        Upload New Shipment
                    </button>
                    <button className="btn btn-secondary" onClick={onRunOptimization}>
                        <Play size={16} />
                        Run Optimization
                    </button>
                </div>
            </div>

            <div className="filter-tabs">
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="shipment-list">
                {filteredShipments.map(shipment => (
                    <div key={shipment.id} className="shipment-card">
                        <div className="shipment-header">
                            <div className="shipment-id">{shipment.id}</div>
                            <div className="shipment-status">
                                <span className={`status-badge ${shipment.status.toLowerCase()}`}>
                                    {shipment.status}
                                </span>
                            </div>
                        </div>
                        <div className="shipment-details">
                            <div className="detail-item">
                                <span className="detail-label">Destination:</span>
                                <span className="detail-value">{shipment.destination}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Volume/Weight:</span>
                                <span className="detail-value">{shipment.volume} / {shipment.weight}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Deadline:</span>
                                <span className="detail-value">{shipment.deadline}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShipmentManagement;