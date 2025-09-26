import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import AmenitiesSection from './components/AmenitiesSection';
import PricingSection from './components/PricingSection';
import FloorPlanSection from './components/FloorPlanSection';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import ContactForm from './components/ContactForm';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <AmenitiesSection />
      <PricingSection />
      <FloorPlanSection />
      <LocationSection />
      <GallerySection />
      <ContactForm />
      <DeveloperSection />
      <Footer />
    </div>
  );
}

export default App;