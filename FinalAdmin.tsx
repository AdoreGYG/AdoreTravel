import React from 'react'
import { FileText, Phone, AlertTriangle } from 'lucide-react'

const FinalAdmin = () => {
  const adminItems = [
    {
      icon: FileText,
      title: "Documentation",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      items: [
        "Passport (valid 6+ months)",
        "Visa (if required - check current requirements)",
        "Travel insurance documents",
        "Flight confirmations",
        "Hotel/accommodation confirmations",
        "Emergency contact information",
        "Copies stored separately + digital backups"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      items: [
        "Your country's embassy in Mongolia",
        "Travel insurance emergency number",
        "Local guide/tour operator contacts",
        "Family emergency contact",
        "Bank/credit card emergency numbers",
        "Medical emergency contacts"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Final Reminders",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      items: [
        "Notify bank of travel dates",
        "Check phone roaming charges",
        "Download offline maps",
        "Inform someone of your itinerary",
        "Check weather forecast before departure",
        "Confirm all bookings 48 hours prior",
        "Pack patience and sense of adventure!"
      ]
    }
  ]

  return (
    <section id="admin" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-orange-800 relative inline-block">
            Final Administration
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-orange-700 text-lg mt-6">
            Last-minute checklist to ensure you're fully prepared
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {adminItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-200">
              <div className={`${item.color} text-white p-6 text-center`}>
                <item.icon size={40} className="mx-auto mb-3" />
                <h3 className="text-xl font-semibold font-montserrat">
                  {item.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-orange-700 leading-relaxed text-sm">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4 font-montserrat">Ready for Adventure?</h3>
          <p className="text-orange-50 text-lg mb-6">
            You're now prepared for an incredible journey through Mongolia. Embrace the unexpected, 
            respect the culture, and create memories that will last a lifetime!
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <p className="text-white font-semibold">
              "The best journeys answer questions that in the beginning you didn't even think to ask."
            </p>
            <p className="text-orange-100 text-sm mt-2">- Jeff Johnson</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalAdmin
