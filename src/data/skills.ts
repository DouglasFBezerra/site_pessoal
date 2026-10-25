import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Desenvolvimento Frontend',
    items: [
      { name: 'React', level: 'intermediario', description: 'Componentes, hooks, context, roteamento' },
      { name: 'TypeScript', level: 'intermediario', description: 'Tipagem estática, interfaces, generics' },
      { name: 'Tailwind CSS', level: 'avancado', description: 'Estilização utilitária, design responsivo' },
      { name: 'HTML5 & CSS3', level: 'avancado', description: 'Semântica, acessibilidade, animações' },
      { name: 'Vite', level: 'intermediario', description: 'Build tool, configuração, plugins' },
    ],
  },
  {
    category: 'Backend e Banco de Dados',
    items: [
      { name: 'Node.js', level: 'aprendendo', description: 'APIs REST, Express' },
      { name: 'Supabase', level: 'intermediario', description: 'PostgreSQL, autenticação, realtime' },
      { name: 'PostgreSQL', level: 'intermediario', description: 'Modelagem relacional, queries, views' },
      { name: 'SQL', level: 'intermediario', description: 'Consultas, joins, índices' },
    ],
  },
  {
    category: 'Automação e Integrações',
    items: [
      { name: 'n8n', level: 'intermediario', description: 'Workflows, integrações, webhooks' },
      { name: 'Docker', level: 'aprendendo', description: 'Containers, Docker Compose' },
      { name: 'APIs REST', level: 'intermediario', description: 'Consumo e criação de APIs, webhooks' },
      { name: 'Webhooks', level: 'intermediario', description: 'Integração por eventos entre sistemas' },
    ],
  },
  {
    category: 'Ferramentas e Práticas',
    items: [
      { name: 'Git', level: 'intermediario', description: 'Versionamento, branches, pull requests' },
      { name: 'SEO Técnico', level: 'intermediario', description: 'Metadados, Schema.org, Core Web Vitals' },
      { name: 'Figma', level: 'aprendendo', description: 'Prototipagem e design de interfaces' },
      { name: 'VS Code', level: 'avancado', description: 'Ambiente de desenvolvimento principal' },
    ],
  },
];

export const getLevelLabel = (level: string): string => {
  const labels: Record<string, string> = {
    aprendendo: 'Aprendendo',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
  };
  return labels[level] ?? level;
};
