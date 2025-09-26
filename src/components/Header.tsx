import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'About Us', 'Highlights', 'Amenities', 'Price', 'Floor Plan', 'Location Map', 'Gallery'
  ];

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-luxury-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Premium Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-luxury-gold flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-luxury-gold font-playfair text-2xl font-bold">H</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-gold rounded-full animate-pulse"></div>
            </div>
            <div className="ml-4">
              <h1 className={`font-playfair text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Hero Homes
              </h1>
              <p className={`font-inter text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? 'text-luxury-gold' : 'text-luxury-gold'
              }`}>
                The Palatial
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-inter text-sm font-medium tracking-wide hover:text-luxury-gold transition-all duration-300 relative group ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-luxury-gold to-luxury-bronze px-6 py-3 rounded-full hover:shadow-lg hover:shadow-luxury-gold/25 transition-all duration-300 group cursor-pointer">
              <Phone size={16} className="text-black" />
              <span className="font-inter font-semibold text-black">74287 86327</span>
              <ArrowRight size={16} className="text-black group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-full border border-luxury-gold/30 backdrop-blur-sm transition-colors ${
              isScrolled ? 'text-white bg-black/50' : 'text-white bg-black/30'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border border-luxury-gold/20 rounded-2xl mt-4 py-6 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-8 py-4 text-white hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 font-inter"
              >
                {item}
              </button>
            ))}
            <div className="px-8 py-4">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-luxury-gold to-luxury-bronze px-6 py-3 rounded-full">
                <Phone size={16} className="text-black" />
                <span className="font-inter font-semibold text-black">74287 86327</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;