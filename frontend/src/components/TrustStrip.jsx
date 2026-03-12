import React from 'react';

const stats = [
  { num: '500+',     label: 'Happy Customers'  },
  { num: '15+',      label: 'Years Experience'  },
  { num: 'Pan-India',label: 'Free Delivery'     },
  { num: '24/7',     label: 'Customer Support'  },
];

export default function TrustStrip() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {stats.map((s) => (
            <div className="trust-item" key={s.label}>
              <div className="trust-num">{s.num}</div>
              <div>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
