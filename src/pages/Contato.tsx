import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { Section, SectionHeader, Card } from '../components/ui/index';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { WHATSAPP_URL, CONTACT_EMAIL, REGION } from '../utils/constants';

export default function Contato() {
  const { buildLink } = useWhatsApp();

  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    servico: 'criacao-de-sites',
    mensagem: '',
    preferencia: 'whatsapp',
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mensagem bem formatada para enviar via WhatsApp
    const servicoFormatado: Record<string, string> = {
      'criacao-de-sites': 'Criação de Site Profissional',
      'desenvolvimento-crm': 'Desenvolvimento de CRM',
      'automacao-n8n': 'Automação com n8n',
      'cardapios-digitais': 'Cardápio Digital',
      'outro': 'Outro projeto/parceria',
    };

    const texto = `*Novo Contato via Site*
*Nome:* ${form.nome}
${form.empresa ? `*Empresa:* ${form.empresa}\n` : ''}*Serviço:* ${servicoFormatado[form.servico] || form.servico}
*Preferência de retorno:* ${form.preferencia}
*Mensagem:* ${form.mensagem}`;

    // Abre o WhatsApp com a mensagem pronta
    const link = buildLink(texto);
    window.open(link, '_blank', 'noopener,noreferrer');
    setEnviado(true);
  };

  return (
    <>
      <SEO
        title="Contato e Orçamentos — Fale com Douglas Soluções Digitais"
        description="Solicite um orçamento para seu site, CRM ou projeto de automação. Atendimento ágil pelo WhatsApp ou formulário de contato."
        canonical="/contato"
      />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="section-container">
          <span className="section-label">Canais de Atendimento</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl text-balance">
            Vamos conversar sobre o seu projeto
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Preencha as informações abaixo para iniciar a conversa diretamente no WhatsApp ou utilize os canais diretos de contato.
          </p>
        </div>
      </section>

      <Section dark>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Informações diretas */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">WhatsApp Comercial</span>
                  <p className="text-sm font-bold text-white">(11) 97886-6744</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Atendimento rápido para dúvidas e orçamentos.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">E-mail</span>
                  <p className="text-sm font-bold text-white">{CONTACT_EMAIL}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Para envio de briefings detalhados e propostas.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Localização</span>
                  <p className="text-sm font-bold text-white">{REGION}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Atendimento presencial em São Paulo sob agendamento e projetos remotos em todo o Brasil.
              </p>
            </Card>
          </div>

          {/* Formulário integrado ao WhatsApp */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-xl font-bold text-white mb-2">Envie uma mensagem</h2>
              <p className="text-xs text-slate-400 mb-6">
                Ao clicar em enviar, você será direcionado ao WhatsApp com a mensagem estruturada pronta para envio.
              </p>

              {enviado && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-400 text-sm">
                  <CheckCircle2 size={18} />
                  <span>Mensagem estruturada com sucesso! Se a janela do WhatsApp não abriu automaticamente, clique no botão flutuante.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="nome">
                      Seu Nome *
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="form-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="empresa">
                      Nome da Empresa (opcional)
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Ex: Clínica Odonto Vida"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="servico">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="servico"
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className="form-input text-sm"
                    >
                      <option value="criacao-de-sites">Criação de Site Profissional</option>
                      <option value="desenvolvimento-crm">Desenvolvimento de Sistema CRM</option>
                      <option value="automacao-n8n">Automação de Processos com n8n</option>
                      <option value="cardapios-digitais">Cardápio Digital</option>
                      <option value="outro">Outro / Projeto Sob Medida</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="preferencia">
                      Preferencia de Contato
                    </label>
                    <select
                      id="preferencia"
                      value={form.preferencia}
                      onChange={(e) => setForm({ ...form, preferencia: e.target.value })}
                      className="form-input text-sm"
                    >
                      <option value="whatsapp">WhatsApp (Mais rápido)</option>
                      <option value="email">E-mail</option>
                      <option value="ligacao">Ligação telefônica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="mensagem">
                    Descreva resumidamente sua necessidade *
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o que sua empresa precisa e quais resultados espera..."
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="form-input text-sm"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Enviar mensagem pelo WhatsApp
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Respeitamos sua privacidade. Seus dados não são vendidos e são utilizados unicamente para responder a este contato.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
