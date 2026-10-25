import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, MessageCircle } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, Card, Badge } from '../components/ui/index';
import { getBlogPostBySlug, getCategoryLabel, blogPosts } from '../data/blog-posts';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const { open: openWhatsApp } = useWhatsApp();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.featured))
    .slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Douglas Soluções Digitais',
      url: 'https://douglassolucoes.com.br',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://douglassolucoes.com.br/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        author={post.author.name}
        jsonLd={jsonLd}
      />

      <article className="pt-32 pb-20">
        <div className="section-container max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para o Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="blue">{getCategoryLabel(post.category)}</Badge>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={14} /> {post.readingTime} min de leitura
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar size={14} /> Publicado em {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 text-balance">
              {post.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8 pb-8 border-b border-white/10">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan font-bold text-sm">
                D
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>
          </header>

          {/* Conteúdo formatado */}
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4 pt-4 border-t border-white/5">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map((li) => li.replace('- ', ''));
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-300">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={idx} className="font-semibold text-white text-base">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              return (
                <p key={idx} className="text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-2">
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="tech-tag text-xs">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA no final do artigo */}
          <div className="mt-16 glass-card p-8 text-center rounded-2xl border-brand-blue/30">
            <h3 className="text-xl font-bold text-white mb-2">
              Gostou do conteúdo ou tem dúvidas sobre como aplicar no seu negócio?
            </h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
              Vamos conversar sem compromisso para esclarecer sua dúvida técnica ou comercial.
            </p>
            <button
              onClick={() => openWhatsApp(`Olá! Li o artigo "${post.title}" e gostaria de tirar uma dúvida.`)}
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Tirar dúvida pelo WhatsApp
            </button>
          </div>

          {/* Artigos Relacionados */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-white mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Card key={rPost.id} className="p-6">
                    <Badge variant="blue" className="mb-3">{getCategoryLabel(rPost.category)}</Badge>
                    <h4 className="text-lg font-bold text-white mb-2">
                      <Link to={`/blog/${rPost.slug}`} className="hover:text-brand-cyan transition-colors">
                        {rPost.title}
                      </Link>
                    </h4>
                    <p className="text-slate-400 text-xs mb-4 line-clamp-2">{rPost.excerpt}</p>
                    <Link to={`/blog/${rPost.slug}`} className="text-brand-cyan text-xs font-semibold hover:underline">
                      Ler mais →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
