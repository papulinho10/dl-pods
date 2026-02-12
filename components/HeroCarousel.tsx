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
    <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-street-black mt-20">
      {BANNERS.map((banner, index) => (
        <Link
          to="/shop"
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
        >
          <img 
            src={banner.image} 
            alt={banner.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </Link>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;