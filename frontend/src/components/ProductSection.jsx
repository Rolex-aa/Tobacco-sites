import React from 'react';

const specifications = [
  { label: 'Model', value: 'NK Pro 5000', icon: '🏷️' },
  { label: 'Motor Power', value: '3 HP – Heavy Duty', icon: '⚡' },
  { label: 'Output', value: '5,000 cigarettes/hr', icon: '🔢' },
  { label: 'Weight', value: '180 kg', icon: '⚙️' },
  { label: 'Dimensions', value: '120 × 80 × 110 cm', icon: '📐' },
  { label: 'Power', value: '220V, Single Phase', icon: '🔌' },
  { label: 'Operating Temp', value: '10°C – 45°C', icon: '🌡️' },
  { label: 'Material', value: 'SS 304 Food-Grade', icon: '🔧' },
  { label: 'Warranty', value: '1 Year Full', icon: '📦' },
  { label: 'Delivery', value: 'Free (Pan-India)', icon: '🚚' },
];

export default function ProductSection() {
  return (
    <section className="py-24 bg-nk-dark text-nk-text overflow-hidden transition-colors duration-300" id="product">
      <div className="container mx-auto px-6 relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-nk-gold/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="text-center mb-16 relative">
          <span className="text-nk-gold font-bold tracking-widest uppercase text-sm mb-3 block">Premium Machinery</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 transition-colors duration-300">NK Engineering <span className="text-nk-gold">Pro 5000</span></h2>
          <div className="w-24 h-1.5 bg-nk-gold mx-auto rounded-full mb-6"></div>
          <p className="text-nk-text-subtle max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            The industry standard for high-speed tobacco manufacturing. Engineered for maximum efficiency, 
            zero maintenance, and long-term durability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Machine Showcase */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-nk-gold/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-nk-card border border-nk-border p-4 rounded-[40px] shadow-2xl overflow-hidden group-hover:border-nk-gold/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8">
                <span className="bg-nk-gold text-nk-dark text-xs font-black px-3 py-1 rounded-full uppercase tracking-tighter">Bestseller</span>
              </div>
              <img 
                src="/machine/1.jpeg" 
                alt="NK Engineering Pro 5000" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Right: Modern Specs Grid */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300">
              <span className="w-8 h-1 bg-nk-gold rounded-full"></span>
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec) => (
                <div 
                  key={spec.label} 
                  className="bg-nk-card border border-nk-border p-5 rounded-2xl hover:bg-nk-bg-accent hover:border-nk-gold/30 transition-all hover:-translate-y-1 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{spec.icon}</div>
                  <p className="text-xs text-nk-text-subtle font-bold uppercase tracking-wider mb-1 transition-colors duration-300">{spec.label}</p>
                  <p className="text-sm md:text-md font-bold text-nk-text leading-tight transition-colors duration-300">{spec.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-nk-gold/10 border border-nk-gold/20 rounded-3xl flex items-center justify-between gap-6 flex-wrap md:flex-nowrap transition-colors duration-300">
              <div>
                <p className="text-nk-gold font-black text-xl mb-1">Starting from ₹1,00,000</p>
                <p className="text-nk-text-subtle text-xs font-bold uppercase transition-colors duration-300">Incl. GST & Pan-India Shipping</p>
              </div>
              <button className="bg-nk-gold text-nk-dark font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-nk-gold/10 active:scale-95 whitespace-nowrap">
                📥 Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
