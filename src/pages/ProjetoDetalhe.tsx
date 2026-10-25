import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles, MessageCircle, Layers } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, Card, Badge } from '../components/ui/index';
import { getProjectBySlug, getCategoryLabel, getStatusLabel } from '../data/projects';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function ProjetoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { open: openWhatsApp } = useWhatsApp();

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
  };

  return (
    <>
      <SEO
        title={`${project.title} — Estudo de Caso e Arquitetura`}
        description={project.shortDescription}
        canonical={`/projetos/${project.slug}`}
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="section-container">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para todos os projetos
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="blue">{getCategoryLabel(project.category)}</Badge>
            <Badge variant={project.status === 'publicado' ? 'green' : 'cyan'}>
              Status: {getStatusLabel(project.status)}
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            {project.title}
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t.name} className="tech-tag text-sm px-3 py-1.5">
                {t.name} {t.version && <span className="opacity-70 ml-1">v{t.version}</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section dark>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Problema & Objetivo */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 font-bold">
                !
              </div>
              <h2 className="text-xl font-bold text-white">O Problema</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8">
              {project.problem}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan">
                <Sparkles size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Objetivo da Solução</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.objective}
            </p>
          </Card>

          {/* Funcionalidades */}
          <Card className="p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers size={20} className="text-brand-cyan" />
              Funcionalidades Implementadas / Escopo
            </h2>
            <ul className="space-y-3.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Aprendizados e Próximos Passos */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Aprendizados Técnicos</h3>
            <ul className="space-y-2.5">
              {project.learnings.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Evoluções Planejadas</h3>
            <ul className="space-y-2.5">
              {project.futurePlans.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chamada para conversa */}
        <div className="mt-16 text-center glass-card p-8 lg:p-12 border-brand-blue/30">
          <h2 className="text-2xl font-bold text-white mb-3">
            Precisa de uma solução com arquitetura semelhante?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6 text-sm">
            Podemos analisar o cenário da sua empresa e definir uma prova de conceito estruturada.
          </p>
          <button
            onClick={() => openWhatsApp(`Olá! Vi o projeto ${project.title} no site e gostaria de saber se é viável aplicar algo similar no meu negócio.`)}
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Conversar sobre esse projeto
          </button>
        </div>
      </Section>
    </>
  );
}
