import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BuyOrderPage.css"; // Import CSS for styling

const BuyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3002/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Function to sell stock
  const handleSellStock = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3002/orders/${orderId}`); // Call backend API to delete
      setOrders(orders.filter((order) => order._id !== orderId)); // Remove from UI
    } catch (error) {
      console.error("Error selling stock:", error);
    }
  };

  return (
    <div className="container">
      <h2>See your Stocks</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Payment Mode</th>
            <th>Action</th> {/* Added column for selling */}
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                <td>
                  <button
                    className="btn btn-red"
                    onClick={() => handleSellStock(order._id)}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-orders">No orders placed yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BuyOrderPage;
