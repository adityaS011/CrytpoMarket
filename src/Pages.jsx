import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

const Pages = () => {
  return (
    <>
            <Navbar/>
            <div className="main flex">
      <div>
        <Hero/>
      </div>  
      <div>
        Sidebar
      </div>
      </div>
    </>
  )
}

export default Pages;