import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, TechTag } from '../components/ui/index';
import { projects, getCategoryLabel, getStatusLabel } from '../data/projects';
import type { Project, ProjectCategory } from '../types';

const categories: { label: string; value: 'todas' | ProjectCategory }[] = [
  { label: 'Todos os Projetos', value: 'todas' },
  { label: 'Atendente WhatsApp 24h', value: 'automacao' },
  { label: 'CRM e Gestão', value: 'crm' },
  { label: 'Desenvolvimento Web', value: 'web' },
];

function ProjectShot({ project, eager = false }: { project: Project; eager?: boolean }) {
  const shot = project.screenshots[0];
  if (!shot) {
    return (
      <div className="aspect-video w-full rounded-xl border border-white/10 bg-brand-navy-light/50 flex items-center justify-center text-slate-500 text-sm">
        Projeto sem imagens públicas
      </div>
    );
  }
  return (
    <Link
      to={`/projetos/${project.slug}`}
      tabIndex={-1}
      aria-hidden="true"
      className="block rounded-xl overflow-hidden border border-white/15 bg-brand-navy"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>
      <img
        src={shot.url}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        className="aspect-video w-full object-cover object-top block"
      />
    </Link>
  );
}

function ProjectMeta({ project, dot }: { project: Project; dot: string }) {
  return (
    <p className="flex items-center gap-2.5 text-sm text-slate-400 mb-3">
      <span>{getCategoryLabel(project.category)}</span>
      <span className="text-slate-600" aria-hidden="true">/</span>
      <span className="inline-flex items-center gap-1.5">
        <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
        {getStatusLabel(project.status)}
      </span>
    </p>
  );
}

export default function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState<'todas' | ProjectCategory>('todas');

  const filteredProjects = selectedCategory === 'todas'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const statusDot = (status: string) => {
    switch (status) {
      case 'publicado': return 'bg-green-400';
      case 'desenvolvimento': return 'bg-brand-cyan';
      case 'prototipo': return 'bg-yellow-400';
      default: return 'bg-brand-blue-light';
    }
  };

  const [featured, ...others] = filteredProjects;

  return (
    <>
      <SEO
        title="Projetos e Portfólio — Soluções Reais e Estudos Práticos"
        description="Conheça os projetos desenvolvidos e em andamento: atendentes de WhatsApp com IA para clínicas e delivery, CRM Odontológico, automações com n8n e aplicações web modernas."
        canonical="/projetos"
      />

      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="section-container">
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
                aria-pressed={selectedCategory === cat.value}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-white text-brand-black'
                    : 'border border-white/20 text-slate-300 hover:text-white hover:border-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section dark className="!pt-12 lg:!pt-16">
        {featured && (
          <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 lg:pb-20 mb-14 lg:mb-20 border-b border-white/10">
            <div className="lg:col-span-7">
              <ProjectShot project={featured} eager />
            </div>
            <div className="lg:col-span-5">
              <ProjectMeta project={featured} dot={statusDot(featured.status)} />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                <Link to={`/projetos/${featured.slug}`} className="hover:text-brand-cyan transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-pretty">
                {featured.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-8">
                {featured.technologies.map((t) => (
                  <TechTag key={t.name}>{t.name}</TechTag>
                ))}
              </div>
              <Link to={`/projetos/${featured.slug}`} className="btn-primary">
                Ver estudo de caso
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {others.map((project) => (
            <article key={project.id} className="flex flex-col">
              <ProjectShot project={project} />
              <div className="mt-6">
                <ProjectMeta project={project} dot={statusDot(project.status)} />
                <h2 className="text-2xl font-bold text-white mb-3 text-balance">
                  <Link to={`/projetos/${project.slug}`} className="hover:text-brand-cyan transition-colors">
                    {project.title}
                  </Link>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5 text-pretty">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((t) => (
                    <TechTag key={t.name}>{t.name}</TechTag>
                  ))}
                </div>
                <Link
                  to={`/projetos/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-cyan hover:underline underline-offset-4 group"
                >
                  Ver estudo de caso
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
