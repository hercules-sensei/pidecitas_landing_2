import React from 'react';
import { ArrowRight, Play, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VSLPage: React.FC = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Tu cuenta está casi lista - Pidecitas';
    window.scrollTo(0, 0);

    // Auto-redirect after video ends (simulate 5 minutes)
    if (videoEnded) {
      const timer = setTimeout(() => {
        window.location.href = 'https://pidecitas.com/register';
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Configuración automática",
      description: "Tu cuenta se configura sola mientras ves el video"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Listo en minutos",
      description: "Empieza a recibir citas hoy mismo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soporte incluido",
      description: "Te ayudamos con todo lo que necesites"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://i.imgur.com/HThiw3C.png" 
                  alt="Pidecitas Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-600 font-medium">
                <Shield className="w-5 h-5 mr-2" />
                Cuenta verificada
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">Información recibida</span>
            </div>
            <div className="w-16 h-1 bg-green-500 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#2462ea] rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-[#2462ea]">Video de bienvenida</span>
            </div>
            <div className="w-16 h-1 bg-gray-300 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Crear cuenta</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¡Perfecto! Tu cuenta está <span className="text-[#2462ea]">casi lista</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Mientras preparamos todo para ti, mira este video de 3 minutos donde te mostramos 
            exactamente cómo Pidecitas va a transformar tu negocio.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium">
              💡 <strong>Tip:</strong> Al final del video serás redirigido automáticamente para crear tu cuenta
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#2462ea] to-blue-600 rounded-2xl p-1 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8">
              {!showVideo ? (
                <div 
                  className="relative bg-gray-900 rounded-xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2462ea]/20 to-blue-600/20 rounded-xl"></div>
                  <div className="text-center relative z-10">
                    <div className="bg-white text-[#2462ea] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-10 h-10 ml-1" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Cómo Pidecitas va a cambiar tu negocio
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Video exclusivo de 3 minutos • Haz clic para reproducir
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/45zSCXSWQ2k?autoplay=1&rel=0&modestbranding=1&enablejsapi=1"
                    title="Video Sales Letter - Pidecitas"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => {
                      // Simulate video end after 3 minutes for demo purposes
                      setTimeout(() => {
                        handleVideoEnd();
                      }, 180000); // 3 minutes
                    }}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Benefits while watching */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-[#2462ea] mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No puedes esperar?
            </h3>
            <p className="text-gray-600 mb-6">
              Salta directamente a crear tu cuenta y empieza ahora mismo
            </p>
            <a
              href="https://pidecitas.com/register"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#2462ea] text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 group"
            >
              Crear mi cuenta ahora
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-3">
              30 días gratis • Sin tarjeta de crédito
            </p>
          </div>
        </div>

        {/* Auto-redirect notification */}
        {videoEnded && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Video completado!
                </h3>
                <p className="text-gray-600">
                  Te redirigiremos a crear tu cuenta en unos segundos...
                </p>
              </div>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2462ea] mx-auto mb-4"></div>
              <a
                href="https://pidecitas.com/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2462ea] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                O haz clic aquí para continuar
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Más de 1,000 negocios ya confían en Pidecitas</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>🔒 Datos seguros</span>
            <span>📱 Soporte 24/7</span>
            <span>💰 30 días gratis</span>
            <span>🚀 Configuración incluida</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/HThiw3C.png" 
                  alt="Pidecitas Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                La forma más simple de organizar tu negocio y hacer que tus clientes vuelvan solos.
              </p>
              <p className="text-gray-400">
                📧 hola@pidecitas.com <br />
                📱 WhatsApp: +1 269 399 4416
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
                <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pidecitas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};