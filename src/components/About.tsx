import { CheckCircle, Users, Trophy, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos no Mercado' },
    { number: '2.5K+', label: 'Famílias Felizes' },
    { number: '50+', label: 'Projetos Entregues' },
    { number: '100%', label: 'Satisfação Garantida' }
  ];

  const values = [
    {
      icon: Trophy,
      title: 'Excelência',
      description: 'Comprometidos em entregar projetos de qualidade superior'
    },
    {
      icon: Users,
      title: 'Integridade',
      description: 'Transparência e honestidade em todas as nossas ações'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre buscando as melhores soluções e tecnologias'
    },
    {
      icon: CheckCircle,
      title: 'Confiabilidade',
      description: 'Cumprindo prazos e mantendo nossos compromissos'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sobre a Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Residences
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Há mais de 15 anos, transformamos sonhos em realidade. Nossa empresa se destaca no mercado imobiliário pela qualidade incomparável de seus empreendimentos e pelo compromisso genuíno com cada cliente.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Com uma equipe de profissionais experientes e dedicados, criamos não apenas edifícios, mas comunidades onde as famílias vivem, crescem e criam memórias inesquecíveis.
            </p>
            <div className="space-y-3">
              {['Expertise em design e arquitetura', 'Acabamentos premium de classe mundial', 'Localização estratégica e acessibilidade'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sobre Premium Residences"
              className="rounded-3xl w-full object-cover h-96 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl w-40 h-40 opacity-20 blur-3xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20 py-12 border-y border-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mb-2">
                {stat.number}
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
