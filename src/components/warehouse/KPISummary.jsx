// components/warehouse/KPISummary.jsx
import React from 'react';
import { Package, Clock, TrendingUp, Leaf } from 'lucide-react';

const KPISummary = ({ data }) => {
    const kpiCards = [
        {
            id: 'active',
            label: 'Active Shipments',
            value: data.activeShipments,
            icon: <Package size={22} />,
            color: '#2563eb',
            bg: '#eff6ff'
        },
        {
            id: 'pending',
            label: 'Pending Optimization',
            value: data.pendingOptimization,
            icon: <Clock size={22} />,
            color: '#ea580c',
            bg: '#fff7ed'
        },
        {
            id: 'utilization',
            label: 'Avg Truck Utilization',
            value: `${data.avgUtilization}%`,
            icon: <TrendingUp size={22} />,
            color: '#16a34a',
            bg: '#f0fdf4'
        },
        {
            id: 'co2',
            label: 'CO₂ Saved',
            value: `${data.co2Saved} kg`,
            icon: <Leaf size={22} />,
            color: '#059669',
            bg: '#ecfdf5'
        }
    ];

    return (
        <section className="kpi-section">
            <h2 className="section-title">At-a-Glance Metrics</h2>
            <div className="kpi-grid">
                {kpiCards.map((card) => (
                    <div key={card.id} className="kpi-card">
                        <div className="kpi-icon" style={{ backgroundColor: card.bg, color: card.color }}>
                            {card.icon}
                        </div>
                        <div className="kpi-content">
                            <h3 className="kpi-value">{card.value}</h3>
                            <p className="kpi-label">{card.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KPISummary;