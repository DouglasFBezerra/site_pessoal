import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Cpu, ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card } from '../components/ui/index';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { SITE_NAME } from '../utils/constants';

export default function Sobre() {
  const { open: openWhatsApp } = useWhatsApp();

  return (
    <>
      <SEO
        title="Sobre Douglas Soluções Digitais — Propósito e Trajetória"
        description="Conheça a história e o posicionamento da Douglas Soluções Digitais: desenvolvimento de sites de alta performance, sistemas CRM e automação prática para empresas."
        canonical="/sobre"
      />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Apresentação Profissional</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Tecnologia inteligente para transformar negócios
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A Douglas Soluções Digitais nasceu com uma missão clara: aproximar pequenas empresas, clínicas e profissionais autônomos de soluções tecnológicas funcionais, seguras e com foco em resultado real.
          </p>
        </div>
      </section>

      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Quem está por trás das soluções
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
              <p>
                Sou desenvolvedor focado em desenvolvimento web moderno, engenharia de sistemas CRM e automação de fluxos corporativos.
              </p>
              <p>
                Acredito que muitas empresas perdem clientes não por falta de demanda, mas pela desorganização no atendimento, falta de acompanhamento de propostas ou por não contarem com uma presença web profissional e veloz no Google.
              </p>
              <p>
                Por isso, desenvolvo aplicações com base em React, TypeScript, bancos de dados relacionais e plataformas como o n8n: ferramentas robustas que oferecem liberdade técnica, velocidade de carregamento e ausência de dependências proprietárias caras.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Target size={20} className="text-brand-cyan" />
                <h3 className="font-bold text-white text-base">Foco em Solução de Problemas</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tecnologia não é um fim em si mesma. O código existe para reduzir trabalho manual repetitivo, atrair clientes ou fechar mais propostas comerciais.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck size={20} className="text-green-400" />
                <h3 className="font-bold text-white text-base">Ética e Transparência</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sem promessas irreais de "lucro garantido" ou números inflados. O que está entregue é demonstrado; o que é protótipo é explicitado.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Cpu size={20} className="text-purple-400" />
                <h3 className="font-bold text-white text-base">Autonomia do Cliente</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você mantém a posse dos seus dados e dos seus sistemas. Sem lock-in em plataformas fechadas com mensalidades arbitrárias.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass-card p-8 lg:p-12 text-center max-w-3xl mx-auto rounded-3xl border-brand-blue/30">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Vamos conversar sobre o seu próximo projeto?
          </h2>
          <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
            Atendimento direto, sem intermediários. Agende uma conversa rápida por mensagem para tirar suas dúvidas técnicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openWhatsApp()} className="btn-primary">
              <MessageCircle size={18} />
              Iniciar conversa no WhatsApp
            </button>
            <Link to="/contato" className="btn-secondary">
              Ver formulário de contato
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
