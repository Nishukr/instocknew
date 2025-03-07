import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hero() {
  const [prices, setPrices] = useState({ NSE: null, BSE: null });
  const API_KEY = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=TSCO.LON&apikey=7FDCSM9EJMBL8J3Q"; // Correct API Key

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        // Fetch BSE stock price
        const bseResponse = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "GLOBAL_QUOTE",
            symbol: "RELIANCE.BO",
            apikey: API_KEY,
          },
        });

        // Wait for 10 seconds to avoid API limit
        await new Promise(resolve => setTimeout(resolve, 10000));

        // Fetch NSE stock price
        const nseResponse = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "GLOBAL_QUOTE",
            symbol: "RELIANCE.NS", 
            apikey: API_KEY,
          },
        });

        console.log("BSE Response:", bseResponse.data);
        console.log("NSE Response:", nseResponse.data);

        setPrices({
          BSE: bseResponse.data["Global Quote"]?.["05. price"] || 'N/A',
          NSE: nseResponse.data["Global Quote"]?.["05. price"] || 'N/A',
        });
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      }
    };

    fetchStockPrices();
  }, []);

  return (
    <div className="container text-center">
      <h1>Stock Prices</h1>
      <p>BSE: {prices.BSE || 'Loading...'}</p>
      <p>NSE: {prices.NSE || 'Loading...'}</p>
    </div>
  );
}

export default Hero;
