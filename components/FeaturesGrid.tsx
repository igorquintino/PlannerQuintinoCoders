
import React from 'react';
import { 
  Layout, FileText, Link, Map, Lightbulb, 
  Terminal, Timer, BarChart, CheckCircle2 
} from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Layout className="text-cyan-400" />,
      title: "Planejamento Geral",
      desc: "Organização semanal e mensal completa com controle de metas e hábitos para não deixar a peteca cair."
    },
    {
      icon: <FileText className="text-cyan-400" />,
      title: "Currículo Adaptável",
      desc: "Modelos editáveis focados em recrutadores de tecnologia. Saiba o que colocar para ser chamado."
    },
    {
      icon: <Link className="text-cyan-400" />,
      title: "Hub de Vagas",
      desc: "Links diretos para as melhores plataformas de vagas nacionais, internacionais e freelas."
    },
    {
      icon: <Map className="text-cyan-400" />,
      title: "Roadmaps de Estudo",
      desc: "Trilhas para Front-end, Back-end, Mobile e Dados, divididas por níveis: Iniciante ao Avançado."
    },
    {
      icon: <Lightbulb className="text-cyan-400" />,
      title: "Ideias de Projetos",
      desc: "Projetos práticos que realmente fazem sentido para seu portfólio em qualquer linguagem."
    },
    {
      icon: <Terminal className="text-cyan-400" />,
      title: "Colas de Sintaxe",
      desc: "Cheat sheets com conceitos importantes e atalhos mentais para você não perder tempo no Google."
    },
    {
      icon: <Timer className="text-cyan-400" />,
      title: "Pomodoro Focus",
      desc: "Sistema integrado para controle de sessões de estudo intensivo e aumento de produtividade."
    },
    {
      icon: <BarChart className="text-cyan-400" />,
      title: "Evolução Real",
      desc: "Dashboard visual para registrar seu progresso e ter clareza de quanto falta para sua meta."
    }
  ];

  return (
    <section id="conteudo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tudo o que você precisa em um único lugar</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Esqueça as dezenas de abas abertas e a desorganização. O Planner Quintino Coders é o seu QG de desenvolvimento.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all">
              <div className="mb-6 bg-cyan-500/10 w-14 h-14 flex items-center justify-center rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4 italic">"É como ter um mentor de carreira 24h por dia organizando seu Trello pessoal."</h3>
                <p className="text-zinc-400">O sistema Notion permite que você leve seu planejamento para qualquer lugar, sincronizado no PC e no Mobile.</p>
            </div>
            <CheckCircle2 size={80} className="text-cyan-500/20 shrink-0 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
