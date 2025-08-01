import React from 'react'
import { Check, X } from 'lucide-react'

const GerCamp = () => {
  const etiquetteRules = [
    { type: 'do', text: 'Step OVER the threshold', description: 'Never step on it - this is considered extremely disrespectful' },
    { type: 'do', text: 'Walk clockwise inside', description: 'Respect the traditional circular movement pattern' },
    { type: 'dont', text: "Don't lean on center pillars", description: 'These are structurally and spiritually important' },
    { type: 'do', text: 'Accept offered items', description: 'At least touch food/drink to your lips as a sign of respect' }
  ]

  return (
    <section id="ger-camp" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-orange-800 relative inline-block">
            Ger Camp Life
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-orange-700 text-lg mt-6">
            Your authentic home on the Mongolian steppe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-orange-800 font-montserrat">
              Ger Etiquette: Critical Cultural Rules
            </h3>
            
            <div className="space-y-6 mb-8">
              {etiquetteRules.map((rule, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    rule.type === 'do' ? 'bg-green-500' : 'bg-red-500'
                  } text-white shadow-lg`}>
                    {rule.type === 'do' ? <Check size={20} /> : <X size={20} />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">{rule.text}</h4>
                    <p className="text-orange-700">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-200">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">Facilities & Accommodation</h4>
              <div className="space-y-2 text-orange-700">
                <p><span className="font-semibold">Structure:</span> Traditional felt covering with wooden lattice</p>
                <p><span className="font-semibold">Toilets/Showers:</span> Shared outdoor facilities (often basic/long-drop)</p>
                <p><span className="font-semibold">Hot Water:</span> May be limited or scheduled - ask about shower times</p>
                <p><span className="font-semibold">Heating:</span> Coal/dung stove managed by staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GerCamp
