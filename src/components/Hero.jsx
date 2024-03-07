import React from 'react'

const Hero = ({cryptoData}) => {
  const topCrypto = cryptoData[0];

  if (!topCrypto) {
    return null; // Handle case where data is not available
  }

  return (
    <>
    <div className='mt-2'>
      <span className="text-gray-500 ml-5 ">Cryptocurrencies</span>
    <span className="mx-1 ">&gt;&gt;</span>
    <span className="font-[500] text-black-800">Bitcoin</span>
    </div>
    <div className='bg-white h-screen mt-4 ml-7 rounded-lg'> 
    <ul className=' p-4'>
    <li key={topCrypto.id} className=' flex items-center '>
        <img
          src={topCrypto.image} // or topCrypto.image.large
          alt={topCrypto.name}
          style={{ width: '40px', marginRight: '8px' }}
        />
        <span className='font-semibold text-2xl mr-2 '>{topCrypto.name} 
        
        </span>
        <div className='text-gray-500 font-semibold text-[1.05rem] flex '> 
          {topCrypto.symbol.toUpperCase()}
        </div>
        <div className='ml-7 bg-slate-500 font-medium  text-white text-[17px] py-2 px-2 rounded-lg'>Rank #1</div>
      </li> 
    </ul>
     </div>
    </>
  )
}

export default Hero