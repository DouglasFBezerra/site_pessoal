interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'full' | 'icon';
  className?: string;
}

export function Logo({ size = 'md', variant = 'full', className = '' }: LogoProps) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg' || size === 'hero';

  const iconDim = isSmall ? 36 : isLarge ? 56 : 42;

  return (
    <a
      href="/"
      className={`inline-flex items-center gap-3.5 no-underline group select-none ${className}`}
      aria-label="Douglas Soluções Digitais — Página inicial"
    >
      {/* 3D Stylized D Symbol */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconDim, height: iconDim }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]"
          aria-hidden="true"
        >
          <defs>
            {/* Main Gradient */}
            <linearGradient id="d-grad-main" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0055EE" />
              <stop offset="50%" stopColor="#0088FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            {/* Specular Highlight */}
            <linearGradient id="d-grad-light" x1="20" y1="15" x2="80" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#66EAFF" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>

            {/* Inner Shadow / Depth */}
            <linearGradient id="d-grad-depth" x1="45" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#002266" />
              <stop offset="100%" stopColor="#0044BB" />
            </linearGradient>

            {/* Arrow fold */}
            <linearGradient id="d-arrow" x1="15" y1="40" x2="50" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>

          {/* Outer Curved Body of the D */}
          <path
            d="M 22 15 L 55 15 C 75 15, 88 28, 88 50 C 88 72, 75 85, 55 85 L 22 85 L 22 70 L 52 70 C 66 70, 72 61, 72 50 C 72 39, 66 30, 52 30 L 22 30 Z"
            fill="url(#d-grad-main)"
          />

          {/* Upper Top Edge Facet (3D effect) */}
          <path
            d="M 22 15 L 55 15 C 75 15, 88 28, 88 50 L 72 50 C 72 32, 64 26, 52 26 L 22 26 Z"
            fill="url(#d-grad-light)"
            opacity="0.9"
          />

          {/* Inner Chevron / Arrow Pointing Right */}
          <path
            d="M 22 30 L 48 50 L 22 70 L 22 55 L 35 50 L 22 42 Z"
            fill="url(#d-arrow)"
          />

          {/* Depth shadow inside the curve */}
          <path
            d="M 52 30 C 65 30, 72 39, 72 50 C 72 61, 65 70, 52 70 L 48 50 Z"
            fill="url(#d-grad-depth)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Typography */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-[0.2em] font-extrabold text-white text-base sm:text-lg leading-none uppercase">
            <span>DOUGL</span>
            {/* The signature A with blue triangle */}
            <span className="relative inline-block mx-[0.5px]">
              <span className="text-white">A</span>
              <span className="absolute bottom-[2px] left-[2.5px] w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[5px] border-b-brand-cyan" />
            </span>
            <span>S</span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-semibold text-brand-cyan mt-1 leading-none">
            Soluções Digitais
          </span>
        </div>
      )}
    </a>
  );
}
