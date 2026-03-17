import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import ProductSection  from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import RepairingSection from './components/RepairingSection';
import TrustStrip      from './components/TrustStrip';
import ProductSlider   from './components/ProductSlider';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';
import MachinePage     from './pages/MachinePage';
import PartsPage       from './pages/PartsPage';
import CheckoutPage    from './pages/CheckoutPage';
import PaymentPage     from './pages/PaymentPage';

export default function App() {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({
    name: '', phone: '', address: '', city: '', state: '', pincode: ''
  });
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);


  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar cart={cart} updateQuantity={updateQuantity} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductSlider />
            <ProductSection />
            <FeaturesSection />
            <RepairingSection />
            <TrustStrip />
            <ContactSection />
          </>
        } />
        <Route path="/machine" element={<MachinePage addToCart={addToCart} />} />
        <Route path="/parts" element={<PartsPage addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} userData={userData} setUserData={setUserData} />} />
        <Route path="/payment" element={<PaymentPage cart={cart} userData={userData} clearCart={clearCart} />} />
      </Routes>
      <Footer />
    </>
  );
}
