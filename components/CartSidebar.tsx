import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-street-dark border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out shadow-2xl ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-black uppercase tracking-widest text-white">Seu Carrinho</h2>
            <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <span className="text-4xl">🛒</span>
                <p className="font-mono uppercase tracking-widest text-sm">Seu carrinho está vazio</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-street-gray flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold uppercase text-sm leading-tight">{item.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">{item.brand} | Tam: {item.selectedSize}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-yellow-400 font-mono text-sm">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-street-black">
            <div className="flex justify-between mb-4 text-white font-bold uppercase tracking-wider">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;