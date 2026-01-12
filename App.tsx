import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesGrid from './components/FeaturesGrid';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <ProblemSection />

        <section id="solucao" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                  A solução definitiva para quem busca <span className="text-cyan-400">ordem no caos</span> da
                  programação.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  O Planner Quintino Coders não é apenas uma lista de tarefas. É um mapa estratégico desenhado para levar
                  você do absoluto zero até a prontidão para o mercado de trabalho.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Menos ansiedade com o futuro',
                    'Mais foco no que realmente importa',
                    'Constância inabalável',
                    'Evolução real monitorada dia após dia',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                      <Zap className="text-cyan-400 shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-cyan-500/10 rounded-[3rem] blur-3xl"></div>
                <div className="relative bg-zinc-900 border border-white/10 p-4 rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* ✅ IMPORTANTE: use link DIRETO de imagem (i.imgur.com/ID.png) ou imagem local em /public */}
                  {/* Se quiser usar local: coloque em /public/images/notion-interface.png e use src="/images/notion-interface.png" */}
                  <img
                    src="https://i.imgur.com/UxmTMul.png"
                    alt="Interface Notion"
                    className="rounded-2xl grayscale contrast-125 w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesGrid />

        <TargetAudience />

        <Testimonials />

        {/* Pricing / Final CTA Section */}
        <section id="checkout" className="py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/[0.02] -z-10"></div>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Pare de estudar no escuro. Tenha um plano claro.</h2>

            <div className="bg-zinc-900 border border-cyan-500/30 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mb-10">
              <div className="absolute top-0 right-0 bg-cyan-500 text-black px-6 py-2 font-bold text-xs uppercase tracking-widest rounded-bl-3xl">
                Oferta de Lançamento
              </div>

              <div className="mb-8">
                <p className="text-zinc-500 line-through mb-2 font-medium">De R$ 97,00 por apenas</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold mt-2">12x</span>
                  <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">R$ 4,70</span>
                </div>
                <p className="mt-4 text-zinc-400 font-medium italic">ou R$ 47,00 à vista</p>
              </div>

              <div className="space-y-4 mb-10 text-left max-w-sm mx-auto">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-400" size={18} />
                  <span className="text-sm font-medium">Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-400" size={18} />
                  <span className="text-sm font-medium">Template Notion Editável</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-400" size={18} />
                  <span className="text-sm font-medium">PDF Interativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-400" size={18} />
                  <span className="text-sm font-medium">Atualizações Grátis</span>
                </div>
              </div>

              <button className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0b] text-xl font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] glow-cyan">
                COMPRAR AGORA <ArrowRight />
              </button>

              {/* ✅ NOVO: espaço para imagem logo depois do botão */}
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  {/* Troque o src por:
                      1) um link direto (https://i.imgur.com/ID.png) OU
                      2) uma imagem local em /public/images/checkout-image.png => src="/images/checkout-image.png"
                  */}
                  <img
                    src="https://i.imgur.com/P4jPr0R.png"
                    alt="Imagem após o botão"
                    className="w-full h-auto opacity-95"
                    loading="lazy"
                  />
                </div>

                {/* legenda opcional (pode remover se não quiser) */}
                <p className="mt-3 text-zinc-500 text-xs">
                  Acesso imediato via Notion ou PDF
                </p>
              </div>
            </div>

            <p className="text-zinc-500 text-sm flex items-center justify-center gap-2">
              Garantia incondicional de 7 dias. Seu risco é zero.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
