import { Link } from 'react-router-dom';
import { Globe, LayoutDashboard, Zap, UtensilsCrossed, ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card } from '../components/ui/index';
import { services } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  LayoutDashboard,
  Zap,
  UtensilsCrossed,
};

const serviceColors: Record<string, { icon: string; bg: string }> = {
  blue: { icon: 'text-brand-blue', bg: 'bg-brand-blue/10' },
  cyan: { icon: 'text-brand-cyan', bg: 'bg-brand-cyan/10' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10' },
  green: { icon: 'text-green-400', bg: 'bg-green-500/10' },
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
        title="Serviços — Sites, CRM, Automação e Cardápios Digitais"
        description="Conheça os serviços da Douglas Soluções Digitais: criação de sites profissionais, sistemas CRM personalizados, automação com n8n e cardápios digitais para restaurantes."
        canonical="/servicos"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Serviços</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Soluções digitais para o seu negócio crescer
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Desenvolvo soluções sob medida para empresas que querem fortalecer sua presença on-line, organizar processos e melhorar o relacionamento com clientes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] || Globe;
            const colors = serviceColors[service.color] || serviceColors.blue;
            return (
              <Card key={service.id} className="p-8" hover>
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon size={28} className={colors.icon} />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-slate-500">
                      +{service.features.length - 4} funcionalidades...
                    </li>
                  )}
                </ul>

                <Link
                  to={`/${service.slug}`}
                  className="btn-secondary text-sm w-full justify-center"
                >
                  Ver detalhes do serviço <ArrowRight size={14} />
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

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
