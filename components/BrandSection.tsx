import React from 'react';
import { BRANDS } from '../constants';
import { Link } from 'react-router-dom';

const BrandSection: React.FC = () => {
  return (
    <div className="bg-street-black py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-white/50 text-sm font-mono uppercase tracking-[0.2em] mb-10">
          Marcas em Destaque
        </h3>
        
        {/* Centered Grid/Flex Layout for all devices */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-16">
          {BRANDS.map((brand) => (
            <Link 
              to={`/shop?brand=${brand.name}`} 
              key={brand.id}
              className="group flex flex-col items-center justify-center w-32 md:w-auto"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-400 group-active:border-yellow-400 transition-all duration-300 relative bg-white/5 shadow-lg group-hover:shadow-yellow-400/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent group-active:bg-transparent transition-colors z-10" />
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain p-5 grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-active:scale-110"
                />
              </div>
              <span className="mt-4 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-white group-active:text-white transition-colors text-center">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;