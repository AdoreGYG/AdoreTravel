import React from 'react'
import { DollarSign, Smartphone, Car } from 'lucide-react'

const Logistics = () => {
  const cards = [
    {
      icon: DollarSign,
      title: "Money Matters",
      items: [
        { label: "Currency:", value: "Mongolian Tugrik (MNT)" },
        { label: "Cash is King:", value: "ATMs reliable only in Ulaanbaatar. Carry ample cash for countryside." },
        { label: "Cards:", value: "Limited acceptance (mostly larger hotels in UB)" },
        { label: "Tipping:", value: "Appreciated for guides, drivers, and ger camp staff" }
      ]
    },
    {
      icon: Smartphone,
      title: "Communication",
      items: [
        { label: "Mobile Coverage:", value: "Good in cities, limited to none in remote areas" },
        { label: "SIM Cards:", value: "Easy to buy at UB airport (MobiCom, Unitel)" },
        { label: "Wi-Fi:", value: "Available in hotels/ger camps (often slow/satellite)" },
        { label: "Prepare for a digital detox!", value: "" }
      ]
    },
    {
      icon: Car,
      title: "Transportation",
      items: [
        { label: "Road Conditions:", value: "Expect rough, unpaved tracks. Long driving days are normal." },
        { label: "Vehicle Types:", value: "Russian Furgons or Japanese 4x4s" },
        { label: "Domestic Flights:", value: "Strict luggage limits, prone to delays" },
        { label: "Seatbelts:", value: "Always wear them in vehicles" }
      ]
    }
  ]

  return (
    <section id="logistics" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-orange-800 relative inline-block">
            Essential Logistics
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-orange-700 text-lg mt-6">
            Practical information to ensure a smooth journey through Mongolia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-200">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-8 text-center">
                <card.icon size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-montserrat">
                  {card.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.label && (
                        <p className="text-orange-700">
                          <span className="font-semibold">{item.label}</span> {item.value}
                        </p>
                      )}
                      {!item.label && item.value && (
                        <p className="text-orange-700 font-semibold">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logistics
