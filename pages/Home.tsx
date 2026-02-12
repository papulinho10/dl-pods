import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import BrandSection from '../components/BrandSection';
import ProductCard from '../components/ProductCard';
import ReviewsSection from '../components/ReviewsSection';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  // Feature top 3 products
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-street-black">
      <HeroCarousel />
      <BrandSection />
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nicotine Warning */}
        <div className="w-full border border-white/10 bg-white/5 p-6 mb-12 text-center backdrop-blur-sm">
          <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-[0.15em] font-bold">
            <span className="text-yellow-500 mr-3">⚠️ AVISO</span>
            Todos os produtos contêm nicotina
          </p>
        </div>

        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Últimos Lançamentos
          </h2>
          <a href="#/shop" className="hidden md:block text-gray-400 hover:text-white uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-white transition-all pb-1">
            Ver Tudo
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#/shop" className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors">
            Ver Todos
          </a>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative w-full overflow-hidden rounded-sm group border border-white/10 shadow-2xl">
            <img 
              src="https://i.postimg.cc/FFC7XdXj/lost-mary-banner.webp" 
              alt="Promoção Especial" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Optional Overlay/CTA if needed in the future */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Street Style Banner */}
      <section className="py-12 bg-white text-black overflow-hidden border-t border-black">
        <div className="whitespace-nowrap flex gap-8 animate-marquee">
          {Array(10).fill("STREETWEAR // CULTURA // ESTILO DE VIDA // DL PODS // ").map((text, i) => (
             <span key={i} className="text-4xl md:text-6xl font-black italic tracking-tighter">{text}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;