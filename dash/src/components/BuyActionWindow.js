import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {  //  Default mode to "BUY"
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showPopup, setShowPopup] = useState(false);

  const handleTransaction = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        uid: uid,
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode, // BUY or SELL
      });

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        closeBuyWindow();
      }, 2000);
    } catch (error) {
      console.error(`Error ${mode ? mode.toLowerCase() : "buy"}ing stock:`, error); // ✅ Prevent error if mode is undefined
      alert(`Failed to ${mode.toLowerCase()} stock. Try again.`);
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link 
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`} 
            onClick={handleTransaction}
          >
            {mode} {/*  Fixed text issue */}
          </Link>
          <Link to="" className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>You have successfully {mode.toLowerCase()}ed the stock!</p>
        </div>
      )}
    </div>
  );
};

export default BuyActionWindow;
