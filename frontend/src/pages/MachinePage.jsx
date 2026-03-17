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
    <div className="min-h-screen bg-nk-dark text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <Link to="/" className="text-nk-gold font-semibold hover:text-white transition-colors inline-flex items-center gap-2">
            <span>&larr;</span> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our <span className="text-nk-gold">Machines</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our collection of premium grade tobacco making machines. Built with heavy-duty components to ensure a lifetime of reliable service.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-nk-gold/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-nk-gold/10 flex flex-col">
              
              {/* Product Image */}
              <div className="bg-white p-4 h-64 flex items-center justify-center relative">
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                
                {/* 2 Line Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="mt-auto mb-5">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black text-nk-gold">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-nk-gold/90 hover:bg-nk-gold text-nk-dark font-bold py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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
