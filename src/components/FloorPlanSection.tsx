import React from 'react';
import { Building, LayoutGrid as Layout, Home } from 'lucide-react';

const FloorPlanSection = () => {
  const plans = [
    {
      icon: Building,
      title: "Master Plan",
      description: "Complete overview of the entire project layout and design",
      type: "master-plan"
    },
    {
      icon: Layout,
      title: "3 BHK + SPR",
      description: "Detailed floor plan for 3 bedroom apartments with servant room",
      type: "3-bhk"
    },
    {
      icon: Home,
      title: "4 BHK + SPR",
      description: "Comprehensive layout for 4 bedroom luxury apartments",
      type: "4-bhk"
    }
  ];

  return (
    <section id="floor-plan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apartments & Penthouse
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed floor plans and layouts designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <IconComponent size={80} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    View Detail
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Thoughtfully Designed Spaces
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Each apartment at Hero Homes The Palatial is meticulously planned to maximize space utilization while ensuring optimal natural light and ventilation. Our floor plans reflect modern architectural principles combined with traditional Indian living preferences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Spacious living and dining areas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Modern kitchen with utility area</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Master bedroom with attached bathroom</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Servant room with separate entrance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
              <Building size={120} className="text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Premium Architecture
              </h4>
              <p className="text-gray-600 leading-relaxed">
                G+43 floors of architectural excellence with modern design elements and premium finishes throughout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;