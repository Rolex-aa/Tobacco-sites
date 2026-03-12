import React, { useState } from 'react';

const API_URL = 'http://localhost:5000/api/enquiries';

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
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title light">
          <h2>📞 Contact Us to Order</h2>
          <p>Our team speaks Hindi &amp; English. We are happy to help you!</p>
        </div>
        <div className="contact-wrap">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <strong>Call or WhatsApp</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:sales@tobaccomaster.in">sales@tobaccomaster.in</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🏠</span>
              <div>
                <strong>Visit Our Office</strong>
                <span>42, Industrial Area, Phase 2,<br />New Delhi – 110020</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Working Hours</strong>
                <span>Mon – Sat: 9:00 AM to 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <form className="contact-form" id="order-form" onSubmit={handleSubmit}>
            <h3>Send an Enquiry</h3>

            <div className="form-group">
              <label htmlFor="name">Your Full Name</label>
              <input
                type="text" id="name"
                placeholder="e.g. Ramesh Gupta"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel" id="phone"
                placeholder="e.g. 98765 43210"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Your City / State</label>
              <input
                type="text" id="city"
                placeholder="e.g. Lucknow, UP"
                value={form.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Any Questions? (Optional)</label>
              <textarea
                id="message" rows="3"
                placeholder="Write your question here..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              id="btn-submit"
              className="btn-primary full-w"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '⏳ Sending...' : '✅ Send Enquiry'}
            </button>

            <div className="form-note">We will call you back within 24 hours.</div>

            {status === 'success' && (
              <div className="form-success">
                🎉 Thank you! We will contact you very soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">❌ {errMsg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
