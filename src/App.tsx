import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import CriacaoDeSites from './pages/CriacaoDeSites';
import DesenvolvimentoCRM from './pages/DesenvolvimentoCRM';
import AutomacaoN8n from './pages/AutomacaoN8n';
import CardapiosDigitais from './pages/CardapiosDigitais';
import Projetos from './pages/Projetos';
import ProjetoDetalhe from './pages/ProjetoDetalhe';
import Conhecimentos from './pages/Conhecimentos';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import NotFound from './pages/NotFound';

export default function App() {
  return (
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
  );
}
