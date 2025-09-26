import React from 'react';
import { Dumbbell, Waves, Heart, TreePine, Navigation, Shield } from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Dumbbell,
      title: "Gym",
      description: "State-of-the-art fitness center with modern equipment"
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Olympic-sized swimming pool for relaxation and fitness"
    },
    {
      icon: Heart,
      title: "Meditation",
      description: "Peaceful meditation spaces for mind and body wellness"
    },
    {
      icon: TreePine,
      title: "Garden",
      description: "Beautifully landscaped gardens for nature lovers"
    },
    {
      icon: Navigation,
      title: "Jogging Track",
      description: "Dedicated jogging track for morning and evening runs"
    },
    {
      icon: Shield,
      title: "24x7 Security",
      description: "Round-the-clock security with advanced surveillance"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top-Tier Amenities Unveiled
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Lifestyle Beyond Expectations
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              From fitness and wellness facilities to recreational spaces and security features, every amenity is thoughtfully designed to enhance your quality of life at Hero Homes The Palatial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;