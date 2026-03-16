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
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-title light">
          <h2>Machine Parts & Components</h2>
          <p>Everything you need for a successful tobacco business</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feat-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
