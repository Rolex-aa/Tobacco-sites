import React from 'react';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative bg-[#0f2027] overflow-hidden min-h-[80vh] flex items-center" id="hero">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(46,125,50,0.18)_0%,transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-left">
          <span className="inline-block bg-nk-gold/20 border border-nk-gold text-nk-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            ✅ Trusted by 500+ Businesses
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            India's Best<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nk-green-lt to-nk-gold">
              Tobacco Making Machine
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Powerful. Reliable. Easy to Operate. Built for your success.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              id="btn-order"
              className="bg-gradient-to-br from-nk-green to-nk-green-lt text-white text-xl font-bold px-10 py-4 rounded-full shadow-lg shadow-nk-green/40 hover:-translate-y-1 transition-transform active:scale-95"
              onClick={() => scrollTo('contact')}
            >
              🛒 Order Now
            </button>
            <button
              id="btn-details"
              className="bg-white/10 text-white text-xl font-semibold px-9 py-4 rounded-full border-2 border-white/40 backdrop-blur-md hover:bg-white/20 hover:-translate-y-1 transition-all active:scale-95"
              onClick={() => scrollTo('product')}
            >
              See Details ↓
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end animate-bounce-subtle">
          <img src="/machine.png" alt="NK Engineering Pro 5000 Machine" className="max-w-full h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
