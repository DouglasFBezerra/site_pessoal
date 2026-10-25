import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, LayoutDashboard, Zap, UtensilsCrossed,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  MessageCircle, Scale, Stethoscope, Briefcase,
  AlertCircle, Sparkles, HelpCircle
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card, Badge } from '../components/ui/index';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { SITE_NAME, SITE_DESCRIPTION } from '../utils/constants';
import { getFeaturedPosts } from '../data/blog-posts';
import { homeFaqs } from '../data/faqs';

// ─── 1. Cards de Identificação de Problemas ──────────────────────────────────
const problemCards = [
  {
    id: 'sites',
    icon: Globe,
    badge: 'Presença Digital',
    badgeColor: 'blue' as const,
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
    serviceLinkText: 'Conhecer detalhes do serviço de sites',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue/10',
    borderHover: 'hover:border-brand-blue/40',
  },
  {
    id: 'crm',
    icon: LayoutDashboard,
    badge: 'Organização Comercial',
    badgeColor: 'cyan' as const,
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
    serviceLinkText: 'Conhecer detalhes de sistemas CRM',
    colorClass: 'text-brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderHover: 'hover:border-brand-cyan/40',
  },
  {
    id: 'automacao',
    icon: Zap,
    badge: 'Produtividade & Tempo',
    badgeColor: 'blue' as const,
    title: 'Perde muito tempo com tarefas manuais?',
    problem: 'Sua equipe repete tarefas rotineiras, copia informações manualmente entre sistemas e perde horas digitando as mesmas mensagens.',
    solution: 'Automações com n8n e integrações com APIs, webhooks, bancos de dados e WhatsApp (quando compatíveis e autorizadas).',
    benefits: [
      'Reduzir drasticamente o trabalho manual repetitivo',
      'Padronizar fluxos de atendimento e organização',
      'Liberar tempo da equipe para focar no crescimento do negócio',
    ],
    buttonText: 'Quero automatizar meu negócio',
    whatsappMessage: 'Olá! Minha equipe gasta muito tempo com tarefas manuais repetitivas e gostaria de automatizar processos com n8n.',
    serviceHref: '/automacao-n8n',
    serviceLinkText: 'Conhecer detalhes de automação n8n',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-500/10',
    borderHover: 'hover:border-purple-500/40',
  },
  {
    id: 'cardapios',
    icon: UtensilsCrossed,
    badge: 'Alimentação & Delivery',
    badgeColor: 'green' as const,
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
    serviceLinkText: 'Conhecer detalhes de cardápios digitais',
    colorClass: 'text-green-400',
    bgClass: 'bg-green-500/10',
    borderHover: 'hover:border-green-500/40',
  },
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
      'Automação de processos com n8n',
      'Cardápios digitais',
    ],
  };

  return (
    <>
      <SEO
        title="Sites, CRM e Automações para Empresas"
        description="Soluções digitais práticas para empresas e profissionais: criação de sites profissionais, sistemas CRM sob medida, automações com n8n e cardápios digitais."
        canonical="/"
        jsonLd={homeJsonLd}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow" />
                Soluções Digitais para Empresas
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-slide-up text-balance">
                Sites, sistemas CRM e{' '}
                <span className="gradient-text">automações</span> para impulsionar seu negócio.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl animate-slide-up text-balance">
                A Douglas Soluções Digitais desenvolve soluções tecnológicas para empresas que desejam fortalecer sua presença on-line, organizar seus processos e melhorar o relacionamento com seus clientes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <button
                  onClick={() => openWhatsApp('Olá! Conheci a Douglas Soluções Digitais pelo site e gostaria de conversar sobre um projeto.')}
                  className="btn-primary text-base py-4 px-8 shadow-brand"
                >
                  <MessageCircle size={20} />
                  Solicitar orçamento pelo WhatsApp
                </button>
                <Link to="/projetos" className="btn-secondary text-base py-4 px-8">
                  Conhecer meus projetos
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
                {[
                  { value: '4', label: 'Áreas de atuação' },
                  { value: 'SP', label: 'São Paulo + Atendimento Remoto' },
                  { value: '100%', label: 'Projetos Responsivos' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Card Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative glass-card overflow-hidden rounded-3xl border border-white/15 p-2 shadow-2xl">
                  <img
                    src="/brand-hero.jpg"
                    alt="Douglas Soluções Digitais — Identidade Visual Oficial"
                    className="w-full h-auto rounded-2xl object-cover"
                    loading="eager"
                  />
                  <div className="p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-cyan font-semibold">
                      Ideias em tecnologia, resultados no seu negócio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-float pointer-events-none">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ─── 1. SEÇÃO DE IDENTIFICAÇÃO DE PROBLEMAS ─────────────────────────── */}
      <Section dark id="problemas" className="relative border-t border-white/5">
        <SectionHeader
          label="Diagnóstico para seu negócio"
          title="O que posso melhorar na sua empresa?"
          description="Descubra como soluções digitais podem ajudar sua empresa a conquistar clientes, organizar processos e economizar tempo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${card.borderHover}`}
                hover
              >
                <div>
                  {/* Topo do card: Ícone + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${card.bgClass} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className={card.colorClass} />
                    </div>
                    <Badge variant={card.badgeColor}>{card.badge}</Badge>
                  </div>

                  {/* Título do Card */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    {card.title}
                  </h3>

                  {/* Bloco: Problema */}
                  <div className="mb-4 bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                    <span className="text-xs uppercase tracking-wider text-red-400 font-bold block mb-1">
                      Problema
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {card.problem}
                    </p>
                  </div>

                  {/* Bloco: Solução */}
                  <div className="mb-4 bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
                    <span className="text-xs uppercase tracking-wider text-brand-cyan font-bold block mb-1">
                      Solução
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {card.solution}
                    </p>
                  </div>

                  {/* Bloco: Benefícios */}
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
                      Benefícios diretos
                    </span>
                    <ul className="space-y-2">
                      {card.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ações do Card: Botão WhatsApp + Link Interno */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => openWhatsApp(card.whatsappMessage)}
                    className="btn-primary w-full text-sm py-3 justify-center shadow-brand-sm group"
                  >
                    <MessageCircle size={17} />
                    <span>{card.buttonText}</span>
                  </button>

                  <div className="text-center">
                    <Link
                      to={card.serviceHref}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-cyan transition-colors"
                    >
                      {card.serviceLinkText}
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

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
