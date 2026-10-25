import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card, Badge } from '../components/ui/index';
import { blogPosts, getCategoryLabel } from '../data/blog-posts';
import type { BlogCategory } from '../types';

const categories: { label: string; value: 'todas' | BlogCategory }[] = [
  { label: 'Todos os Artigos', value: 'todas' },
  { label: 'CRM', value: 'crm' },
  { label: 'Automação', value: 'automacao' },
  { label: 'Desenvolvimento Web', value: 'desenvolvimento-web' },
  { label: 'SEO & GEO', value: 'seo' },
];

export default function Blog() {
  const [selectedCat, setSelectedCat] = useState<'todas' | BlogCategory>('todas');

  const filteredPosts = selectedCat === 'todas'
    ? blogPosts
    : blogPosts.filter((p) => p.category === selectedCat);

  return (
    <>
      <SEO
        title="Blog Técnico — Artigos sobre Sites, CRM, n8n e SEO"
        description="Artigos explicativos e tutoriais práticos sobre desenvolvimento de sistemas, integração de processos com n8n, estratégias de SEO e GEO e gestão comercial."
        canonical="/blog"
      />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Artigos & Tutoriais</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Conhecimento prático sobre tecnologia e negócios
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Conteúdo técnico original, sem fórmulas mágicas. Textos pensados para ajudar empresários e profissionais liberais a tomarem melhores decisões de tecnologia.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCat(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCat === cat.value
                    ? 'bg-brand-blue text-white shadow-brand-sm'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="p-6 flex flex-col justify-between" hover>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">{getCategoryLabel(post.category)}</Badge>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock size={12} /> {post.readingTime} min de leitura
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-slate-500 mb-4">
                  <span>{post.author.name}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.publishedAt}
                  </span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="btn-secondary text-sm w-full justify-center group"
                >
                  Ler artigo completo
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
