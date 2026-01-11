
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold mb-6 mono tracking-widest uppercase">
          <Sparkles size={14} /> Sistema de Organização Tech
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          O planner que organiza seus estudos e te mostra <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">exatamente o que fazer</span> todos os dias.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Feito por quem programa, para quem está aprendendo. Saia da confusão e acelere sua jornada rumo ao primeiro emprego na tecnologia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#checkout" 
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0b] font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] glow-cyan"
          >
            Quero o Planner Quintino Coders <ChevronRight size={20} />
          </a>
          <p className="text-xs text-zinc-500 mono">Acesso imediato via Notion ou PDF</p>
        </div>

        <div className="mt-20 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
            <img 
              src="https://picsum.photos/id/0/1200/600" 
              alt="Preview do Planner Quintino Coders no Notion" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
