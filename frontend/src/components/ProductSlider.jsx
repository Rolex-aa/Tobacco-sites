import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/products?featured=true');
        setProducts(data.data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchFeatured();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products]);

  if (products.length === 0) return null; // Don't show slider if no featured products

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="py-20 bg-[#0f2027]" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Product Gallery</h2>
          <div className="w-24 h-1 bg-nk-gold mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Take a closer look at our range of powerful and reliable tobacco making machinery.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          {/* Main Slider Container */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            {products.map((product, index) => (
              <div
                key={product._id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-20 scale-105'
                }`}
              >
                <img
                  src={`http://localhost:5001${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white/5"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
          >
            →
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-nk-gold w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
