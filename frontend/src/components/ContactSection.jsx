import React, { useState } from 'react';

const API_URL = 'http://localhost:5001/api/enquiries';

export default function ContactSection() {
  const [form, setForm]       = useState({ name: '', phone: '', city: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg]   = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');
    try {
      const res  = await fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ name: '', phone: '', city: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-nk-dark to-nk-dark2" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">📞 Contact Us to Order</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">Our team speaks Hindi & English. We are happy to help you!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: '📱', strong: 'Call or WhatsApp', val: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: '📧', strong: 'Email Us', val: 'sales@nkengineering.in', href: 'mailto:sales@nkengineering.in' },
              { icon: '🏠', strong: 'Visit Our Office', val: '42, Industrial Area, Phase 2, New Delhi – 110020' },
              { icon: '🕐', strong: 'Working Hours', val: 'Mon – Sat: 9:00 AM to 6:00 PM' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <span className="text-4xl shrink-0">{item.icon}</span>
                <div>
                  <strong className="block text-nk-gold text-base font-bold mb-1">{item.strong}</strong>
                  {item.href ? (
                    <a href={item.href} className="text-white/85 text-[17px] font-medium hover:text-nk-green-lt transition-colors">{item.val}</a>
                  ) : (
                    <span className="text-white/85 text-[17px] font-medium leading-relaxed block">{item.val}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Form */}
          <form className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl" id="order-form" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-extrabold text-nk-dark mb-8">Send an Enquiry</h3>

            <div className="space-y-5">
              {[
                { id: 'name', label: 'Your Full Name', type: 'text', placeholder: 'e.g. Ramesh Gupta', req: true },
                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 98765 43210', req: true },
                { id: 'city', label: 'Your City / State', type: 'text', placeholder: 'e.g. Lucknow, UP' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-base font-bold text-nk-dark mb-2">{field.label}</label>
                  <input
                    type={field.type} id={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    required={field.req}
                    className="w-full px-5 py-3.5 text-[17px] border-2 border-gray-100 rounded-xl outline-none focus:border-nk-green-lt bg-gray-50 transition-all font-medium"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-base font-bold text-nk-dark mb-2">Any Questions? (Optional)</label>
                <textarea
                  id="message" rows="3"
                  placeholder="Write your question here..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 text-[17px] border-2 border-gray-100 rounded-xl outline-none focus:border-nk-green-lt bg-gray-50 transition-all font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                id="btn-submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-br from-nk-green to-nk-green-lt text-white text-xl font-bold py-4 rounded-xl shadow-lg shadow-nk-green/30 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-70 disabled:grayscale"
              >
                {status === 'loading' ? '⏳ Sending...' : '✅ Send Enquiry'}
              </button>

              <div className="text-center text-sm text-gray-400 font-medium">We will call you back within 24 hours.</div>

              {status === 'success' && (
                <div className="mt-4 bg-green-50 border border-nk-green-lt text-nk-green rounded-xl p-4 font-bold text-center">
                  🎉 Thank you! We will contact you very soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 bg-red-50 border border-red-400 text-red-600 rounded-xl p-4 font-bold text-center">
                  ❌ {errMsg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
