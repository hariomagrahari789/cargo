import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Authpop.css';
// Shared constants and styles
const COLORS = {
    saffron: '#E65100',
    deepGreen: '#1B5E20',
    offWhite: '#F9FAF7',
    charcoal: '#212121',
    steelGrey: '#546E7A',
};

const AuthPopup = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const popupContent = (
        <div className="auth-popup-overlay" onClick={onClose}>
            <div className="auth-popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                {/* Visual Panel - Hidden on mobile */}
                <div className="visual-panel">
                    <div className="brand-section">
                        <h1 className="logo">Bhramanvahini</h1>
                        <p className="tagline">"Har Truck Ka Sahi Sathi"</p>
                        <p className="subtext">Smart truck optimization for a greener Bharat.</p>
                    </div>
                </div>

                {/* Form Panel */}
                <div className="form-panel">
                    <div className="auth-switcher">
                        <button
                            className={`auth-tab ${isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`auth-tab ${!isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {isLogin ? <LoginComponent onClose={onClose} /> : <SignupComponent onClose={onClose} />}
                </div>
            </div>
        </div>
    );

    return createPortal(popupContent, document.body);
};

const LoginComponent = ({ onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'warehouse'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleQuickAccess = (role) => {
        localStorage.setItem('token', 'test-dummy-token');
        localStorage.setItem('role', role);
        if (onClose) onClose();
        navigate(role === 'warehouse'
            ? '/warehouse-dashboard'
            : '/truck-dealer-dashboard');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Test Credentials Bypass
        if (formData.email === 'test@cargosathi.com' && formData.password === 'testpass') {
            setTimeout(() => {
                localStorage.setItem('token', 'test-dummy-token');
                localStorage.setItem('role', formData.role);
                if (onClose) onClose();
                navigate(formData.role === 'warehouse'
                    ? '/warehouse-dashboard'
                    : '/truck-dealer-dashboard');
            }, 1000);
            return;
        }

        try {
            const response = await axios.post('/api/auth/login', formData);

            // Store token and redirect
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', formData.role);
            if (onClose) onClose();

            // Redirect based on role
            navigate(formData.role === 'warehouse'
                ? '/warehouse-dashboard'
                : '/truck-dealer-dashboard');

        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            if (formData.email !== 'test@cargosathi.com') {
                setLoading(false);
            }
        }
    };

    return (
        <section className="login-section">
            <div className="auth-header">
                <h2>Welcome Back</h2>
                <p>Log in to manage shipments, trucks, and optimization.</p>
            </div>

            {/* Instant Quick Access Buttons */}
            <div className="quick-demo-access">
                <div className="quick-demo-header">
                    <span className="quick-demo-badge">INSTANT DEMO</span>
                    <span className="quick-demo-text">Direct 1-click dashboard access:</span>
                </div>
                <div className="quick-demo-buttons">
                    <button
                        type="button"
                        className="quick-demo-btn warehouse"
                        onClick={() => handleQuickAccess('warehouse')}
                    >
                        <span className="quick-demo-icon">🏭</span>
                        <div>
                            <strong>Enter as Warehouse Manager</strong>
                            <small>Consignments, 3D Packing & Route Optimization</small>
                        </div>
                        <span className="quick-demo-arrow">→</span>
                    </button>
                    <button
                        type="button"
                        className="quick-demo-btn dealer"
                        onClick={() => handleQuickAccess('truckDealer')}
                    >
                        <span className="quick-demo-icon">🚛</span>
                        <div>
                            <strong>Enter as Truck Dealer / Driver</strong>
                            <small>Fleet Telematics & Instant Backhaul Bookings</small>
                        </div>
                        <span className="quick-demo-arrow">→</span>
                    </button>
                </div>
                <div className="quick-demo-divider">
                    <span>or sign in with password</span>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Role Selector */}
                <div className="role-selector">
                    <div className="role-options">
                        <button
                            type="button"
                            className={`role-btn ${formData.role === 'warehouse' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, role: 'warehouse' })}
                        >
                            <span>🏭</span> Warehouse
                        </button>
                        <button
                            type="button"
                            className={`role-btn ${formData.role === 'truckDealer' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, role: 'truckDealer' })}
                        >
                            <span>🚛</span> Truck Dealer
                        </button>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email / Phone"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <small className="security-note">
                        Secure login with JWT authentication
                    </small>
                </div>

                {error && <div className="error-message">{error}</div>}

                {/* Login Actions */}
                <button type="submit" className="primary-btn" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>

                <div className="auth-links">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </form>

            {/* Trust Signals */}
            <div className="trust-signals">
                <small>Data secured with industry standards</small>
                <small>Used by warehouses & transporters across India</small>
            </div>
        </section>
    );
};

