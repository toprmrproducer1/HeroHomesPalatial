import React from 'react';
import { useState } from 'react';
import { MapPin, Building, Star, ArrowRight, Sparkles, Phone, Mail, User } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try to send to webhook with no-cors mode to avoid CORS issues
      await fetch('https://primary-production-f1f05.up.railway.app/webhook/Inbound', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Since no-cors mode doesn't allow reading response, assume success
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: show success to user even if there are network issues
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.7) 100%), url('https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1737289367944-hero-homes2.webp')`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-luxury-gold rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-luxury-gold rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-luxury-gold rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-luxury-gold/20 to-luxury-bronze/20 backdrop-blur-md border border-luxury-gold/40 rounded-full px-8 py-4 mb-12 animate-fade-in hover:scale-105 transition-all duration-500 mt-8">
              <Sparkles className="text-luxury-gold animate-pulse" size={24} />
              <span className="font-playfair text-lg tracking-widest uppercase text-luxury-gold font-semibold">Ultra Premium Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
              Where Your Dreams Of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-bronze animate-pulse">
                Luxury Come To Life
              </span>
            </h1>
            
            {/* Location with Interactive Elements */}
            <div className="flex items-center space-x-4 mb-8 animate-fade-in delay-300">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-luxury-gold"></div>
              <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-luxury-gold/30 hover:border-luxury-gold/60 transition-all duration-300">
                <MapPin className="text-luxury-gold animate-bounce" size={24} />
                <p className="font-cormorant text-2xl md:text-3xl font-light">Sector 104, Gurgaon</p>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-luxury-gold"></div>
            </div>
            
            <p className="font-inter text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90 animate-fade-in delay-500">
              3 & 4 BHK Luxurious Apartments
            </p>

            {/* Interactive Premium Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-700">
              <div className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl p-8 border border-luxury-gold/30 hover:border-luxury-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20">
                <Building className="text-luxury-gold mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" size={48} />
                <h3 className="font-cormorant text-lg font-semibold mb-4 group-hover:text-luxury-gold transition-colors duration-300 text-center">Total Land Area</h3>
                <p className="font-playfair text-3xl font-bold text-luxury-gold mb-2 group-hover:scale-110 transition-transform duration-300 text-center">11.25</p>
                <p className="font-inter text-sm tracking-widest uppercase opacity-80 text-center">ACRES</p>
              </div>
              
              <div className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl p-8 border border-luxury-gold/30 hover:border-luxury-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20">
                <Star className="text-luxury-gold mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" size={48} />
                <h3 className="font-cormorant text-lg font-semibold mb-4 group-hover:text-luxury-gold transition-colors duration-300 text-center">Project Status</h3>
                <p className="font-playfair text-3xl font-bold text-luxury-gold mb-2 group-hover:scale-110 transition-transform duration-300 text-center">New</p>
                <p className="font-inter text-sm tracking-widest uppercase opacity-80 text-center">LAUNCH</p>
              </div>
              
              <div className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl p-8 border border-luxury-gold/30 hover:border-luxury-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20">
                <div className="text-luxury-gold mx-auto mb-6 text-5xl font-playfair font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">₹</div>
                <h3 className="font-cormorant text-lg font-semibold mb-4 group-hover:text-luxury-gold transition-colors duration-300 text-center">Starts At</h3>
                <p className="font-playfair text-3xl font-bold text-luxury-gold mb-2 group-hover:scale-110 transition-transform duration-300 text-center">4.55</p>
                <p className="font-inter text-sm tracking-widest uppercase opacity-80 text-center">CR*</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in delay-1000">
            <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-3xl p-10 border border-luxury-gold/40 hover:border-luxury-gold/60 transition-all duration-500 shadow-2xl">
              <h3 className="font-playfair text-3xl font-bold text-white mb-8 text-center">
                Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-bronze">Exclusive Visit</span>
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <ArrowRight size={32} className="text-white rotate-45" />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-green-400 mb-4">Thank You!</h4>
                  <p className="text-white/80 font-inter text-lg">We'll contact you shortly to schedule your exclusive site visit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold/60 group-hover:text-luxury-gold transition-colors duration-300" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-luxury-gold/30 rounded-2xl text-white placeholder-white/60 focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 font-inter hover:bg-white/15"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold/60 group-hover:text-luxury-gold transition-colors duration-300" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Phone Number"
                        className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-luxury-gold/30 rounded-2xl text-white placeholder-white/60 focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 font-inter hover:bg-white/15"
                      />
                    </div>
                    
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold/60 group-hover:text-luxury-gold transition-colors duration-300" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Email Address"
                        className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-luxury-gold/30 rounded-2xl text-white placeholder-white/60 focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 font-inter hover:bg-white/15"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-bronze text-black py-5 rounded-2xl font-inter font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/40 disabled:opacity-50 flex items-center justify-center space-x-3 hover:scale-105 group"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Schedule Exclusive Visit'}</span>
                    {!isSubmitting && <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />}
                  </button>
                </form>
              )}
              
              <p className="text-white/60 text-sm mt-6 text-center font-inter leading-relaxed">
                I authorize representatives to contact me about this premium property. This consent overrides any DNC/NDNC registration.
              </p>
            </div>
          </div>
        </div>

        {/* RERA Info with Interactive Element */}
        <div className="text-center mt-16 animate-fade-in delay-1200">
          <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300">
            <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
            <p className="font-inter text-sm opacity-80 tracking-wide">
              RERA: RC/REP/HARERA/GGM/2018/24
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-luxury-gold rounded-full flex justify-center hover:border-luxury-bronze transition-colors duration-300 cursor-pointer">
          <div className="w-1.5 h-4 bg-gradient-to-b from-luxury-gold to-luxury-bronze rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;