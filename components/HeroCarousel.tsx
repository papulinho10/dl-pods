import React, { useState, useEffect } from 'react';
import { BANNERS } from '../constants';
import { Link } from 'react-router-dom';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[55vh] md:h-[85vh] overflow-hidden bg-street-black mt-20 border-b border-white/10">
      {BANNERS.map((banner, index) => (
        <Link
          to="/shop"
          key={banner.id}
          className={`group absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
        >
          <img 
            src={banner.image} 
            alt={banner.title} 
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700"
          />
          {/* Overlay to ensure text readability if needed, but keeping it subtle */}
          <div className="absolute inset-0 bg-black/10 md:bg-transparent pointer-events-none" />
        </Link>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white w-4'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;