import React from 'react';
import { Home, Square, Star, Crown, Sparkles, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const pricing = [
    {
      type: "3 BHK + SPR",
      price: "₹ 4.55 Cr*",
      size: "2,833 Sq.Ft.",
      features: [
        "3 Spacious Bedrooms",
        "Premium Italian Finishes",
        "Modular German Kitchen",
        "Private Balcony Views",
        "Dedicated Servant Room",
        "Smart Home Automation"
      ]
    },
    {
      type: "4 BHK + SPR",
      price: "₹ 5.54 Cr*",
      size: "3,457 Sq.Ft.",
      features: [
        "4 Luxury Master Bedrooms",
        "Premium Italian Finishes",
        "Designer Modular Kitchen",
        "Multiple Private Balconies",
        "Dedicated Servant Room",
        "Smart Home Automation"
      ],
      popular: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="price" className="py-24 bg-luxury-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-luxury-gold/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-luxury-gold/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-luxury-gold/3 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 rounded-full px-6 py-2 mb-6">
            <Crown className="text-luxury-gold" size={20} />
            <span className="font-inter text-sm tracking-widest uppercase text-luxury-gold">Investment Opportunity</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-dark mb-8">
            Unlock the <span className="text-luxury-gold">Luxury</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold to-luxury-bronze mx-auto mb-8"></div>
          <p className="font-cormorant text-2xl text-gray-600 max-w-4xl mx-auto">
            Choose from our premium collection of luxury apartments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group ${
                plan.popular 
                  ? 'bg-gradient-to-br from-luxury-dark to-luxury-gray text-white transform scale-105 border-2 border-luxury-gold' 
                  : 'bg-white border-2 border-luxury-gold/20 hover:border-luxury-gold/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-luxury-gold to-luxury-bronze text-black px-8 py-3 rounded-full font-inter font-bold text-sm tracking-wide flex items-center space-x-2">
                  <Sparkles size={16} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="text-center mb-10">
                <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  plan.popular ? 'bg-luxury-gold/20' : 'bg-luxury-gold/10'
                }`}>
                  <Home size={40} className={plan.popular ? 'text-luxury-gold' : 'text-luxury-gold'} />
                </div>
                
                <h3 className={`font-playfair text-3xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-luxury-dark'}`}>
                  {plan.type}
                </h3>
                
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Square size={24} className={plan.popular ? 'text-luxury-gold' : 'text-luxury-gold'} />
                  <span className={`font-inter text-lg ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                    Size: {plan.size}
                  </span>
                </div>
                
                <div className={`font-playfair text-5xl font-bold ${plan.popular ? 'text-luxury-gold' : 'text-luxury-gold'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-4">
                    <Star size={18} className={plan.popular ? 'text-luxury-gold' : 'text-luxury-gold'} />
                    <span className={`font-inter ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-inter font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group ${
                  plan.popular
                    ? 'bg-luxury-gold hover:bg-luxury-bronze text-black'
                    : 'bg-luxury-dark hover:bg-luxury-gray text-white'
                }`}
              >
                <span>Express Interest</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="font-inter text-gray-600 mb-8 text-lg">
            *Prices are subject to change. Please contact us for the latest pricing and availability.
          </p>
          
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-luxury-gold/20">
            <h3 className="font-playfair text-3xl font-bold text-luxury-dark mb-8">
              Why Choose Hero Homes <span className="text-luxury-gold">The Palatial?</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">11.25</div>
                <p className="font-inter text-gray-600 font-medium">Acres of Premium Land</p>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">750</div>
                <p className="font-inter text-gray-600 font-medium">Luxury Units</p>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">G+43</div>
                <p className="font-inter text-gray-600 font-medium">Premium Floors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;