import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Pedro Santos",
    handle: "Canela - RS",
    text: "Qualidade absurda! O produto veio lacrado, tudo certinho na caixinha. A entrega aqui em Canela foi super rápida. Recomendo demais!",
    rating: 5,
    date: "HÁ 2 DIAS"
  },
  {
    id: 2,
    name: "Mariana Costa",
    handle: "Gramado - RS",
    text: "Melhor loja da região! Comprei o Elfbar e chegou rapidinho aqui em Gramado. Atendimento nota 10, respondem na hora.",
    rating: 5,
    date: "HÁ 1 SEMANA"
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    handle: "Canela - RS",
    text: "Virei cliente fiel. Peças originais, tudo muito bem embalado. O tempo de resposta deles é impressionante e a entrega voa!",
    rating: 5,
    date: "HÁ 2 SEMANAS"
  },
  {
    id: 4,
    name: "Julia Martins",
    handle: "Gramado - RS",
    text: "Estética da loja é braba e os produtos são de qualidade mesmo. Chegou tudo certinho e muito rápido. Podem confiar!",
    rating: 5,
    date: "HÁ 3 SEMANAS"
  }
];

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-street-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
              Comunidade
            </h2>
            <p className="text-yellow-400 font-mono text-sm uppercase tracking-widest">
              O que dizem as ruas
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white font-black text-4xl">4.9</span>
            <div className="flex flex-col justify-center">
               <div className="flex text-yellow-400 mb-1">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <span className="text-gray-500 text-xs font-mono uppercase tracking-wide">Baseado em 120+ avaliações</span>
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