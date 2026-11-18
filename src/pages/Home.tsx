import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Globe, LayoutDashboard, UtensilsCrossed,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  MessageCircle, Scale, Stethoscope, Briefcase,
  AlertCircle, HelpCircle
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card, Badge } from '../components/ui/index';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { SITE_NAME, SITE_DESCRIPTION } from '../utils/constants';
import { getFeaturedPosts } from '../data/blog-posts';
import { homeFaqs } from '../data/faqs';

// ─── 1. Identificação de problemas ───────────────────────────────────────────
const problemCards = [
  {
    id: 'sites',
    icon: Globe,
    title: 'Precisa de mais presença na internet?',
    problem: 'Seus clientes pesquisam sua empresa na internet, mas não encontram um site com informações claras sobre seus serviços.',
    solution: 'Criação de sites profissionais, páginas comerciais e landing pages responsivas, com informações organizadas e formas de contato.',
    benefits: [
      'Apresentar melhor a empresa para o público',
      'Facilitar o contato direto de clientes interessados',
      'Construir uma presença digital confiável e profissional',
    ],
    buttonText: 'Quero um site profissional',
    whatsappMessage: 'Olá! Preciso de mais presença na internet e gostaria de solicitar um orçamento para um site profissional.',
    serviceHref: '/criacao-de-sites',
    serviceLinkText: 'Ver detalhes do serviço de sites',
  },
  {
    id: 'crm',
    icon: LayoutDashboard,
    title: 'Está perdendo o controle dos clientes?',
    problem: 'Contatos, orçamentos e negociações ficam espalhados em conversas de WhatsApp, planilhas e anotações soltas.',
    solution: 'Desenvolvimento de CRM personalizado com cadastro de clientes, funil de vendas, histórico de interações, acompanhamento de oportunidades e agendamentos.',
    benefits: [
      'Centralizar todas as informações em um só local',
      'Acompanhar cada negociação em formato visual',
      'Reduzir esquecimentos e não perder oportunidades',
    ],
    buttonText: 'Quero um CRM personalizado',
    whatsappMessage: 'Olá! Estou perdendo o controle de contatos e orçamentos na minha empresa e gostaria de entender sobre um CRM personalizado.',
    serviceHref: '/desenvolvimento-crm',
    serviceLinkText: 'Ver detalhes de sistemas CRM',
  },
  {
    id: 'atendente',
    icon: MessageCircle,
    title: 'Perde clientes por demorar a responder no WhatsApp?',
    problem: 'As mensagens chegam à noite, no fim de semana ou com a equipe ocupada, e o cliente interessado acaba procurando outra empresa.',
    solution: 'Atendente de WhatsApp com inteligência artificial: responde na hora, tira dúvidas sobre seus serviços, coleta os dados do cliente, registra o contato no CRM e chama uma pessoa da equipe quando precisa (conforme as regras do WhatsApp).',
    benefits: [
      'Responder clientes a qualquer hora, inclusive fora do expediente',
      'Não perder contatos por demora no retorno',
      'Liberar a equipe para o que exige atenção humana',
    ],
    buttonText: 'Quero um atendente no WhatsApp',
    whatsappMessage: 'Olá! Gostaria de saber como funciona um atendente automático de WhatsApp 24h para o meu negócio.',
    serviceHref: '/automacao-n8n',
    serviceLinkText: 'Ver detalhes do atendente de WhatsApp',
  },
  {
    id: 'cardapios',
    icon: UtensilsCrossed,
    title: 'Precisa modernizar o cardápio do restaurante?',
    problem: 'O cardápio físico desgasta e encarece a cada mudança de preço, ou o PDF é difícil de ler e navegar no celular.',
    solution: 'Cardápio digital acessível diretamente por link e QR Code nas mesas, com categorias, fotos, produtos e informações organizadas.',
    benefits: [
      'Facilitar a consulta rápida dos produtos pelo celular',
      'Atualizar preços e itens em minutos sem custos de impressão',
      'Simplificar a experiência do cliente com botão direto para pedidos',
    ],
    buttonText: 'Quero um cardápio digital',
    whatsappMessage: 'Olá! Gostaria de modernizar o atendimento do meu restaurante/pizzaria com um cardápio digital via QR Code.',
    serviceHref: '/cardapios-digitais',
    serviceLinkText: 'Ver detalhes de cardápios digitais',
  },
];

