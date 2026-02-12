import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-street-gray aspect-[3/4]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-active:grayscale-0 opacity-90 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 group-active:scale-105"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Ver Item
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
            {product.brand}
          </span>
        </div>
      </div>
      
      <div className="mt-4 space-y-1 text-center md:text-left">
        <h3 className="text-white text-lg font-bold uppercase tracking-tight truncate group-hover:text-yellow-400 group-active:text-yellow-400 transition-colors">
          {product.name}
        </h3>
        <div className="flex justify-center md:justify-between items-center px-1">
          <p className="text-gray-400 text-sm font-mono">{product.category}</p>
          <span className="text-white font-mono font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;