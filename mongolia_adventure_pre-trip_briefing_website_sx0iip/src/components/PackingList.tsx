import React from 'react'
import { Shirt, Thermometer, Camera, Briefcase } from 'lucide-react'

const PackingList = () => {
  const categories = [
    {
      icon: Shirt,
      title: "Clothing Essentials",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      items: [
        "Layering system: Base layers, insulating layers, waterproof outer shell",
        "Warm hat and sun hat",
        "Gloves (warm and lightweight)",
        "Comfortable hiking boots + camp shoes",
        "Quick-dry pants and shorts",
        "Long-sleeve shirts for sun protection",
        "Warm jacket/fleece for evenings"
      ]
    },
    {
      icon: Thermometer,
      title: "Weather Protection",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      items: [
        "Sunscreen (SPF 30+) and lip balm with SPF",
        "Sunglasses with UV protection",
        "Rain gear/poncho",
        "Insect repellent",
        "Personal water bottle",
        "Electrolyte supplements"
      ]
    },
    {
      icon: Camera,
      title: "Electronics & Gear",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      items: [
        "Camera with extra batteries/memory cards",
        "Portable charger/power bank",
        "Universal adapter",
        "Headlamp/flashlight",
        "Binoculars for wildlife viewing",
        "Travel journal and pens"
      ]
    },
    {
      icon: Briefcase,
      title: "Personal Items",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      items: [
        "Personal medications (bring extra)",
        "First aid kit basics",
        "Toiletries (biodegradable soap recommended)",
        "Quick-dry towel",
        "Wet wipes/hand sanitizer",
        "Small gifts for hosts (pens, postcards)",
        "Copies of important documents"
      ]
    }
  ]

  return (
    <section id="packing" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-orange-800 relative inline-block">
            Essential Packing List
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-orange-700 text-lg mt-6">
            Pack smart for Mongolia's diverse climate and remote locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-200">
              <div className={`${category.color} text-white p-6 text-center`}>
                <category.icon size={40} className="mx-auto mb-3" />
                <h3 className="text-xl font-semibold font-montserrat">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-orange-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Important Packing Tips</h3>
          <div className="grid md:grid-cols-3 gap-6 text-yellow-50">
            <div>
              <h4 className="font-semibold mb-2">Weight Limits</h4>
              <p className="text-sm">Domestic flights: 15kg checked, 5kg carry-on</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Laundry</h4>
              <p className="text-sm">Limited facilities - pack enough for the full trip</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Shopping</h4>
              <p className="text-sm">Leave space for souvenirs - cashmere is a must-buy!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackingList
