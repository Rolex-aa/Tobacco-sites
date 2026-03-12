import React from 'react';

const steps = [
  { num: 1, title: 'Load Tobacco',  desc: 'Fill the hopper with your tobacco leaves or filler material.' },
  { num: 2, title: 'Set Settings',  desc: 'Choose size, density and speed using the easy digital panel.' },
  { num: 3, title: 'Press Start',   desc: 'Press the green START button. Machine begins automatically.' },
  { num: 4, title: 'Collect Output',desc: 'Finished cigarettes come out neatly from the output tray.' },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Simple 4-step process – easy for everyone</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="step-card">
                <div className="step-num">{step.num}</div>
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
