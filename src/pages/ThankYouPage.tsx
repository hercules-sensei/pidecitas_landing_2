import React from 'react';
import { CheckCircle, Calendar, MessageCircle, ArrowRight, Home, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYouPage: React.FC = () => {
  const [countdown, setCountdown] = React.useState(10);
  const [isRedirecting, setIsRedirecting] = React.useState(false);

  React.useEffect(() => {
    document.title = '¡Gracias! - Pidecitas';
    window.scrollTo(0, 0);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRedirecting(true);
          // Redirect after countdown
          setTimeout(() => {
            window.location.href = 'https://pidecitas.com';
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
            
            <Link 
              to="/"
              className="flex items-center text-gray-700 hover:text-[#2462ea] font-medium transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 rounded-full p-6 animate-pulse">
              <CheckCircle className="w-16 h-16 text-green-600 animate-bounce" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¡Gracias por tu interés!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hemos recibido tu información y estamos emocionados de ayudarte a transformar tu negocio. 
            <strong className="text-[#2462ea]"> Te redirigiremos automáticamente</strong> al formulario para crear tu cuenta gratuita.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-[#2462ea] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {isRedirecting ? 'Redirigiendo...' : 'Redirigiendo en:'}
              </h2>
            </div>
            
            {!isRedirecting ? (
              <div className="text-center">
                <div className="text-6xl font-bold text-[#2462ea] mb-4 animate-pulse">
                  {countdown}
                </div>
                <p className="text-gray-600 mb-6">
                  segundos para comenzar tu prueba gratuita
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#2462ea] h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#2462ea] mx-auto mb-4"></div>
                <p className="text-gray-600">Preparando tu experiencia...</p>
              </div>
            )}
            
            {/* Manual redirect button */}
            <div className="mt-6">
              <a 
                href="https://pidecitas.com"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#2462ea] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                O haz clic aquí para continuar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Qué puedes esperar?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              En los próximos minutos podrás:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Configuración rápida
                </h3>
                <p className="text-gray-600">
                  Crea tu cuenta y configura tu negocio en menos de 5 minutos.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Prueba sin riesgos
                </h3>
                <p className="text-gray-600">
                  30 días completamente gratis. Sin tarjeta de crédito, sin compromisos.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Resultados inmediatos
                </h3>
                <p className="text-gray-600">
                  Empieza a recibir más citas desde el primer día.
                </p>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎉 ¡Oferta especial incluida!
              </h3>
              <p className="text-xl mb-4">
                <strong>30% de descuento</strong> en los primeros 3 meses
              </p>
              <p className="text-green-100">
                Esta oferta se aplicará automáticamente a tu cuenta
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta, nuestro equipo está listo para ayudarte.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/12693994416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +1 269 399 4416
              </a>
              <a 
                href="mailto:hola@pidecitas.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2462ea] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                📧 hola@pidecitas.com
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <Link 
              to="/"
              className="inline-flex items-center text-[#2462ea] hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Volver a la página principal
            </Link>
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
                Negocios ya confían en nosotros.
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