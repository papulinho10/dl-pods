import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Pedro Santos",
    handle: "@pedro_s",
    text: "A qualidade do hoodie da Supreme é absurda. O caimento oversized é exatamente o que eu procurava. Chegou em 2 dias em SP.",
    rating: 5,
    date: "HÁ 2 DIAS"
  },
  {
    id: 2,
    name: "Mariana Costa",
    handle: "@mari.c",
    text: "Melhor curadoria de streetwear do Brasil. Comprei a calça da Nike e o fit ficou perfeito. Atendimento no insta foi 10/10.",
    rating: 5,
    date: "HÁ 1 SEMANA"
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    handle: "@lucas_o",
    text: "Peças originais e envio rápido. O cinto da Off-White veio com todas as tags. Virei cliente fiel da DL Podes.",
    rating: 5,
    date: "HÁ 2 SEMANAS"
  },
  {
    id: 4,
    name: "Julia Martins",
    handle: "@juju_m",
    text: "Estética da loja é muito braba e os produtos condizem com as fotos. Recomendo demais pra quem curte a cultura street.",
    rating: 4,
    date: "HÁ 3 SEMANAS"
  }
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-street-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
              Comunidade
            </h2>
            <p className="text-yellow-400 font-mono text-sm uppercase tracking-widest">
              O que dizem as ruas
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <span className="text-white font-black text-4xl">4.9</span>
            <div className="flex flex-col justify-center">
               <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <span className="text-gray-500 text-xs font-mono uppercase">Baseado em 120+ avaliações</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-street-dark border border-white/5 p-6 hover:border-yellow-400/50 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600 text-[10px] font-mono uppercase tracking-wider">{review.date}</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 group-hover:border-yellow-400/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">{review.name}</p>
                  <p className="text-gray-500 text-[10px] font-mono">{review.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;