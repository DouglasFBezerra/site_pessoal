import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, ArrowRight, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card, Badge, TechTag } from '../components/ui/index';
import { getServiceBySlug } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const service = getServiceBySlug('criacao-de-sites')!;

export default function CriacaoDeSites() {
  const { open: openWhatsApp } = useWhatsApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Organization', name: 'Douglas Soluções Digitais' },
    areaServed: 'Brasil',
    serviceType: 'Desenvolvimento de Sites',
  };

  return (
    <>
      <SEO
        title="Criação de Sites Profissionais em São Paulo"
        description="Desenvolvimento de sites institucionais, landing pages e páginas para clínicas, escritórios e restaurantes. Responsivos, rápidos e otimizados para o Google."
        canonical="/criacao-de-sites"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-300">Início</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-slate-300">Serviços</Link>
            <span>/</span>
            <span className="text-slate-300">Criação de Sites</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
              <Globe size={24} className="text-brand-blue" />
            </div>
            <Badge variant="blue">Sites Profissionais</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Criação de Sites Profissionais para Empresas
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Sites modernos, responsivos e otimizados para mecanismos de busca. Desenvolvidos para converter visitantes em clientes e funcionar bem em todos os dispositivos.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Solicitar orçamento
          </button>
        </div>
      </section>

      {/* Audience */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              label="Para quem é este serviço"
              title="Sites para profissionais e empresas"
              description="Desenvolvo sites para diferentes segmentos, sempre com foco na necessidade do público-alvo e nas metas do negócio."
            />
            <ul className="space-y-3">
              {service.audience.map((a) => (
                <li key={a} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-blue flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="glass-card p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-cyan flex-shrink-0" />
                <span className="text-slate-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader label="Funcionalidades" title="O que está incluído" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-brand-blue flex-shrink-0" />
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section dark>
        <SectionHeader label="Processo" title="Como funciona o desenvolvimento" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div key={step.step} className="glass-card p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                {step.step}
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader label="Dúvidas" title="Perguntas frequentes sobre sites" center />
        <div className="max-w-2xl mx-auto space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-white text-sm">{faq.question}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-brand-blue flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />}
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy text-center">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Pronto para ter um site profissional?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Entre em contato pelo WhatsApp para conversarmos sobre o seu projeto e receber um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openWhatsApp()} className="btn-primary">
              <MessageCircle size={18} />
              Solicitar orçamento pelo WhatsApp
            </button>
            <Link to="/projetos" className="btn-secondary">
              Ver projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
