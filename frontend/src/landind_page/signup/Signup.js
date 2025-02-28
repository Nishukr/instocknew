import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";  
import './Signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();  

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://localhost:3002/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Signup successful! Redirecting to login...");

                // Redirect to Login Page after 2 seconds
                setTimeout(() => {
                    navigate("/login");  // Redirect to Login Page
                }, 2000);
            } else {
                setMessage(data.error || "Signup failed.");
            }
        } catch (error) {
            setMessage("Error connecting to server.");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-title">Create an Account</h2>
                {message && <p className="signup-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;
