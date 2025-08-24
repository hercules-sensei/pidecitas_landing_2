import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carmen López",
      business: "Salón de Belleza Carmen",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Antes perdía 3-4 citas por semana. Ahora mi agenda está siempre llena y los clientes llegan puntuales.",
      rating: 5
    },
    {
      name: "Miguel Herrera",
      business: "Barbería El Clásico",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Mis ingresos subieron 40% en dos meses. Los recordatorios automáticos son oro puro.",
      rating: 5
    },
    {
      name: "Isabella Ruiz",
      business: "Spa Relajarte",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Por fin puedo enfocarme en mis clientas sin preocuparme por la agenda. Es un alivio total.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mira lo que dicen nuestros <span className="text-[#2462ea]">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Historias reales de dueños de negocios que transformaron su forma de trabajar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-center">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-[#2462ea] text-sm font-medium">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};