import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Share2 } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState<string>('');

  // Set initial active image when product loads
  useEffect(() => {
    if (product) {
      setActiveImage(product.images?.[0] ?? product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-street-black text-white">
        <h2 className="text-2xl font-bold uppercase mb-4">Produto Não Encontrado</h2>
        <Link to="/shop" className="text-yellow-400 underline">Voltar à Loja</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-street-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
            <ArrowLeft size={16} className="mr-2" /> Voltar ao Catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="bg-street-gray aspect-[4/5] overflow-hidden relative group">
               <img 
                 src={activeImage || product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors">
                    <Share2 size={20} />
                  </button>
               </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-[4/5] bg-street-gray overflow-hidden border-2 transition-all duration-300 ${
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
            <h2 className="text-yellow-400 font-mono text-sm uppercase tracking-widest mb-2">
              {product.brand}
            </h2>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              {product.name}
            </h1>
            <p className="text-2xl font-mono text-white mb-8">
              ${product.price.toFixed(2)}
            </p>

            <div className="prose prose-invert mb-8">
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-white">Selecione o Tamanho</span>
                <span className="text-xs text-gray-500 underline cursor-pointer">Guia de Tamanhos</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-bold border transition-all ${
                      selectedSize === size 
                        ? 'bg-white text-black border-white' 
                        : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-400 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                if (selectedSize) {
                  addToCart(product, selectedSize);
                }
              }}
              disabled={!selectedSize}
              className={`w-full py-5 text-sm font-black uppercase tracking-[0.2em] transition-all ${
                selectedSize 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedSize ? 'Adicionar ao Carrinho' : 'Selecione um Tamanho'}
            </button>
            
            <div className="mt-8 flex items-center space-x-4 text-xs text-gray-500 uppercase tracking-widest">
               <span>Envio Rápido</span>
               <span>•</span>
               <span>Autenticidade Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;