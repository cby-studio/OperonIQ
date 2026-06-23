import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0E1D33',
          850: '#10243F',
        },
        operon: {
          blue: '#1495FF',
          cyan: '#20C5E8',
          green: '#44D062',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(32, 197, 232, 0.16)',
        'line-glow': '0 0 24px rgba(20, 149, 255, 0.35)',
        glass:
          '0 24px 80px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
        'signal-gradient':
          'linear-gradient(135deg, rgba(20,149,255,0.22), rgba(32,197,232,0.16) 42%, rgba(68,208,98,0.14))',
        'aurora-field':
          'radial-gradient(circle at 18% 18%, rgba(20,149,255,0.16), transparent 34%), radial-gradient(circle at 78% 16%, rgba(32,197,232,0.12), transparent 32%), radial-gradient(circle at 52% 82%, rgba(68,208,98,0.11), transparent 34%), linear-gradient(135deg, #071426 0%, #0E1D33 48%, #071426 100%)',
        'glass-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 46%, rgba(32,197,232,0.06))',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slow-float': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        'signal-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 18s ease-in-out infinite',
        'slow-float': 'slow-float 7s ease-in-out infinite',
        'signal-pulse': 'signal-pulse 3.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
