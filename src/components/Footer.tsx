import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">Hero Homes</h3>
            <p className="text-gray-300 leading-relaxed">
              The Palatial - Premium luxury apartments in Sector 104, Gurgaon. Experience the epitome of modern living with world-class amenities and unmatched connectivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about-us')} className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-yellow-400 transition-colors">Highlights</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="text-gray-300 hover:text-yellow-400 transition-colors">Amenities</button></li>
              <li><button onClick={() => scrollToSection('price')} className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('floor-plan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Floor Plans</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-300">74287 86327</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-gray-300">info@herohomes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-gray-300">Sector 104, Gurgaon, Haryana</span>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Info</h4>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-yellow-400">RERA:</span> RC/REP/HARERA/GGM/2018/24</p>
              <p><span className="text-yellow-400">Type:</span> 3 & 4 BHK Apartments</p>
              <p><span className="text-yellow-400">Status:</span> New Launch</p>
              <p><span className="text-yellow-400">Area:</span> 11.25 Acres</p>
              <p><span className="text-yellow-400">Units:</span> 750</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Hero Homes. All rights reserved. | Developed by Hero Realty
            </p>
            <div className="text-gray-400 text-xs text-center md:text-right">
              <p>The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately.</p>
              <p className="mt-1">Please note that this is the official website of an authorized marketing partner.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;