import React from 'react';
import { Award, Users, Building, Leaf } from 'lucide-react';

const DeveloperSection = () => {
  const pillars = [
    {
      icon: Users,
      title: "Fitness",
      description: "Promoting healthy living through world-class fitness amenities"
    },
    {
      icon: Award,
      title: "Creativity",
      description: "Innovative design solutions that inspire and delight"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly practices for a greener tomorrow"
    },
    {
      icon: Building,
      title: "Communities",
      description: "Building stronger communities through thoughtful spaces"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Developer
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Hero Group - A Legacy of Trust
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Hero Group, one of the largest trusted names in real estate, we have always listened to our beloved customers to understand people's choices, enabling us to reach every household today. The Hero Group has a strong legacy and is committed to quality in the services we deliver.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, our services and products reflect that unwavering commitment to quality. All Hero Homes Gurgaon projects are built on four fundamental pillars that define our approach to creating exceptional living spaces.
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
              <p className="text-blue-700">
                To create sustainable, innovative, and community-focused residential spaces that enhance the quality of life for our residents while maintaining the highest standards of excellence.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="text-center">
                <Building size={80} className="text-blue-600 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Trusted by Thousands
                </h4>
                <p className="text-gray-600 mb-6">
                  With decades of experience in real estate development, Hero Group continues to set new benchmarks in quality and innovation.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <p className="text-gray-600 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <p className="text-gray-600 text-sm">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Four Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Experience the Hero Difference
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Join thousands of satisfied homeowners who have chosen Hero Group for their dream homes. Experience unmatched quality, innovative design, and exceptional service that has made us a trusted name in real estate.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Learn More About Hero Group
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;