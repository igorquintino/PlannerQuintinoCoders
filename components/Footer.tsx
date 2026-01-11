
import React from 'react';
import { ShieldCheck, CreditCard, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
                <ShieldCheck className="text-cyan-400 mb-4" size={32} />
                <h4 className="font-bold mb-2">Compra Segura</h4>
                <p className="text-sm text-zinc-500">Seus dados estão 100% protegidos.</p>
            </div>
            <div className="flex flex-col items-center">
                <CreditCard className="text-cyan-400 mb-4" size={32} />
                <h4 className="font-bold mb-2">Acesso Imediato</h4>
                <p className="text-sm text-zinc-500">Receba no seu e-mail logo após o pagamento.</p>
            </div>
            <div className="flex flex-col items-center">
                <Mail className="text-cyan-400 mb-4" size={32} />
                <h4 className="font-bold mb-2">Suporte Exclusivo</h4>
                <p className="text-sm text-zinc-500">Tire suas dúvidas diretamente conosco.</p>
            </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-zinc-600 text-sm">© 2024 Quintino Coders. Todos os direitos reservados.</p>
            <div className="flex gap-8 text-zinc-600 text-sm font-medium">
                <a href="#" className="hover:text-white">Termos de Uso</a>
                <a href="#" className="hover:text-white">Privacidade</a>
                <a href="mailto:contato@quintinocoders.com.br" className="hover:text-white">Contato</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
