import React from 'react';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import ProductSection  from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks      from './components/HowItWorks';
import TrustStrip      from './components/TrustStrip';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <FeaturesSection />
      <HowItWorks />
      <TrustStrip />
      <ContactSection />
      <Footer />
    </>
  );
}
