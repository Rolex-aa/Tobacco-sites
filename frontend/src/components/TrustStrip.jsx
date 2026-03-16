import React from 'react';

const stats = [
  { num: '500+',     label: 'Happy Customers'  },
  { num: '15+',      label: 'Years Experience'  },
  { num: 'Pan-India',label: 'Free Delivery'     },
  { num: '24/7',     label: 'Customer Support'  },
];

export default function TrustStrip() {
  return (
    <section className="bg-gradient-to-r from-nk-green to-[#388e3c] py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div className="text-white" key={s.label}>
              <div className="text-3xl md:text-5xl font-extrabold mb-1.5">{s.num}</div>
              <div className="text-lg opacity-85 font-semibold tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
