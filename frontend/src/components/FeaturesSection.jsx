import React from 'react';

const features = [
  { icon: '⚡', title: 'High Speed Output',   desc: 'Produces up to 5,000 cigarettes per hour with consistent quality every time.' },
  { icon: '🛡️', title: 'Durable Build',        desc: 'Made with food-grade stainless steel for a rust-free, long-lasting machine.' },
  { icon: '🎛️', title: 'Digital Control',      desc: 'Intuitive touch interface. Simple buttons – no technical training needed.' },
  { icon: '🔇', title: 'Silent Operation',     desc: 'Precision engineered to run quietly, keeping your workspace peaceful.' },
  { icon: '🔧', title: 'Zero Maintenance',     desc: 'Removable parts make cleaning and servicing quick and hassle-free.' },
  { icon: '🚀', title: 'Instant Start-Up',     desc: 'Machine is fully operational within 2 minutes of switching on.' },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-nk-dark text-nk-text relative overflow-hidden transition-colors duration-300" id="features">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nk-green/5 rounded-full blur-[100px] -mr-80 -mt-80"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nk-gold/5 rounded-full blur-[120px] -ml-40 -mb-40 font-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-nk-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block transition-colors duration-300">World-Class Engineering</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight transition-colors duration-300">Superior Features for <br/><span className="text-nk-gold">Unmatched Performance.</span></h2>
          <p className="text-lg text-nk-text-subtle font-medium leading-relaxed transition-colors duration-300">
            Every component is precision-crafted to ensure your tobacco business runs without interruptions. 
            Efficiency isn't just a feature—it's our standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div 
              key={f.title} 
              className="group relative bg-nk-card border border-nk-border p-10 rounded-[2.5rem] hover:bg-nk-bg-accent hover:border-nk-gold/20 transition-all duration-500 overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-nk-gold/5 rounded-full blur-3xl translate-x-16 -translate-y-16 group-hover:bg-nk-gold/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-nk-bg-subtle rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-nk-gold transition-all duration-500 group-hover:text-nk-dark shadow-sm">
                {f.icon}
              </div>
              <h4 className="text-2xl font-bold text-nk-text mb-4 tracking-tight transition-colors duration-300">{f.title}</h4>
              <p className="text-nk-text-subtle leading-relaxed font-medium transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
