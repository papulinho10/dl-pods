import React from 'react';
import { BRANDS } from '../constants';
import { Link } from 'react-router-dom';

const BrandSection: React.FC = () => {
  return (
    <div className="relative bg-street-black py-32 overflow-hidden border-b border-white/10 group-section">
      
      {/* BACKGROUND IMAGE: High Impact "Night City" Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop" 
          alt="Night City Street Vibe" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-125 brightness-75 mix-blend-hard-light"
        />
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-street-black via-street-black/80 to-street-black/40"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* CSS SMOKE ANIMATION */}
      <style>{`
        @keyframes smoke-pulse {
          0% { opacity: 0.8; transform: scale(1) translateY(0); }
          50% { opacity: 1; transform: scale(1.02) translateY(-5px); }
          100% { opacity: 0.8; transform: scale(1) translateY(0); }
        }
        .smoke-overlay {
          animation: smoke-pulse 8s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Title */}
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Marcas em Destaque
            </h2>
            {/* Divider - White/Neutral instead of Yellow */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto opacity-50"></div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 smoke-overlay">
          {BRANDS.map((brand) => (
            <Link 
              to={`/shop?brand=${brand.name}`} 
              key={brand.id}
              className="group relative h-40 md:h-60 flex items-center justify-center transition-all duration-500 perspective-1000"
            >
              {/* Glassmorphism Card (Darker Style) */}
              <div className="absolute inset-0 bg-white/5 border border-white/5 backdrop-blur-md rounded-sm transform transition-all duration-500 group-hover:bg-white/10 group-hover:scale-105 group-hover:border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
              
              {/* Internal Glow on Hover (White/Neutral) */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Brand Logo - Grayscale to Color on Hover */}
              <div className="relative z-10 w-32 md:w-44 h-32 md:h-44 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Action Text showing on Hover (White instead of Yellow) */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-[10px] uppercase font-black tracking-[0.3em] border-b border-white/50 pb-1">
                  Ver Coleção
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;