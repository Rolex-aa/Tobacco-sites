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
    <div className="min-h-screen bg-nk-dark text-white py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Checkout <span className="text-nk-gold">Details</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-nk-gold">1.</span> Shipping Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 focus:border-nk-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 focus:border-nk-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Complete Address</label>
                <textarea 
                  required
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  placeholder="House No, Street, Landmark" 
                  rows="3"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 focus:border-nk-gold focus:outline-none transition-colors"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">City</label>
                  <input 
                    required
                    type="text" 
                    name="city"
                    value={userData.city}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 focus:border-nk-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Pincode</label>
                  <input 
                    required
                    type="text" 
                    name="pincode"
                    value={userData.pincode}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 focus:border-nk-gold focus:outline-none transition-colors"
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
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl h-fit">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain rounded-lg bg-white/10" />
                    <div>
                      <h4 className="text-sm font-bold leading-tight">{item.name}</h4>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-6 space-y-3">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal:</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping:</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="flex justify-between items-center pt-3 mt-3 border-t border-white/10">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-black text-nk-gold">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
