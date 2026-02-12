import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

const Shop: React.FC = () => {
  const location = useLocation();
  
  // Simple query parsing for ?brand=Name
  const queryParams = new URLSearchParams(location.search);
  const brandFilter = queryParams.get('brand');

  const filteredProducts = useMemo(() => {
    if (!brandFilter) return PRODUCTS;
    return PRODUCTS.filter(p => p.brand.toLowerCase() === brandFilter.toLowerCase());
  }, [brandFilter]);

  return (
    <div className="min-h-screen bg-street-black pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center bg-white/5 border border-white/10 hover:border-yellow-400 text-white hover:text-yellow-400 transition-all uppercase text-[10px] md:text-xs font-bold tracking-widest px-4 py-2 rounded-sm"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar ao Início
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
              {brandFilter ? <span className="text-yellow-400">{brandFilter}</span> : 'Loja'}
            </h1>
            <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest">
              {brandFilter ? 'Coleção Exclusiva' : 'Todos os Produtos'}
            </p>
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            <span className="text-gray-500 font-mono text-xs uppercase border border-white/10 px-3 py-1 rounded-full">
              {filteredProducts.length} Items
            </span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          // Mobile: 2 columns (grid-cols-2), Desktop: 4 columns
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-lg">
            <p className="text-xl text-gray-500 uppercase font-bold mb-4">Nada encontrado aqui.</p>
            <Link to="/shop" className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-yellow-400 hover:text-black transition-colors">
              Limpar Filtros
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;