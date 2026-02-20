import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const Shop: React.FC = () => {
  const location = useLocation();
  const WHATSAPP_NUMBER = "5553981169901";
  
  // Simple query parsing for ?brand=Name
  const queryParams = new URLSearchParams(location.search);
  const brandFilter = queryParams.get('brand');

  const filteredProducts = useMemo(() => {
    if (!brandFilter) return PRODUCTS;
    return PRODUCTS.filter(p => p.brand.toLowerCase() === brandFilter.toLowerCase());
  }, [brandFilter]);

  const handleCustomOrder = () => {
    const message = encodeURIComponent("Olá! Não encontrei o produto que procurava no catálogo. Vocês trabalham com encomendas?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-street-black relative overflow-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 bg-street-black">
        <div className="absolute inset-0 bg-radial-gradient from-street-gray/10 to-black opacity-50"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 pt-20 md:pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-6 md:mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center bg-white/5 border border-white/10 hover:border-yellow-400 text-white hover:text-yellow-400 transition-all uppercase text-[10px] md:text-xs font-bold tracking-widest px-4 py-2 rounded-sm group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar ao Início
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-2 leading-none cursor-default">
                {brandFilter ? <span className="text-yellow-400">{brandFilter}</span> : 'Catálogo'}
              </h1>
              <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-[0.3em] pl-1">
                {brandFilter ? 'Coleção Exclusiva' : 'Pods // Premium Selection'}
              </p>
            </div>
            
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <span className="text-white font-mono text-xs font-bold uppercase border border-white/10 bg-white/5 px-4 py-2 rounded-sm">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Produto Encontrado' : 'Produtos Encontrados'}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mb-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="transform hover:-translate-y-2 transition-transform duration-500">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-dashed border-white/10 rounded-lg bg-white/5 mb-16">
              <p className="text-2xl text-gray-500 uppercase font-black tracking-widest mb-6">Nada encontrado.</p>
              <Link to="/shop" className="inline-block border border-yellow-400 text-yellow-400 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-yellow-400 hover:text-black transition-all">
                Limpar Filtros
              </Link>
            </div>
          )}

          {/* Custom Order Notice - Relocated to the bottom */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm relative overflow-hidden group/order animate-neon-border">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/order:opacity-20 transition-opacity">
              <MessageCircle size={120} className="text-white" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-2">
                  Não encontrou seu modelo ou sabor favorito?
                </h2>
                <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  Trabalhamos com <span className="text-yellow-400 font-bold italic">encomendas personalizadas</span>. 
                  Diga o que você precisa e nós corremos atrás para você. 
                  O drop que você quer está a um clique de distância.
                </p>
              </div>
              <button 
                onClick={handleCustomOrder}
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                <MessageCircle size={20} />
                Pedir por Encomenda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;