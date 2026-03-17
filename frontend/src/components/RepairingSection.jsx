import React from 'react';

const steps = [
  { icon: '🛠️', title: 'Daily Cleaning',    desc: 'Just 5 minutes of basic cleaning keeps the machine running at 100% efficiency.' },
  { icon: '⚙️', title: 'Easy Swapping',    desc: 'All main parts are modular. Swap rollers or gears in minutes with common tools.' },
  { icon: '📋', title: 'Expert Service',   desc: 'Get annual maintenance from our certified technicians to prevent any downtime.' },
  { icon: '📞', title: 'Video Support',    desc: 'Stuck? Call our 24/7 technical hotline for instant video-call troubleshooting.' },
];

export default function RepairingSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="repairing">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nk-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-nk-green font-bold uppercase tracking-widest text-sm mb-3 block">Maintenance & Care</span>
            <h2 className="text-4xl md:text-5xl font-black text-nk-dark leading-tight">Built to Last, <span className="text-nk-green">Easy to Fix.</span></h2>
          </div>
          <p className="text-lg text-gray-500 max-w-md">
            Our machines are engineered for zero-headache operations. Even if something breaks, our "Easy-Swap" design ensures you're back in business fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div 
              key={step.title} 
              className="group bg-nk-off-white/50 border border-gray-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-nk-green/10 hover:border-nk-green/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:bg-nk-green group-hover:text-white transition-colors duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-extrabold text-nk-dark mb-3 tracking-tight">{step.title}</h4>
              <p className="text-[16px] text-gray-500 leading-relaxed font-medium">
                {step.desc}
              </p>
              <div className="mt-8 flex items-center text-nk-green font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500">
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-20 bg-nk-dark text-white rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-nk-green/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Need immediate technical help?</h3>
            <p className="text-gray-400">Our support team is available 24/7 for you.</p>
          </div>
          <button className="relative z-10 bg-nk-green hover:bg-nk-green-lt text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl shadow-nk-green/20 hover:scale-105 active:scale-95">
            💬 Chat with Technician
          </button>
        </div>
      </div>
    </section>
  );
}
