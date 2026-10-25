import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../utils/constants';

/**
 * Gera um link do WhatsApp com mensagem pré-preenchida.
 * @param message Mensagem personalizada (opcional, usa a padrão se não informada)
 */
export function useWhatsApp() {
  const buildLink = (message?: string) => {
    const text = message ?? WHATSAPP_DEFAULT_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const open = (message?: string) => {
    window.open(buildLink(message), '_blank', 'noopener,noreferrer');
  };

  return { buildLink, open };
}
