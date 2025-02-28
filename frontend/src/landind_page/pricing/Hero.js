import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hero() {
  const [prices, setPrices] = useState({ NSE: null, BSE: null });

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        // Fetching from Yahoo Finance API using a public proxy
        const nseResponse = await axios.get(
          `https://query1.finance.yahoo.com/v7/finance/quote?symbols=RELIANCE.NS`
        );
        const bseResponse = await axios.get(
          `https://query1.finance.yahoo.com/v7/finance/quote?symbols=RELIANCE.BO`
        );

        console.log('NSE Response:', nseResponse.data);
        console.log('BSE Response:', bseResponse.data);

        setPrices({
          NSE: nseResponse.data.quoteResponse.result[0]?.regularMarketPrice || 'N/A',
          BSE: bseResponse.data.quoteResponse.result[0]?.regularMarketPrice || 'N/A',
        });
      } catch (error) {
        console.error('Error fetching stock prices:', error);
      }
    };

    fetchStockPrices();
  }, []);

  return (
    <div className="container text-center">
      <h1>Stock Prices</h1>
      <p>NSE: {prices.NSE || 'Loading...'}</p>
      <p>BSE: {prices.BSE || 'Loading...'}</p>
    </div>
  );
}

export default Hero;
