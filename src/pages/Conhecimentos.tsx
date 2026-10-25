import { Code2, Server, Workflow, Wrench } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card, Badge } from '../components/ui/index';
import { skills, getLevelLabel } from '../data/skills';

export default function Conhecimentos() {
  const levelVariant = (level: string) => {
    switch (level) {
      case 'avancado': return 'green';
      case 'intermediario': return 'cyan';
      default: return 'yellow';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) return <Code2 size={24} className="text-brand-blue" />;
    if (category.includes('Backend')) return <Server size={24} className="text-brand-cyan" />;
    if (category.includes('Automação')) return <Workflow size={24} className="text-purple-400" />;
    return <Wrench size={24} className="text-yellow-400" />;
  };

  return (
    <>
      <SEO
        title="Conhecimentos Técnicos e Stack de Desenvolvimento"
        description="Stack tecnológica detalhada: Frontend (React, TypeScript, Tailwind), Backend & Banco de dados (Supabase, PostgreSQL, Node), Automação (n8n, Docker, APIs)."
        canonical="/conhecimentos"
      />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Habilidades & Domínio Técnico</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Tecnologias, ferramentas e evolução contínua
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Aqui exponho com transparência as ferramentas que utilizo no dia a dia, meu nível de proficiência em cada uma e as tecnologias que estou estudando ativamente.
          </p>
        </div>
      </section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <Card key={group.category} className="p-8">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {getCategoryIcon(group.category)}
                </div>
                <h2 className="text-xl font-bold text-white">{group.category}</h2>
              </div>

              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name} className="glass-card p-4 rounded-xl flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">{skill.name}</span>
                        <Badge variant={levelVariant(skill.level)} className="text-[10px] py-0.5 px-2">
                          {getLevelLabel(skill.level)}
                        </Badge>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400">{skill.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Metodologia & Filosofia"
          title="Princípios de Desenvolvimento"
          description="Como encaro a criação de software para clientes e projetos autorais."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-2 text-lg">1. Simplicidade Primeiro</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Não adicionar dependências ou arquiteturas complexas sem necessidade real do negócio. Código sustentável e fácil de manter.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-2 text-lg">2. Transparência Técnica</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Diferenciar claramente o que já é produto validado de testes conceituais e protótipos em fase de validação.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-2 text-lg">3. Foco na Conversão</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Interfaces devem guiar o usuário com clareza até o objetivo: solicitar um orçamento, tirar uma dúvida ou concluir uma compra.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
