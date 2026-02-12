import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

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
    <div className="min-h-screen bg-street-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            {brandFilter ? `Coleção ${brandFilter}` : 'Todos os Produtos'}
          </h1>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
            {filteredProducts.length} Itens Encontrados
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-500 uppercase font-bold">Nenhum produto encontrado nesta categoria.</p>
            <a href="#/shop" className="mt-4 inline-block text-yellow-400 hover:text-yellow-300 underline">Limpar Filtros</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;