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
    // Para mostrar a galeria, coloque as imagens em public/projetos/ e liste aqui, por exemplo:
    // screenshots: [
    //   { url: '/projetos/crm-kanban.png', alt: 'Funil Kanban do CRM', caption: 'Funil de vendas em Kanban' },
    //   { url: '/projetos/crm-dashboard.png', alt: 'Dashboard do CRM', caption: 'Dashboard de indicadores' },
    // ],
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
    id: 'sites-clinicas-odontologicas',
    title: 'Sites para Clínicas Odontológicas',
    slug: 'sites-clinicas-odontologicas',
    category: 'web',
    status: 'prototipo',
    shortDescription:
      'Sites institucionais para consultórios odontológicos, com tratamentos, galeria, avaliações e agendamento pelo WhatsApp, atualizados pela própria clínica em um painel administrativo.',
    description:
      'Plataforma de site institucional para consultórios odontológicos que apresenta serviços, tratamentos, avaliações de pacientes e informações da clínica, com contato direto pelo WhatsApp e painel administrativo para o próprio profissional atualizar o conteúdo.',
    problem:
      'Muitos consultórios dependem de redes sociais e não têm um site que apresente os tratamentos, transmita confiança e facilite o agendamento. Quando têm, qualquer alteração de horário, foto ou serviço depende de um desenvolvedor.',
    objective:
      'Entregar um site profissional e responsivo em que a própria clínica consiga editar serviços, horários, contatos e fotos sem mexer em código, com agendamento de consultas em poucos cliques pelo WhatsApp.',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'TanStack Start' },
      { name: 'Supabase' },
      { name: 'Tailwind CSS' },
    ],
    features: [
      'Páginas de apresentação, tratamentos, avaliações, localização e contato',
      'Botão de agendamento e botão flutuante de WhatsApp',
      'Conteúdo e imagens carregados dinamicamente do banco de dados',
      'Painel administrativo protegido por login (rota /admin)',
      'Edição de serviços, horários de atendimento, contatos e galeria pelo painel',
      'Recuperação de senha do administrador',
      'Layout responsivo para celular e computador',
    ],
    screenshots: [
      {
        url: '/projetos/site-clinica-1.jpg',
        alt: 'Página inicial de um site para consultório odontológico com foto do consultório e botão de agendamento pelo WhatsApp',
        caption: 'Site para consultório odontológico: página inicial com agendamento pelo WhatsApp',
      },
      {
        url: '/projetos/site-clinica-2.jpg',
        alt: 'Página inicial de um site de odontologia estética com layout elegante em tons de verde',
        caption: 'Site para clínica de odontologia estética: identidade visual própria',
      },
    ],
    learnings: [
      'Modelagem de conteúdo editável no Supabase (serviços, horários, galeria)',
      'Autenticação e recuperação de senha com Supabase Auth',
      'Criação de painel administrativo para clientes sem conhecimento técnico',
      'Adaptação de identidade visual para cada profissional',
    ],
    futurePlans: [
      'Agendamento online integrado à agenda da clínica',
      'Indicadores de acesso e cliques no WhatsApp',
      'Blog com conteúdos sobre saúde bucal',
    ],
    featured: true,
  },
  {
    id: 'cardapio-digital-pizzaria',
    title: 'Cardápio Digital com Pedido pelo WhatsApp',
    slug: 'cardapio-digital-pizzaria',
    category: 'web',
    status: 'prototipo',
    shortDescription:
      'Cardápio digital para pizzaria com busca, filtro por categoria, adicionais, carrinho e envio do pedido pelo WhatsApp.',
    description:
      'Cardápio digital para pizzarias em que o cliente pesquisa e filtra os produtos por categoria, vê preços e adicionais, monta o carrinho e finaliza o pedido pelo WhatsApp do estabelecimento.',
    problem:
      'Cardápios em PDF ou imagem são difíceis de navegar no celular, ficam desatualizados e obrigam o atendente a anotar o pedido manualmente no WhatsApp.',
    objective:
      'Oferecer um cardápio online rápido e fácil de atualizar, em que o cliente monte o pedido sozinho e o estabelecimento receba tudo organizado no WhatsApp.',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Supabase' },
      { name: 'Tailwind CSS' },
    ],
    features: [
      'Busca por nome ou ingrediente',
      'Filtro por categorias de produtos',
      'Preços e adicionais por produto',
      'Carrinho de compras',
      'Finalização do pedido pelo WhatsApp',
      'Produtos, categorias, adicionais e configurações gerenciados no banco de dados',
      'Controle de acesso por perfis de usuário',
      'Navegação responsiva otimizada para celular',
    ],
    screenshots: [
      {
        url: '/projetos/cardapio-pizzaria.jpg',
        alt: 'Tela inicial de um cardápio digital de pizzaria com chamada para pedir, busca por ingrediente e filtro de categorias',
        caption: 'Cardápio digital: tela inicial com busca e filtro por categoria',
      },
    ],
    learnings: [
      'Modelagem de produtos, categorias e adicionais no Supabase',
      'Controle de permissões por perfil de usuário',
      'Geração de mensagem de pedido formatada para o WhatsApp',
      'Interface pensada para uso no celular',
    ],
    futurePlans: [
      'Cálculo de taxa de entrega por região',
      'Painel com pedidos e produtos mais vendidos',
      'Cupons de desconto',
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