// Atalhos de serviço exibidos no rodapé do hero
const heroServices = [
  { icon: Globe, label: 'Sites profissionais', href: '/criacao-de-sites' },
  { icon: LayoutDashboard, label: 'Sistemas CRM', href: '/desenvolvimento-crm' },
  { icon: MessageCircle, label: 'Atendente WhatsApp 24h', href: '/automacao-n8n' },
  { icon: UtensilsCrossed, label: 'Cardápios digitais', href: '/cardapios-digitais' },
];

// ─── 2. Segmentos de Negócio ─────────────────────────────────────────────────
const businessSegments = [
  {
    icon: Stethoscope,
    segment: 'Clínicas Odontológicas e Consultórios',
    tagline: 'Gestão de leads, avaliações e pacientes',
    description:
      'Clínicas recebem contatos diários que se perdem sem um processo estruturado. Desenvolvo sistemas CRM focados em registrar cada interessado, controlar datas de avaliação, acompanhar orçamentos pendentes e manter o histórico completo de interações.',
    practicalPoints: [
      'Funil de potenciais pacientes desde o primeiro contato',
      'Acompanhamento de avaliações agendadas e orçamentos',
      'Redução de ausências e esquecimentos de follow-up',
    ],
    whatsappMsg: 'Olá! Tenho uma clínica odontológica/consultório e gostaria de organizar o acompanhamento de leads e orçamentos.',
    projectLink: '/projetos/crm-odontologico',
    projectText: 'Ver estudo do CRM Odontológico',
  },
  {
    icon: Scale,
    segment: 'Escritórios de Advocacia',
    tagline: 'Presença digital ética e triagem de clientes',
    description:
      'Advogados necessitam de autoridade, sobriedade e canais de contato organizados. Desenvolvo sites institucionais elegantes com formulários estruturados para triagem inicial de demandas, respeitando todas as diretrizes éticas e de privacidade.',
    practicalPoints: [
      'Site institucional de alto padrão com navegação segura (HTTPS)',
      'Formulários com perguntas direcionadas para triagem prévia',
      'Organização de oportunidades comerciais sem promessas jurídicas irreais',
    ],
    whatsappMsg: 'Olá! Sou advogado/possuo escritório de advocacia e gostaria de desenvolver um site institucional e organizar o recebimento de contatos.',
    projectLink: '/criacao-de-sites',
    projectText: 'Conhecer soluções para escritórios',
  },
  {
    icon: UtensilsCrossed,
    segment: 'Restaurantes, Pizzarias e Lanchonetes',
    tagline: 'Cardápio digital ágil e atendimento eficiente',
    description:
      'No ramo alimentício, praticidade no cardápio define o consumo. Crio cardápios digitais responsivos via QR Code, páginas comerciais para divulgação local e automações de atendimento que direcionam pedidos organizados ao WhatsApp.',
    practicalPoints: [
      'Acesso instantâneo pelo celular sem necessidade de baixar aplicativo',
      'Atualizações imediatas de itens, sabores e valores',
      'Links compartilháveis no Instagram, WhatsApp e Google Meu Negócio',
    ],
    whatsappMsg: 'Olá! Tenho um restaurante/pizzaria e gostaria de implementar cardápio digital e melhorar o recebimento de pedidos.',
    projectLink: '/cardapios-digitais',
    projectText: 'Conhecer soluções para restaurantes',
  },
  {
    icon: Briefcase,
    segment: 'Pequenas Empresas e Profissionais Autônomos',
    tagline: 'Presença profissional, organização e automação',
    description:
      'Para quem presta serviços e não tem tempo a perder com burocracia: sites rápidos para ser encontrado no Google, organização de contatos para não esquecer propostas enviadas e fluxos automatizados para agilizar o dia a dia.',
    practicalPoints: [
      'Site profissional moderno para transmitir credibilidade',
      'Centralização de contatos e propostas comerciais',
      'Automação de rotinas repetitivas que tomam o tempo do dono',
    ],
    whatsappMsg: 'Olá! Sou profissional autônomo/possuo pequena empresa e gostaria de conversar sobre sites, CRM ou automações.',
    projectLink: '/servicos',
    projectText: 'Ver todos os serviços para autônomos',
  },
];

