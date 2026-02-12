import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import BrandSection from '../components/BrandSection';
import ProductCard from '../components/ProductCard';
import ReviewsSection from '../components/ReviewsSection';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  // Feature top 4 products
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Marquee data - repeat for smooth infinite loop
  const topMarqueeItems = Array(10).fill("SUA VIBE // SEU SABOR // SEU ESTILO //");
  const bottomMarqueeItems = Array(6).fill("NOITE // ROLÊ // VIBE // DL PODS // NOITE // ROLÊ // DL PODS //");

  return (
    <div className="min-h-screen bg-street-black">
      <HeroCarousel />
      <BrandSection />
      
      {/* Vibe Marquee Bar Top - Fixed Spacing */}
      <div className="w-full bg-white text-black overflow-hidden py-2 border-y border-gray-800">
        <div className="flex animate-marquee gap-8">
           {/* Render duplicate sets for seamless loop */}
           <div className="flex gap-8 whitespace-nowrap">
             {topMarqueeItems.map((text, i) => (
                <span key={`a-${i}`} className="text-xs md:text-sm font-black italic tracking-[0.2em] uppercase">{text}</span>
             ))}
           </div>
           <div className="flex gap-8 whitespace-nowrap">
             {topMarqueeItems.map((text, i) => (
                <span key={`b-${i}`} className="text-xs md:text-sm font-black italic tracking-[0.2em] uppercase">{text}</span>
             ))}
           </div>
        </div>
      </div>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nicotine Warning */}
        <div className="w-full border border-white/10 bg-white/5 p-4 md:p-6 mb-12 text-center backdrop-blur-sm">
          <p className="text-gray-400 text-[10px] md:text-sm font-mono uppercase tracking-[0.15em] font-bold">
            <span className="text-yellow-500 mr-2 md:mr-3">⚠️ AVISO</span>
            Todos os produtos contêm nicotina
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            Últimos <br className="md:hidden"/> Lançamentos
          </h2>
          <a href="#/shop" className="text-yellow-400 hover:text-white uppercase tracking-widest text-xs md:text-sm font-bold border-b border-transparent hover:border-white transition-all pb-1 self-end md:self-auto">
            Ver Catálogo Completo
          </a>
        </div>
        
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#/shop" className="w-full block border border-white text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors">
            Ver Todos
          </a>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl group">
            <img 
              src="https://i.postimg.cc/FFC7XdXj/lost-mary-banner.webp" 
              alt="Promoção Especial" 
              className="w-full h-auto block transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Street Style Banner Bottom - Fixed Spacing */}
      <section className="py-8 md:py-12 bg-white text-black overflow-hidden border-t border-black">
         <div className="flex animate-marquee gap-12">
            <div className="flex gap-12 whitespace-nowrap">
              {bottomMarqueeItems.map((text, i) => (
                 <span key={`a-${i}`} className="text-3xl md:text-6xl font-black italic tracking-tighter">{text}</span>
              ))}
            </div>
            <div className="flex gap-12 whitespace-nowrap">
              {bottomMarqueeItems.map((text, i) => (
                 <span key={`b-${i}`} className="text-3xl md:text-6xl font-black italic tracking-tighter">{text}</span>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;