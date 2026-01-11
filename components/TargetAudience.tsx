
import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Is For */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Check className="text-emerald-400" /> Para quem é
            </h3>
            <ul className="space-y-4 text-zinc-300">
              {[
                "Quem está começando do zero e não quer perder tempo",
                "Quem já estuda há meses, mas se sente perdido no 'Tutorial Hell'",
                "Profissionais em transição de carreira buscando eficiência",
                "Estudantes de tecnologia que querem se destacar no mercado",
                "Quem busca organização profissional para conquistar o 1º emprego"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Is Not For */}
          <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <X className="text-red-400" /> Para quem NÃO é
            </h3>
            <ul className="space-y-4 text-zinc-300">
              {[
                "Quem busca um 'botão mágico' para aprender sem estudar",
                "Quem não tem compromisso com a própria carreira",
                "Pessoas que preferem continuar na bagunça e na procrastinação",
                "Quem acha que apenas comprar cursos resolve todos os problemas",
                "Quem não está disposto a seguir um método de organização"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
