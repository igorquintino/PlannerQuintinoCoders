
import React from 'react';
import { XCircle, Brain, Target, Calendar } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const pains = [
    {
      icon: <Brain className="text-red-400" />,
      title: "Overdose de Informação",
      desc: "Você consome muitos cursos e tutoriais, mas sente que não está evoluindo de verdade."
    },
    {
      icon: <Target className="text-red-400" />,
      title: "Falta de Rumo",
      desc: "Estuda sem saber se está no caminho certo ou se o que está aprendendo é relevante."
    },
    {
      icon: <Calendar className="text-red-400" />,
      title: "Inconstância",
      desc: "Começa empolgado na segunda, mas na quarta já perdeu o foco e a organização."
    },
    {
      icon: <XCircle className="text-red-400" />,
      title: "Insegurança",
      desc: "Não sabe quando está 'pronto' para aplicar para vagas e acaba travando no medo."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Você se sente travado nos estudos?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Muitos programadores iniciantes falham não por falta de inteligência, mas por falta de <span className="text-white font-semibold italic">método</span>.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#0a0a0b] border border-white/5 hover:border-red-500/30 transition-colors group">
              <div className="mb-4 bg-red-500/10 w-12 h-12 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
