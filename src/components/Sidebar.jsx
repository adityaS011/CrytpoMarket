
import React from 'react';
import koinxSider from '../assets/koinXsider.png';


const Sidebar = ({cryptoData}) => {

  return (
    <div className='lg:flex flex-col hidden'>
    <div className='bg-gradient-to-b from-blue-600 via-blue-700 to-blue-600 w-full mt-5 p-9 flex flex-col items-center text-center justify-center rounded-xl'>
      <h1 className='text-white font-semibold text-3xl mb-4'>Get Started with KoinX for FREE</h1>
      <p className='text-gray-300 text-sm mb-6 px-3'>
        With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports
      </p>
      <img src={koinxSider} alt="koinx_side_logo" className='mb-4 w-40' />
      <button className='text-black bg-white font-[600] text-[18px] px-8 py-2 rounded-lg'>
        Get Started for FREE {"->"}
      </button>
    </div>
    <div className='h-80'>
       <h1 className='text-[25px] pt-8 px-8 font-semibold '>Trending Coins {'(24h)'}</h1>
       <ul className='p-4 px-8'>
      {cryptoData.map((crypto) => (
        <li key={crypto.id} className='py-2 flex items-center'>
        <img
              src={crypto.image}
              alt={crypto.name}
              style={{ width: '20px', marginRight: '8px' }}
            />
          <span className='text-lg font-medium mr-2'>{crypto.name} ({crypto.symbol})</span>
          <div className='triangle'></div>
          <span className='percentage text-lg font-[600] ml-auto text-green-500'>
            {crypto.price_change_percentage_24h.toFixed(2)}%
          </span>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
};

export default Sidebar;
