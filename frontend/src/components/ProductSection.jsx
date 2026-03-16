import React from 'react';

const specs = [
  ['🏷️ Model',         'NK Engineering Pro 5000'],
  ['⚡ Motor Power',    '3 HP – Heavy Duty'],
  ['🔢 Output Capacity','5,000 cigarettes / hour'],
  ['⚙️ Machine Weight', '180 kg'],
  ['📐 Dimensions',     '120 × 80 × 110 cm'],
  ['🔌 Power Supply',   '220V / 50Hz, Single Phase'],
  ['🌡️ Operating Temp', '10°C – 45°C'],
  ['🔧 Material',       'Food-Grade Stainless Steel'],
  ['📦 Warranty',       '1 Year Full Warranty'],
  ['🚚 Delivery',       'Pan-India Free Delivery'],
];

export default function ProductSection() {
  return (
    <section className="product-section" id="product">
      <div className="container">
        <div className="section-title">
          <h2>NK Engineering Pro 5000</h2>
          <p>A complete tobacco making solution designed for high output and long durability</p>
        </div>
        <div className="product-grid">
          <div className="product-image-box">
            <img src="/machine.png" alt="NK Engineering Pro 5000" />
            <div className="price-badge">₹1,00,000</div>
          </div>
          <div className="product-info">
            <h3>Machine Specifications</h3>
            <table className="spec-table">
              <tbody>
                {specs.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
