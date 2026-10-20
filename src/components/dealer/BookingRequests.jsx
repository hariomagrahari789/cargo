// components/dealer/BookingRequests.jsx
import React from 'react';
import { Check, X, AlertCircle, Truck } from 'lucide-react';

const BookingRequests = ({ requests, setRequests }) => {
    const handleApprove = (id) => {
        setRequests(prev => prev.filter(req => req.id !== id));
    };

    const handleReject = (id) => {
        setRequests(prev => prev.filter(req => req.id !== id));
    };

    return (
        <section className="booking-requests-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">
                        Booking Requests
                        <span className="badge">{requests.length} new</span>
                    </h2>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                        Warehouse dispatch match requests ready for driver & vehicle assignment.
                    </span>
                </div>
            </div>

            <div className="requests-list">
                {requests.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
                        All booking requests have been reviewed.
                    </div>
                ) : (
                    requests.map(request => (
                        <div key={request.id} className="request-card">
                            <div className="request-header">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span className="request-id">{request.id}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                                        {request.warehouse}
                                    </span>
                                </div>
                                <div className="priority-tag">
                                    <AlertCircle size={13} />
                                    High Priority
                                </div>
                            </div>
                            <div className="request-details">
                                <div className="detail-row">
                                    <span className="label">Route:</span>
                                    <span className="value">{request.route}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Volume:</span>
                                    <span className="value">{request.volume}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Capacity Fill:</span>
                                    <span className="value highlight">{request.utilization}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Required By:</span>
                                    <span className="value">{request.deadline}</span>
                                </div>
                            </div>
                            <div className="request-actions">
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleApprove(request.id)}
                                >
                                    <Check size={15} />
                                    Approve & Assign
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleReject(request.id)}
                                >
                                    <X size={15} />
                                    Decline
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default BookingRequests;