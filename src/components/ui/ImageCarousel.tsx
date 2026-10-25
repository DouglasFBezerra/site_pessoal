import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { Screenshot } from '../../types';

interface ImageCarouselProps {
  images: Screenshot[];
  autoPlayMs?: number;
}

export function ImageCarousel({ images, autoPlayMs = 5000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  // Troca automática (pausa ao passar o mouse ou com a imagem ampliada)
  useEffect(() => {
    if (total < 2 || paused || zoomed) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), autoPlayMs);
    return () => window.clearInterval(id);
  }, [total, paused, zoomed, autoPlayMs]);

  // Teclado: setas navegam, Esc fecha a imagem ampliada
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
      if (e.key === 'Escape') setZoomed(false);
    };
    if (!zoomed) return;
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed, total]);

  if (total === 0) return null;

  const current = images[index];

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className="glass-card p-3 sm:p-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Galeria de imagens do projeto"
      >
        <div
          className="relative overflow-hidden rounded-xl bg-slate-950/60"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={current.url}
            src={current.url}
            alt={current.alt}
            className="mx-auto block max-h-[75vh] w-full animate-fade-in object-contain"
            draggable={false}
          />

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="absolute right-3 top-3 rounded-lg bg-slate-900/70 p-2 text-white transition-colors hover:bg-slate-900"
            aria-label="Ampliar imagem"
          >
            <Maximize2 size={16} />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white transition-colors hover:bg-slate-900"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white transition-colors hover:bg-slate-900"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-1">
          <p className="text-sm text-slate-400">{current.caption ?? current.alt}</p>
          {total > 1 && (
            <div className="flex flex-shrink-0 items-center gap-2">
              {images.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Ir para a imagem ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-brand-cyan' : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 rounded-full bg-slate-800 p-2 text-white hover:bg-slate-700"
            aria-label="Fechar"
          >
            <X size={22} />
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(index - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800 p-3 text-white hover:bg-slate-700"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(index + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800 p-3 text-white hover:bg-slate-700"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <img
            src={current.url}
            alt={current.alt}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
