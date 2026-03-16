import React from 'react';

const steps = [
  { icon: '🛠️', title: 'Easy Cleaning',    desc: 'Simple daily cleaning keeps the machine running like new for years.' },
  { icon: '⚙️', title: 'Part Replacement', desc: 'Genuine spare parts are easy to swap with standard tools in minutes.' },
  { icon: '📋', title: 'Annual Service',    desc: 'Scheduled maintenance visits by our experts ensure zero breakdown.' },
  { icon: '📞', title: '24/7 Support',     desc: 'Speak directly to our technicians for any queries or troubleshooting.' },
];

export default function RepairingSection() {
  return (
    <section className="how-section" id="repairing">
      <div className="container">
        <div className="section-title">
          <h2>Repairing & Maintenance</h2>
          <p>Expert support and easy maintenance steps for long-lasting performance</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div className="step-card">
                <div className="step-num">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
