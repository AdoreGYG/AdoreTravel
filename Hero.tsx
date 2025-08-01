import React from 'react'

const Hero = () => {
  const scrollToOverview = () => {
    const element = document.getElementById('overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.3), rgba(255, 140, 0, 0.4)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="text-center max-w-4xl px-8 py-12 bg-gradient-to-br from-orange-500/90 to-yellow-500/90 rounded-xl shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white drop-shadow-lg">
          Mongolia Adventure
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-orange-50">
          Your Essential Pre-Trip Briefing for the Journey of a Lifetime
        </p>
        <button
          onClick={scrollToOverview}
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-orange-800 hover:text-orange-900 font-semibold py-3 px-7 rounded-full border-2 border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg uppercase tracking-wider"
        >
          Begin Your Journey
        </button>
      </div>
    </section>
  )
}

export default Hero
