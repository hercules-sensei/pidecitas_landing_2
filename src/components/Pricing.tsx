import React from 'react';
import { Check, ChevronDown } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [selectedEmployees, setSelectedEmployees] = React.useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const pricingTiers = [
    { employees: 1, price: 8 },
    { employees: 2, price: 16 },
    { employees: 3, price: 24 },
    { employees: 4, price: 32 },
    { employees: 5, price: 38 },
    { employees: 6, price: 44 },
    { employees: 7, price: 50 },
    { employees: 8, price: 56 },
    { employees: 9, price: 62 },
    { employees: 10, price: 68 },
    { employees: 11, price: 72.5 },
    { employees: 12, price: 77 },
    { employees: 13, price: 81.5 },
    { employees: 14, price: 86 },
    { employees: 15, price: 90.5 },
    { employees: 16, price: 95 },
    { employees: 17, price: 99.5 },
    { employees: 18, price: 104 },
    { employees: 19, price: 105 }
  ];

  const selectedTier = pricingTiers.find(tier => tier.employees === selectedEmployees) || pricingTiers[0];
  const regularPrice = selectedTier.price;
  const discountedPrice = regularPrice * 0.7; // 30% off

  const features = [
    "Agenda inteligente y automática",
    "Recordatorios por WhatsApp y SMS",
    "Reservas online 24/7",
    "Reportes y estadísticas",
    "Soporte en español",
    "Configuración incluida"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Precios <span className="text-[#2462ea]">transparentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Paga solo por lo que necesitas. Sin sorpresas, sin letra chica.
          </p>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl mb-8 text-center">
          <p className="font-bold text-lg mb-1">🎉 Oferta especial - 30% OFF los primeros 3 meses</p>
          <p className="text-green-100">Válido hasta el 30 de julio • Solo para nuevos clientes</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pricing Calculator */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Calcula tu precio
              </h3>
              
              {/* Employee Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Cuántos empleados tienes?
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none"
                  >
                    <span className="font-medium">
                      {selectedEmployees === 19 ? '19+ empleados' : `${selectedEmployees} empleado${selectedEmployees > 1 ? 's' : ''}`}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {pricingTiers.map((tier) => (
                        <button
                          key={tier.employees}
                          onClick={() => {
                            setSelectedEmployees(tier.employees);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span>
                            {tier.employees === 19 ? '19+ empleados' : `${tier.employees} empleado${tier.employees > 1 ? 's' : ''}`}
                          </span>
                          <span className="text-[#2462ea] font-medium">${tier.price}/mes</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-gray-500 line-through text-xl">${regularPrice}/mes</span>
                    <div className="text-4xl font-bold text-[#2462ea] mb-2">
                      ${discountedPrice.toFixed(1)}<span className="text-lg text-gray-600">/mes</span>
                    </div>
                    <p className="text-green-600 font-medium">
                      Ahorras ${(regularPrice - discountedPrice).toFixed(1)}/mes los primeros 3 meses
                    </p>
                  </div>
                  <p className="text-gray-600">
                    Después: ${regularPrice}/mes • Cancela cuando quieras
                  </p>
                </div>
              </div>

              <button 
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#2462ea] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 mb-4"
              >
                Empezar mi prueba gratuita
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                30 días gratis • Sin compromiso • Configuración incluida
              </p>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Todo incluido en tu plan:
              </h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-bold text-[#2462ea] mb-2">💡 ¿Tienes más de 19 empleados?</h5>
                <p className="text-gray-700 text-sm">
                  Contáctanos para un plan empresarial personalizado con descuentos especiales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Negocios ya confían en Pidecitas</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>🔒 Pago seguro</span>
            <span>📱 Soporte 24/7</span>
            <span>💰 Garantía de satisfacción</span>
            <span>🚀 Configuración gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
};