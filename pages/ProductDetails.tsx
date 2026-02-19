import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShieldCheck, Truck } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

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

  const hasFlavors = product.flavors && product.flavors.length > 0;
  const canAddToCart = !hasFlavors || selectedFlavor !== null;

  // Custom parser for Bold Headers
  const renderDescription = (text: string) => {
    const keywords = [
      "DESCRIÇÃO", 
      "Fluxo de ar regulável", 
      "Autonomia", 
      "Passo a passo de uso", 
      "ESPECIFICAÇÕES",
      "Design com tela LED incorporada",
      "Funções do MO 20000 Pro",
      "Perfil e Características",
      "Benefícios e Diferenciais",
      "Como Usar",
      "Por que escolher o Pod Descartável Elf Bar BC45K Pro?",
      "Alta durabilidade e recarga rápida",
      "Tanque interno com grande volume de juice",
      "Desempenho suave e vapor estável",
      "Destaques do Ignite V300",
      // New Subtitles
      "Especificações do Produto – SEX ADDICT BY DAN BILZERIAN S280",
      "Controle total da experiência de sabor",
      "Energia estável e carregamento eficiente",
      "Resistências otimizadas para vapor equilibrado",
      "Design funcional e conforto no uso",
      "Destaques:",
      "ESPECIFICAÇÕES:",
      "Desempenho de Alta Qualidade e Longa Duração",
      "Design Moderno e Portátil",
      "Destaques do Pod Descartável OxBar G Prime",
      "Especificações Técnicas",
      "Características Técnicas:",
      "Modos de Saída:",
      "Perfis de sabor descartáveis da Dinner Lady 50K:",
      "Especificações do produto:",
      "Características do produto:"
    ];
    
    // Create a regex to split the text by these keywords
    // We escape special characters like '?' to avoid regex errors
    const safeKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${safeKeywords.join('|')})`, 'g');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (keywords.includes(part)) {
        return (
          <strong key={index} className="block text-yellow-400 font-black uppercase tracking-wider mt-6 mb-2 text-sm md:text-base border-l-2 border-yellow-400 pl-3">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-street-black pt-20 md:pt-28 pb-20 overflow-x-hidden">
      
      {/* CSS Animations for Float only (Smoke removed) */}
      <style>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
          
          {/* --- Image Section --- */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            {/* Main Composition Container */}
            <div className="relative w-full max-w-[400px] h-auto overflow-hidden rounded-sm border border-white/10 bg-street-dark group shadow-2xl">
               
               {/* 3. The Product Image (Floating Container + Pulsing Image) */}
               <div className="relative z-20 p-4 animate-[float-y_6s_ease-in-out_infinite]">
                 <img 
                   src={activeImage || product.image} 
                   alt={product.name} 
                   className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] animate-street-pulse"
                 />
               </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar md:grid md:grid-cols-4 md:gap-4 md:pb-0 max-w-[400px]">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 aspect-square bg-street-gray overflow-hidden border-2 transition-all duration-300 rounded-sm group ${
                      activeImage === img 
                        ? 'border-yellow-400 opacity-100' 
                        : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-contain p-1 grayscale group-hover:grayscale-0 transition-all"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col relative">
            
            {/* Decorative Smoke behind text (Subtle) - Kept this as it is outside the image container */}
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
                
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-none drop-shadow-lg">
                {product.longName || product.name}
                </h1>

                {/* --- FLAVOR SELECTION (Below Title) --- */}
                {hasFlavors && (
                  <div className="mb-8">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Escolha o Sabor:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors?.map((flavor) => (
                        <button
                          key={flavor}
                          onClick={() => setSelectedFlavor(flavor)}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-sm transition-all duration-300 ${
                            selectedFlavor === flavor 
                              ? 'border-yellow-400 bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]' 
                              : 'border-white/20 text-gray-400 hover:border-white hover:text-white'
                          }`}
                        >
                          {flavor}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* --- PRICE & ADD TO CART --- */}
                <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                    <div className="flex items-end gap-4 mb-4">
                        <p className="text-3xl md:text-4xl font-mono text-white font-bold">
                        ${product.price.toFixed(2)}
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => {
                            if (canAddToCart) {
                                addToCart(product, selectedFlavor || undefined);
                            }
                        }}
                        disabled={!canAddToCart}
                        className={`relative w-full py-4 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.2em] transition-all rounded-sm overflow-hidden group 
                        ${canAddToCart 
                            ? 'bg-white text-black hover:bg-yellow-400 hover:text-black cursor-pointer' 
                            : 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/10'
                        }`}
                    >
                        <span className="relative z-10">
                            {hasFlavors && !selectedFlavor ? "Selecione um Sabor" : "Adicionar ao Carrinho"}
                        </span>
                        {canAddToCart && (
                            <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                        )}
                    </button>
                </div>
            </div>

            {/* Description Parsed */}
            <div className="prose prose-invert mb-8 relative z-10 text-gray-300 leading-relaxed text-sm md:text-base font-medium whitespace-pre-wrap">
              {renderDescription(product.description)}
            </div>
            
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