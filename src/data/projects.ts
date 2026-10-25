import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'crm-odontologico',
    title: 'CRM Odontológico',
    slug: 'crm-odontologico',
    category: 'crm',
    status: 'desenvolvimento',
    shortDescription:
      'Sistema de gestão de leads, avaliações e orçamentos para clínicas odontológicas, com funil de vendas em Kanban.',
    description:
      'Um sistema CRM desenvolvido especificamente para clínicas odontológicas, que centraliza o acompanhamento de potenciais pacientes desde o primeiro contato até o fechamento do tratamento.',
    problem:
      'Clínicas odontológicas frequentemente perdem potenciais pacientes por falta de acompanhamento estruturado após o primeiro contato. Ligações sem retorno, avaliações sem follow-up e orçamentos esquecidos representam oportunidades comerciais desperdiçadas.',
    objective:
      'Criar um sistema de gestão de leads e oportunidades adaptado à realidade de clínicas odontológicas, com funil visual, registro de interações e controle de avaliações e orçamentos.',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Supabase' },
      { name: 'n8n' },
      { name: 'Tailwind CSS' },
      { name: 'Docker' },
    ],
    features: [
      'Funil de vendas em Kanban com etapas personalizáveis',
      'Cadastro de pacientes e leads',
      'Registro de histórico de interações',
      'Controle de avaliações agendadas',
      'Gestão de orçamentos enviados',
      'Dashboard com indicadores principais',
      'Interface responsiva para celular e computador',
    ],
    screenshots: [],
    learnings: [
      'Modelagem de banco de dados relacional para CRM',
      'Implementação de autenticação com Supabase',
      'Desenvolvimento de interfaces Kanban interativas',
      'Integração entre Supabase e n8n via webhooks',
    ],
    futurePlans: [
      'Notificações automáticas de follow-up',
      'Relatórios de conversão por etapa',
      'Integração com agenda de consultas',
      'Exportação de relatórios',
    ],
    featured: true,
  },
  {
    id: 'automacao-captacao-leads',
    title: 'Automação de Captação de Leads',
    slug: 'automacao-captacao-leads',
    category: 'automacao',
    status: 'prototipo',
    shortDescription:
      'Fluxo automatizado com n8n para captar, qualificar e organizar leads recebidos por formulários e WhatsApp.',
    description:
      'Fluxo de automação desenvolvido em n8n para processar leads recebidos por diferentes canais, qualificá-los com base em critérios definidos e registrá-los automaticamente no CRM.',
    problem:
      'Receber leads por múltiplos canais (formulário do site, WhatsApp, redes sociais) e organizar manualmente essas informações consome tempo e aumenta o risco de perder contatos importantes.',
    objective:
      'Automatizar o processo de captação e registro de leads, reduzindo o trabalho manual e garantindo que nenhuma oportunidade seja esquecida.',
    technologies: [
      { name: 'n8n' },
      { name: 'Docker' },
      { name: 'PostgreSQL' },
      { name: 'Webhooks' },
    ],
    features: [
      'Recebimento de leads por webhook',
      'Validação e normalização dos dados',
      'Registro automático no banco de dados',
      'Notificação por canal configurável',
      'Deduplicação de leads existentes',
    ],
    screenshots: [],
    learnings: [
      'Criação de workflows complexos com n8n',
      'Tratamento de dados e validações em nós de código',
      'Integração entre n8n e bancos de dados PostgreSQL',
      'Hospedagem do n8n em ambiente Docker',
    ],
    futurePlans: [
      'Qualificação automática com pontuação de leads',
      'Integração com mais canais de captação',
      'Relatório semanal automatizado',
    ],
    featured: true,
  },
  {
    id: 'site-institucional-demo',
    title: 'Site Institucional — Demonstração',
    slug: 'site-institucional-demo',
    category: 'web',
    status: 'publicado',
    shortDescription:
      'Este próprio site como demonstração de desenvolvimento web profissional com React, TypeScript, Vite e Tailwind CSS.',
    description:
      'O site da Douglas Soluções Digitais foi desenvolvido como uma demonstração prática das tecnologias e práticas utilizadas nos projetos oferecidos aos clientes.',
    problem:
      'Demonstrar capacidade técnica e profissionalismo sem apresentar projetos de clientes (que exigiria autorização e anonimização de dados).',
    objective:
      'Criar um site profissional, otimizado para SEO, responsivo e de alta performance que sirva também como portfólio técnico.',
    technologies: [
      { name: 'React', version: '19' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'Tailwind CSS', version: '3' },
      { name: 'React Router', version: '6' },
      { name: 'Lucide React' },
    ],
    features: [
      'Design responsivo com Tailwind CSS',
      'Roteamento com React Router v6',
      'SEO técnico com metadados e JSON-LD',
      'Sitemap XML e robots.txt',
      'Botão flutuante de WhatsApp',
      'Formulário de contato funcional',
      'Blog estático com artigos em TypeScript',
      'Performance otimizada',
    ],
    screenshots: [],
    learnings: [
      'Estruturação de projetos React de médio porte',
      'Implementação de SEO técnico sem Next.js',
      'Organização de dados de conteúdo em TypeScript',
      'Configuração de Tailwind CSS com tema customizado',
    ],
    futurePlans: [
      'Integração com CMS headless para facilitar publicação de artigos',
      'Analytics integrado',
      'Testes automatizados com Vitest',
    ],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    web: 'Desenvolvimento Web',
    crm: 'CRM e Gestão',
    automacao: 'Automação',
    api: 'Integração de APIs',
    'banco-de-dados': 'Banco de Dados',
    'inteligencia-artificial': 'Inteligência Artificial',
  };
  return labels[category] ?? category;
};

export const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    estudando: 'Estudando',
    prototipo: 'Protótipo',
    desenvolvimento: 'Em Desenvolvimento',
    publicado: 'Publicado',
  };
  return labels[status] ?? status;
};
