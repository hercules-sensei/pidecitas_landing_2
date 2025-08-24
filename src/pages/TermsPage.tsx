import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Términos y Condiciones - Pidecitas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            📄 TÉRMINOS Y CONDICIONES DE USO – PIDECITAS
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> Junio 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Al acceder o utilizar Pidecitas, el usuario acepta quedar vinculado por estos Términos y Condiciones, así como por nuestra Política de Privacidad. Si no está de acuerdo, deberá abstenerse de utilizar el servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 leading-relaxed">
                Pidecitas es una plataforma digital que permite a negocios gestionar reservas de citas con sus clientes de manera fácil, automatizada y eficiente. Ofrecemos funciones como envío de recordatorios, gestión de horarios y seguimiento de asistencia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registro y Cuenta</h2>
              <p className="text-gray-700 leading-relaxed">
                Para utilizar ciertas funcionalidades, es necesario registrarse y proporcionar información veraz y actualizada. El usuario es responsable de mantener la confidencialidad de sus credenciales y del uso de su cuenta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Aceptable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El usuario se compromete a utilizar Pidecitas de forma lícita y conforme a estos términos. No está permitido:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usar la plataforma para fines fraudulentos, ilegales o no autorizados.</li>
                <li>Interferir con el funcionamiento de Pidecitas.</li>
                <li>Acceder o recopilar datos de manera automatizada sin autorización expresa.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tarifas y Facturación</h2>
              <p className="text-gray-700 leading-relaxed">
                El uso de Pidecitas está sujeto a un modelo de suscripción basado en el número de empleados. Los precios y planes están publicados en la plataforma y pueden actualizarse con previo aviso. No se ofrecen reembolsos por suscripciones ya cobradas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todos los contenidos, diseños, logos, software y funcionalidades de Pidecitas son propiedad exclusiva de la empresa desarrolladora y están protegidos por leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancelación y Terminación</h2>
              <p className="text-gray-700 leading-relaxed">
                El usuario puede cancelar su cuenta en cualquier momento. Pidecitas se reserva el derecho de suspender o cancelar cuentas que violen estos Términos, sin derecho a reembolso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Pidecitas no garantiza la disponibilidad ininterrumpida del servicio ni se hace responsable por daños indirectos, pérdidas de ingresos, o interrupciones causadas por terceros o fuerza mayor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán comunicados y entrarán en vigor al ser publicados. El uso continuado implicará la aceptación de las modificaciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos Términos se rigen por las leyes de [país o jurisdicción aplicable, e.g., España o EE.UU.], y cualquier controversia será sometida a los tribunales competentes de dicha jurisdicción.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Tienes preguntas sobre estos términos?</h3>
            <p className="text-gray-700 mb-4">
              Si tienes alguna duda sobre estos Términos y Condiciones, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:hola@pidecitas.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2462ea] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                📧 hola@pidecitas.com
              </a>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
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