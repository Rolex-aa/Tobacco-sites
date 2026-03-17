import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-nk-dark py-20 border-t border-nk-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-nk-gold/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-8">
          <div className="text-3xl font-black text-nk-text tracking-tighter mb-2 transition-colors duration-300">
            🌿 NK <span className="text-nk-gold">Engineering</span> & Works
          </div>
          <p className="text-nk-gold text-sm font-bold uppercase tracking-[0.3em]">Precision • Power • Quality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-nk-border mb-8 transition-colors duration-300">
          <div>
            <p className="text-nk-text font-bold mb-2 transition-colors duration-300">📍 Factory Address</p>
            <p className="text-nk-text-subtle text-sm transition-colors duration-300">Industrial Area, Hubli, Karnataka, India</p>
          </div>
          <div>
            <p className="text-nk-text font-bold mb-2 transition-colors duration-300">📞 Direct Sales</p>
            <p className="text-nk-text-subtle text-sm transition-colors duration-300">+91 98765 43210 | +91 91234 56789</p>
          </div>
          <div>
            <p className="text-nk-text font-bold mb-2 transition-colors duration-300">🚚 Logistics</p>
            <p className="text-nk-text-subtle text-sm transition-colors duration-300">Pan-India Delivery & On-Site Setup</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-nk-text-subtle text-sm font-medium transition-colors duration-300">
            © {new Date().getFullYear()} NK Engineering & Works India. All rights reserved.
          </p>
          <div className="flex gap-6 text-nk-text-subtle text-sm font-bold uppercase tracking-widest transition-colors duration-300">
            <a href="#hero" className="hover:text-nk-gold transition-colors">Home</a>
            <a href="#product" className="hover:text-nk-gold transition-colors">Machine</a>
            <a href="#features" className="hover:text-nk-gold transition-colors">Features</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
