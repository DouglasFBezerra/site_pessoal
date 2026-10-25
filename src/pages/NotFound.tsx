import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página Não Encontrada (404)"
        description="A página que você está procurando não existe ou foi movida."
        noindex
      />

      <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16">
        <div className="section-container text-center max-w-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan font-mono text-3xl font-extrabold mb-6">
            404
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Página não encontrada
          </h1>

          <p className="text-slate-400 text-base mb-8 leading-relaxed">
            O endereço acessado não existe, foi alterado ou está temporariamente indisponível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <HomeIcon size={18} />
              Voltar para a página inicial
            </Link>
            <Link to="/servicos" className="btn-secondary">
              Ver nossos serviços
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
