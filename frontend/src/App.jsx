import React from 'react';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import ProductSection  from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import RepairingSection from './components/RepairingSection';
import TrustStrip      from './components/TrustStrip';
import ProductSlider   from './components/ProductSlider';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSlider />
      <ProductSection />
      <FeaturesSection />
      <RepairingSection />
      <TrustStrip />
      <ContactSection />
      <Footer />
    </>
  );
}
