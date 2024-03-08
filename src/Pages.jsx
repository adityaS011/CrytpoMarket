import React,{useState, useEffect} from 'react';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Suggestions from './components/Suggestions'
import axios from 'axios';

const Pages = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 3,
              page: 1,
              sparkline: true,
            },
          }
        );

        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" flex flex-row">
      <div className="w-2/3 pr-4"> {/* 70% width with right padding */}
        {/* <Hero cryptoData={cryptoData} />
        <Suggestions/> */}
        {/* Add other components here for the left side */}
      </div>
      <div className=" w-[420px] h-12 right-0 mr-8 mt-8"> {/* 30% width */}
        <Sidebar cryptoData={cryptoData}/> {/* Right side fixed sidebar with width 30% */}
        
      </div>
    </div>
  );
}

export default Pages;
