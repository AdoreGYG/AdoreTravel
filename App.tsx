import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Logistics from './components/Logistics'
import GerCamp from './components/GerCamp'
import HealthSafety from './components/HealthSafety'
import PackingList from './components/PackingList'
import FinalAdmin from './components/FinalAdmin'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <Logistics />
      <GerCamp />
      <HealthSafety />
      <PackingList />
      <FinalAdmin />
      <Footer />
    </div>
  )
}

export default App
