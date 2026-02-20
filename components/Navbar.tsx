import React from 'react';
import { ShoppingBag, Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { toggleCart, cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle navigation and scrolling
  const handleMenuClick = (target: string, isScroll: boolean = false) => {
    setMobileMenuOpen(false);

    if (isScroll) {
      // If we are not on home, go home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait a bit for navigation to happen before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        // We are already on home, just scroll
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Standard navigation (e.g., to Shop)
      navigate(target);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-street-black/95 backdrop-blur-md border-b border-white/10 h-16 md:h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[60]">
        <div className="flex justify-between items-center relative">
          
          {/* Mobile Menu Button - "3 Tracinhos" (Hamburger) */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:text-yellow-400 transition-colors p-2 -ml-2 focus:outline-none relative z-[100]"
              aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo - Pulsing Border */}
          <div className="flex-1 flex justify-center md:justify-start md:flex-none">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white border-2 border-white px-2 py-1 leading-none hover:bg-white hover:text-black transition-colors animate-neon-border"
            >
              DL PODS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center ml-12">
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors hover:animate-pulse">Catálogo</Link>
            <button onClick={() => handleMenuClick('reviews', true)} className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors hover:animate-pulse">Avaliações</button>
          </div>

          {/* Right Icons (Instagram + Cart) */}
          <div className="flex items-center gap-5 md:gap-6">
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
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      {/* Increased blur to 3xl and opacity to 80% to reduce confusion */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-black/80 backdrop-blur-3xl z-[50] flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className={`flex flex-col space-y-10 text-center w-full max-w-sm px-6 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* 1. CATÁLOGO */}
            <button 
              onClick={() => handleMenuClick('/shop')}
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-colors animate-street-pulse"
            >
              Catálogo
            </button>

            {/* 2. AVALIAÇÕES */}
            <button 
              onClick={() => handleMenuClick('reviews', true)}
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-colors animate-street-pulse"
              style={{ animationDelay: '0.2s' }}
            >
              Avaliações
            </button>
        </div>
        
        {/* Decorative footer inside menu */}
        <div className={`absolute bottom-10 w-full text-center transition-opacity duration-700 delay-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
              Estilo Urbano // Vibe Autêntica
            </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;