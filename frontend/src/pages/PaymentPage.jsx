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
      <div className="min-h-screen bg-nk-dark text-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white/5 p-12 rounded-3xl border border-nk-gold/30 shadow-2xl">
          <div className="w-24 h-24 bg-nk-gold/20 rounded-full flex items-center justify-center text-5xl text-nk-gold mx-auto mb-8 animate-bounce">
            ✅
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Order Placed!</h1>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Thank you, <span className="text-white font-bold">{userData.name}</span>! Your order for {cart.length === 0 ? 'the machines' : ''} has been successfully placed. We will contact you at <span className="text-white font-bold">{userData.phone}</span> for delivery tracking.
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
    <div className="min-h-screen bg-nk-dark text-white py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Select <span className="text-nk-gold">Payment Mode</span></h1>
        
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
          <div className="pb-6 border-b border-white/10 mb-6">
            <p className="text-gray-400 mb-1">Total Amount Payable</p>
            <h2 className="text-4xl font-black text-nk-gold">₹{total.toLocaleString('en-IN')}</h2>
          </div>

          <div className="space-y-4">
            {/* UPI */}
            <label className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMode === 'upi' ? 'border-nk-gold bg-nk-gold/5 shadow-inner shadow-nk-gold/10' : 'border-white/10 hover:border-white/30'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'upi'} 
                onChange={() => setPaymentMode('upi')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMode === 'upi' ? 'border-nk-gold' : 'border-gray-500'}`}>
                {paymentMode === 'upi' && <div className="w-3 h-3 bg-nk-gold rounded-full"></div>}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">UPI / QR Code</h3>
                <p className="text-xs text-gray-500">Pay using GPay, PhonePe, or Paytm</p>
              </div>
              <div className="text-2xl">📱</div>
            </label>

            {/* Bank Transfer */}
            <label className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMode === 'bank' ? 'border-nk-gold bg-nk-gold/5 shadow-inner shadow-nk-gold/10' : 'border-white/10 hover:border-white/30'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'bank'} 
                onChange={() => setPaymentMode('bank')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMode === 'bank' ? 'border-nk-gold' : 'border-gray-500'}`}>
                {paymentMode === 'bank' && <div className="w-3 h-3 bg-nk-gold rounded-full"></div>}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Direct Bank Transfer</h3>
                <p className="text-xs text-gray-500">Net Banking / RTGS / NEFT</p>
              </div>
              <div className="text-2xl">🏦</div>
            </label>

            {/* COD */}
            <label className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMode === 'cod' ? 'border-nk-gold bg-nk-gold/5 shadow-inner shadow-nk-gold/10' : 'border-white/10 hover:border-white/30'}`}>
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMode === 'cod'} 
                onChange={() => setPaymentMode('cod')}
              />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMode === 'cod' ? 'border-nk-gold' : 'border-gray-500'}`}>
                {paymentMode === 'cod' && <div className="w-3 h-3 bg-nk-gold rounded-full"></div>}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Cash on Delivery</h3>
                <p className="text-xs text-gray-500">Pay at the time of delivery</p>
              </div>
              <div className="text-2xl">🚚</div>
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
