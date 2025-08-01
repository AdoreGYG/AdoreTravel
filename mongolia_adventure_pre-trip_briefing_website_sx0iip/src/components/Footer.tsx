import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="flex items-center gap-3 text-2xl font-bold font-montserrat">
            <img 
              src="https://cdn.chatandbuild.com/users/686ec1de406569166e43c8cd/adore-travel-logo-1753918329659-949539965.png" 
              alt="Adore Travel Logo" 
              className="w-12 h-12 object-contain"
            />
            <span>Adore Travel</span>
          </div>
          
          <div className="text-center">
            <p className="mb-2">kathgoh@gmail.com</p>
            <p>+65-84821434</p>
          </div>
        </div>
        
        <div className="border-t border-orange-400 pt-6 text-center text-orange-100">
          <p className="mb-2">&copy; 2025 Adore Travel. All rights reserved.</p>
          <p>Your journey to the land of the eternal blue sky awaits!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
