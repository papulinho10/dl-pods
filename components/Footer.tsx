import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-street-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="inline-block text-3xl font-black tracking-tighter uppercase text-white border-4 border-white px-3 py-1 hover:bg-white hover:text-black transition-colors">
              DL PODS
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Streetwear premium com curadoria para os ousados. Trazemos a cultura até a sua porta com peças autênticas das maiores marcas do mundo.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Loja</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Novidades</Link></li>
              <li><Link to="/shop?brand=Nike" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Nike</Link></li>
              <li><Link to="/shop?brand=Supreme" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Supreme</Link></li>
              <li><Link to="/shop" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Acessórios</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Suporte</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Envio</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Devoluções</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm uppercase font-medium transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Social</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dl_podes/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-green-500 hover:text-black hover:border-green-500 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
            © 2024 DL PODS. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest hover:text-white cursor-pointer">Política de Privacidade</span>
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest hover:text-white cursor-pointer">Termos de Serviço</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;