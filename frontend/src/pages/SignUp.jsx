import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Sign Up Successful! Redirecting to Login...');
                setFormData({
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    agreeToTerms: false
                });
                setTimeout(() => navigate('/login'), 2000); // Delay redirect slightly to see toast
            } else {
                toast.error(data.message || 'Sign Up failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-header">
                    <h2>Create an Account 🚀</h2>
                    <p>Join Crop-Sathi to get smart farming insights</p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-options">
                        <div className="agree-terms">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeToTerms">I agree to the <Link to="/terms">Terms & Conditions</Link></label>
                        </div>
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>

                <div className="signup-footer">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
