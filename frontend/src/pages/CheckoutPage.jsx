import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage({ cart, userData, setUserData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert('Your cart is empty!');
    navigate('/payment');
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-nk-dark text-nk-text py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-black mb-10 text-center transition-colors duration-300">Checkout <span className="text-nk-gold">Details</span></h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <div className="bg-nk-card p-8 rounded-[2rem] border border-nk-border shadow-xl h-fit">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2 transition-colors duration-300">
              <span className="text-nk-gold">1.</span> Shipping Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-nk-text-subtle mb-2 transition-colors duration-300">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="w-full bg-nk-bg-subtle border border-nk-border rounded-xl px-5 py-4 text-nk-text focus:border-nk-gold focus:ring-1 focus:ring-nk-gold focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-nk-text-subtle mb-2 transition-colors duration-300">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full bg-nk-bg-subtle border border-nk-border rounded-xl px-5 py-4 text-nk-text focus:border-nk-gold focus:ring-1 focus:ring-nk-gold focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-nk-text-subtle mb-2 transition-colors duration-300">Complete Address</label>
                <textarea 
                  required
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  placeholder="House No, Street, Landmark" 
                  rows="3"
                  className="w-full bg-nk-bg-subtle border border-nk-border rounded-xl px-5 py-4 text-nk-text focus:border-nk-gold focus:ring-1 focus:ring-nk-gold focus:outline-none transition-all"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-nk-text-subtle mb-2">City</label>
                  <input 
                    required
                    type="text" 
                    name="city"
                    value={userData.city}
                    onChange={handleChange}
                    className="w-full bg-nk-bg-subtle border border-nk-border rounded-xl px-5 py-4 text-nk-text focus:border-nk-gold focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-nk-text-subtle mb-2">Pincode</label>
                  <input 
                    required
                    type="text" 
                    name="pincode"
                    value={userData.pincode}
                    onChange={handleChange}
                    className="w-full bg-nk-bg-subtle border border-nk-border rounded-xl px-5 py-4 text-nk-text focus:border-nk-gold focus:outline-none transition-all"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-nk-gold text-nk-dark font-bold py-4 rounded-xl mt-4 hover:bg-yellow-400 transition-all shadow-lg active:scale-[0.98]"
              >
                Continue to Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-nk-bg-subtle p-8 rounded-[2rem] border border-nk-border shadow-2xl h-fit transition-colors duration-300">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2 transition-colors duration-300">
              Order Summary
            </h2>
            <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-nk-card p-4 rounded-2xl border border-nk-border transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-xl bg-white p-2 shadow-sm" />
                    <div>
                      <h4 className="text-sm font-black text-nk-text leading-tight transition-colors duration-300">{item.name}</h4>
                      <p className="text-xs text-nk-text-subtle font-bold transition-colors duration-300">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-black text-nk-text transition-colors duration-300">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-nk-border pt-6 space-y-4 transition-colors duration-300">
              <div className="flex justify-between text-nk-text-subtle font-bold transition-colors duration-300">
                <span>Subtotal:</span>
                <span className="text-nk-text">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-nk-text-subtle font-bold transition-colors duration-300">
                <span>Shipping:</span>
                <span className="text-nk-green">FREE</span>
              </div>
              <div className="flex justify-between items-center pt-4 mt-2 border-t border-nk-border transition-colors duration-300">
                <span className="text-xl font-black">Total Amount:</span>
                <span className="text-3xl font-black text-nk-gold">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
