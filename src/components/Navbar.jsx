import React from 'react';
import logo from '../assets/koinxlogo.png';

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-white text-black bg-light px-4">
      <div className="flex items-center">
        <img src={logo} alt="Koinx Logo" className="mr-4" />
        
      </div>
      <div className="flex items-center fw-bold">
      <div className="hidden lg:flex space-x-8 pr-8  font-medium">
          <a href="#">Crypto Taxes</a>
          <a href="#">Free Tools</a>
          <a href="#">Resource Center</a>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mr-4">
          Get Started
        </button>
        <div className="lg:hidden">
          {/* Mobile menu button/icon can be added here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
