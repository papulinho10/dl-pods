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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Quick Add Overlay (Optional, visually indicated here) */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
      
      <div className="mt-4 space-y-1">
        <h3 className="text-white text-lg font-bold uppercase tracking-tight truncate">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
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