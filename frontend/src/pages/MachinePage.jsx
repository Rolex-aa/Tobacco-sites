import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MachinePage({ addToCart }) {
  // Creating an array of products based on the available images
  const products = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: `NK Engineering Model ${5000 + i * 100}`,
    image: `/machine/${i + 1}.jpeg`, // Using the actual blue machine images provided by the user
    price: 100000 + (i * 5000),
    description: 'High-speed tobacco making machine with automatic feeding system. Durable, low maintenance.',
  }));

  return (
    <div className="min-h-screen bg-nk-dark text-nk-text py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <Link to="/" className="text-nk-gold font-bold hover:text-nk-green-lt transition-colors inline-flex items-center gap-2">
            <span className="text-xl">&larr;</span> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-nk-text tracking-tight mb-4 transition-colors duration-300">
            Our <span className="text-nk-gold">Industrial</span> Machines
          </h1>
          <p className="text-nk-text-subtle max-w-2xl mx-auto font-medium transition-colors duration-300">
            Browse our collection of premium grade tobacco making machines. Built with heavy-duty components to ensure a lifetime of reliable service.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-nk-card rounded-3xl overflow-hidden shadow-xl border border-nk-border hover:border-nk-gold/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-nk-gold/10 flex flex-col group">
              
              {/* Product Image */}
              <div className="bg-white p-6 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-nk-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Product Details */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-nk-text mb-2 line-clamp-1 transition-colors duration-300">{product.name}</h3>
                
                {/* 2 Line Description */}
                <p className="text-nk-text-subtle text-sm mb-6 line-clamp-2 min-h-[40px] font-medium transition-colors duration-300">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="mt-auto mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-nk-gold">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-nk-green bg-nk-green/10 px-2 py-1 rounded">Best Value</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-nk-gold text-nk-dark font-black py-4 rounded-xl transition-all shadow-lg shadow-nk-gold/10 hover:bg-yellow-400 active:scale-95 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
