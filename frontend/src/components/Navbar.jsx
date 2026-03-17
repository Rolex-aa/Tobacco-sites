import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ cart, updateQuantity, isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const isShopPage = location.pathname === '/machine' || location.pathname === '/parts';
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-[999] bg-nk-dark/95 backdrop-blur-md border-b border-nk-border py-4 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-2xl font-black text-white tracking-tighter uppercase cursor-pointer flex items-center gap-2" onClick={() => handleScroll('hero')}>
          <span className="text-nk-green-lt">🌿 NK</span> <span className="text-white">Engineering</span> <span className="text-nk-gold font-bold">& Works</span>
        </div>
        <nav className="flex items-center gap-8 flex-wrap relative">
          <button onClick={() => handleScroll('hero')} className="text-nk-text/80 text-[17px] font-bold hover:text-nk-gold transition-colors">Home</button>
          <Link to="/machine" className="text-nk-text/80 text-[17px] font-bold hover:text-nk-gold transition-colors">Machine</Link>
          <Link to="/parts" className="text-nk-text/80 text-[17px] font-bold hover:text-nk-gold transition-colors">Parts</Link>
          <button onClick={() => handleScroll('repairing')} className="text-nk-text/80 text-[17px] font-bold hover:text-nk-gold transition-colors">Service</button>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-nk-card border border-nk-border text-nk-gold hover:scale-110 active:scale-95 transition-all shadow-lg"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>

          {/* Cart Icon */}
          {isShopPage && cartCount > 0 && (
            <div className="relative">
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative p-2.5 rounded-xl bg-nk-card border border-nk-border text-nk-text hover:text-nk-gold transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-nk-dark">{cartCount}</span>
              </button>

              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 text-nk-dark">
                  <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                    <span className="font-bold text-lg">My Cart</span>
                    <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-nk-dark">✕</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="p-4 flex gap-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-gray-100 p-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                          <p className="text-nk-gold font-bold text-sm mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-colors">-</button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-colors">+</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-500 font-semibold">Total:</span>
                      <span className="text-xl font-black text-nk-dark">₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('en-IN')}</span>
                    </div>
                    <Link 
                      to="/checkout"
                      onClick={() => setShowCart(false)}
                      className="block w-full text-center bg-nk-gold text-nk-dark font-bold py-3 rounded-xl hover:bg-yellow-400 transition-all shadow-md active:scale-[0.98]"
                    >
                      Checkout Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          <button onClick={() => handleScroll('contact')} className="bg-nk-gold text-nk-dark font-bold px-7 py-3 rounded-full text-[17px] hover:-translate-y-0.5 transition-transform active:scale-95">
            📞 Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
