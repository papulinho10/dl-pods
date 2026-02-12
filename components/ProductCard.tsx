import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const [isVanishing, setIsVanishing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Randomize animation delay slightly so they don't all pulse exactly at the same time
  const randomDelay = useRef(Math.random() * 2).current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2, // Trigger earlier
        rootMargin: "50px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVanishing(true);

    // Wait for animation before navigating
    setTimeout(() => {
      navigate(`/product/${product.id}`);
    }, 800); // 800ms duration matching the css animation
  };

  return (
    <>
      <style>{`
        @keyframes vanish-into-smoke {
          0% { transform: scale(1); opacity: 1; filter: blur(0) grayscale(0); }
          40% { transform: scale(0.95) skewX(2deg); opacity: 0.8; filter: blur(2px) grayscale(50%); }
          100% { transform: scale(0.8) translateY(-50px); opacity: 0; filter: blur(20px) grayscale(100%); }
        }
        @keyframes smoke-appear {
            0% { opacity: 0; transform: translateY(20px) scale(0.5) rotate(0deg); }
            100% { opacity: 0.9; transform: translateY(-30px) scale(2) rotate(10deg); }
        }
        .vanishing-content {
          animation: vanish-into-smoke 0.8s forwards ease-in-out;
        }
        .smoke-transition-overlay {
            animation: smoke-appear 0.8s forwards ease-out;
        }
      `}</style>

      <Link 
        to={`/product/${product.id}`} 
        onClick={handleClick}
        className="group block relative"
      >
        <div 
          ref={cardRef}
          className={`relative ${isVanishing ? 'vanishing-content' : ''}`}
        >
            
          {/* Card Image Container */}
          <div className={`relative overflow-hidden bg-street-gray aspect-[3/4] rounded-sm transition-all duration-300 ${isVisible ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)]' : ''}`}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              style={{
                // Apply global street pulse if visible
                animation: isVisible ? `global-street-pulse 5s infinite ease-in-out` : 'none',
                animationDelay: `${randomDelay}s`,
                // Default state if not animating
                filter: isVisible ? undefined : 'grayscale(100%)',
                opacity: isVisible ? undefined : 0.8
              }}
            />
            
            {/* Quick Add Overlay (Hidden during vanish) */}
            <div className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${isVanishing ? 'hidden' : ''}`}>
              <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors animate-pulse">
                Ver Item
              </span>
            </div>
            
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 uppercase tracking-wider border border-white/10 group-hover:border-yellow-400 transition-colors">
                {product.brand}
              </span>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="mt-4 space-y-1 text-center md:text-left">
            <h3 className={`text-lg font-bold uppercase tracking-tight truncate transition-colors duration-300 ${isVisible ? 'text-white' : 'text-gray-500'}`}>
              {product.name}
            </h3>
            <div className="flex justify-center md:justify-between items-center px-1">
              <p className="text-gray-400 text-sm font-mono">{product.category}</p>
              <span className={`font-mono font-bold transition-colors duration-300 ${isVisible ? 'text-yellow-400' : 'text-gray-600'}`}>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* TRANSITION SMOKE OVERLAY (Appears only on click) */}
          {isVanishing && (
            <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none overflow-visible">
                 <img 
                    src="https://images.unsplash.com/photo-1517166365477-a16223e746a5?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover mix-blend-screen filter contrast-125 brightness-150 scale-150 smoke-transition-overlay"
                    alt=""
                 />
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;