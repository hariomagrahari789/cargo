import React from 'react';

const ActiveTrips = () => {
    const trips = [
        { id: 'T01', truck: 'MH-12-AB-1234', from: 'Mumbai', to: 'Delhi', status: 'On Route', progress: 65 },
        { id: 'T02', truck: 'KA-01-XY-9876', from: 'Bangalore', to: 'Chennai', status: 'Loading', progress: 10 },
        { id: 'T03', truck: 'DL-04-GH-4567', from: 'Delhi', to: 'Jaipur', status: 'Completed', progress: 100 },
    ];

    return (
        <section className="dashboard-section">
            <div className="section-header">
                <h2 className="section-title">Active Trips Tracking</h2>
                <button className="btn-outline action-btn">View Map</button>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Trip ID</th>
                        <th>Truck Number</th>
                        <th>Route</th>
                        <th>Status</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.id}</td>
                            <td>{trip.truck}</td>
                            <td>{trip.from} → {trip.to}</td>
                            <td>
                                <span className={`status-badge ${trip.status.toLowerCase().replace(' ', '-')}`}>
                                    {trip.status}
                                </span>
                            </td>
                            <td>
                                <div style={{ width: '100px', height: '6px', background: '#eee', borderRadius: '3px' }}>
                                    <div style={{
                                        width: `${trip.progress}%`,
                                        height: '100%',
                                        background: 'var(--color-primary)',
                                        borderRadius: '3px'
                                    }}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ActiveTrips;
