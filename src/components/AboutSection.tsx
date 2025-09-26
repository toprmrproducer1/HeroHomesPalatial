import React from 'react';
import { Award, Home, Leaf, Users, Crown, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about-us" className="py-24 bg-luxury-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 rounded-full px-6 py-2 mb-6">
            <Crown className="text-luxury-gold" size={20} />
            <span className="font-inter text-sm tracking-widest uppercase text-luxury-gold">About The Project</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-dark mb-8">
            Hero Homes
            <span className="text-luxury-gold"> The Palatial</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold to-luxury-bronze mx-auto mb-8"></div>
          <p className="font-cormorant text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the epitome of modern living at The Palatial Hero Homes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              Discover the epitome of modern living at The Palatial Hero Homes, the latest premium residential offering by Hero Realty, located in the heart of Sector 104. This highly anticipated new launch redefines luxury and comfort, combining innovative design, sustainable living, and world-class amenities.
            </p>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              Strategically situated in the thriving locale of Sector 104, Hero Homes offer seamless connectivity to major hubs in Gurugram and Delhi. Proximity to top educational institutions, healthcare facilities, and entertainment options makes it an ideal choice for families and professionals alike.
            </p>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              Hero Homes' architecture harmonizes elegance and functionality, boasting spacious 3 and 4-BHK apartments designed to maximize natural light and ventilation. Each residence is crafted with meticulous attention to detail, reflecting the perfect blend of aesthetics and practicality.
            </p>
            
            {/* Premium Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-luxury-gold/10">
                <Shield className="text-luxury-gold" size={24} />
                <span className="font-inter font-medium text-gray-800">RERA Approved</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-luxury-gold/10">
                <Award className="text-luxury-gold" size={24} />
                <span className="font-inter font-medium text-gray-800">Premium Quality</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-luxury-gold/10">
              <Home className="text-luxury-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="font-playfair text-xl font-bold text-luxury-dark mb-3 text-center">Luxury Living</h3>
              <p className="font-inter text-gray-600 text-center text-sm leading-relaxed">Premium 3 & 4 BHK apartments with modern amenities</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-luxury-gold/10 mt-8">
              <Leaf className="text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="font-playfair text-xl font-bold text-luxury-dark mb-3 text-center">Green Living</h3>
              <p className="font-inter text-gray-600 text-center text-sm leading-relaxed">Eco-friendly features and landscaped gardens</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-luxury-gold/10 -mt-8">
              <Award className="text-luxury-bronze mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="font-playfair text-xl font-bold text-luxury-dark mb-3 text-center">Premium Quality</h3>
              <p className="font-inter text-gray-600 text-center text-sm leading-relaxed">Meticulous attention to detail and craftsmanship</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-luxury-gold/10">
              <Users className="text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="font-playfair text-xl font-bold text-luxury-dark mb-3 text-center">Community</h3>
              <p className="font-inter text-gray-600 text-center text-sm leading-relaxed">Community-centric spaces for social interaction</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-luxury-dark to-luxury-gray rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-luxury-gold/5 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
              The Epitome of <span className="text-luxury-gold">Luxury Living</span>
            </h3>
            <p className="font-inter text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto opacity-90">
              What sets Hero Homes Sector 104 apart is its focus on green living. With expansive landscaped gardens, eco-friendly features, and community-centric spaces, residents can enjoy a balanced lifestyle that prioritizes health and well-being. Embrace the opportunity to own your dream home at The Palatial Hero Homes and experience the perfect blend of luxury, convenience, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;