import { Home, Mail, Phone, Instagram, Facebook, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">Premium Residences</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Transformando sonhos em realidade com empreendimentos de alto padrão e acabamento premium.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <div className="space-y-2">
              {[
                { label: 'Empreendimentos', id: 'projects' },
                { label: 'Sobre Nós', id: 'about' },
                { label: 'Contatos', id: 'contact-info' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>(11) 3333-4444</p>
                  <p>(11) 9999-8888</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">contato@premiumresidences.com</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Avenida Principal, 1500</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-3 flex-wrap">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Conecte-se com a gente e acompanhe nossos últimos projetos e notícias.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
            <p>&copy; 2024 Premium Residences. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
