import React from 'react';

const steps = [
  { icon: '🛠️', title: 'Easy Cleaning',    desc: 'Simple daily cleaning keeps the machine running like new for years.' },
  { icon: '⚙️', title: 'Part Replacement', desc: 'Genuine spare parts are easy to swap with standard tools in minutes.' },
  { icon: '📋', title: 'Annual Service',    desc: 'Scheduled maintenance visits by our experts ensure zero breakdown.' },
  { icon: '📞', title: '24/7 Support',     desc: 'Speak directly to our technicians for any queries or troubleshooting.' },
];

export default function RepairingSection() {
  return (
    <section className="py-24 bg-nk-off-white" id="repairing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-nk-dark mb-3">Repairing & Maintenance</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Expert support and easy maintenance steps for long-lasting performance</p>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div className="bg-white rounded-2xl p-8 text-center flex-1 min-w-[200px] max-w-[230px] shadow-xl shadow-black/5 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-nk-green to-nk-green-lt rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-5 shadow-lg shadow-nk-green/20">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-nk-dark mb-2.5">{step.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block text-3xl text-nk-green-lt font-bold shrink-0">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
