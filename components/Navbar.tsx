
import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="text-cyan-400 w-6 h-6" />
          <span className="font-bold text-lg tracking-tight mono">Quintino<span className="text-cyan-400">Coders</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#problema" className="hover:text-white transition-colors">O Problema</a>
          <a href="#conteudo" className="hover:text-white transition-colors">O que há dentro</a>
          <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
        </div>
        <a 
          href="https://pay.kiwify.com.br/r5H2nqm" 
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
        >
          Garantir Acesso
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
