import { Home, MapPin, Bed, Square, Car } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: string) => void;
}

const projects = [
  {
    id: 'residencial-park',
    name: 'Residencial Park Premium',
    location: 'Bairro Nobre - Zona Sul',
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bedrooms: '2 a 3 quartos',
    area: '65m² a 95m²',
    parking: '1 a 2 vagas',
    price: 'A partir de R$ 450.000',
    highlights: ['Piscina', 'Academia', 'Salão de Festas', 'Playground'],
    description: 'Empreendimento com acabamento premium, localizado em área nobre com fácil acesso a comércios, escolas e transporte público.'
  },
  {
    id: 'villa-moderna',
    name: 'Villa Moderna Residence',
    location: 'Centro - Próximo ao Shopping',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bedrooms: '3 a 4 quartos',
    area: '85m² a 120m²',
    parking: '2 a 3 vagas',
    price: 'A partir de R$ 620.000',
    highlights: ['Coworking', 'Espaço Gourmet', 'Pet Place', 'Bike Park'],
    description: 'Residências espaçosas e modernas com foco em qualidade de vida, perfeitas para famílias que buscam sofisticação e conforto.'
  }
];

export default function Projects({ onSelectProject }: ProjectsProps) {
  const handleInterest = (projectName: string) => {
    onSelectProject(projectName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-xl text-slate-600">
            Escolha o imóvel ideal para você e sua família
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold">
                  {project.price}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center text-slate-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  {project.location}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 text-emerald-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Quartos</p>
                      <p className="font-semibold text-slate-900 text-sm">{project.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 text-emerald-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Área</p>
                      <p className="font-semibold text-slate-900 text-sm">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-emerald-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Vagas</p>
                      <p className="font-semibold text-slate-900 text-sm">{project.parking}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 mb-3">Destaques:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleInterest(project.name)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  Tenho Interesse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
