import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Card } from '../components/ui/index';
import { SITE_NAME, CONTACT_EMAIL } from '../utils/constants';

export default function PoliticaPrivacidade() {
  return (
    <>
      <SEO
        title="Política de Privacidade e Proteção de Dados"
        description="Termos de privacidade e diretrizes de tratamento de informações em conformidade com a LGPD (Lei Geral de Proteção de Dados)."
        canonical="/politica-de-privacidade"
      />

      <article className="pt-32 pb-20">
        <div className="section-container max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para o início
          </Link>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-cyan text-xs font-semibold mb-4">
              <Shield size={14} /> Privacidade e LGPD
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-slate-400 text-sm">
              Última atualização: Outubro de 2026
            </p>
          </header>

          <Card className="p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Compromisso com a Privacidade</h2>
              <p>
                A <strong>{SITE_NAME}</strong> preza pela transparência, ética e segurança das informações de seus clientes, usuários e parceiros. Esta Política de Privacidade descreve como tratamos os dados coletados através deste website, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Coleta de Informações</h2>
              <p className="mb-2">
                Coletamos apenas as informações estritamente necessárias para viabilizar o atendimento e a prestação dos serviços solicitados:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><strong>Formulário de Contato e WhatsApp:</strong> Nome, empresa (opcional), telefone/WhatsApp, e-mail e informações pertinentes ao briefing do projeto fornecidas espontaneamente pelo usuário.</li>
                <li><strong>Dados de Navegação Anônimos:</strong> Informações técnicas básicas de acesso (como tipo de navegador e resolução de tela) para garantir o funcionamento correto e a responsividade da aplicação. Não comercializamos dados de navegação.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Finalidade do Tratamento</h2>
              <p>
                Os dados fornecidos são utilizados unicamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 mt-2">
                <li>Responder a dúvidas, pedidos de orçamento e contatos comerciais;</li>
                <li>Elaborar propostas técnicas e contratos de prestação de serviços digitais;</li>
                <li>Cumprir eventuais obrigações legais e fiscais decorrentes da prestação do serviço.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Armazenamento e Segurança</h2>
              <p>
                Não armazenamos dados sensíveis de pacientes, clientes de terceiros, senhas ou credenciais de produção no código frontend ou repositórios públicos. Toda comunicação sensível referente a desenvolvimento de projetos privados é tratada sob sigilo profissional.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Direitos do Titular (LGPD)</h2>
              <p>
                Conforme previsto no art. 18 da LGPD, você pode, a qualquer momento, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a eliminação dos seus dados de contato dos nossos registros.
              </p>
              <p className="mt-2">
                Para exercer seus direitos, basta entrar em contato pelo e-mail: <span className="text-brand-cyan">{CONTACT_EMAIL}</span>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">6. Alterações desta Política</h2>
              <p>
                Esta política pode ser atualizada periodicamente para refletir melhorias técnicas e novos recursos implementados na plataforma. As atualizações entrarão em vigor a partir da data de publicação nesta página.
              </p>
            </section>
          </Card>
        </div>
      </article>
    </>
  );
}
