import React from 'react';

const features = [
  { icon: '⚡', title: 'High Speed Output',   desc: 'Produces up to 5,000 cigarettes per hour with consistent quality every time.' },
  { icon: '🛡️', title: 'Durable Build',        desc: 'Made with food-grade stainless steel for a rust-free, long-lasting machine.' },
  { icon: '🎛️', title: 'Digital Control Panel', desc: 'Easy-to-read digital display. Simple buttons – no technical training needed.' },
  { icon: '🔇', title: 'Low Noise Operation',  desc: 'Engineered to run quietly so your workplace stays comfortable and calm.' },
  { icon: '🔧', title: 'Easy Maintenance',      desc: 'Removable parts make cleaning and servicing quick and hassle-free.' },
  { icon: '🚀', title: 'Fast Start-Up',         desc: 'Machine is ready to operate within 2 minutes of switching on.' },
  { icon: '🔐', title: 'Safety Lock System',    desc: 'Built-in safety locks prevent accidents and protect the operator.' },
  { icon: '📦', title: 'Free Delivery & Setup', desc: 'We deliver to your location across India and help set up the machine.' },
  { icon: '🛠️', title: '1 Year Warranty',       desc: 'Full manufacturer warranty on all parts and free service visits included.' },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-nk-dark to-nk-dark2" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Machine Parts & Components</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">Everything you need for a successful tobacco business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/20" key={f.title}>
              <div className="text-5xl mb-4">{f.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2.5">{f.title}</h4>
              <p className="text-[16px] text-white/65 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
