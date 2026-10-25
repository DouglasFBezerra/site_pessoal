import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const navItems = [
  { label: 'Início', href: '/' },
  {
    label: 'Serviços',
    href: '/servicos',
    children: [
      { label: 'Criação de Sites', href: '/criacao-de-sites' },
      { label: 'Sistemas CRM', href: '/desenvolvimento-crm' },
      { label: 'Automação n8n', href: '/automacao-n8n' },
      { label: 'Cardápios Digitais', href: '/cardapios-digitais' },
    ],
  },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Conhecimentos', href: '/conhecimentos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { open: openWhatsApp } = useWhatsApp();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/10 shadow-glass'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.href ? null : item.href)
                    }
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.href && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 glass-card py-1 shadow-glass"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          role="menuitem"
                          className={({ isActive }: { isActive: boolean }) =>
                            `block px-4 py-2.5 text-sm transition-colors ${
                              isActive
                                ? 'text-brand-cyan bg-brand-blue/10'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-brand-cyan bg-brand-blue/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp()}
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              Solicitar orçamento
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-white/10 bg-brand-black/98 backdrop-blur-md"
          role="dialog"
          aria-label="Menu de navegação"
        >
          <nav className="section-container py-4 flex flex-col gap-1" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <div key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-brand-cyan bg-brand-blue/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-0.5 mt-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }: { isActive: boolean }) =>
                          `block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                            isActive
                              ? 'text-brand-cyan bg-brand-blue/10'
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => openWhatsApp()}
                className="w-full btn-primary text-sm"
              >
                Solicitar orçamento pelo WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
