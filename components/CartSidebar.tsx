import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Truck, Store, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useCart();
  
  // State for delivery options
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery' | null>(null);
  const [deliveryCity, setDeliveryCity] = useState<'gramado' | 'canela' | null>(null);

  // Constants
  const SHIPPING_GRAMADO = 20;
  const SHIPPING_CANELA = 10;
  const WHATSAPP_NUMBER = "5553981169901"; // Número atualizado

  // Prevent background scrolling when cart is open
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  // Calculations
  const shippingCost = deliveryType === 'delivery' 
    ? (deliveryCity === 'gramado' ? SHIPPING_GRAMADO : (deliveryCity === 'canela' ? SHIPPING_CANELA : 0))
    : 0;

  const finalTotal = cartTotal + shippingCost;

  // Validation
  const isCheckoutEnabled = cart.length > 0 && (
    deliveryType === 'pickup' || 
    (deliveryType === 'delivery' && deliveryCity !== null)
  );

  const handleCheckout = () => {
    if (!isCheckoutEnabled) return;

    // Format items list with flavor
    const itemsList = cart.map(item => {
        const flavorStr = item.selectedFlavor ? `   Sabor: ${item.selectedFlavor}\n` : '';
        return `▪️ *${item.quantity}x ${item.name}*\n${flavorStr}   Valor: R$ ${(item.price * item.quantity).toFixed(2)}`;
    }).join('\n\n');

    // Format delivery info
    let deliveryInfo = "";
    if (deliveryType === 'pickup') {
      deliveryInfo = "📍 *Método:* Vou Buscar (Retirada)";
    } else {
      const cityName = deliveryCity === 'gramado' ? 'Gramado' : 'Canela';
      deliveryInfo = `🚚 *Método:* Entrega em ${cityName}\n💵 *Frete:* R$ ${shippingCost.toFixed(2)}`;
    }

    // Construct final message
    const message = 
`*NOVO PEDIDO - DL PODS* 🔥
---------------------------
${itemsList}
---------------------------
💰 *Subtotal:* R$ ${cartTotal.toFixed(2)}
${deliveryInfo}

✅ *TOTAL FINAL: R$ ${finalTotal.toFixed(2)}*
---------------------------
Aguardo confirmação!`;

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:max-w-md bg-street-dark border-l border-white/10 z-[80] transform transition-transform duration-300 ease-out shadow-2xl flex flex-row ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Left Side "Street" Deco Strip - Enhanced with Caution Tape Pattern */}
        <div className="hidden md:flex flex-col w-10 h-full bg-yellow-400 items-center justify-center overflow-hidden relative border-r-2 border-black">
             {/* Caution Tape Pattern */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)'
            }}></div>
            
            <div className="rotate-180 whitespace-nowrap text-black font-black text-xs tracking-[0.4em] animate-marquee z-10 py-4" style={{ writingMode: 'vertical-rl' }}>
               CAUTION // STREETWEAR ZONE // AUTHENTIC GOODS // DL PODS // NO ENTRY FOR FAKES //
            </div>
        </div>

        <div className="flex-1 flex flex-col h-full bg-street-dark relative">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-street-black flex-shrink-0 z-10">
            <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white italic">Seu Carrinho</h2>
                <span className="text-[10px] text-yellow-400 font-mono uppercase tracking-[0.2em]">Review & Checkout</span>
            </div>
            <button onClick={toggleCart} className="text-gray-400 hover:text-white hover:rotate-90 transition-all p-2">
                <X size={24} />
            </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto z-10">
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-6 py-20">
                    <ShoppingBagIcon />
                    <div className="text-center">
                    <p className="font-black uppercase tracking-widest text-lg text-white mb-2">Vazio</p>
                    <p className="font-mono text-xs md:text-sm text-gray-500 max-w-[200px] mx-auto">Adicione alguns drops para começar sua sessão.</p>
                    </div>
                    <button onClick={toggleCart} className="text-yellow-400 border-b border-yellow-400 pb-1 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                    Voltar à Loja
                    </button>
                </div>
                ) : (
                <>
                    {/* Cart Items */}
                    <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.selectedFlavor}`} className="flex gap-4 bg-white/5 p-3 rounded-sm border border-transparent hover:border-yellow-400/30 transition-colors group">
                        <div className="w-20 h-24 bg-street-gray flex-shrink-0 relative overflow-hidden border border-white/5">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                            <div className="flex justify-between items-start">
                                <h3 className="text-white font-bold uppercase text-xs md:text-sm leading-tight pr-2">{item.name}</h3>
                                <button 
                                onClick={() => removeFromCart(item.id, item.selectedFlavor)}
                                className="text-gray-500 hover:text-red-500 transition-colors"
                                >
                                <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col mt-1">
                                <p className="text-gray-400 text-[10px] uppercase tracking-wider">{item.brand}</p>
                                {item.selectedFlavor && (
                                    <p className="text-yellow-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">
                                        Sabor: {item.selectedFlavor}
                                    </p>
                                )}
                            </div>
                            </div>
                            <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3 bg-black/40 px-2 py-1 rounded-sm border border-white/5">
                                <span className="text-xs text-white font-mono">Qtd: {item.quantity}</span>
                            </div>
                            <span className="text-yellow-400 font-mono text-sm font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Delivery Options Section */}
                    <div className="pt-6 border-t border-dashed border-white/10 mt-6">
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                        <MapPin size={16} className="text-yellow-400" /> Entrega / Retirada
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button
                        onClick={() => { setDeliveryType('pickup'); setDeliveryCity(null); }}
                        className={`p-3 border rounded-sm flex flex-col items-center justify-center gap-2 transition-all ${
                            deliveryType === 'pickup' 
                            ? 'bg-yellow-400 text-black border-yellow-400' 
                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                        >
                        <Store size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Vou Buscar</span>
                        </button>
                        
                        <button
                        onClick={() => setDeliveryType('delivery')}
                        className={`p-3 border rounded-sm flex flex-col items-center justify-center gap-2 transition-all ${
                            deliveryType === 'delivery' 
                            ? 'bg-white text-black border-white' 
                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                        >
                        <Truck size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Com Frete</span>
                        </button>
                    </div>

                    {/* City Selection (Only if Delivery is selected) */}
                    <div className={`overflow-hidden transition-all duration-300 ${deliveryType === 'delivery' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">Selecione a cidade:</p>
                        <div className="space-y-2">
                        <button
                            onClick={() => setDeliveryCity('gramado')}
                            className={`w-full flex justify-between items-center p-3 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all ${
                            deliveryCity === 'gramado'
                                ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                                : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            <span>Gramado</span>
                            <span className="font-mono">R$ 20,00</span>
                        </button>
                        <button
                            onClick={() => setDeliveryCity('canela')}
                            className={`w-full flex justify-between items-center p-3 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all ${
                            deliveryCity === 'canela'
                                ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                                : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            <span>Canela</span>
                            <span className="font-mono">R$ 10,00</span>
                        </button>
                        </div>
                    </div>
                    </div>
                </>
                )}
            </div>
            </div>

            {/* Footer / Checkout */}
            <div className="p-6 border-t border-white/10 bg-street-black safe-area-bottom flex-shrink-0 z-10">
            <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-400 text-xs font-bold uppercase tracking-wider">
                <span>Subtotal</span>
                <span className="font-mono text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-xs font-bold uppercase tracking-wider">
                <span>Frete</span>
                <span className={`font-mono ${shippingCost > 0 ? 'text-yellow-400' : 'text-white'}`}>
                    {deliveryType === 'pickup' ? 'GRÁTIS' : deliveryType === null ? '--' : `$${shippingCost.toFixed(2)}`}
                </span>
                </div>
                <div className="flex justify-between text-white font-black uppercase tracking-wider text-base md:text-lg pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="font-mono text-yellow-400">${finalTotal.toFixed(2)}</span>
                </div>
            </div>

            <button 
                onClick={handleCheckout}
                disabled={!isCheckoutEnabled}
                className={`w-full py-4 md:py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 rounded-sm ${
                isCheckoutEnabled 
                    ? 'bg-yellow-400 text-black hover:bg-white hover:scale-[1.02] cursor-pointer' 
                    : 'bg-white/10 text-gray-500 cursor-not-allowed opacity-50'
                }`}
            >
                <span>{isCheckoutEnabled ? 'Finalizar no WhatsApp' : 'Selecione a Entrega'}</span>
                {isCheckoutEnabled && <ArrowRight size={18} />}
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

// Simple icon component for empty state
const ShoppingBagIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="opacity-20 text-white"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default CartSidebar;