// components/common/TopHeader.jsx
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const TopHeader = ({ title, subtitle, userRole }) => {
    return (
        <header className="top-header">
            <div className="header-left">
                <h1 className="page-title">{title}</h1>
                <p className="page-subtitle">{subtitle}</p>
            </div>
            <div className="header-right">
                <div className="search-bar">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search shipment/truck ID..."
                        className="search-input"
                    />
                </div>
                <button className="notification-btn">
                    <Bell size={20} />
                    <span className="notification-badge">3</span>
                </button>
                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">
                            {userRole === 'warehouse' ? 'Warehouse Manager' : 'Truck Dealer'}
                        </span>
                        <span className="user-role">{userRole}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;