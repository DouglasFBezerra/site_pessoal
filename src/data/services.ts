import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'criacao-de-sites',
    title: 'Criação de Sites Profissionais',
    shortTitle: 'Sites Profissionais',
    slug: 'criacao-de-sites',
    description:
      'Sites institucionais, landing pages e páginas especializadas para profissionais e empresas, responsivos e otimizados para o Google.',
    longDescription:
      'Um site profissional é a base da presença digital de qualquer negócio. Desenvolvo sites modernos, rápidos e otimizados para mecanismos de busca, pensados para converter visitantes em clientes.',
    icon: 'Globe',
    color: 'blue',
    features: [
      'Design responsivo (celular, tablet e computador)',
      'Otimização para SEO e Google',
      'Performance e carregamento rápido',
      'Formulários e botão de WhatsApp',
      'Integração com Google Analytics',
      'Domínio e publicação orientados',
    ],
    audience: [
      'Clínicas odontológicas e consultórios',
      'Escritórios de advocacia',
      'Profissionais autônomos',
      'Restaurantes e pizzarias',
      'Pequenas e médias empresas',
    ],
    benefits: [
      'Presença on-line profissional e confiável',
      'Mais visibilidade no Google',
      'Canal direto de contato com clientes',
      'Funcionamento 24h por dia',
    ],
    process: [
      {
        step: 1,
        title: 'Briefing e planejamento',
        description:
          'Entendemos suas necessidades, público-alvo e objetivos do site.',
      },
      {
        step: 2,
        title: 'Design e prototipagem',
        description:
          'Criamos o layout visual alinhado à sua identidade e ao seu segmento.',
      },
      {
        step: 3,
        title: 'Desenvolvimento',
        description:
          'Construímos o site com código limpo, responsivo e otimizado.',
      },
      {
        step: 4,
        title: 'Publicação e entrega',
        description:
          'Publicamos o site, configuramos domínio e orientamos sobre manutenção.',
      },
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para criar um site?',
        answer:
          'Depende da complexidade do projeto. Um site institucional simples pode ser entregue em 1 a 2 semanas. Sites mais completos podem levar de 3 a 6 semanas.',
      },
      {
        question: 'O site vai aparecer no Google?',
        answer:
          'Todos os sites são desenvolvidos com práticas de SEO técnico. No entanto, o posicionamento no Google depende de fatores como qualidade do conteúdo, competitividade da palavra-chave e tempo de indexação.',
      },
      {
        question: 'Preciso de hospedagem?',
        answer:
          'Sim. Orientamos sobre as melhores opções de hospedagem de acordo com o seu projeto, com custo acessível e boa performance.',
      },
    ],
  },
  {
    id: 'desenvolvimento-crm',
    title: 'Desenvolvimento de Sistemas CRM',
    shortTitle: 'Sistemas CRM',
    slug: 'desenvolvimento-crm',
    description:
      'Sistemas personalizados para organizar clientes, leads, oportunidades e agendamentos, com painéis visuais e fluxos adaptados à realidade do seu negócio.',
    longDescription:
      'Um CRM bem desenvolvido transforma a forma como sua empresa gerencia o relacionamento com clientes. Desenvolvo sistemas sob medida, com as funcionalidades que o seu negócio realmente precisa.',
    icon: 'LayoutDashboard',
    color: 'cyan',
    features: [
      'Cadastro e organização de clientes',
      'Gestão de leads e oportunidades',
      'Funil de vendas em Kanban',
      'Controle de agendamentos',
      'Histórico de interações',
      'Gestão de orçamentos',
      'Painéis de indicadores',
    ],
    audience: [
      'Clínicas e consultórios',
      'Escritórios de advocacia e contabilidade',
      'Equipes comerciais',
      'Prestadores de serviço',
    ],
    benefits: [
      'Centralização de informações de clientes',
      'Redução de oportunidades perdidas',
      'Melhora no acompanhamento de leads',
      'Visibilidade sobre o funil de vendas',
    ],
    process: [
      {
        step: 1,
        title: 'Levantamento de requisitos',
        description:
          'Mapeamos os processos comerciais e as necessidades específicas da sua empresa.',
      },
      {
        step: 2,
        title: 'Arquitetura e design',
        description: 'Desenhamos as telas, fluxos e estrutura de dados do sistema.',
      },
      {
        step: 3,
        title: 'Desenvolvimento',
        description: 'Implementamos o sistema com foco em usabilidade e performance.',
      },
      {
        step: 4,
        title: 'Treinamento e suporte',
        description: 'Apresentamos o sistema, treinamos a equipe e oferecemos suporte inicial.',
      },
    ],
    faqs: [
      {
        question: 'O CRM é integrado com WhatsApp?',
        answer:
          'Integrações com WhatsApp são tecnicamente possíveis por meio de APIs específicas, mas dependem de avaliação técnica e conformidade com os termos de uso da plataforma. Cada caso é analisado individualmente.',
      },
      {
        question: 'O sistema funciona no celular?',
        answer:
          'Sim. Os sistemas são desenvolvidos com design responsivo, funcionando em celulares, tablets e computadores.',
      },
      {
        question: 'Posso personalizar os campos e processos?',
        answer:
          'Sim. O sistema é desenvolvido sob medida para o seu negócio, com os campos, etapas e fluxos que fazem sentido para a sua realidade.',
      },
    ],
  },
  {
    id: 'automacao-n8n',
    title: 'Atendente de WhatsApp 24h e automações',
    shortTitle: 'Atendente WhatsApp 24h',
    slug: 'automacao-n8n',
    description:
      'Atendente de WhatsApp com inteligência artificial que responde clientes a qualquer hora, registra contatos no CRM e avisa sua equipe quando precisa de uma pessoa. Construído com n8n.',
    longDescription:
      'Um atendente automático que responde seus clientes no WhatsApp a qualquer hora, tira dúvidas sobre seus serviços, coleta os dados do contato e registra tudo no CRM. Por trás, uso o n8n, uma plataforma de automação open source, que também permite conectar sistemas e eliminar tarefas manuais repetitivas.',
    icon: 'Zap',
    color: 'purple',
    features: [
      'Atendimento no WhatsApp 24 horas, inclusive fora do expediente',
      'Respostas sobre serviços, horários e endereço do seu negócio',
      'Coleta de nome, telefone e necessidade do cliente',
      'Registro automático de contatos e agendamentos no CRM',
      'Lembretes e confirmações de consulta ou pedido',
      'Aviso à equipe quando um atendimento precisa de uma pessoa',
      'Automação de tarefas repetitivas e integração entre sistemas',
    ],
    audience: [
      'Clínicas e consultórios',
      'Restaurantes, pizzarias e deliveries',
      'Escritórios e prestadores de serviço',
      'Lojas e pequenas empresas que recebem pedidos pelo WhatsApp',
    ],
    benefits: [
      'Não perder clientes por demora na resposta',
      'Atendimento mesmo à noite e nos fins de semana',
      'Equipe livre para o que exige atenção humana',
      'Contatos organizados no CRM, sem anotações soltas',
    ],
    process: [
      {
        step: 1,
        title: 'Entendimento do atendimento',
        description:
          'Levanto o que seus clientes mais perguntam e o que o atendente pode ou não responder.',
      },
      {
        step: 2,
        title: 'Desenvolvimento do atendente',
        description:
          'Construo o atendente e as integrações com WhatsApp e CRM, usando o n8n.',
      },
      {
        step: 3,
        title: 'Testes com conversas reais',
        description:
          'Testamos o atendente em situações do dia a dia antes de ativá-lo para os clientes.',
      },
      {
        step: 4,
        title: 'Ativação e acompanhamento',
        description:
          'Publico o atendente, documento o funcionamento e ajusto conforme as conversas reais.',
      },
    ],
    faqs: [
      {
        question: 'O atendente de WhatsApp responde sozinho?',
        answer:
          'Sim. Um agente de inteligência artificial responde as mensagens seguindo as informações e regras do seu negócio, como serviços, horários e endereço. Quando o assunto foge do combinado, ele pode avisar a equipe para que uma pessoa assuma a conversa.',
      },
      {
        question: 'Funciona de madrugada e nos fins de semana?',
        answer:
          'Sim, o atendente fica ativo 24 horas. O que depende de uma pessoa, como fechar um orçamento, fica registrado para a equipe retomar no horário comercial.',
      },
      {
        question: 'O que preciso para começar?',
        answer:
          'Um número de WhatsApp para o atendimento, as informações do seu negócio e a definição do que o atendente pode ou não responder. A conexão com o WhatsApp segue as regras da plataforma e depende de autorização.',
      },
      {
        question: 'O n8n tem custo?',
        answer:
          'O n8n possui versão open source gratuita que pode ser instalada em um servidor próprio. Existe também a versão cloud com planos pagos. A escolha depende da escala e necessidade do projeto.',
      },
      {
        question: 'Que sistemas posso integrar?',
        answer:
          'O n8n possui integrações nativas com centenas de serviços, como Google Sheets, Gmail, Slack, bancos de dados SQL, APIs REST, webhooks, e muito mais.',
      },
      {
        question: 'Preciso de servidor para rodar o n8n?',
        answer:
          'Para a versão self-hosted, sim. Pode ser um servidor VPS acessível ou um ambiente Docker local. Oriento sobre as melhores opções para cada caso.',
      },
    ],
  },
  {
    id: 'cardapios-digitais',
    title: 'Cardápios Digitais',
    shortTitle: 'Cardápios Digitais',
    slug: 'cardapios-digitais',
    description:
      'Cardápios acessíveis pelo celular, com categorias organizadas, links compartilháveis e visual alinhado à identidade do seu estabelecimento.',
    longDescription:
      'O cardápio digital substitui o cardápio físico e facilita o acesso dos clientes ao seu menu em qualquer dispositivo, sem necessidade de app ou cadastro.',
    icon: 'UtensilsCrossed',
    color: 'green',
    features: [
      'Acesso pelo celular via QR Code ou link',
      'Categorias e produtos organizados',
      'Fotos e descrições de itens',
      'Links compartilháveis nas redes sociais',
      'Visual personalizado com identidade do estabelecimento',
      'Botão de contato ou pedido',
    ],
    audience: [
      'Restaurantes e pizzarias',
      'Lanchonetes e cafeterias',
      'Bares e quiosques',
      'Delivery e marmitarias',
    ],
    benefits: [
      'Eliminação de custos de impressão',
      'Atualização rápida de preços e itens',
      'Experiência moderna para o cliente',
      'Facilidade de compartilhamento',
    ],
    process: [
      {
        step: 1,
        title: 'Coleta do cardápio',
        description: 'Recebemos o cardápio atual com produtos, categorias e preços.',
      },
      {
        step: 2,
        title: 'Design e estruturação',
        description: 'Criamos o layout digital com a identidade visual do estabelecimento.',
      },
      {
        step: 3,
        title: 'Publicação e QR Code',
        description: 'Publicamos o cardápio e geramos o QR Code para uso imediato.',
      },
      {
        step: 4,
        title: 'Treinamento para atualização',
        description: 'Ensinamos como atualizar o cardápio quando necessário.',
      },
    ],
    faqs: [
      {
        question: 'Preciso de um app para usar o cardápio?',
        answer:
          'Não. O cardápio é acessível diretamente pelo navegador do celular, sem necessidade de instalar nenhum aplicativo.',
      },
      {
        question: 'Como o cliente acessa o cardápio?',
        answer:
          'Pelo QR Code impresso ou adesivo no estabelecimento, ou pelo link compartilhado nas redes sociais e no WhatsApp.',
      },
      {
        question: 'Posso atualizar os preços com frequência?',
        answer:
          'Sim. As atualizações podem ser feitas de forma rápida. Dependendo da plataforma utilizada, você mesmo poderá realizar alterações simples.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
