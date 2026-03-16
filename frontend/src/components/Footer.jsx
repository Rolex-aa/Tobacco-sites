import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-nk-dark py-12 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center gap-3">
        <div className="text-2xl font-extrabold text-nk-green-lt tracking-tight">🌿 NK Engineering <span className="text-nk-gold">& Works</span></div>
        <p className="text-white/50 text-base font-medium">© 2025 NK Engineering & Works India. All rights reserved.</p>
        <p className="text-white/60 text-base font-medium italic">NK Engineering & Works India | Pan-India Delivery Available</p>
      </div>
    </footer>
  );
}
