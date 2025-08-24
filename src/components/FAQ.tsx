import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "¿Tengo que pagar algo?",
      answer: "No. Puedes probar Pidecitas gratis por 30 días completos. Sin tarjeta de crédito, sin letra chica. Después de la prueba, decides si continúas."
    },
    {
      question: "¿Qué pasa si no me gusta?",
      answer: "Cancelas cuando quieras, sin preguntas ni complicaciones. Si no estás satisfecho en los primeros 30 días, no pagas nada. Es así de simple."
    },
    {
      question: "¿Cómo empiezo?",
      answer: "Solo necesitas 5 minutos. Te enviamos un WhatsApp con tu acceso, cargas tu información básica y listo. Nosotros te ayudamos con todo el resto."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas <span className="text-[#2462ea]">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="text-[#2462ea] flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};