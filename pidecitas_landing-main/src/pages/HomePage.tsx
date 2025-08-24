import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { AppShowcase } from '../components/AppShowcase';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { MessageCircle } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: { name: string; business: string; phone: string; email: string; countryCode: string; employees: string }) => {
    // Here you would typically send the data to your backend, Zapier webhook, etc.
    console.log('Form submitted:', data);
    
    // Redirect to thank you page
    navigate('/gracias');
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('como-funciona');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'Pidecitas - Organiza tu negocio y haz que los clientes vuelvan solos';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/HThiw3C.png" 
                alt="Pidecitas Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={scrollToDemo}
                className="text-gray-700 hover:text-[#2462ea] font-medium transition-colors"
              >
                Ver Demo
              </button>
              <a href="#beneficios" className="text-gray-700 hover:text-[#2462ea] font-medium transition-colors">
                Beneficios
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-[#2462ea] font-medium transition-colors">
                Testimonios
              </a>
              <a href="#precios" className="text-gray-700 hover:text-[#2462ea] font-medium transition-colors">
                Precios
              </a>
            </nav>

            <button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#2462ea] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
            >
              Probar gratis
            </button>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/12693994416"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Escríbenos por WhatsApp!
        </div>
      </a>

      {/* Main content */}
      <main>
        <div id="inicio">
          <Hero onSubmit={handleFormSubmit} />
        </div>
        
        <div id="beneficios">
          <Benefits />
        </div>
        
        <div id="testimonios">
          <Testimonials />
        </div>
        
        <div id="precios">
          <Pricing />
        </div>
        
        <div id="como-funciona">
          <AppShowcase />
        </div>
        
        <FAQ />
        
        <FinalCTA onSubmit={handleFormSubmit} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li><a href="/terminos" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a></li>
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