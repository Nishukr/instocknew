import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddFunds.css";

const generateCaptcha = () => Math.floor(1000 + Math.random() * 9000).toString();

const AddFunds = () => {
  const [userId, setUserId] = useState("12345"); // Replace with real authentication
  const [amount, setAmount] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    if (!userId) return;
    axios.get(`http://localhost:3002/api/wallet/${userId}`)
      .then(response => setWalletBalance(response.data.balance))
      .catch(() => setMessage("Error fetching wallet balance."));
  }, [userId]);

  const handleAddFunds = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }
    if (captchaInput !== captcha) {
      setMessage("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/api/add-funds", {
        userId,
        amount: parseFloat(amount),
      });

      setWalletBalance(response.data.balance);
      setMessage(`₹${amount} added successfully!`);
      setAmount("");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    } catch (error) {
      setMessage("Error adding funds.");
    }
  };

  return (
    <div className="add-funds-container">
      <h2>Add Funds</h2>
      <div className="input-group">
        <label>Enter Amount (₹):</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="input-group captcha-group">
        <label>Enter CAPTCHA:</label>
        <div className="captcha-box">
          <span className="captcha">{captcha}</span>
          <button onClick={() => setCaptcha(generateCaptcha())}>↻</button>
        </div>
        <input type="text" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
      </div>
      <button onClick={handleAddFunds}>Add Funds</button>
      <p>Wallet Balance: ₹{walletBalance}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFunds;
