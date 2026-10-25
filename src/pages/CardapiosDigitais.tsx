import { Link } from 'react-router-dom';
import { UtensilsCrossed, CheckCircle2, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Badge } from '../components/ui/index';
import { getServiceBySlug } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const service = getServiceBySlug('cardapios-digitais')!;

const menuCategories = [
  { name: 'Pizzas Tradicionais', items: 8, emoji: '🍕' },
  { name: 'Pizzas Especiais', items: 5, emoji: '⭐' },
  { name: 'Bebidas', items: 12, emoji: '🥤' },
  { name: 'Sobremesas', items: 4, emoji: '🍮' },
];

export default function CardapiosDigitais() {
  const { open: openWhatsApp } = useWhatsApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cardápios Digitais',
    description: service.description,
    provider: { '@type': 'Organization', name: 'Douglas Soluções Digitais' },
    serviceType: 'Cardápio Digital para Restaurantes',
  };

  return (
    <>
      <SEO
        title="Cardápio Digital para Restaurantes e Pizzarias"
        description="Cardápios digitais acessíveis pelo celular via QR Code, com categorias organizadas, fotos e visual personalizado. Solução prática para restaurantes, pizzarias e bares."
        canonical="/cardapios-digitais"
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
            <span className="text-slate-300">Cardápios Digitais</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <UtensilsCrossed size={24} className="text-green-400" />
            </div>
            <Badge variant="green">Cardápios Digitais</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Cardápio Digital para Restaurantes e Pizzarias
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Cardápios modernos acessíveis pelo celular, sem precisar baixar aplicativo. Acesso por QR Code, visual personalizado e atualização rápida de preços e itens.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Solicitar orçamento
          </button>
        </div>
      </section>

      {/* Mock menu demo */}
      <Section dark>
        <SectionHeader
          label="Demonstração"
          title="Como o cardápio aparece no celular"
          description="O cardápio digital é organizado por categorias, com visual limpo e fácil navegação."
        />
        <div className="max-w-sm mx-auto">
          <div className="glass-card overflow-hidden rounded-3xl border border-white/10">
            <div className="bg-green-500/20 p-6 text-center border-b border-white/10">
              <span className="text-3xl mb-2 block">🍕</span>
              <h3 className="text-white font-bold text-lg">Pizzaria do Zé</h3>
              <p className="text-slate-400 text-sm">Aberto agora • Rua Exemplo, 123</p>
            </div>
            <div className="p-4 space-y-3">
              {menuCategories.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between p-3 bg-brand-navy rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="text-slate-300 text-sm font-medium">{cat.name}</span>
                  </div>
                  <span className="badge-slate text-xs">{cat.items} itens</span>
                </div>
              ))}
            </div>
            <div className="p-4 pt-0">
              <div className="bg-green-500 rounded-xl p-3 text-center text-white text-sm font-medium">
                📱 Pedir pelo WhatsApp
              </div>
            </div>
          </div>
          <p className="text-slate-600 text-xs text-center mt-4">Exemplo ilustrativo — dados fictícios</p>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader label="Funcionalidades" title="O que o cardápio digital inclui" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section dark>
        <SectionHeader label="Processo" title="Como é feito o cardápio digital" center />
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
        <SectionHeader label="Dúvidas" title="Perguntas sobre cardápio digital" center />
        <div className="max-w-2xl mx-auto space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-white text-sm">{faq.question}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-green-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />}
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
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Quer um cardápio digital para o seu estabelecimento?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Entre em contato para conversarmos sobre as suas necessidades e começarmos o projeto.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary">
            <MessageCircle size={18} />
            Solicitar orçamento
          </button>
        </div>
      </section>
    </>
  );
}
