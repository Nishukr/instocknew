import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  // Function to redirect to the dashboard
  const handleGoToDashboard = () => {
    window.location.href = "http://localhost:3001/";
  };

  return (
    <>
      <Hero />

      {/* Instock Dashboard Section */}
      <LeftSection
        imageURL="media/images/dash1.1.png"
        productName="Instock Dashboard"
        productDesription="The Instock Dashboard is your all-in-one platform for managing your investments, tracking portfolio performance, and executing trades. With real-time data, analytics, and insights, stay ahead in the stock market effortlessly."
      />

      {/* Orders Section (Previously Console) */}
      <RightSection
        imageURL="media/images/dash1.2.png"
        productName="Orders"
        productDesription="Track all your buy and sell orders in one place. View order history, pending transactions, and executed trades with detailed insights to optimize your trading strategy."
      />

      {/* Buying & Selling Stocks */}
      <LeftSection
        imageURL="media/images/buy-sell.png"
        productName="Buy & Sell Stocks"
        productDesription="Easily buy and sell stocks with just a few clicks. Our intuitive interface ensures smooth transactions with real-time market prices, advanced charting tools, and seamless execution."
      />

      {/* Dashboard Access Button */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Explore Instock Dashboard</h2>
        <p style={{ maxWidth: "6000px", margin: "auto" }}>
          Take control of your trading experience with the Instock Dashboard. Monitor your investments, execute trades, and manage your portfolio efficiently.  
          Click the button below to get started.
        </p>
        <button
          onClick={handleGoToDashboard}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Dashboard
        </button>
      </div>

      {/* Footer */}
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        Want to know more about our technology stack? Check out the Instock.tech blog.
      </p>
    </>
  );
}

export default ProductPage;
