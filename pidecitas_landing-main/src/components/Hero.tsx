import React from 'react';
import { Calendar, Smartphone, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSubmit: (data: { name: string; business: string; phone: string; email: string; countryCode: string; employees: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSubmit }) => {
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
      formDataToSend.append('source', 'Hero Form');
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
        urlEncodedData.append('source', 'Hero Form');
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
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ¿Cansado de <span className="text-[#2462ea]">perder citas</span> por WhatsApp?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Organiza tu negocio en minutos y haz que los clientes <strong>vuelvan solos</strong>. 
              Sin más confusiones, sin más citas perdidas.
            </p>
            
            {/* Features quick list */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-[#2462ea] font-medium">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda automática
              </div>
              <div className="flex items-center text-[#2462ea] font-medium">
                <Smartphone className="w-5 h-5 mr-2" />
                Recordatorios por WhatsApp
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl shadow-lg max-w-md mx-auto lg:mx-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center lg:text-left">
                Prueba gratis por 30 días
              </h3>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Business Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Nombre de tu negocio"
                    value={formData.business}
                    onChange={(e) => handleInputChange('business', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all ${
                      errors.business ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
                </div>

                {/* WhatsApp Field with Country Code */}
                <div>
                  <div className="flex gap-2">
                    {/* Country Code Input */}
                    <div className="w-20">
                      <input
                        type="text"
                        placeholder="+1"
                        value={formData.countryCode}
                        onChange={handleCountryCodeChange}
                        className={`w-full px-2 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all text-center ${
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                        disabled={isSubmitting}
                        maxLength={15}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Solo números, sin espacios ni guiones</p>
                </div>

                {/* Employees Field */}
                <div>
                  <select
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2462ea] focus:border-transparent outline-none transition-all ${
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
                  {errors.employees && <p className="text-red-500 text-sm mt-1">{errors.employees}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2462ea] text-white py-3.5 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Quiero dejar de perder clientes
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Sin compromiso • Cancela cuando quieras
              </p>
            </form>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-gray-50 h-6 flex items-center justify-center">
                    <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-white">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#2462ea] mb-2">Pidecitas</h3>
                      <p className="text-sm text-gray-600">Mi Agenda</p>
                    </div>
                    
                    {/* Calendar view */}
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-800">Hoy, 15 Mar</h4>
                        <span className="text-[#2462ea] text-sm font-medium">8 citas</span>
                      </div>
                      
                      {/* Appointment cards */}
                      <div className="space-y-2">
                        {[
                          { time: '09:00', name: 'María González', service: 'Corte y peinado' },
                          { time: '10:30', name: 'Carlos Ruiz', service: 'Barba y corte' },
                          { time: '12:00', name: 'Ana Martín', service: 'Tinte y mechas' }
                        ].map((appointment, index) => (
                          <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-[#2462ea] rounded-full mr-3"></div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium text-gray-800 text-sm">{appointment.name}</p>
                                  <p className="text-xs text-gray-600">{appointment.service}</p>
                                </div>
                                <span className="text-[#2462ea] font-medium text-sm">{appointment.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="text-2xl font-bold text-green-600">95%</p>
                        <p className="text-xs text-green-700">Ocupación</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <p className="text-2xl font-bold text-[#2462ea]">+40%</p>
                        <p className="text-xs text-blue-700">Más citas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-lg shadow-lg animate-bounce">
                <p className="text-xs font-medium">¡Nueva cita!</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#2462ea] text-white p-2 rounded-lg shadow-lg">
                <p className="text-xs font-medium">Recordatorio enviado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};