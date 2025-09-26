import React from 'react';
import { Shield, MapPin, Building2, Home, Users, Award, Crown, Sparkles } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Prime Location",
      subtitle: "Sector 104 Gurgaon",
      description: "Strategically located in the heart of Gurgaon's developing corridor",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Super-Luxury Apartments",
      subtitle: "Total Floors: G+43",
      description: "Premium high-rise towers with stunning panoramic views",
      gradient: "from-luxury-gold to-luxury-bronze"
    },
    {
      icon: Home,
      title: "Premium Towers & Floors",
      subtitle: "No of Units: 750",
      description: "Spacious, high-end luxury apartments with modern design",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Premium Finishes",
      subtitle: "Luxury Interiors",
      description: "Sophisticated living with modern conveniences",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      subtitle: "24/7 Surveillance",
      description: "State-of-the-art security systems for peace of mind",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Community Living",
      subtitle: "750 Families",
      description: "Vibrant community with shared amenities and spaces",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-luxury-gold/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-luxury-gold/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-luxury-gold" size={20} />
            <span className="font-inter text-sm tracking-widest uppercase text-luxury-gold">Project Highlights</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-dark mb-8">
            Highlights
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold to-luxury-bronze mx-auto mb-8"></div>
          <p className="font-cormorant text-2xl text-gray-600 max-w-4xl mx-auto">
            Hero Homes The Palatial - Where luxury meets lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="group bg-luxury-light rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-luxury-gold/10 hover:border-luxury-gold/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-gold/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`bg-gradient-to-r ${highlight.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-luxury-dark mb-2">
                  {highlight.title}
                </h3>
                <p className="font-inter text-luxury-gold font-semibold mb-4 tracking-wide">
                  {highlight.subtitle}
                </p>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Crown className="text-luxury-gold" size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-luxury-dark via-luxury-gray to-luxury-dark rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}></div>
          <div className="relative z-10">
            <Crown className="text-luxury-gold mx-auto mb-6" size={48} />
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Experience Unmatched <span className="text-luxury-gold">Luxury</span>
            </h3>
            <p className="font-inter text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Advanced security systems with 24/7 surveillance ensure your family's safety while premium amenities provide the ultimate lifestyle experience for discerning homeowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;