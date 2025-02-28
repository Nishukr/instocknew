import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WithdrawFunds.css";

const WithdrawFunds = () => {
  const [userId, setUserId] = useState("12345"); // Replace with real authentication
  const [amount, setAmount] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  useEffect(() => {
    if (!userId) return;
    axios.get(`http://localhost:3002/api/wallet/${userId}`)
      .then(response => setWalletBalance(response.data.balance))
      .catch(() => setMessage("Error fetching wallet balance."));
  }, [userId]);

  const handleWithdrawFunds = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }
    if (parseFloat(amount) > walletBalance) {
      setMessage("Insufficient balance.");
      return;
    }
    if (!bank || !accountNumber || !ifscCode) {
      setMessage("Please provide bank details.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/api/wallet/withdraw-funds", {
        userId,
        amount: parseFloat(amount),
        bank,
        accountNumber,
        ifscCode,
      });

      setWalletBalance(response.data.balance);
      setMessage(`₹${amount} withdrawn successfully to ${bank}!`);
      setAmount("");
      setBank("");
      setAccountNumber("");
      setIfscCode("");
    } catch (error) {
      setMessage("Error withdrawing funds.");
    }
  };

  return (
    <div>
      <h2>Withdraw Funds</h2>
      <label>Select Bank:</label>
      <select value={bank} onChange={(e) => setBank(e.target.value)}>
        <option value="">Select Bank</option>
        <option value="HDFC">HDFC</option>
        <option value="ICICI">ICICI</option>
        <option value="SBI">SBI</option>
        <option value="Axis">Axis</option>
      </select>

      <label>Account Number:</label>
      <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter Account Number" />

      <label>IFSC Code:</label>
      <input type="text" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} placeholder="Enter IFSC Code" />

      <label>Enter Amount (₹):</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />

      <button onClick={handleWithdrawFunds}>Withdraw</button>

      <p>Wallet Balance: ₹{walletBalance}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WithdrawFunds;
