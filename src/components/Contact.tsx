import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import QuickContactModal from './QuickContactModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 3333-4444', '(11) 9999-8888'],
      color: 'emerald'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@premiumresidences.com', 'vendas@premiumresidences.com'],
      color: 'cyan'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Avenida Principal, 1500 - Sala 200', 'Centro - São Paulo, SP'],
      color: 'teal'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: ['Segunda a Sexta: 08h - 18h', 'Sábado: 09h - 14h'],
      color: 'blue'
    }
  ];

  return (
    <section id="contact-info" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Nossa equipe está pronta para ajudar você a encontrar o imóvel dos seus sonhos
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            <PhoneCall className="w-5 h-5" />
            Solicitar Contato
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colorMap = {
              emerald: 'from-emerald-500 to-emerald-600',
              cyan: 'from-cyan-500 to-cyan-600',
              teal: 'from-teal-500 to-teal-600',
              blue: 'from-blue-500 to-blue-600'
            };

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${colorMap[method.color as keyof typeof colorMap]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Agende uma Visita
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Conheça pessoalmente nossos empreendimentos. Nossos consultores especializados estão prontos para mostrar todos os detalhes e tirar suas dúvidas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                  <span>Resposta rápida em minutos</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                  <span>Consultor dedicado</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>

            <div className="p-12 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Agende visita"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Localização Estratégica',
              description: 'Próximos aos principais centros de comércio, educação e lazer da cidade'
            },
            {
              title: 'Segurança 24h',
              description: 'Sistema de monitoramento de última geração para sua tranquilidade'
            },
            {
              title: 'Infraestrutura Completa',
              description: 'Todas as comodidades para uma vida confortável e de qualidade'
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <QuickContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
