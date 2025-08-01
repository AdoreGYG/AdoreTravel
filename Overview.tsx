import React from 'react'
import { MapPin, Clock, Users, Camera } from 'lucide-react'

const Overview = () => {
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Gobi Desert Exploration",
      description: "Experience the vast landscapes and unique wildlife of the world's fifth-largest desert"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "8 Days Adventure",
      description: "Comprehensive journey through Mongolia's most spectacular regions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Group Experience",
      description: "Maximum 12 travelers for personalized attention and authentic interactions"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography Paradise",
      description: "Capture stunning landscapes, nomadic culture, and rare wildlife moments"
    }
  ]

  return (
    <section id="overview" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6 font-montserrat">
            Your Mongolia Adventure Awaits
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Embark on an extraordinary journey through Mongolia's pristine wilderness, 
            ancient culture, and breathtaking landscapes that will transform your perspective forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-400">
              <div className="text-orange-500 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">
                {highlight.title}
              </h3>
              <p className="text-orange-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/R4WO9IUgIyY"
              title="Gobi Desert Mongolia Adventure"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/l1DG53mr-v8?start=33"
              title="Mongolia Travel Experience"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/QcAwYshTmXs"
              title="Mongolia Adventure Shorts"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/qBgQVzDdMpY"
              title="Mongolian Ger Camp at Gobi Desert"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for the Adventure?</h3>
            <p className="text-lg mb-6 text-orange-100">
              Join us for an unforgettable journey through one of the world's last great wilderness areas.
            </p>
            <button className="bg-white text-orange-600 hover:text-orange-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Learn More Below
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
