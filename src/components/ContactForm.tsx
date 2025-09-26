import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book A Site Visit
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us to schedule your personal tour of Hero Homes The Palatial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Call Us</p>
                    <p className="text-white font-semibold text-lg">74287 86327</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Email Us</p>
                    <p className="text-white font-semibold">info@herohomes.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Visit Us</p>
                    <p className="text-white font-semibold">Sector 104, Gurgaon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Hero Homes?</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-yellow-400" />
                  <span>Prime location in Sector 104</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-yellow-400" />
                  <span>World-class amenities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-yellow-400" />
                  <span>Trusted Hero Group legacy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-yellow-400" />
                  <span>RERA approved project</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request Site Visit
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">Thank You!</h4>
                <p className="text-gray-600">We'll contact you shortly to schedule your site visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone No.*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <Send size={20} />
                  <span>Submit</span>
                </button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;