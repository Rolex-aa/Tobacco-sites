import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage({ cart, userData, clearCart }) {
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-nk-dark text-nk-text flex items-center justify-center p-6 text-center transition-colors duration-300">
        <div className="max-w-md bg-nk-bg-subtle p-12 rounded-[3rem] border border-nk-gold/30 shadow-2xl transition-colors duration-300">

          <div className="w-24 h-24 bg-nk-gold/20 rounded-full flex items-center justify-center text-5xl text-nk-gold mx-auto mb-8 animate-bounce">
            ✅
          </div>
          <h1 className="text-4xl font-black mb-4 transition-colors duration-300">Order Placed!</h1>
          <p className="text-nk-text-subtle mb-10 text-lg leading-relaxed font-medium transition-colors duration-300">
            Thank you, <span className="text-nk-text font-black">{userData.name}</span>! Your order has been successfully placed. We will contact you at <span className="text-nk-gold font-black">{userData.phone}</span> for delivery tracking.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-nk-gold text-nk-dark font-black py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nk-dark text-nk-text py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black mb-10 text-center transition-colors duration-300">Select <span className="text-nk-gold">Payment Mode</span></h1>

        
        <div className="bg-nk-card p-10 rounded-[2.5rem] border border-nk-border shadow-2xl transition-colors duration-300 space-y-8">
          <div className="pb-8 border-b border-nk-border mb-8 transition-colors duration-300">
            <p className="text-nk-text-subtle font-bold mb-1 uppercase tracking-widest text-xs transition-colors duration-300">Total Amount Payable</p>
            <h2 className="text-5xl font-black text-nk-gold tracking-tighter">₹{total.toLocaleString('en-IN')}</h2>
          </div>

          <div className="space-y-4">
            {/* UPI */}
            <label className={`flex items-center gap-5 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMode === 'upi' ? 'border-nk-gold bg-nk-gold/5 shadow-inner' : 'border-nk-border bg-nk-bg-subtle hover:border-nk-gold/50'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'upi'} 
                onChange={() => setPaymentMode('upi')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMode === 'upi' ? 'border-nk-gold' : 'border-nk-text-subtle'}`}>
                {paymentMode === 'upi' && <div className="w-3 h-3 bg-nk-gold rounded-full transition-all"></div>}
              </div>
              <div className="flex-1">
                <h3 className={`font-black text-lg transition-colors ${paymentMode === 'upi' ? 'text-nk-gold' : 'text-nk-text'}`}>UPI / QR Code</h3>
                <p className="text-[13px] text-nk-text-subtle font-bold transition-colors">Pay using GPay, PhonePe, or Paytm</p>
              </div>
              <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">📱</div>
            </label>

            {/* Bank Transfer */}
            <label className={`flex items-center gap-5 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMode === 'bank' ? 'border-nk-gold bg-nk-gold/5 shadow-inner' : 'border-nk-border bg-nk-bg-subtle hover:border-nk-gold/50'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'bank'} 
                onChange={() => setPaymentMode('bank')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMode === 'bank' ? 'border-nk-gold' : 'border-nk-text-subtle'}`}>
                {paymentMode === 'bank' && <div className="w-3 h-3 bg-nk-gold rounded-full transition-all"></div>}
              </div>
              <div className="flex-1">
                <h3 className={`font-black text-lg transition-colors ${paymentMode === 'bank' ? 'text-nk-gold' : 'text-nk-text'}`}>Direct Bank Transfer</h3>
                <p className="text-[13px] text-nk-text-subtle font-bold transition-colors">Net Banking / RTGS / NEFT</p>
              </div>
              <div className="text-3xl">🏦</div>
            </label>

            {/* COD */}
            <label className={`flex items-center gap-5 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMode === 'cod' ? 'border-nk-gold bg-nk-gold/5 shadow-inner' : 'border-nk-border bg-nk-bg-subtle hover:border-nk-gold/50'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'cod'} 
                onChange={() => setPaymentMode('cod')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMode === 'cod' ? 'border-nk-gold' : 'border-nk-text-subtle'}`}>
                {paymentMode === 'cod' && <div className="w-3 h-3 bg-nk-gold rounded-full transition-all"></div>}
              </div>
              <div className="flex-1">
                <h3 className={`font-black text-lg transition-colors ${paymentMode === 'cod' ? 'text-nk-gold' : 'text-nk-text'}`}>Cash on Delivery</h3>
                <p className="text-[13px] text-nk-text-subtle font-bold transition-colors">Pay at the time of delivery</p>
              </div>
              <div className="text-3xl">🚚</div>
            </label>
          </div>

          <button 
            disabled={isProcessing}
            onClick={handlePlaceOrder}
            className={`w-full font-black py-5 rounded-2xl mt-8 transition-all flex items-center justify-center gap-3 shadow-xl ${
              isProcessing 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-nk-gold text-nk-dark hover:bg-yellow-400 active:scale-95'
            }`}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Processing...
              </>
            ) : (
              paymentMode === 'cod' ? 'Confirm Order' : 'Pay & Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
