import React from 'react';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative bg-nk-dark overflow-hidden min-h-screen flex items-center" id="hero">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-nk-green/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-nk-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 hover:bg-white/10 transition-colors group cursor-default">
              <span className="flex h-3 w-3 shrink-0 rounded-full bg-nk-gold animate-ping"></span>
              <span className="text-white/80 text-sm font-bold tracking-widest uppercase">Now Shipping Across India</span>
            </div>
            
            <h1 className="text-nk-text text-5xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter transition-colors duration-300">
              The Gold Standard of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nk-gold via-yellow-400 to-nk-gold bg-[length:200%_auto] animate-gradient">
                Tobacco Machinery.
              </span>
            </h1>
            
            <p className="text-nk-text-subtle text-lg md:text-2xl mb-12 leading-relaxed max-w-xl font-medium transition-colors duration-300">
              Join 500+ successful operators. Powerful, reliable, and engineered for 24/7 industrial production.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <button
                id="btn-order"
                className="group bg-nk-gold text-nk-dark text-xl font-black px-12 py-5 rounded-2xl shadow-2xl shadow-nk-gold/20 hover:bg-yellow-400 transition-all active:scale-95 flex items-center gap-3"
                onClick={() => scrollTo('contact')}
              >
                <span>🛒 Direct Factory Order</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                id="btn-details"
                className="text-nk-text text-xl font-bold px-10 py-5 rounded-2xl border-2 border-nk-border hover:bg-nk-card transition-all active:scale-95 flex items-center gap-2"
                onClick={() => scrollTo('product')}
              >
                Explore Machine Details
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-nk-gold/20 rounded-full blur-[100px] scale-75 opacity-20 pointer-events-none"></div>
            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-nk-gold to-nk-green blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/nk-banner.jpg" 
                alt="NK Engineering Heavy Duty Machinery" 
                className="relative w-full h-auto rounded-[3rem] shadow-2xl border border-white/5 transform transition-all duration-1000 hover:scale-[1.01] hover:-rotate-1" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
