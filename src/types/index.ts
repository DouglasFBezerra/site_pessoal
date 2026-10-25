export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  color: 'blue' | 'cyan' | 'purple' | 'green';
  features: string[];
  audience: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  status: 'estudando' | 'prototipo' | 'desenvolvimento' | 'publicado';
  problem: string;
  objective: string;
  technologies: Technology[];
  features: string[];
  screenshots: Screenshot[];
  learnings: string[];
  futurePlans: string[];
  description: string;
  shortDescription: string;
  featured: boolean;
}

export type ProjectCategory =
  | 'web'
  | 'crm'
  | 'automacao'
  | 'api'
  | 'banco-de-dados'
  | 'inteligencia-artificial';

export interface Technology {
  name: string;
  version?: string;
}

export interface Screenshot {
  url: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  readingTime: number;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  featured: boolean;
  status: 'rascunho' | 'publicado';
}

export type BlogCategory =
  | 'crm'
  | 'automacao'
  | 'desenvolvimento-web'
  | 'seo'
  | 'inteligencia-artificial'
  | 'negocios';

export interface Author {
  name: string;
  role: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'aprendendo' | 'intermediario' | 'avancado';
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  preferredContact: 'whatsapp' | 'email';
}
