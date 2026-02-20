import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-street-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content: Brand & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6 max-w-md text-center md:text-left">
            <Link to="/" className="inline-block text-3xl font-black tracking-tighter uppercase text-white border-4 border-white px-3 py-1 hover:bg-white hover:text-black transition-colors">
              DL PODS
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em pods. Trabalhamos com marcas confiáveis, sabores intensos e qualidade garantida. Preço justo, atendimento rápido e entrega ágil.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Social</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dl_podes/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/5553981169901" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-green-500 hover:text-black hover:border-green-500 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest text-center md:text-left">
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