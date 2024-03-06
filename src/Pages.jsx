import React from 'react';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

const Pages = () => {
  return (
    <div className=" flex flex-row">
      <div className="w-2/3 pr-4"> {/* 70% width with right padding */}
        <Hero />
        {/* Add other components here for the left side */}
      </div>
      <div className=" w-[420px] h-12 right-0 mr-8 mt-8"> {/* 30% width */}
        <Sidebar /> {/* Right side fixed sidebar with width 30% */}
        
      </div>
    </div>
  );
}

export default Pages;
