import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Política de Privacidad - Pidecitas';
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
            🔐 POLÍTICA DE PRIVACIDAD – PIDECITAS
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> Junio 2025
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            En Pidecitas nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política describe qué datos recopilamos, cómo los usamos y cómo los protegemos.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos los siguientes datos personales cuando usas nuestra plataforma:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Nombre y datos de contacto (teléfono, email)</li>
                <li>Información del negocio (nombre comercial, rubro)</li>
                <li>Datos de clientes finales (para confirmar y gestionar citas)</li>
                <li>Datos técnicos (IP, tipo de dispositivo, navegador, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalidad del Tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usamos los datos para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Crear y administrar cuentas</li>
                <li>Gestionar citas entre clientes y negocios</li>
                <li>Enviar confirmaciones, recordatorios y notificaciones</li>
                <li>Mejorar el servicio y personalizar la experiencia</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base Legal</h2>
              <p className="text-gray-700 leading-relaxed">
                Tratamos los datos conforme al consentimiento del usuario, la ejecución del contrato de servicio, y cuando sea necesario para cumplir con la legislación vigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Conservación de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Los datos se conservarán mientras el usuario mantenga una cuenta activa o mientras sean necesarios para los fines para los que se recabaron.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartición de Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos ni compartimos tus datos con terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Proveedores tecnológicos que nos prestan servicios (hosting, email, etc.)</li>
                <li>Requerimientos legales o regulatorios</li>
                <li>Autorización expresa del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales frente a accesos no autorizados, pérdida o alteración.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Derechos del Usuario</h2>
              <p className="text-gray-700 leading-relaxed">
                El usuario puede ejercer los derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos, escribiéndonos a hola@pidecitas.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies para mejorar la experiencia del usuario y recoger datos analíticos. Puedes configurar tus preferencias en cualquier momento desde tu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios en la Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política. En caso de cambios relevantes, te lo notificaremos a través de la plataforma o por correo electrónico.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Tienes preguntas sobre tu privacidad?</h3>
            <p className="text-gray-700 mb-4">
              Si tienes alguna duda sobre cómo manejamos tus datos personales o quieres ejercer tus derechos, no dudes en contactarnos.
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