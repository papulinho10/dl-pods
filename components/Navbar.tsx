import React from 'react';
import { ShoppingBag, Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { toggleCart, cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-street-black/95 backdrop-blur-md border-b border-white/10 h-16 md:h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden z-[60]">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start md:flex-none z-[60]">
            <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white border-2 border-white px-2 py-1 leading-none hover:bg-white hover:text-black transition-colors">
              DL PODS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center ml-12">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Início</Link>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Loja</Link>
            <Link to="/brands" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">Marcas</Link>
          </div>

          {/* Right Icons (Instagram + Cart) */}
          <div className="flex items-center gap-5 md:gap-6 z-[60]">
            <a 
              href="https://www.instagram.com/dl_podes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Instagram"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </a>

            <button 
              onClick={toggleCart} 
              className="relative text-white hover:text-yellow-400 transition-colors group"
              aria-label="Cart"
            >
              <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-street-black z-50 flex flex-col justify-center items-center md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col space-y-8 text-center">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-colors"
            >
              Início
            </Link>
            <Link 
              to="/shop" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-colors"
            >
              Loja
            </Link>
            <Link 
              to="/brands" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-colors"
            >
              Marcas
            </Link>
        </div>
        <div className="absolute bottom-10 w-full text-center">
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Estilo Urbano // Vibe Autêntica</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;