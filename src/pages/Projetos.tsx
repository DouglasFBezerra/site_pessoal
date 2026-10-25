import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, Card, Badge, TechTag } from '../components/ui/index';
import { projects, getCategoryLabel, getStatusLabel } from '../data/projects';
import type { ProjectCategory } from '../types';

const categories: { label: string; value: 'todas' | ProjectCategory }[] = [
  { label: 'Todos os Projetos', value: 'todas' },
  { label: 'CRM e Gestão', value: 'crm' },
  { label: 'Automação', value: 'automacao' },
  { label: 'Desenvolvimento Web', value: 'web' },
];

export default function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState<'todas' | ProjectCategory>('todas');

  const filteredProjects = selectedCategory === 'todas'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const statusBadgeVariant = (status: string) => {
    switch (status) {
      case 'publicado': return 'green';
      case 'desenvolvimento': return 'cyan';
      case 'prototipo': return 'yellow';
      default: return 'blue';
    }
  };

  return (
    <>
      <SEO
        title="Projetos e Portfólio — Soluções Reais e Estudos Práticos"
        description="Conheça os projetos desenvolvidos e em andamento: CRM Odontológico, fluxos de automação com n8n e aplicações web modernas."
        canonical="/projetos"
      />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Portfólio & Laboratório</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Projetos, protótipos e soluções práticas
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Aqui você encontra projetos desenvolvidos, protótipos em evolução e estudos de arquitetura.
            Transparência técnica: cada projeto detalha o problema abordado, objetivo, stack e estado real de entrega.
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-brand-blue text-white shadow-brand-sm'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 flex flex-col justify-between" hover>
              <div>
                {project.screenshots[0] && (
                  <Link to={`/projetos/${project.slug}`} tabIndex={-1} aria-hidden="true">
                    <img
                      src={project.screenshots[0].url}
                      alt=""
                      loading="lazy"
                      className="mb-5 aspect-video w-full rounded-lg border border-white/10 object-cover object-top"
                    />
                  </Link>
                )}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">{getCategoryLabel(project.category)}</Badge>
                  <Badge variant={statusBadgeVariant(project.status)}>
                    {getStatusLabel(project.status)}
                  </Badge>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  <Link
                    to={`/projetos/${project.slug}`}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                    Tecnologias
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <TechTag key={t.name}>{t.name}</TechTag>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to={`/projetos/${project.slug}`}
                className="btn-secondary text-sm w-full justify-center group"
              >
                Ver estudo de caso
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
