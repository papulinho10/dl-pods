import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, flavor?: string) => void;
  removeFromCart: (productId: string, flavor?: string) => void;
  toggleCart: () => void;
  isCartOpen: boolean;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, flavor?: string) => {
    setCart((prev) => {
      // Find item with same ID AND same Flavor (if flavor exists)
      const existing = prev.find((item) => {
        const sameId = item.id === product.id;
        const sameFlavor = item.selectedFlavor === flavor;
        return sameId && sameFlavor;
      });

      if (existing) {
        return prev.map((item) => {
            const sameId = item.id === product.id;
            const sameFlavor = item.selectedFlavor === flavor;
            if (sameId && sameFlavor) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
      }
      return [...prev, { ...product, quantity: 1, selectedFlavor: flavor }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, flavor?: string) => {
    setCart((prev) => prev.filter((item) => {
        // Keep item if ID is different OR if ID is same but flavor is different
        const isTarget = item.id === productId && item.selectedFlavor === flavor;
        return !isTarget;
    }));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleCart, isCartOpen, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};