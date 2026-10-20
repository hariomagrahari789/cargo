import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
    const userRole = localStorage.getItem('role');

    if (!userRole) {
        return <Navigate to="/" replace />;
    }

    if (allowedRole && userRole !== allowedRole) {
        if (userRole === 'warehouse') return <Navigate to="/warehouse-dashboard" replace />;
        if (userRole === 'truckDealer') return <Navigate to="/truck-dealer-dashboard" replace />;
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
