/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080C14',
          navy: '#0A1628',
          'navy-light': '#0D1F3C',
          blue: '#0066FF',
          'blue-dark': '#0052CC',
          'blue-light': '#3385FF',
          cyan: '#00D4FF',
          'cyan-dark': '#00AACC',
          'cyan-light': '#66E2FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080C14 0%, #0A1628 100%)',
        'gradient-hero': 'radial-gradient(ellipse at 60% 0%, rgba(0,102,255,0.15) 0%, transparent 70%), linear-gradient(180deg, #080C14 0%, #0A1628 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(0,102,255,0.05) 0%, rgba(0,212,255,0.05) 100%)',
      },
      boxShadow: {
        'brand': '0 0 30px rgba(0,102,255,0.3)',
        'brand-sm': '0 0 15px rgba(0,102,255,0.2)',
        'cyan': '0 0 20px rgba(0,212,255,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            a: { color: '#0066FF' },
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            strong: { color: '#ffffff' },
            code: { color: '#00D4FF' },
          },
        },
      },
    },
  },
  plugins: [],
}
