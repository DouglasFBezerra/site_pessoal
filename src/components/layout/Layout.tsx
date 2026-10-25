import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useWhatsApp } from '../../hooks/useWhatsApp';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const { buildLink } = useWhatsApp();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href={buildLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm">
          WhatsApp
        </span>
      </a>

      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary text-sm"
      >
        Ir para o conteúdo principal
      </a>
    </div>
  );
}
