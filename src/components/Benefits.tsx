import React from 'react';
import { Users, Clock, TrendingUp, Heart } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tus clientes vuelven solos",
      description: "Recordatorios automáticos que funcionan. Sin perseguir a nadie por WhatsApp."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No más citas perdidas ni confusión",
      description: "Todo organizado en un solo lugar. Olvídate del caos de papelitos y mensajes."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Agenda llena incluso mientras trabajas",
      description: "Los clientes reservan online 24/7. Más citas, menos esfuerzo."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Recupera tu tiempo libre",
      description: "Automatiza lo aburrido y enfócate en lo que realmente importa: tus clientes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforma tu negocio en <span className="text-[#2462ea]">minutos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dueños de negocios ya organizaron su agenda y aumentaron sus ventas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="text-[#2462ea] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};