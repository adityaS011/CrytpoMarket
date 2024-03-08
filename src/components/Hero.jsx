import React, { useState, useEffect } from 'react';

import bitcoinGraph from '../assets/bitcoinGraph.png'
import axios from 'axios';

const Hero = () => {
  const [topCoinData, setTopCoinData] = useState({});
  const inrValue = topCoinData.current_price * topCoinData.conversion_rate;
  useEffect(() => {
    const fetchTopCoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 1,
              page: 1,
              sparkline: true,
            },
          }
        );
        setTopCoinData(response.data[0]);
      } catch (error) {
        console.error('Error fetching top coin data:', error);
      }
    };

    fetchTopCoinData();
  }, []);

  return (
    <>
      <div className='mt-4'>
        <button className="text-gray-500 ml-7 ">Cryptocurrencies</button>
        <span className="mx-1 ">&gt;&gt;</span>
        <button className="font-[500]  text-black-800">{topCoinData.name}</button>
      </div>
      <div className='bg-white p-4 h-screen mt-4 ml-7 rounded-lg'>
        <ul className='p-4'>
          <li className='flex items-center'>
            <img
              src={topCoinData.image}
              alt={topCoinData.name}
              style={{ width: '40px', marginRight: '8px' }}
            />
            <span className='font-semibold text-2xl mr-2'>{topCoinData.name}</span>
            <div className='text-gray-500 font-semibold text-[1.05rem] flex'>
              {topCoinData.symbol?.toUpperCase()}
            </div>
            <div className='ml-7 bg-slate-500 font-medium text-white text-[17px] py-2 px-2 rounded-lg'>Rank #1</div>
          </li>
        </ul>
        <div className='flex text-xl mt-4 flex-col'>
          <div className='flex flex-row'>
            <p className='ml-4 text-3xl font-[650]'> ${topCoinData.current_price?.toLocaleString()}.00</p>
            <p className='text-[18px] font-[600] ml-12 text-green-500'>
              <i>&#9650; </i>
              {topCoinData.price_change_percentage_24h?.toFixed(2)}%
              <b className='font-medium text-[15px] text-slate-500 ml-4'> (24H)</b>
            </p>
          </div>
          {/* Line break here */}
          <p className='ml-4 pt-1 text-lg font-semibold'>₹{topCoinData.market_data?.current_price.inr.toLocaleString()}</p>
        </div>
        <div className='bg-gray-300 h-px my-4 w-[50rem] hidden lg:flex mx-auto'></div>

        {/* Display the Line Chart */}
        <div className='flex justify-center cursor-pointer'>
          <img
            src={bitcoinGraph}
            alt="graph_bitcoin"
            width={800}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;




