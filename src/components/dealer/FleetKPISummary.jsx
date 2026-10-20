// components/dealer/FleetKPISummary.jsx
import React from 'react';
import { Truck, TrendingUp, Package, Leaf } from 'lucide-react';

const FleetKPISummary = ({ data }) => {
    const kpiCards = [
        {
            id: 'total',
            label: 'Total Trucks',
            value: data.totalTrucks,
            icon: <Truck size={22} />,
            color: '#2563eb',
            bg: '#eff6ff'
        },
        {
            id: 'utilization',
            label: 'Avg Utilization %',
            value: `${data.avgUtilization}%`,
            icon: <TrendingUp size={22} />,
            color: '#ea580c',
            bg: '#fff7ed'
        },
        {
            id: 'trips',
            label: 'Active Trips',
            value: data.activeTrips,
            icon: <Package size={22} />,
            color: '#0284c7',
            bg: '#f0f9ff'
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
            <h2 className="section-title">Fleet Performance Overview</h2>
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

export default FleetKPISummary;