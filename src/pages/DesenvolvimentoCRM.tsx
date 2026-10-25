import { Link } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, ArrowRight, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Badge } from '../components/ui/index';
import { getServiceBySlug } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const service = getServiceBySlug('desenvolvimento-crm')!;

const kanbaCols = ['Primeiro Contato', 'Proposta Enviada', 'Em Negociação', 'Fechado'];

export default function DesenvolvimentoCRM() {
  const { open: openWhatsApp } = useWhatsApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Organization', name: 'Douglas Soluções Digitais' },
    areaServed: 'Brasil',
    serviceType: 'Desenvolvimento de Software CRM',
  };

  return (
    <>
      <SEO
        title="Desenvolvimento de Sistemas CRM Personalizados"
        description="Sistemas CRM sob medida para organizar clientes, leads, funil de vendas em Kanban e agendamentos. Desenvolvidos para clínicas, escritórios e prestadores de serviço."
        canonical="/desenvolvimento-crm"
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
            <span className="text-slate-300">Sistemas CRM</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center">
              <LayoutDashboard size={24} className="text-brand-cyan" />
            </div>
            <Badge variant="cyan">Sistemas CRM</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Sistemas CRM Personalizados para Seu Negócio
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Sistemas de gestão de clientes desenvolvidos sob medida, com funil de vendas visual, histórico de interações e indicadores adaptados à realidade do seu negócio.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Solicitar orçamento
          </button>
        </div>
      </section>

      {/* Kanban demo */}
      <Section dark>
        <SectionHeader
          label="Funcionalidade principal"
          title="Funil de vendas visual em Kanban"
          description="Visualize em qual etapa cada cliente está e tome decisões com base em dados reais."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
          {kanbaCols.map((col, i) => (
            <div key={col} className="glass-card p-4 min-w-[160px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{col}</span>
                <span className="badge-blue text-xs">{[3, 2, 1, 4][i]}</span>
              </div>
              <div className="space-y-2">
                {Array.from({ length: [3, 2, 1, 4][i] }).map((_, j) => (
                  <div key={j} className="bg-brand-navy rounded-lg p-3 border border-white/5">
                    <div className="h-2 bg-slate-600 rounded mb-2 w-3/4" />
                    <div className="h-2 bg-slate-700 rounded w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-xs text-center mt-4">Representação visual do funil — dados fictícios para demonstração</p>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader label="Funcionalidades" title="O que o sistema inclui" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Audience + Benefits */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader label="Para quem" title="Segmentos atendidos" />
            <ul className="space-y-3">
              {service.audience.map((a) => (
                <li key={a} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader label="Benefícios" title="O que muda com o CRM" />
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CRM Odontológico highlight */}
      <Section>
        <div className="glass-card p-8 lg:p-12 border-brand-cyan/20">
          <Badge variant="cyan" className="mb-4">Projeto de demonstração</Badge>
          <h2 className="text-2xl font-bold text-white mb-4">CRM Odontológico</h2>
          <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
            Estou desenvolvendo um CRM especializado para clínicas odontológicas, com gestão de leads, avaliações e orçamentos. O projeto utiliza React, TypeScript, Supabase e n8n, e será demonstrado com dados fictícios quando concluído.
          </p>
          <Link to="/projetos/crm-odontologico" className="btn-secondary text-sm">
            Ver detalhes do projeto <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section dark>
        <SectionHeader label="Processo" title="Como desenvolvemos o seu CRM" center />
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
        <SectionHeader label="Dúvidas" title="Perguntas frequentes sobre CRM" center />
        <div className="max-w-2xl mx-auto space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-white text-sm">{faq.question}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-brand-cyan flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />}
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

      <section className="py-20 bg-brand-navy text-center">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Quer um CRM para o seu negócio?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Vamos conversar sobre as suas necessidades e criar um sistema que faça sentido para a sua realidade.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </button>
        </div>
      </section>
    </>
  );
}
