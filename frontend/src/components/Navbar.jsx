import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-[999] bg-nk-dark2/95 backdrop-blur-md border-b border-white/5 py-3">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-2xl font-extrabold text-nk-green-lt tracking-tight uppercase cursor-pointer" onClick={() => scrollTo('hero')}>
          🌿 NK Engineering <span className="text-nk-gold">& Works</span>
        </div>
        <nav className="flex items-center gap-7 flex-wrap">
          <button onClick={() => scrollTo('hero')} className="text-white/85 text-[17px] font-semibold hover:text-nk-gold transition-colors">Home</button>
          <button onClick={() => scrollTo('product')} className="text-white/85 text-[17px] font-semibold hover:text-nk-gold transition-colors">Machine</button>
          <button onClick={() => scrollTo('features')} className="text-white/85 text-[17px] font-semibold hover:text-nk-gold transition-colors">Machine Parts</button>
          <button onClick={() => scrollTo('repairing')} className="text-white/85 text-[17px] font-semibold hover:text-nk-gold transition-colors">Repairing</button>
          <button onClick={() => scrollTo('contact')} className="bg-nk-gold text-nk-dark font-bold px-7 py-3 rounded-full text-[17px] hover:-translate-y-0.5 transition-transform active:scale-95">
            📞 Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
