import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { WHATSAPP_URL, CONTACT_EMAIL, SOCIAL_LINKS, SITE_NAME } from '../../utils/constants';

const footerLinks = {
  services: [
    { label: 'Criação de Sites', href: '/criacao-de-sites' },
    { label: 'Sistemas CRM', href: '/desenvolvimento-crm' },
    { label: 'Automação com n8n', href: '/automacao-n8n' },
    { label: 'Cardápios Digitais', href: '/cardapios-digitais' },
  ],
  site: [
    { label: 'Início', href: '/' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Conhecimentos', href: '/conhecimentos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/10" role="contentinfo">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Desenvolvimento de soluções digitais para empresas que desejam fortalecer
              sua presença on-line, organizar seus processos e melhorar o relacionamento
              com seus clientes.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors"
              >
                <Mail size={16} />
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="mt-6 p-3 glass-card rounded-xl">
              <p className="text-xs text-slate-500">
                Atendimento em São Paulo, SP e projetos remotos em todo o Brasil.
              </p>
            </div>
          </div>
        </div>

        <div className="glow-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart size={14} className="text-brand-blue fill-brand-blue mx-0.5" />
            <span>em São Paulo</span>
          </div>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
