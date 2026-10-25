import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'O que é um sistema CRM e como ele ajuda pequenas empresas',
    slug: 'o-que-e-crm-como-ajuda-pequenas-empresas',
    excerpt:
      'CRM é uma sigla para Customer Relationship Management, ou Gestão de Relacionamento com Clientes. Entenda como essa ferramenta pode transformar a forma de trabalhar de pequenas empresas e profissionais autônomos.',
    category: 'crm',
    tags: ['CRM', 'gestão de clientes', 'pequenas empresas', 'vendas'],
    readingTime: 6,
    publishedAt: '2026-10-01',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: true,
    status: 'publicado',
    content: `## O que é CRM?

CRM é a sigla para **Customer Relationship Management**, que em português significa Gestão de Relacionamento com Clientes. É um conjunto de práticas, estratégias e ferramentas tecnológicas que ajudam empresas a organizar, acompanhar e melhorar seu relacionamento com clientes e potenciais clientes.

Na prática, um sistema CRM é um software que centraliza todas as informações sobre seus clientes em um único lugar: histórico de contatos, orçamentos enviados, serviços contratados, agendamentos marcados, e muito mais.

## Por que pequenas empresas precisam de CRM?

Muitas pequenas empresas gerenciam seus clientes em cadernos, planilhas ou na memória dos donos. Isso funciona até certo ponto, mas com o crescimento vêm os problemas:

- Ligações sem retorno porque "esqueceu" de ligar de volta
- Orçamentos enviados que nunca foram acompanhados
- Clientes que perguntaram sobre um serviço mas não receberam resposta adequada
- Equipe sem visibilidade sobre o que cada cliente precisa

Um CRM resolve esses problemas ao organizar todas essas informações de forma acessível, com alertas e acompanhamento estruturado.

## O que um CRM faz na prática?

Um sistema CRM bem desenvolvido permite:

**Cadastro de clientes e leads**
Registre todas as informações relevantes: nome, contato, empresa, serviço de interesse, data do primeiro contato.

**Funil de vendas visual**
Acompanhe onde cada cliente está no processo comercial: primeiro contato, proposta enviada, negociação, fechamento.

**Histórico de interações**
Registre cada ligação, mensagem ou reunião para ter contexto completo em futuros contatos.

**Gestão de tarefas e follow-ups**
Crie lembretes para ligar de volta, enviar proposta ou agendar uma visita.

**Indicadores de desempenho**
Veja quantos leads entram por mês, qual a taxa de conversão e onde você perde mais oportunidades.

## Conclusão

Um CRM não precisa ser caro ou complexo. Para pequenas empresas, um sistema simples e bem adaptado à realidade do negócio já faz uma diferença enorme. O importante é começar a organizar o relacionamento com os clientes antes que as oportunidades comecem a ser perdidas.`,
  },
  {
    id: '2',
    title: 'Como automatizar processos empresariais com n8n',
    slug: 'como-automatizar-processos-com-n8n',
    excerpt:
      'O n8n é uma plataforma open source de automação que permite conectar sistemas, automatizar tarefas repetitivas e criar fluxos de trabalho inteligentes — sem depender de plataformas pagas por execução.',
    category: 'automacao',
    tags: ['n8n', 'automação', 'integração', 'processos'],
    readingTime: 7,
    publishedAt: '2026-10-08',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: true,
    status: 'publicado',
    content: `## O que é o n8n?

O **n8n** é uma plataforma de automação de workflows de código aberto. Com ele, é possível criar fluxos de trabalho automatizados que conectam diferentes sistemas, processam dados e executam ações sem intervenção humana.

A grande vantagem do n8n é que ele pode ser instalado em um servidor próprio (self-hosted), eliminando custos por execução e mantendo total controle sobre os dados.

## O que você pode automatizar?

- Captação e organização de leads
- Integração entre sistemas diferentes
- Notificações e lembretes automáticos
- Processamento de dados programado

## Como o n8n funciona?

O n8n utiliza uma interface visual baseada em nós. Cada nó representa uma ação: receber um webhook, buscar dados em um banco, enviar um e-mail, criar um registro no CRM. Você conecta esses nós em sequência e define a lógica do fluxo.

## Conclusão

A automação com n8n permite que empresas se concentrem no que realmente importa, eliminando o trabalho manual em tarefas operacionais.`,
  },
  {
    id: '3',
    title: 'Como um site profissional pode ajudar sua empresa a conquistar clientes',
    slug: 'como-site-profissional-ajuda-conquistar-clientes',
    excerpt:
      'Um site profissional vai muito além de uma página na internet. Quando bem desenvolvido, ele funciona como um canal de vendas ativo, disponível 24 horas por dia, sem custo por clique.',
    category: 'desenvolvimento-web',
    tags: ['site profissional', 'presença digital', 'clientes', 'SEO'],
    readingTime: 5,
    publishedAt: '2026-10-15',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: false,
    status: 'publicado',
    content: `## Por que ter um site profissional?

Quando um potencial cliente pesquisa "dentista em São Paulo" ou "advogado trabalhista", ele está com intenção de contratação. Um site otimizado pode colocar sua empresa exatamente na frente dessas pessoas no momento certo.

## O que diferencia um site profissional

- Design coerente com a marca
- Velocidade de carregamento
- Responsividade para celular
- Conteúdo relevante e claro
- Chamadas para ação bem posicionadas

## SEO: aparecer no Google sem pagar por anúncios

Um site com boas práticas de SEO pode atrair visitantes de forma contínua, meses e anos depois de publicado. Isso é diferente de anúncios pagos, que param de trazer resultados quando o orçamento acaba.

## Conclusão

Um site profissional é um investimento com retorno de longo prazo. É um canal de vendas que trabalha enquanto você dorme.`,
  },
  {
    id: '4',
    title: 'CRM odontológico: como organizar leads, avaliações e orçamentos',
    slug: 'crm-odontologico-leads-avaliacoes-orcamentos',
    excerpt:
      'Clínicas odontológicas lidam diariamente com potenciais pacientes que nunca chegam a marcar consulta. Um CRM odontológico pode mudar isso, organizando o acompanhamento desde o primeiro contato.',
    category: 'crm',
    tags: ['CRM odontológico', 'clínica odontológica', 'leads', 'gestão'],
    readingTime: 6,
    publishedAt: '2026-10-22',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: false,
    status: 'publicado',
    content: `## O problema das clínicas odontológicas

Sem um sistema organizado, leads entram por múltiplos canais e a equipe perde o controle. Orçamentos enviados ficam sem acompanhamento. Pacientes que demonstraram interesse nunca recebem retorno.

## O que é um CRM odontológico?

Um sistema adaptado ao fluxo de captação de pacientes:
- Registro de leads por canal
- Funil visual: contato → avaliação → orçamento → tratamento
- Histórico de cada paciente
- Controle de follow-up

## Sobre o projeto

Estou desenvolvendo um CRM odontológico com React, TypeScript, Supabase e n8n. O projeto está em desenvolvimento e será demonstrado com dados fictícios.

## Conclusão

Organizar o relacionamento com potenciais pacientes é um diferencial competitivo. Um CRM adaptado pode aumentar a conversão sem precisar de mais leads.`,
  },
  {
    id: '5',
    title: 'Cardápio digital: vantagens para restaurantes e pizzarias',
    slug: 'cardapio-digital-vantagens-restaurantes-pizzarias',
    excerpt:
      'O cardápio digital substituiu o cardápio físico em muitos estabelecimentos. Além de eliminar custos de impressão, ele facilita atualizações de preço e melhora a experiência do cliente.',
    category: 'desenvolvimento-web',
    tags: ['cardápio digital', 'restaurante', 'pizzaria', 'QR Code'],
    readingTime: 4,
    publishedAt: '2026-10-10',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: false,
    status: 'publicado',
    content: `## O que é um cardápio digital?

Um cardápio digital é acessível pelo celular via QR Code ou link direto, sem instalação de aplicativo.

## Vantagens

- Sem custo de impressão
- Atualização instantânea de preços e itens
- Melhor experiência para o cliente com fotos e descrições
- Compartilhamento facilitado nas redes sociais
- Funciona 24 horas

## Como funciona

O cliente escaneia o QR Code na mesa, navega pelas categorias e pode entrar em contato para fazer o pedido.

## Conclusão

O cardápio digital é uma solução acessível para estabelecimentos que querem modernizar o atendimento e eliminar custos de impressão.`,
  },
  {
    id: '6',
    title: 'SEO e GEO: como preparar um site para buscas tradicionais e mecanismos de IA',
    slug: 'seo-geo-buscas-tradicionais-mecanismos-ia',
    excerpt:
      'SEO continua sendo essencial para aparecer no Google. Mas uma nova prática chamada GEO está surgindo com a popularização de mecanismos de busca com inteligência artificial.',
    category: 'seo',
    tags: ['SEO', 'GEO', 'Google', 'inteligência artificial', 'buscas'],
    readingTime: 8,
    publishedAt: '2026-10-20',
    author: { name: 'Douglas', role: 'Desenvolvedor e especialista em soluções digitais' },
    featured: true,
    status: 'publicado',
    content: `## O que é SEO?

SEO (Search Engine Optimization) otimiza um site para aparecer nos resultados orgânicos do Google sem pagar por anúncios.

**Principais práticas:**
- Velocidade de carregamento (Core Web Vitals)
- HTML semântico com H1, H2, H3 corretos
- URLs amigáveis e descritivas
- Sitemap XML e robots.txt
- Dados estruturados JSON-LD

## O que é GEO?

GEO (Generative Engine Optimization) otimiza conteúdo para mecanismos de busca com IA, como o Google AI Overview. Esses sistemas geram respostas completas baseadas no conteúdo que encontram.

## Como aplicar GEO

- Conteúdo objetivo que responde perguntas diretamente
- Identificação consistente da marca
- Autoria identificada nos artigos
- Dados estruturados corretos
- Conteúdo aprofundado e original

## Conclusão

SEO e GEO compartilham o mesmo fundamento: conteúdo de qualidade, bem estruturado e tecnicamente correto.`,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getFeaturedPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.featured && p.status === 'publicado');

export const getPublishedPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.status === 'publicado');

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    crm: 'CRM',
    automacao: 'Automação',
    'desenvolvimento-web': 'Desenvolvimento Web',
    seo: 'SEO & GEO',
    'inteligencia-artificial': 'Inteligência Artificial',
    negocios: 'Negócios',
  };
  return labels[category] ?? category;
};
