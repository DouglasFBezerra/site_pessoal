import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Servicos = lazy(() => import('./pages/Servicos'));
const CriacaoDeSites = lazy(() => import('./pages/CriacaoDeSites'));
const DesenvolvimentoCRM = lazy(() => import('./pages/DesenvolvimentoCRM'));
const AutomacaoN8n = lazy(() => import('./pages/AutomacaoN8n'));
const CardapiosDigitais = lazy(() => import('./pages/CardapiosDigitais'));
const Projetos = lazy(() => import('./pages/Projetos'));
const ProjetoDetalhe = lazy(() => import('./pages/ProjetoDetalhe'));
const Conhecimentos = lazy(() => import('./pages/Conhecimentos'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Contato = lazy(() => import('./pages/Contato'));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 text-sm">Carregando...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/criacao-de-sites" element={<CriacaoDeSites />} />
              <Route path="/desenvolvimento-crm" element={<DesenvolvimentoCRM />} />
              <Route path="/automacao-n8n" element={<AutomacaoN8n />} />
              <Route path="/cardapios-digitais" element={<CardapiosDigitais />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
              <Route path="/conhecimentos" element={<Conhecimentos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
