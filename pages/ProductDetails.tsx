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
    <div className="min-h-screen bg-street-black pt-20 md:pt-28 pb-20 overflow-x-hidden">
      
      {/* CSS Animatinos for Smoke & Float */}
      <style>{`
        @keyframes smoke-exhale {
          0% { background-position: 0% 50%; opacity: 0.3; }
          50% { background-position: 100% 50%; opacity: 0.6; }
          100% { background-position: 0% 50%; opacity: 0.3; }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .smoke-bg-animated {
          background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(200,200,200,0.1) 50%, rgba(50,50,50,0) 100%);
          background-size: 200% 200%;
          animation: smoke-exhale 8s ease infinite;
        }
      `}</style>

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
          
          {/* --- Image Section with Smoke Effect --- */}
          <div className="flex flex-col gap-4">
            {/* Main Composition Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-street-dark group shadow-2xl">
               
               {/* 1. The Smoke Background (Abstract) */}
               <div className="absolute inset-0 z-0">
                 <img 
                   src="https://images.unsplash.com/photo-1513262615418-500b3e55c3c0?q=80&w=2070&auto=format&fit=crop" 
                   alt="Smoke Atmosphere" 
                   className="w-full h-full object-cover grayscale contrast-125 brightness-100 opacity-50 mix-blend-color-dodge"
                 />
                 {/* Vignette Overlay */}
                 <div className="absolute inset-0 bg-radial-gradient from-transparent via-street-black/40 to-street-black/90"></div>
               </div>

               {/* 2. Animated Smoke Clouds Layer */}
               <div className="absolute inset-0 z-10 smoke-bg-animated mix-blend-overlay pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-street-black/80 to-transparent z-10"></div>
               
               {/* 3. The Product Image (Floating) */}
               <div className="absolute inset-0 z-20 flex items-center justify-center p-8 md:p-12">
                 <img 
                   src={activeImage || product.image} 
                   alt={product.name} 
                   className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] animate-[float-y_6s_ease-in-out_infinite] transition-transform duration-500 group-hover:scale-110"
                 />
               </div>

               {/* Share Button */}
               <div className="absolute top-4 right-4 z-30">
                  <button className="p-2 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-yellow-400 text-white hover:text-yellow-400 rounded-full transition-colors">
                    <Share2 size={18} />
                  </button>
               </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar md:grid md:grid-cols-4 md:gap-4 md:pb-0">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative flex-shrink-0 w-20 h-24 md:w-auto md:h-auto aspect-[4/5] bg-street-gray overflow-hidden border-2 transition-all duration-300 rounded-sm group ${
                      activeImage === img 
                        ? 'border-yellow-400 opacity-100' 
                        : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center relative">
            
            {/* Decorative Smoke behind text (Subtle) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="border-b border-white/10 pb-6 mb-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                   <h2 className="text-yellow-400 font-mono text-xs md:text-sm uppercase tracking-[0.2em] font-bold px-2 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-sm">
                     {product.brand}
                   </h2>
                   {product.category && (
                     <span className="text-gray-500 text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded-sm">
                       {product.category}
                     </span>
                   )}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-none drop-shadow-lg">
                {product.name}
                </h1>
                
                <div className="flex items-end gap-4">
                  <p className="text-3xl md:text-4xl font-mono text-white font-bold">
                  ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">
                    Em até 3x sem juros
                  </p>
                </div>
            </div>

            <div className="prose prose-invert mb-8 relative z-10">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                {product.description}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="relative w-full py-4 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.2em] transition-all rounded-sm bg-white text-black hover:bg-yellow-400 hover:text-black overflow-hidden group mb-8"
            >
              <span className="relative z-10">Adicionar ao Carrinho</span>
              <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
            </button>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center gap-4 border border-white/5 p-4 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                 <Truck className="text-yellow-400" size={24} />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-white tracking-wider">Envio Rápido</span>
                    <span className="text-[10px] text-gray-400 font-mono">Disponível imediato</span>
                 </div>
               </div>
               <div className="flex items-center gap-4 border border-white/5 p-4 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                 <ShieldCheck className="text-yellow-400" size={24} />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-white tracking-wider">Original</span>
                    <span className="text-[10px] text-gray-400 font-mono">Autenticidade Garantida</span>
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