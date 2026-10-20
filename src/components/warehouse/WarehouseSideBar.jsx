import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Upload,
    Truck,
    Package,
    BarChart3,
    Leaf,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Building2
} from 'lucide-react';

const WarehouseSidebar = ({ activeSection, setActiveSection }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'upload', label: 'Upload Shipment', icon: Upload },
        { id: 'optimize', label: 'Optimize Trucks', icon: Truck },
        { id: 'active', label: 'Active Shipments', icon: Package },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'co2', label: 'CO₂ Reports', icon: Leaf },
        { id: 'settings', label: 'Profile & Settings', icon: Settings },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <aside className={`sidebar warehouse-sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-container">
                    <div className="logo-icon">
                        <Building2 size={24} className="text-white" />
                    </div>
                    {!collapsed && (
                        <div>
                            <h2 className="logo">Bhramanvahini</h2>
                            <span className="role-badge">Warehouse</span>
                        </div>
                    )}
                </div>
                <button
                    className="sidebar-toggle"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    {collapsed ? (
                        <ChevronRight size={20} className="text-gray-400" />
                    ) : (
                        <ChevronLeft size={20} className="text-gray-400" />
                    )}
                </button>
            </div>

            <div className="sidebar-divider"></div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                            data-tooltip={collapsed ? item.label : ''}
                            title={collapsed ? item.label : ''}
                        >
                            <div className="nav-icon-container">
                                <Icon
                                    size={20}
                                    className={activeSection === item.id ? 'text-gray-900' : 'text-gray-300'}
                                />
                            </div>
                            {!collapsed && (
                                <>
                                    <span className="nav-label">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="active-indicator"></div>
                                    )}
                                </>
                            )}
                        </button>
                    );
                })}
            </nav>

            <div className="sidebar-spacer"></div>

            <button className="logout-btn" onClick={handleLogout} title={collapsed ? 'Logout' : ''}>
                <div className="logout-icon">
                    <LogOut size={20} className="text-gray-300" />
                </div>
                {!collapsed && <span className="logout-label">Logout</span>}
            </button>
        </aside>
    );
};

export default WarehouseSidebar;