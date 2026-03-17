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
    <section className="py-24 bg-nk-off-white" id="product">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-nk-dark mb-3">NK Engineering Pro 5000</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            A complete tobacco making solution designed for high output and long durability
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
            <img src="/machine/1.jpeg" alt="NK Engineering Pro 5000" className="rounded-xl w-full h-auto" />
          </div>
          <div className="product-info">
            <h3 className="text-2xl font-extrabold text-nk-dark mb-6">Machine Specifications</h3>
            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse">
                <tbody>
                  {specs.map(([label, value], i) => (
                    <tr key={label} className="border-b border-gray-100 last:border-0 odd:bg-white even:bg-gray-50/50">
                      <td className="p-3.5 pl-6 font-bold text-nk-dark w-[42%] whitespace-nowrap">{label}</td>
                      <td className="p-3.5 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
