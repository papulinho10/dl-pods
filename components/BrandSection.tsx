import React, { useEffect, useRef, useState } from 'react';
import { BRANDS } from '../constants';
import { Link } from 'react-router-dom';
import { Brand } from '../types';

// Componente Individual para cada Marca
const BrandItem: React.FC<{ brand: Brand; index: number }> = ({ brand, index }) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // Ativa quando 40% visível
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.disconnect();
    };
  }, []);

  return (
    <Link 
      ref={itemRef}
      to={`/shop?brand=${brand.name}`} 
      className="group relative h-32 md:h-48 flex items-center justify-center perspective-1000"
    >
      {/* Background Card - Pulsing opacity synced with logo */}
      <div 
        className="absolute inset-0 bg-white/5 border border-white/5 backdrop-blur-md rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all"
        style={{
            animationName: isVisible ? 'card-pulse' : 'none',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDelay: `${index * 0.4}s`
        }}
      ></div>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent opacity-0"
        style={{
            animationName: isVisible ? 'glow-pulse' : 'none',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDelay: `${index * 0.4}s`
        }}
      ></div>

      {/* Brand Logo - The Pulse Effect */}
      <div 
        className="relative z-10 w-20 md:w-32 h-20 md:h-32 p-3"
        style={{
            // Se visível, aplica a animação. Se não, estado estático B&W.
            animationName: isVisible ? 'street-pulse' : 'none',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            // Delay escalonado para criar efeito de "luzes da cidade"
            animationDelay: `${index * 0.4}s`,
            // Estado inicial fixo (para quando não estiver animando ou antes do delay)
            filter: 'grayscale(100%)',
            opacity: 0.4,
            transform: 'scale(0.85)' 
        }}
      >
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

const BrandSection: React.FC = () => {
  return (
    <div className="relative bg-street-black py-24 md:py-32 overflow-hidden border-b border-white/10 group-section">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop" 
          alt="Night City Street Vibe" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-125 brightness-75 mix-blend-hard-light"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-street-black via-street-black/80 to-street-black/40"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* CSS ANIMATIONS DEFINITION */}
      <style>{`
        /* Animação Principal: B&W -> Color -> B&W */
        @keyframes street-pulse {
          0% { 
            filter: grayscale(100%); 
            opacity: 0.4; 
            transform: scale(0.85); 
          }
          50% { 
            filter: grayscale(0%) drop-shadow(0 0 15px rgba(255,255,255,0.4)); 
            opacity: 1; 
            transform: scale(1.15); 
          }
          100% { 
            filter: grayscale(100%); 
            opacity: 0.4; 
            transform: scale(0.85); 
          }
        }

        /* Animação do Card de Fundo */
        @keyframes card-pulse {
          0%, 100% { border-color: rgba(255,255,255,0.05); background-color: rgba(255,255,255,0.05); }
          50% { border-color: rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.1); }
        }

        /* Animação do Brilho */
        @keyframes glow-pulse {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.8; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Marcas em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto opacity-50"></div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {BRANDS.map((brand, index) => (
            <BrandItem key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;