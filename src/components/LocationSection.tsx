import React from 'react';
import { MapPin, Clock, Car, Building } from 'lucide-react';

const LocationSection = () => {
  const locations = [
    {
      distance: "0 km",
      name: "Just off Dwarka Expressway",
      description: "Prime connectivity to major transportation routes"
    },
    {
      distance: "0 km",
      name: "Green Area Location",
      description: "Situated within lush green surroundings in Sector 104"
    },
    {
      distance: "2 km",
      name: "Gurgaon Railway Station",
      description: "Easy access to rail connectivity"
    },
    {
      distance: "7 km",
      name: "Medanta - The Medicity",
      description: "World-class healthcare facility nearby"
    },
    {
      distance: "10 km",
      name: "Paras Hospital",
      description: "Premium healthcare services in proximity"
    }
  ];

  return (
    <section id="location-map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prime Location Boosts Connectivity
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in Sector 104, Gurgaon with excellent connectivity to key destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <MapPin size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                  {location.distance}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {location.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Location Advantages
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hero Homes The Palatial enjoys a prime location in Sector 104, Gurgaon, offering residents unparalleled connectivity to business districts, educational institutions, healthcare facilities, and entertainment hubs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Car size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Commute</h4>
                  <p className="text-gray-600 text-sm">Direct access to Dwarka Expressway and major roads</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Building size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hubs</h4>
                  <p className="text-gray-600 text-sm">Close proximity to Cyber City and other commercial areas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Saving</h4>
                  <p className="text-gray-600 text-sm">Reduced travel time to major destinations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Connectivity at a Glance
            </h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900">Dwarka Expressway</span>
                <span className="text-blue-600 font-bold">0 KM</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900">Railway Station</span>
                <span className="text-blue-600 font-bold">2 KM</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900">Medanta Hospital</span>
                <span className="text-blue-600 font-bold">7 KM</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900">Paras Hospital</span>
                <span className="text-blue-600 font-bold">10 KM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;