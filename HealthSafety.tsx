import React from 'react'
import { Heart, Shield, HandHeart } from 'lucide-react'

const HealthSafety = () => {
  const cards = [
    {
      icon: Heart,
      title: "Health Precautions",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      items: [
        "Travel Insurance: Mandatory - must cover medical evacuation",
        "Vaccinations: Consult doctor (Hep A/B, Typhoid, Tetanus, Rabies recommended)",
        "Medications: Bring comprehensive personal supply",
        "Water: Bottle ALL drinking water - avoid tap/stream water",
        "Sun Protection: High SPF, lip balm, sunglasses essential"
      ]
    },
    {
      icon: Shield,
      title: "Safety Measures",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      items: [
        "Personal Belongings: Secure valuables, especially in UB",
        "Road Safety: Be cautious crossing streets in UB",
        "Animals: Give livestock and herding dogs wide berth",
        "Terrain: Uneven ground common - good footwear vital"
      ]
    },
    {
      icon: HandHeart,
      title: "Cultural Respect",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      items: [
        "Dress: Modest, practical clothing in rural areas",
        "Photography: ALWAYS ask permission before taking photos",
        "Religious Sites: Circumambulate clockwise, remove hats",
        "Environment: Strict \"Leave No Trace\" - pack out ALL trash",
        "Gifts: Small tokens for hosts (pencils for kids)"
      ]
    }
  ]

  return (
    <section id="health" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-orange-800 relative inline-block">
            Health & Safety
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-orange-700 text-lg mt-6">
            Essential precautions for a safe and healthy journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-200">
              <div className={`${card.color} text-white p-6 text-center`}>
                <card.icon size={40} className="mx-auto" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 font-montserrat">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-orange-700 text-sm leading-relaxed">
                      <span className="font-semibold">{item.split(':')[0]}:</span>
                      {item.split(':')[1] && <span>{item.split(':')[1]}</span>}
                      {!item.includes(':') && <span> {item}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HealthSafety
