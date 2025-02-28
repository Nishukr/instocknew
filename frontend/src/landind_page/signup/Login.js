import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  

import "./Login.css";


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();  

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://localhost:3002/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Login successful!");
                
            
                setTimeout(() => {
                    navigate("/");   
                }, 1500);
            } else {
                setMessage(data.error || "Invalid credentials.");
            }
        } catch (error) {
            setMessage("Error connecting to server.");
        }
    };

    return (
        <div className="lignup-container">
            <div className="login-box">
                <h2 className="lignup-title">Login Here</h2>
                {message && <p className="signup-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    {/* <div className="input-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div> */}
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
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                
            </div>
        </div>
        );
    }
    

export default Login;
