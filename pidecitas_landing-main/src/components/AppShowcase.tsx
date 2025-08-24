import React from 'react';
import { Play, Calendar, MessageCircle, BarChart3 } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agenda Inteligente",
      description: "Ve todas tus citas de un vistazo",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Recordatorios Automáticos",
      description: "WhatsApp y SMS sin que hagas nada",
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reportes Claros",
      description: "Conoce tu negocio con números reales",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tu negocio en tu <span className="text-[#2462ea]">celular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Controla todo desde cualquier lugar. Simple, rápido y sin complicaciones.
          </p>
          
          {/* Video section */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#2462ea] to-blue-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8 md:p-12">
                {!showVideo ? (
                  <div 
                    className="relative bg-gray-100 rounded-xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => setShowVideo(true)}
                  >
                    <div className="text-center">
                      <div className="bg-[#2462ea] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                      <p className="text-gray-700 font-medium">Ver demo de 2 minutos</p>
                      <p className="text-gray-500 text-sm">Descubre cómo funciona Pidecitas</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/45zSCXSWQ2k?autoplay=1&rel=0&modestbranding=1"
                      title="Demo de Pidecitas"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Feature tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-[#2462ea] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <span className={`mr-3 ${activeTab === index ? 'text-white' : 'text-[#2462ea]'}`}>
                  {feature.icon}
                </span>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {features[activeTab].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {features[activeTab].description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Configuración en menos de 5 minutos</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Funciona en cualquier celular</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Soporte en español cuando lo necesites</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};