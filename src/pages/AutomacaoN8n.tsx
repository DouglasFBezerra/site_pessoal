import { Link } from 'react-router-dom';
import { Zap, CheckCircle2, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Badge } from '../components/ui/index';
import { getServiceBySlug } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const service = getServiceBySlug('automacao-n8n')!;

const workflowSteps = [
  { label: 'Formulário preenchido', icon: '📋', color: 'border-brand-blue' },
  { label: 'Webhook recebido pelo n8n', icon: '⚡', color: 'border-brand-cyan' },
  { label: 'Dados validados e organizados', icon: '✅', color: 'border-green-500' },
  { label: 'Lead registrado no CRM', icon: '🗃️', color: 'border-purple-500' },
  { label: 'Notificação enviada à equipe', icon: '🔔', color: 'border-yellow-500' },
];

export default function AutomacaoN8n() {
  const { open: openWhatsApp } = useWhatsApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automação com n8n',
    description: service.description,
    provider: { '@type': 'Organization', name: 'Douglas Soluções Digitais' },
    serviceType: 'Automação de Processos Empresariais',
  };

  return (
    <>
      <SEO
        title="Automação de Processos com n8n — Integração entre Sistemas"
        description="Automação de tarefas repetitivas e integração entre sistemas com n8n open source. Reduza trabalho manual e conecte suas ferramentas sem depender de plataformas pagas por execução."
        canonical="/automacao-n8n"
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
            <span className="text-slate-300">Automação n8n</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
              <Zap size={24} className="text-purple-400" />
            </div>
            <Badge variant="blue">Automação</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Automação de Processos com n8n
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Elimine tarefas manuais repetitivas e conecte seus sistemas com fluxos automatizados usando o n8n open source, sem custo por execução.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Solicitar orçamento
          </button>
        </div>
      </section>

      {/* Workflow demo */}
      <Section dark>
        <SectionHeader
          label="Exemplo de fluxo"
          title="Automação de captação de leads"
          description="Veja como um fluxo n8n pode automatizar o processo do formulário do site até a notificação da equipe."
        />
        <div className="max-w-2xl mx-auto">
          {workflowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 mb-4">
              <div className={`glass-card p-4 flex items-center gap-4 flex-1 border-l-2 ${step.color}`}>
                <span className="text-2xl">{step.icon}</span>
                <span className="text-slate-300 text-sm font-medium">{step.label}</span>
              </div>
              {i < workflowSteps.length - 1 && (
                <div className="text-slate-600 flex-shrink-0">↓</div>
              )}
            </div>
          ))}
          <p className="text-slate-600 text-xs mt-4 text-center">Exemplo ilustrativo de um fluxo automatizado com n8n</p>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader label="Funcionalidades" title="O que posso automatizar" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section dark>
        <SectionHeader label="Benefícios" title="Por que automatizar?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="glass-card p-5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span className="text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader label="Processo" title="Como desenvolvemos as automações" center />
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
      <Section dark>
        <SectionHeader label="Dúvidas" title="Perguntas sobre automação com n8n" center />
        <div className="max-w-2xl mx-auto space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-white text-sm">{faq.question}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-purple-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />}
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
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Quer automatizar processos na sua empresa?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Identificamos juntos quais tarefas podem ser automatizadas e qual o impacto esperado para o seu negócio.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Falar sobre automação
          </button>
        </div>
      </section>
    </>
  );
}
