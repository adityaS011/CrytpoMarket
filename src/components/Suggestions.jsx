// suggestions.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
const Suggestions = () => {
  const [topCryptos, setTopCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 4,
              page: 1,
              sparkline: true,
            },
          }
        );
        setTopCryptos(response.data);
      } catch (error) {
        console.error('Error fetching top cryptocurrencies data:', error);
      }
    };

    fetchTopCryptos();
  }, []);

  const renderCryptoItems = () => {
    return (
      <div>
        {topCryptos.map((crypto) => (
          <div key={crypto.id}>
            <h2>{crypto.name}</h2>
            <p>Price: ${crypto.current_price}</p>
            <p>Percentage Change: {crypto.price_change_percentage_24h}%</p>
            <h2>{crypto.name} Sparkline</h2>
            <Line
              data={{
                labels: [...Array(7).keys()], // Create labels for 7 days
                datasets: [
                  {
                    label: crypto.name,
                    data: crypto.sparkline_in_7d.price, // Use sparkline data for prices
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointRadius: 3,
                    pointHitRadius: 5,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false, // Adjust chart size
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div>
      <h1>Suggestions</h1>
      <div className="crypto-container">
        {renderCryptoItems()}
      </div>
    </div>
  );
};

export default Suggestions;
