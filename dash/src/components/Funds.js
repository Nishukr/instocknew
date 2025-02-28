import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Funds.css"; // Ensure you have appropriate styles for button alignment

const Funds = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status (example using localStorage)
    const userStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userStatus);
  }, []);

  return (
    <div className="funds-container">
      <p>Your Instock Wallet</p>

      {/* Buttons Section */}
      <div className="funds-buttons">
        {isLoggedIn && (
          <Link to="/add-funds" className="btn btn-blue">
            Add Funds
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/withdraw-funds" className="btn btn-blue">
            Withdraw
          </Link>
        )}
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
};

export default Funds;
