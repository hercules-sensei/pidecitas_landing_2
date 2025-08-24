import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

interface FinalCTAProps {
  onSubmit: (data: { name: string; business: string; phone: string; email: string; countryCode: string; employees: string }) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    countryCode: '+1',
    employees: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    // Business validation
    if (!formData.business.trim()) {
      newErrors.business = 'El nombre del negocio es requerido';
    } else if (formData.business.trim().length < 2) {
      newErrors.business = 'El nombre del negocio debe tener al menos 2 caracteres';
    }

    // Phone validation (numbers only, 7-15 digits)
    const phoneRegex = /^\d{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'El número de WhatsApp es requerido';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Ingresa solo números (7-15 dígitos)';
    }

    // Country code validation
    const countryCodeRegex = /^\+\d{1,4}$/;
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = 'El código de país es requerido';
    } else if (!countryCodeRegex.test(formData.countryCode)) {
      newErrors.countryCode = 'Formato: +1, +52, +34, etc.';
    }

    // Employees validation
    if (!formData.employees.trim()) {
      newErrors.employees = 'Selecciona el número de empleados';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, phone: value });
    
    // Clear error when user starts typing
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Ensure it starts with +
    if (value && !value.startsWith('+')) {
      value = '+' + value.replace(/\D/g, '');
    } else {
      // Allow + and numbers only
      value = value.replace(/[^\d+]/g, '');
    }
    
    setFormData({ ...formData, countryCode: value });
    
    // Clear error when user starts typing
    if (errors.countryCode) {
      setErrors({ ...errors, countryCode: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23293062/ubfuizy/';
      const fullPhone = `${formData.countryCode}${formData.phone}`;
      
      // Try sending as form data first (most compatible with Zapier)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('business', formData.business.trim());
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('country_code', formData.countryCode);
      formDataToSend.append('full_phone', fullPhone);
      formDataToSend.append('email', formData.email.trim().toLowerCase());
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('source', 'Final CTA Form');
      formDataToSend.append('employees', formData.employees);
      formDataToSend.append('full_name', formData.name.trim());
      formDataToSend.append('business_name', formData.business.trim());
      formDataToSend.append('phone_number', formData.phone);
      formDataToSend.append('whatsapp', fullPhone);
      formDataToSend.append('email_address', formData.email.trim().toLowerCase());
      formDataToSend.append('number_of_employees', formData.employees);

      console.log('Sending form data to Zapier...');
      console.log('Name:', formData.name.trim());
      console.log('Business:', formData.business.trim());
      console.log('Phone:', formData.phone);
      console.log('Country Code:', formData.countryCode);
      console.log('Full Phone:', fullPhone);
      console.log('Email:', formData.email.trim().toLowerCase());

      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      console.log('Zapier response status:', response.status);
      const responseText = await response.text();
      console.log('Zapier response:', responseText);

      // If form data doesn't work, try URL encoded
      if (!response.ok) {
        console.log('Trying URL encoded format...');
        const urlEncodedData = new URLSearchParams();
        urlEncodedData.append('name', formData.name.trim());
        urlEncodedData.append('business', formData.business.trim());
        urlEncodedData.append('phone', formData.phone);
        urlEncodedData.append('country_code', formData.countryCode);
        urlEncodedData.append('full_phone', fullPhone);
        urlEncodedData.append('email', formData.email.trim().toLowerCase());
        urlEncodedData.append('timestamp', new Date().toISOString());
        urlEncodedData.append('source', 'Final CTA Form');
        urlEncodedData.append('employees', formData.employees);

        const response2 = await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData,
        });

        console.log('URL encoded response status:', response2.status);
        const responseText2 = await response2.text();
        console.log('URL encoded response:', responseText2);
      }

      // Call the original onSubmit for any additional handling
      onSubmit({
        name: formData.name.trim(),
        business: formData.business.trim(),
        phone: fullPhone,
        email: formData.email.trim().toLowerCase(),
        countryCode: formData.countryCode,
        employees: formData.employees
      });
      
      // Reset form
      setFormData({ name: '', business: '', phone: '', email: '', countryCode: '+1', employees: '' });
      
    } catch (error) {
      console.error('Error sending to Zapier:', error);
      // Still call onSubmit even if Zapier fails
      onSubmit({
        name: formData.name.trim(),
        business: formData.business.trim(),
        phone: `${formData.countryCode}${formData.phone}`,
        email: formData.email.trim().toLowerCase(),
        countryCode: formData.countryCode,
        employees: formData.employees
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2462ea] to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para organizarte de una vez?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Únete a dueños de negocios que ya transformaron su forma de trabajar. 
          <strong className="text-white"> Sin riesgos, sin complicaciones.</strong>
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center text-blue-100">
            <Shield className="w-6 h-6 mr-3 text-green-300" />
            <span className="font-medium">30 días gratis</span>
          </div>
          <div className="flex items-center text-blue-100">
            <Clock className="w-6 h-6 mr-3 text-green-300" />
            <span className="font-medium">Listo en 5 minutos</span>
          </div>
          <div className="flex items-center text-blue-100">
            <Users className="w-6 h-6 mr-3 text-green-300" />
            <span className="font-medium">Negocios confían en nosotros</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Comienza tu prueba gratuita
          </h3>
          <div className="space-y-4 mb-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
            </div>

            {/* Business Field */}
            <div>
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                value={formData.business}
                onChange={(e) => handleInputChange('business', e.target.value)}
                className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg ${
                  errors.business ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                disabled={isSubmitting}
              />
              {errors.business && <p className="text-red-500 text-sm mt-1 text-left">{errors.business}</p>}
            </div>

            {/* WhatsApp Field with Country Code */}
            <div>
              <div className="flex gap-2">
                {/* Country Code Input */}
                <div className="w-24">
                  <input
                    type="text"
                    placeholder="+1"
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                    className={`w-full px-2 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg text-center ${
                      errors.countryCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                    maxLength={5}
                  />
                  {errors.countryCode && <p className="text-red-500 text-xs mt-1">{errors.countryCode}</p>}
                </div>

                {/* Phone Number Input */}
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Número de WhatsApp"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                    maxLength={15}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 text-left">{errors.phone}</p>}
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1 text-left">Solo números, sin espacios ni guiones</p>
            </div>

            {/* Employees Field */}
            <div>
              <select
                value={formData.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-lg ${
                  errors.employees ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>Número de empleados</option>
                <option value="solo yo">Solo yo</option>
                <option value="2-4">2-4 empleados</option>
                <option value="5-10">5-10 empleados</option>
                <option value="10+">10+ empleados</option>
              </select>
              {errors.employees && <p className="text-red-500 text-sm mt-1 text-left">{errors.employees}</p>}
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2462ea] text-white py-4 px-6 rounded-lg font-bold text-xl hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Enviando...
              </>
            ) : (
              <>
                Empezar mi prueba gratuita
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-sm text-gray-500">
            🔒 Sin compromiso • Cancela cuando quieras • Soporte en español
          </p>
        </form>

        <p className="text-blue-100 mt-8 text-lg">
          ¿Preguntas? Escríbenos a <strong className="text-white">hola@pidecitas.com</strong>
        </p>
      </div>
    </section>
  );
};