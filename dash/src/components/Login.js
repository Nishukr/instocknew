import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({
        name: "",  // Added name field
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
                body: JSON.stringify(formData), // Sending name to backend too
            });
    
            const data = await response.json();
            if (response.ok) {
                setMessage("Login successful!");
    
                // Store login status and user details in localStorage
                localStorage.setItem("isLoggedIn", "true");

                const userId = data.userId || "USR" + Math.floor(100000 + Math.random() * 900000);
                localStorage.setItem("user", JSON.stringify({ 
                    userId, 
                    name: formData.name // Storing username 
                }));
    
                // Redirect to HomePage
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
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login Here</h2>
                {message && <p className="login-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input 
                            type="text"  // Changed to text type
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
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
