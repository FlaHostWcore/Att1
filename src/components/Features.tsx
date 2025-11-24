import { Building2, MapPin, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Arquitetura Moderna',
    description: 'Projetos contemporâneos com design arrojado e funcional'
  },
  {
    icon: MapPin,
    title: 'Localização Premium',
    description: 'Próximo a shoppings, escolas e principais vias de acesso'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Sistema completo de segurança 24h e controle de acesso'
  },
  {
    icon: Award,
    title: 'Alto Padrão',
    description: 'Acabamentos premium e infraestrutura completa'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Por Que Escolher Nossos Empreendimentos?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Qualidade, conforto e valorização garantida para seu investimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
