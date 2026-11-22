import { Link } from 'react-router-dom';
import { Globe, LayoutDashboard, Zap, UtensilsCrossed, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section } from '../components/ui/index';
import { services } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  LayoutDashboard,
  Zap,
  UtensilsCrossed,
};

export default function Servicos() {
  const { open: openWhatsApp } = useWhatsApp();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços — Douglas Soluções Digitais',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: `https://douglassolucoes.com.br/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Serviços — Sites, CRM, Atendente de WhatsApp 24h e Cardápios Digitais"
        description="Conheça os serviços da Douglas Soluções Digitais: criação de sites profissionais, sistemas CRM personalizados, atendente de WhatsApp 24h com IA e cardápios digitais para restaurantes."
        canonical="/servicos"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Soluções digitais para o seu negócio crescer
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Desenvolvo soluções sob medida para empresas que querem fortalecer sua presença on-line, organizar processos e melhorar o relacionamento com clientes.
          </p>
        </div>
      </section>

      {/* Lista de serviços (seção clara) */}
      <section className="bg-paper text-paper-ink py-16 lg:py-24">
        <div className="section-container">
          <div className="divide-y divide-paper-line border-y border-paper-line">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] || Globe;
              return (
                <article
                  key={service.id}
                  className="py-10 lg:py-12 grid lg:grid-cols-12 gap-x-10 gap-y-6"
                >
                  <div className="lg:col-span-5 flex gap-5">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-paper-ink mb-3 text-balance">
                        {service.title}
                      </h2>
                      <p className="text-paper-muted leading-relaxed text-pretty">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:pl-6">
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-7">
                      {service.features.slice(0, 6).map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-paper-ink">
                          <CheckCircle2 size={17} className="text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-blue-dark hover:underline underline-offset-4"
                    >
                      Ver detalhes do serviço <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Não encontrou o que procura?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Entre em contato pelo WhatsApp para conversarmos sobre a sua necessidade. Posso desenvolver soluções customizadas.
        </p>
        <button onClick={() => openWhatsApp()} className="btn-primary">
          <MessageCircle size={18} />
          Conversar pelo WhatsApp
        </button>
      </Section>
    </>
  );
}