const SignupComponent = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        warehouseName: '',
        location: '',
        companyName: '',
        serviceRegions: '',
        fleetSize: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRoleSelect = (role) => {
        setFormData({ ...formData, role });
        setStep(2);
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setStep(3);
    };

    const handleFinalSubmit = async () => {
        setLoading(true);
        setError('');

        // Test Credentials Bypass for Signup
        if (formData.email === 'test@cargosathi.com') {
            setTimeout(() => {
                localStorage.setItem('token', 'test-dummy-token');
                localStorage.setItem('role', formData.role);
                navigate(formData.role === 'warehouse'
                    ? '/warehouse-dashboard'
                    : '/truck-dealer-dashboard');
            }, 1000);
            return;
        }

        const signupData = {
            role: formData.role,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            ...(formData.role === 'warehouse' && {
                warehouseName: formData.warehouseName,
                location: formData.location
            }),
            ...(formData.role === 'truckDealer' && {
                companyName: formData.companyName,
                serviceRegions: formData.serviceRegions,
                fleetSize: formData.fleetSize
            })
        };

        try {
            await axios.post('/api/auth/signup', signupData);

            // Auto login after signup
            const loginResponse = await axios.post('/api/auth/login', {
                email: formData.email,
                password: formData.password,
                role: formData.role
            });

            localStorage.setItem('token', loginResponse.data.token);
            localStorage.setItem('role', formData.role);

            navigate(formData.role === 'warehouse'
                ? '/warehouse-dashboard'
                : '/truck-dealer-dashboard');

        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        } finally {
            if (formData.email !== 'test@cargosathi.com') {
                setLoading(false);
            }
        }
    };

    return (
        <section className="signup-section">
            <div className="auth-header">
                <h2>Join Bhramanvahini</h2>
                <p>Optimize logistics. Reduce costs. Move smarter.</p>
            </div>

            {/* Progress Indicator */}
            <div className="progress-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className="line"></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className="line"></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>

            {step === 1 && (
                <div className="role-selection">
                    <h3>Select Your Role</h3>
                    <div className="role-cards">
                        <div
                            className={`role-card ${formData.role === 'warehouse' ? 'selected' : ''}`}
                            onClick={() => handleRoleSelect('warehouse')}
                        >
                            <span>🏭</span>
                            <h4>Warehouse User</h4>
                            <p>Manage shipments and optimize warehouse operations</p>
                        </div>
                        <div
                            className={`role-card ${formData.role === 'truckDealer' ? 'selected' : ''}`}
                            onClick={() => handleRoleSelect('truckDealer')}
                        >
                            <span>🚛</span>
                            <h4>Truck Dealer</h4>
                            <p>Connect your fleet with smart logistics solutions</p>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <form onSubmit={handleStep2Submit}>
                    <h3>Basic Details</h3>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="step-actions">
                        <button
                            type="button"
                            className="secondary-btn"
                            onClick={() => setStep(1)}
                        >
                            Back
                        </button>
                        <button type="submit" className="primary-btn">
                            Continue
                        </button>
                    </div>
                </form>
            )}

            {step === 3 && (
                <div className="confirmation-step">
                    <h3>Role-Specific Details</h3>

                    {formData.role === 'warehouse' ? (
                        <>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Warehouse Name"
                                    required
                                    value={formData.warehouseName}
                                    onChange={(e) => setFormData({ ...formData, warehouseName: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Location (City/State)"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Company / Owner Name"
                                    required
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Service Regions"
                                    required
                                    value={formData.serviceRegions}
                                    onChange={(e) => setFormData({ ...formData, serviceRegions: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Fleet Size (range)"
                                    value={formData.fleetSize}
                                    onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                                />
                            </div>
                        </>
                    )}

                    <div className="terms-section">
                        <label className="checkbox-label">
                            <input type="checkbox" required />
                            I accept the Terms & Conditions and Privacy Policy
                        </label>
                        <small className="trust-note">
                            Your data stays private. No spam. No misuse.
                        </small>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="step-actions">
                        <button
                            type="button"
                            className="secondary-btn"
                            onClick={() => setStep(2)}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="primary-btn"
                            onClick={handleFinalSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AuthPopup;