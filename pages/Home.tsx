import React, { useEffect, useRef, useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import BrandSection from '../components/BrandSection';
import ProductCard from '../components/ProductCard';
import ReviewsSection from '../components/ReviewsSection';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Feature top 4 products
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Marquee data - repeat for smooth infinite loop
  const topMarqueeItems = Array(10).fill("SUA VIBE // SEU SABOR // SEU ESTILO //");
  const bottomMarqueeItems = Array(6).fill("NOITE // ROLÊ // VIBE // DL PODS // NOITE // ROLÊ // DL PODS //");

  // Promo Banner Observer
  const promoRef = useRef<HTMLDivElement>(null);
  const [promoVisible, setPromoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPromoVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (promoRef.current) observer.observe(promoRef.current);
    return () => { if (promoRef.current) observer.disconnect(); };
  }, []);


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
        <div className="w-full border border-white/10 bg-white/5 p-4 md:p-6 mb-12 text-center backdrop-blur-sm animate-neon-border">
          <p className="text-gray-400 text-[10px] md:text-sm font-mono uppercase tracking-[0.15em] font-bold">
            <span className="text-yellow-500 mr-2 md:mr-3 animate-pulse">⚠️ AVISO</span>
            Todos os produtos contêm nicotina
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none text-center md:text-left animate-text-glow">
            Últimos <br className="md:hidden"/> Lançamentos
          </h2>
        </div>
        
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button - Visible on Mobile AND Desktop now */}
        <div className="mt-16 text-center">
          <Link to="/shop" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-black tracking-widest text-white transition duration-300 ease-out border-2 border-white/30 rounded-sm shadow-md group animate-neon-border">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-400 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase text-sm">Ver Todos Produtos</span>
            <span className="relative invisible text-sm uppercase">Ver Todos Produtos</span>
          </Link>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div 
          ref={promoRef}
          className="relative w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl group"
        >
            <img 
              src="https://i.postimg.cc/FFC7XdXj/lost-mary-banner.webp" 
              alt="Promoção Especial" 
              className="w-full h-auto block"
              style={{
                animation: promoVisible ? 'global-street-pulse 5s infinite ease-in-out' : 'none',
                filter: promoVisible ? undefined : 'grayscale(100%)'
              }}
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
                 <span key={`a-${i}`} className="text-3xl md:text-6xl font-black italic tracking-tighter hover:text-yellow-600 transition-colors">{text}</span>
              ))}
            </div>
            <div className="flex gap-12 whitespace-nowrap">
              {bottomMarqueeItems.map((text, i) => (
                 <span key={`b-${i}`} className="text-3xl md:text-6xl font-black italic tracking-tighter hover:text-yellow-600 transition-colors">{text}</span>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;