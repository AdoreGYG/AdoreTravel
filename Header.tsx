import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 text-xl font-bold font-montserrat">
            <img 
              src="https://cdn.chatandbuild.com/users/686ec1de406569166e43c8cd/adore-travel-logo-1753918329659-949539965.png" 
              alt="Adore Travel Logo" 
              className="w-10 h-10 object-contain"
            />
            <span>Adore Travel</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('overview')} className="hover:text-yellow-200 transition-colors duration-300">Overview</button>
            <button onClick={() => scrollToSection('logistics')} className="hover:text-yellow-200 transition-colors duration-300">Logistics</button>
            <button onClick={() => scrollToSection('ger-camp')} className="hover:text-yellow-200 transition-colors duration-300">Ger Camp</button>
            <button onClick={() => scrollToSection('health')} className="hover:text-yellow-200 transition-colors duration-300">Health</button>
            <button onClick={() => scrollToSection('packing')} className="hover:text-yellow-200 transition-colors duration-300">Packing</button>
            <button onClick={() => scrollToSection('admin')} className="hover:text-yellow-200 transition-colors duration-300">Admin</button>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('overview')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Overview</button>
              <button onClick={() => scrollToSection('logistics')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Logistics</button>
              <button onClick={() => scrollToSection('ger-camp')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Ger Camp</button>
              <button onClick={() => scrollToSection('health')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Health</button>
              <button onClick={() => scrollToSection('packing')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Packing</button>
              <button onClick={() => scrollToSection('admin')} className="text-left py-2 hover:text-yellow-200 transition-colors duration-300">Admin</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
