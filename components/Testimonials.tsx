
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Lucas Silva",
      role: "Transição de Carreira",
      text: "Eu estava pulando de curso em curso sem nunca terminar nada. O Planner me deu o roadmap que faltava pra eu focar em uma stack só.",
      avatar: "https://picsum.photos/seed/lucas/100/100"
    },
    {
      name: "Mariana Costa",
      role: "Estudante de ADS",
      text: "O modelo de currículo é sensacional. Refiz o meu seguindo as dicas do Quintino e consegui 3 entrevistas na mesma semana!",
      avatar: "https://picsum.photos/seed/mari/100/100"
    },
    {
      name: "Ricardo Mendes",
      role: "Dev Junior",
      text: "Organização é tudo. O sistema de Pomodoro integrado no Notion mudou minha produtividade. Recomendo demais.",
      avatar: "https://picsum.photos/seed/ric/100/100"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Feedbacks da Comunidade</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-4">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 relative">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full mb-6 border-2 border-cyan-500/30" />
                <p className="text-zinc-300 italic mb-6 leading-relaxed">"{r.text}"</p>
                <div>
                    <p className="font-bold text-white">{r.name}</p>
                    <p className="text-xs text-cyan-400 mono uppercase tracking-wider">{r.role}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
