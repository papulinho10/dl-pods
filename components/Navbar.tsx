import React from 'react';
import { ShoppingBag, Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { toggleCart, cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-street-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-gray-300">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:justify-start md:flex-none">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-white border-2 border-white px-2 py-1">
              DL PODS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Início</Link>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Loja</Link>
            <Link to="/brands" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Marcas</Link>
          </div>

          {/* Right Icons (Instagram + Cart) */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/dl_podes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Instagram"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-xs font-bold uppercase tracking-wide">Insta</span>
            </a>

            <button 
              onClick={toggleCart} 
              className="relative text-white hover:text-yellow-400 transition-colors group"
              aria-label="Cart"
            >
              <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-street-dark border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-center text-base font-bold uppercase tracking-widest text-white hover:bg-white/10">Início</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-center text-base font-bold uppercase tracking-widest text-white hover:bg-white/10">Loja</Link>
            <Link to="/brands" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-center text-base font-bold uppercase tracking-widest text-white hover:bg-white/10">Marcas</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;