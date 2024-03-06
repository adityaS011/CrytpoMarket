import React from 'react'
import './App.css'
import Pages from './Pages'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-slate-200 w-screen h-screen overflow-x-hidden ">
      <Navbar/>
      <Pages />
    </div>
  )
}

export default App
