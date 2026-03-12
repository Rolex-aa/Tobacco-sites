import React from 'react';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="badge">✅ Trusted by 500+ Businesses</span>
        <h1>
          India's Best<br />
          <span className="highlight">Tobacco Making Machine</span>
        </h1>
        <p className="hero-sub">Powerful. Reliable. Easy to Operate. Built for your success.</p>
        <div className="price-tag">
          Price: <strong>₹1,00,000</strong> <span>only</span>
        </div>
        <div className="hero-btns">
          <button id="btn-order" className="btn-primary" onClick={() => scrollTo('contact')}>
            🛒 Order Now
          </button>
          <button id="btn-details" className="btn-secondary" onClick={() => scrollTo('product')}>
            See Details ↓
          </button>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img src="/machine.png" alt="TobaccoMaster Pro 5000 Machine" className="hero-img" />
      </div>
    </section>
  );
}
