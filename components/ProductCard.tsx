import React, { useState, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Random delay for organic feel so they don't pulse in sync
  const animationDelay = useMemo(() => `${Math.random() * 5}s`, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Immediate navigation for snappier feel
    navigate(`/product/${product.id}`);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      onClick={handleClick}
      className="group block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div ref={cardRef} className="relative flex flex-col">
            
          {/* Image Container - Square & Tech Border */}
          <div className="relative aspect-square bg-[#1a1a1a] overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-yellow-400/50">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image - Pulsing Effect */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain p-6 md:p-8 animate-street-pulse drop-shadow-xl"
              style={{ animationDelay }}
            />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-yellow-400 transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-yellow-400 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-yellow-400 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-yellow-400 transition-colors"></div>

            {/* Brand Tag - Floating */}
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 group-hover:text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded-sm border border-transparent group-hover:border-white/20 transition-all">
                {product.brand}
              </span>
            </div>
          </div>
          
          {/* Info Section - Minimalist */}
          <div className="mt-3 flex justify-between items-end border-b border-white/5 pb-2 group-hover:border-yellow-400/30 transition-colors">
            <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-none group-hover:text-yellow-400 transition-colors">
                {product.name}
                </h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mt-1">
                 {product.category}
                </span>
            </div>
            
            <div className="flex flex-col items-end">
                <span className="font-mono text-lg font-bold text-white">
                    ${product.price.toFixed(0)}
                </span>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default ProductCard;