const techStack = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js',
  'Supabase', 'PostgreSQL', 'n8n', 'Docker', 'APIs REST',
  'Git', 'SEO Técnico', 'Webhooks', 'JSON-LD',
];

export default function Home() {
  const { open: openWhatsApp } = useWhatsApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredPosts = getFeaturedPosts().slice(0, 3);
  const reduceMotion = useReducedMotion();

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: 'https://douglassolucoes.com.br',
    areaServed: [
      { '@type': 'City', name: 'São Paulo', containedInPlace: { '@type': 'State', name: 'São Paulo' } },
      { '@type': 'Country', name: 'Brasil' },
    ],
    serviceType: [
      'Criação de sites profissionais',
      'Desenvolvimento de sistemas CRM',
      'Atendente de WhatsApp 24h com inteligência artificial',
      'Cardápios digitais',
    ],
  };

  return (
    <>
      <SEO
        title="Sites, CRM e Atendente de WhatsApp 24h para Empresas"
        description="Soluções digitais práticas para empresas e profissionais: criação de sites profissionais, sistemas CRM sob medida, atendente de WhatsApp 24h com IA e cardápios digitais."
        canonical="/"
        jsonLd={homeJsonLd}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-black pt-28 lg:pt-36 pb-0 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[560px] pointer-events-none bg-[radial-gradient(ellipse_at_72%_0%,rgba(0,102,255,0.20),transparent_62%)]"
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] mb-6 text-balance">
                Sites, sistemas CRM e atendente de WhatsApp 24h para impulsionar seu negócio.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl text-pretty">
                A Douglas Soluções Digitais desenvolve soluções tecnológicas para empresas que desejam fortalecer sua presença on-line, organizar seus processos e melhorar o relacionamento com seus clientes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsApp('Olá! Conheci a Douglas Soluções Digitais pelo site e gostaria de conversar sobre um projeto.')}
                  className="btn-primary text-base py-3.5 px-6 whitespace-nowrap"
                >
                  <MessageCircle size={19} />
                  Orçamento no WhatsApp
                </button>
                <Link to="/projetos" className="btn-secondary text-base py-3.5 px-6 whitespace-nowrap">
                  Ver projetos
                </Link>
              </div>
            </div>

            {/* Projetos reais: CRM + fluxo n8n */}
            <div className="lg:col-span-7 relative lg:pb-14">
              <motion.figure
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden border border-white/15 shadow-[0_40px_90px_-30px_rgba(0,102,255,0.55)]">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-navy border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 text-xs text-slate-400 font-mono truncate">
                      CRM Odontológico — Dashboard
                    </span>
                  </div>
                  <img
                    src="/projetos/crm-dashboard.jpg"
                    alt="Painel do CRM Odontológico com indicadores de pacientes, consultas e orçamentos"
                    width={1600}
                    height={715}
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </div>
              </motion.figure>

              <motion.figure
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-5 lg:mt-0 lg:absolute lg:bottom-0 lg:-left-4 lg:w-[46%]"
              >
                <div className="rounded-lg overflow-hidden border border-white/20 bg-brand-black shadow-2xl">
                  <img
                    src="/projetos/n8n-clinica-mensagens.png"
                    alt="Fluxo do atendente de WhatsApp de uma clínica: separa pacientes de novos contatos, confirma consultas e registra no CRM"
                    width={1600}
                    height={1190}
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-slate-400 max-w-xs">
                  Atendente de WhatsApp de uma clínica, feito com n8n, alimentando o CRM.
                </figcaption>
              </motion.figure>
            </div>
          </div>

          {/* Atalhos dos serviços */}
          <nav
            aria-label="Serviços"
            className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10"
          >
            {heroServices.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center gap-3 py-5 lg:px-6 lg:first:pl-0 text-slate-300 hover:text-white transition-colors lg:border-l lg:border-white/10 lg:first:border-l-0"
                >
                  <Icon size={20} className="text-brand-cyan flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                  <ArrowRight
                    size={14}
                    className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ─── 1. IDENTIFICAÇÃO DE PROBLEMAS (seção clara) ─────────────────────── */}
      <section id="problemas" className="bg-paper text-paper-ink py-20 lg:py-28">
        <div className="section-container grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl lg:text-5xl font-bold text-paper-ink text-balance mb-4">
                O que posso melhorar na sua empresa?
              </h2>
              <p className="text-paper-muted text-lg leading-relaxed text-pretty">
                Descubra como soluções digitais podem ajudar sua empresa a conquistar clientes, organizar processos e economizar tempo.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-paper-line border-y border-paper-line">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.id}
                  className="py-8 sm:py-10 grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-paper-ink mb-3 leading-snug text-balance">
                      {card.title}
                    </h3>
                    <p className="text-paper-muted leading-relaxed mb-3 text-pretty">
                      {card.problem}
                    </p>
                    <p className="text-paper-ink leading-relaxed mb-5 text-pretty">
                      {card.solution}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {card.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-paper-ink">
                          <CheckCircle2 size={17} className="text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      <button
                        onClick={() => openWhatsApp(card.whatsappMessage)}
                        className="btn-primary text-sm py-2.5 px-5"
                      >
                        <MessageCircle size={16} />
                        {card.buttonText}
                      </button>
                      <Link
                        to={card.serviceHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-dark hover:underline underline-offset-4"
                      >
                        {card.serviceLinkText}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. SEÇÃO POR SEGMENTO DE NEGÓCIO ───────────────────────────────── */}
      <Section id="segmentos">
        <SectionHeader
          label="Setores de Atuação"
          title="Soluções para o seu tipo de negócio"
          description="Exemplos práticos de como aplico tecnologia para resolver as necessidades específicas de cada mercado. Cada projeto é estruturado sob medida para a sua rotina real."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {businessSegments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-6 sm:p-8 flex flex-col justify-between" hover>
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.segment}</h3>
                      <p className="text-xs text-brand-cyan font-medium">{item.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="mb-6 bg-brand-navy rounded-xl p-4 border border-white/5">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Aplicações práticas:
                    </span>
                    <ul className="space-y-1.5">
                      {item.practicalPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => openWhatsApp(item.whatsappMsg)}
                    className="btn-secondary text-xs py-2.5 px-4 w-full sm:w-auto justify-center"
                  >
                    <MessageCircle size={15} />
                    Conversar sobre este segmento
                  </button>

                  <Link
                    to={item.projectLink}
                    className="text-xs text-brand-cyan hover:underline inline-flex items-center gap-1"
                  >
                    {item.projectText} →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Nota de Transparência */}
        <div className="glass-card p-4 rounded-xl border border-white/10 max-w-3xl mx-auto flex items-center gap-3 text-xs text-slate-400 text-center justify-center">
          <AlertCircle size={16} className="text-brand-blue flex-shrink-0" />
          <span>
            Cada projeto é planejado e construído sob medida conforme os requisitos da sua empresa. Projetos e integrações são apresentados conforme estágio de homologação.
          </span>
        </div>
      </Section>

      {/* ─── 3. CHAMADA PARA AÇÃO: NÃO SABE QUAL SOLUÇÃO PRECISA? ───────────── */}
      <section className="py-16 sm:py-20 bg-brand-navy relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="glass-card p-8 sm:p-12 lg:p-16 rounded-3xl border border-brand-blue/30 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-blue/15 text-brand-cyan mb-6">
              <HelpCircle size={28} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 text-balance">
              Não sabe qual solução sua empresa precisa?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
              Conte como funciona seu negócio e qual dificuldade você deseja resolver. Vamos conversar para identificar uma solução digital adequada à sua necessidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de conversar para entender qual solução digital é ideal para o momento da minha empresa.')}
                className="btn-primary text-base py-4 px-8 shadow-brand w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Conversar pelo WhatsApp
              </button>

              <Link
                to="/contato"
                className="btn-secondary text-base py-4 px-8 w-full sm:w-auto justify-center"
              >
                Preencher formulário de contato
              </Link>
            </div>

            <p className="text-xs text-slate-500 mt-6">
              Atendimento direto no WhatsApp comercial (11) 97886-6744 • Sem jargões técnicos e sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* ─── Tecnologias ───────────────────────────────────────────────────── */}
      <Section dark id="tecnologias">
        <SectionHeader
          label="Tecnologias & Ferramentas"
          title="Stack técnica consolidada"
          description="Ferramentas modernas escolhidas para entregar velocidade, segurança, independência técnica e facilidade de manutenção."
          center
        />
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag text-sm px-4 py-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/conhecimentos" className="btn-ghost text-sm">
            Ver matriz completa de conhecimentos <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ─── Blog preview ──────────────────────────────────────────────────── */}
      {featuredPosts.length > 0 && (
        <Section id="blog">
          <SectionHeader
            label="Conteúdo Técnico"
            title="Artigos e tutoriais para empresários"
            description="Textos práticos explicando tecnologia, CRM, automação e estratégias de presença digital de forma simples."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass-card p-6 hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4"
              >
                <Badge variant="blue">
                  {post.category === 'crm' ? 'CRM' : post.category === 'automacao' ? 'Automação' : post.category === 'seo' ? 'SEO & GEO' : 'Web'}
                </Badge>
                <h3 className="font-semibold text-white leading-snug group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {post.excerpt.slice(0, 100)}...
                </p>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-medium">
                  Ler artigo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/blog" className="btn-secondary">
              Ver todos os artigos <ArrowRight size={16} />
            </Link>
          </div>
        </Section>
      )}

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <Section dark id="faq">
        <SectionHeader
          label="Dúvidas Frequentes"
          title="Perguntas que recebo com frequência"
          center
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {homeFaqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-white text-sm leading-snug">
                  {faq.question}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={16} className="text-brand-blue flex-shrink-0" />
                ) : (
                  <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />
                )}
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

      {/* ─── Chamada final ─────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center">
          <Badge variant="cyan" className="mb-6 mx-auto">Próximo Passo</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            Pronto para transformar seu negócio com tecnologia?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto text-balance">
            Entre em contato pelo WhatsApp para conversarmos sobre o seu projeto. Atendo em São Paulo e todo o Brasil remotamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de conversar com a Douglas Soluções Digitais sobre um projeto para a minha empresa.')}
              className="btn-primary text-base py-4 px-8 shadow-brand"
            >
              <MessageCircle size={20} />
              Solicitar orçamento pelo WhatsApp
            </button>
            <Link to="/contato" className="btn-secondary text-base py-4 px-8">
              Formulário de contato
            </Link>
          </div>
          <p className="text-slate-600 text-sm mt-6">
            Resposta em até 24 horas úteis • WhatsApp: (11) 97886-6744
          </p>
        </div>
      </section>
    </>
  );
}
