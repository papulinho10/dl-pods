import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Share2, ShieldCheck, Truck } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [activeImage, setActiveImage] = useState<string>('');

  // Set initial active image when product loads
  useEffect(() => {
    if (product) {
      setActiveImage(product.images?.[0] ?? product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-street-black text-white px-4 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4">Produto Não Encontrado</h2>
        <Link to="/shop" className="text-yellow-400 underline">Voltar à Loja</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-street-black pt-20 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
          <Link 
            to="/shop" 
            className="inline-flex items-center bg-white/5 border border-white/10 hover:border-yellow-400 text-white hover:text-yellow-400 transition-all uppercase text-[10px] md:text-xs font-bold tracking-widest px-4 py-2 rounded-sm"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar ao Catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="bg-street-gray aspect-[4/5] overflow-hidden relative group rounded-sm border border-white/5">
               <img 
                 src={activeImage || product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute top-4 right-4 z-10">
                  <button className="p-2 bg-black/50 backdrop-blur-sm hover:bg-white text-white hover:text-black rounded-full transition-colors">
                    <Share2 size={18} />
                  </button>
               </div>
            </div>

            {/* Thumbnail Gallery - Scrollable on mobile */}
            {product.images && product.images.length > 0 && (
              <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar md:grid md:grid-cols-4 md:gap-4 md:pb-0">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-20 h-24 md:w-auto md:h-auto aspect-[4/5] bg-street-gray overflow-hidden border-2 transition-all duration-300 rounded-sm ${
                      activeImage === img 
                        ? 'border-yellow-400 opacity-100 ring-2 ring-yellow-400/20' 
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <div className="border-b border-white/10 pb-6 mb-6">
                <h2 className="text-yellow-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-2">
                {product.brand}
                </h2>
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                {product.name}
                </h1>
                <p className="text-2xl md:text-3xl font-mono text-white">
                ${product.price.toFixed(2)}
                </p>
            </div>

            <div className="prose prose-invert mb-8">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="w-full py-4 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.2em] transition-all rounded-sm bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20"
            >
              Adicionar ao Carrinho
            </button>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3 border border-white/5 p-4 bg-white/5 rounded-sm">
                 <Truck className="text-gray-400" size={20} />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-white">Envio Rápido</span>
                    <span className="text-[10px] text-gray-500">Para você</span>
                 </div>
               </div>
               <div className="flex items-center gap-3 border border-white/5 p-4 bg-white/5 rounded-sm">
                 <ShieldCheck className="text-gray-400" size={20} />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-white">Original</span>
                    <span className="text-[10px] text-gray-500">Garantia de fábrica</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;