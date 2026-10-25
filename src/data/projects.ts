import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'crm-odontologico',
    title: 'CRM Odontológico',
    slug: 'crm-odontologico',
    category: 'crm',
    status: 'desenvolvimento',
    shortDescription:
      'Sistema de gestão para clínicas odontológicas: leads do WhatsApp, pacientes, agenda, tratamentos, orçamentos, financeiro e tarefas.',
    description:
      'Um sistema CRM desenvolvido especificamente para clínicas odontológicas, que centraliza o acompanhamento de potenciais pacientes desde o primeiro contato até o fechamento do tratamento.',
    problem:
      'Clínicas odontológicas frequentemente perdem potenciais pacientes por falta de acompanhamento estruturado após o primeiro contato. Ligações sem retorno, avaliações sem follow-up e orçamentos esquecidos representam oportunidades comerciais desperdiçadas.',
    objective:
      'Criar um sistema de gestão adaptado à realidade de clínicas odontológicas, que reúne leads vindos do WhatsApp, pacientes, agenda, tratamentos, orçamentos e financeiro em um só lugar.',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Supabase' },
      { name: 'n8n' },
      { name: 'Tailwind CSS' },
      { name: 'Docker' },
    ],
    features: [
      'Dashboard com indicadores de pacientes, leads, consultas, orçamentos e tarefas',
      'Leads e funil de atendimento com contatos recebidos pelo WhatsApp',
      'Cadastro e consulta de pacientes',
      'Agenda de consultas com bloqueio de conflito de horário por dentista',
      'Planos de tratamento vinculados a pacientes e dentistas',
      'Orçamentos com itens e totais calculados no banco de dados',
      'Controle financeiro de parcelas e recebimentos',
      'Tarefas de retorno e confirmação para a equipe',
      'Configuração de dados da clínica, dentistas e procedimentos',
      'Acesso com login e permissões controladas pelo Supabase',
    ],
    screenshots: [
      {
        url: '/projetos/crm-dashboard.jpg',
        alt: 'Tela de dashboard do CRM odontológico com cartões de indicadores',
        caption: 'Dashboard com indicadores de pacientes, leads, consultas, orçamentos e tarefas',
      },
      {
        url: '/projetos/crm-leads.jpg',
        alt: 'Tela de leads e funil do CRM odontológico com contatos recebidos pelo WhatsApp',
        caption: 'Leads e funil: contatos recebidos pelo WhatsApp e cadastrados no CRM',
      },
      {
        url: '/projetos/crm-pacientes.jpg',
        alt: 'Tela de cadastro e lista de pacientes do CRM odontológico',
        caption: 'Cadastro e consulta de pacientes',
      },
      {
        url: '/projetos/crm-agenda.jpg',
        alt: 'Tela de agenda de consultas do CRM odontológico',
        caption: 'Agenda de consultas com bloqueio de conflito de horário por dentista',
      },
      {
        url: '/projetos/crm-tratamentos.jpg',
        alt: 'Tela de planos de tratamento do CRM odontológico',
        caption: 'Planos de tratamento vinculados a pacientes e dentistas',
      },
      {
        url: '/projetos/crm-orcamentos.jpg',
        alt: 'Tela de orçamentos do CRM odontológico',
        caption: 'Orçamentos com itens, validade e totais calculados pelo banco',
      },
      {
        url: '/projetos/crm-financeiro.jpg',
        alt: 'Tela financeira do CRM odontológico com parcelas e recebimentos',
        caption: 'Controle financeiro de parcelas e recebimentos',
      },
      {
        url: '/projetos/crm-tarefas.jpg',
        alt: 'Tela de tarefas da equipe do CRM odontológico',
        caption: 'Tarefas de retorno, confirmação e acompanhamento da equipe',
      },
    ],
    learnings: [
      'Modelagem de banco de dados relacional para CRM',
      'Implementação de autenticação com Supabase',
      'Agenda com bloqueio de conflito de horário por dentista direto no banco',
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
    title: 'Prospecção e Qualificação Automática de Leads',
    slug: 'automacao-captacao-leads',
    category: 'automacao',
    status: 'prototipo',
    shortDescription:
      'Dois fluxos n8n: um busca negócios sem site no Google Places e grava em planilha; o outro usa um agente de IA para conversar com o lead e classificá-lo.',
    description:
      'Conjunto de automações em n8n para encontrar clientes em potencial e qualificá-los. Um fluxo faz a prospecção de empresas sem site por cidade e grava a lista no Google Sheets. Outro conduz a conversa com o lead por meio de um agente de IA, registra tudo no Supabase e marca o lead como qualificado ou desqualificado.',
    problem:
      'Encontrar empresas que precisam de um site e conversar com cada contato consome horas. Sem um processo, bons contatos se perdem e leads sem perfil tomam o tempo de quem atende.',
    objective:
      'Automatizar a busca de oportunidades e a primeira triagem, para que o tempo seja gasto apenas com leads qualificados.',
    technologies: [
      { name: 'n8n' },
      { name: 'Google Places API' },
      { name: 'Google Sheets' },
      { name: 'Supabase' },
      { name: 'OpenAI' },
    ],
    features: [
      'Busca de negócios por cidade e termo no Google Places',
      'Filtro automático de empresas que ainda não têm site',
      'Remoção de contatos duplicados antes de gravar',
      'Gravação dos leads em planilha do Google Sheets',
      'Agente de IA que conversa com o lead e o classifica como qualificado ou desqualificado',
      'Cadastro e atualização do lead no Supabase',
      'Memória da conversa para manter o contexto',
    ],
    screenshots: [
      {
        url: '/projetos/n8n-prospeccao.png',
        alt: 'Diagrama do fluxo n8n de prospecção: busca no Google Places, filtro de empresas sem site e gravação no Google Sheets',
        caption: 'Fluxo de prospecção: Google Places → filtro → Google Sheets',
      },
      {
        url: '/projetos/n8n-qualificacao.png',
        alt: 'Diagrama do fluxo n8n de qualificação de leads com agente de IA, Supabase e ferramentas de classificação',
        caption: 'Fluxo de qualificação: agente de IA + Supabase',
      },
    ],
    learnings: [
      'Integração do n8n com a API do Google Places',
      'Filtragem e remoção de duplicados em nós de código',
      'Criação de agente de IA com memória e ferramentas (tools) no n8n',
      'Persistência e atualização de leads no Supabase',
    ],
    futurePlans: [
      'Envio automático da primeira mensagem de abordagem',
      'Pontuação de leads por perfil',
      'Relatório semanal automatizado',
    ],
    featured: true,
  },
  {
    id: 'agente-whatsapp-clinica',
    title: 'Agente de WhatsApp para Clínicas',
    slug: 'agente-whatsapp-clinica',
    category: 'automacao',
    status: 'prototipo',
    shortDescription:
      'Automação de WhatsApp para clínicas: confirma consultas, cria tarefas para a recepção, atende novos contatos com IA e envia lembretes automáticos.',
    description:
      'Fluxos n8n ligados ao CRM da clínica e ao WhatsApp. As mensagens chegam por webhook, o fluxo identifica se quem escreveu é paciente ou um contato novo e segue o caminho certo: confirmar consulta, avisar a recepção ou deixar um agente de IA atender, consultar horários livres e marcar a consulta. Outro fluxo envia lembretes de consulta automaticamente.',
    problem:
      'A recepção perde tempo confirmando consultas e respondendo as mesmas dúvidas pelo WhatsApp, e contatos novos ficam sem resposta fora do horário de atendimento.',
    objective:
      'Automatizar confirmações, lembretes e o primeiro atendimento, mantendo tudo registrado no CRM e passando para a recepção apenas o que exige uma pessoa.',
    technologies: [
      { name: 'n8n' },
      { name: 'Evolution API' },
      { name: 'OpenAI' },
      { name: 'Supabase' },
    ],
    features: [
      'Recebimento das mensagens por webhook, sem processar a mesma mensagem duas vezes',
      'Identificação automática de paciente ou contato novo',
      'Confirmação de consulta pela resposta do paciente, com atualização no CRM',
      'Criação de tarefa para a recepção quando o paciente pede contato',
      'Cadastro e atualização automática de leads, com registro da conversa',
      'Agente de IA que atende o lead, consulta horários livres e marca a consulta no CRM',
      'Lembretes de consulta a cada 15 minutos, enviados uma única vez por consulta',
      'Registro de falhas no envio das mensagens',
    ],
    screenshots: [
      {
        url: '/projetos/n8n-clinica-mensagens.png',
        alt: 'Diagrama do fluxo n8n que trata mensagens de WhatsApp de pacientes e leads, com agente de IA e integração ao CRM',
        caption: 'Mensagens recebidas: pacientes, leads e agente de IA',
      },
      {
        url: '/projetos/n8n-clinica-lembretes.png',
        alt: 'Diagrama do fluxo n8n de lembretes automáticos de consulta enviados por WhatsApp',
        caption: 'Lembretes automáticos de consulta',
      },
    ],
    learnings: [
      'Envio idempotente de mensagens para evitar lembretes duplicados',
      'Integração do n8n com Evolution API e com o CRM por requisições HTTP',
      'Agente de IA com ferramentas para consultar agenda e marcar consultas',
      'Separação de fluxos por tipo de remetente',
    ],
    futurePlans: [
      'Remarcação de consultas pelo WhatsApp',
      'Painel com taxa de confirmação por período',
      'Pesquisa de satisfação após a consulta',
    ],
    featured: true,
  },
  {
    id: 'atendimento-delivery-ia',
    title: 'Atendimento de Delivery com Agente de IA',
    slug: 'atendimento-delivery-ia',
    category: 'automacao',
    status: 'prototipo',
    shortDescription:
      'Agente de IA no WhatsApp que atende pedidos de delivery, consulta o cardápio, envia o PDF, registra o pedido e atualiza o endereço do cliente.',
    description:
      'Fluxo n8n que atende clientes de delivery pelo WhatsApp. O agente junta as mensagens enviadas em sequência, responde dúvidas com base no cardápio (RAG), envia o cardápio em PDF, registra o pedido em planilha e atualiza o endereço do cliente. Há ainda rotinas de apoio: atualização automática da base de conhecimento a partir do Google Drive e uma página para imprimir os pedidos.',
    problem:
      'Pedidos por WhatsApp costumam chegar em várias mensagens picadas, fora de ordem e a qualquer hora, e o atendente precisa repetir cardápio, preços e regras o tempo todo.',
    objective:
      'Automatizar o atendimento do delivery, do primeiro contato ao registro do pedido, e manter as informações da loja atualizadas sem mexer no fluxo.',
    technologies: [
      { name: 'n8n' },
      { name: 'OpenAI' },
      { name: 'Evolution API' },
      { name: 'Supabase' },
      { name: 'Redis' },
      { name: 'Google Sheets' },
      { name: 'Google Drive' },
    ],
    features: [
      'Agente de IA para atendimento e pedidos de delivery pelo WhatsApp',
      'Agrupamento das mensagens do cliente (Redis) antes de responder',
      'Aceita texto e áudio e avisa quando recebe imagem, que não é lida',
      'Cadastro automático do cliente no banco de dados',
      'Consulta ao cardápio e às regras da loja com RAG (Supabase Vector Store)',
      'Envio do cardápio em PDF pelo WhatsApp',
      'Atualização do endereço do cliente',
      'Registro do pedido em planilha do Google Sheets',
      'Atualização da base de conhecimento a partir de arquivos do Google Drive',
      'Página de impressão dos pedidos',
    ],
    screenshots: [
      {
        url: '/projetos/n8n-delivery.png',
        alt: 'Diagrama do fluxo n8n de atendimento de delivery com agente de IA, ferramentas, base de conhecimento e página de impressão',
        caption: 'Fluxo completo: agente de IA, ferramentas e rotinas de apoio',
      },
    ],
    learnings: [
      'Agrupamento de mensagens com Redis para o agente responder uma única vez',
      'RAG com embeddings e Supabase Vector Store',
      'Agentes com ferramentas e sub-fluxos reutilizáveis no n8n',
      'Geração de página HTML a partir de dados de planilha',
    ],
    futurePlans: [
      'Cálculo de taxa de entrega por região',
      'Cupons de desconto',
      'Painel com pedidos e produtos mais vendidos',
    ],
    featured: false,
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
