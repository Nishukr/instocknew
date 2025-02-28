import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    }); //  Added useState for formData

    const [message, setMessage] = useState(""); //  Added useState for message
    const navigate = useNavigate(); //  Defined navigate hook

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
    
                //  Store login status in localStorage
                localStorage.setItem("isLoggedIn", "true");
    
                //  Store user ID in localStorage
                const userId = data.userId || "USR" + Math.floor(100000 + Math.random() * 900000);
                localStorage.setItem("user", JSON.stringify({ userId }));
    
                //  Redirect to HomePage
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
