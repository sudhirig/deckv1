import { defineConfig, presetUno, presetTypography, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    // Modern card styles
    'card': 'rounded-2xl shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all duration-300',
    'card-hover': 'hover:scale-105 hover:shadow-2xl hover:bg-white/15',
    'card-glass': 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl',
    
    // CAPITAL GLOBAL Brand Text Gradients
    'text-gradient': 'bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green bg-clip-text text-transparent',
    'text-gradient-teal': 'bg-gradient-to-r from-brand-green to-brand-green-light bg-clip-text text-transparent',
    'text-gradient-green': 'bg-gradient-to-r from-brand-green to-brand-green-light bg-clip-text text-transparent',
    'text-gradient-brand': 'bg-gradient-to-r from-brand-green to-brand-green-light bg-clip-text text-transparent',
    'text-gradient-purple': 'bg-gradient-to-r from-brand-green-dark to-brand-green bg-clip-text text-transparent',
    'text-gradient-orange': 'bg-gradient-to-r from-brand-green to-brand-green-light bg-clip-text text-transparent',
    
    // CAPITAL GLOBAL Brand Glow Effects
    'glow': 'shadow-[0_0_30px_rgba(0,217,165,0.4)]',
    'glow-teal': 'shadow-[0_0_40px_rgba(0,217,165,0.5)]',
    'glow-green': 'shadow-[0_0_40px_rgba(0,217,165,0.5)]',
    'glow-brand': 'shadow-[0_0_50px_rgba(0,217,165,0.6)]',
    'glow-purple': 'shadow-[0_0_40px_rgba(0,217,165,0.5)]',
    'glow-orange': 'shadow-[0_0_40px_rgba(0,217,165,0.5)]',
    
    // Modern buttons
    'btn-modern': 'px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
    
    // Glassmorphism
    'glass': 'bg-white/10 backdrop-blur-xl border border-white/20',
    'glass-strong': 'bg-white/20 backdrop-blur-2xl border border-white/30',
    
    // CAPITAL GLOBAL Brand Backgrounds
    'bg-gradient-modern': 'bg-gradient-to-br from-brand-dark-green via-brand-dark-green-2 to-brand-dark-green',
    'bg-gradient-brand': 'bg-gradient-to-br from-brand-dark-green via-brand-dark-green-3 to-brand-dark-green-2',
    'bg-gradient-teal': 'bg-gradient-to-br from-brand-green/20 via-brand-green/30 to-brand-green-dark/20',
    'bg-gradient-green': 'bg-gradient-to-br from-brand-green/20 via-brand-green/30 to-brand-green-dark/20',
    'bg-gradient-purple': 'bg-gradient-to-br from-brand-green-dark/40 via-brand-green/40 to-brand-green-light/40',
    
    // Standardized Headline Typography
    'headline-1': 'text-6xl font-bold text-white mb-6',
    'headline-2': 'text-5xl font-bold text-white mb-5',
    'headline-3': 'text-4xl font-bold text-white mb-4',
    'headline-4': 'text-3xl font-semibold text-white mb-3',
    'headline-gradient': 'text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6',
    'headline-act': 'text-6xl font-bold text-white mb-6',
    'headline-subtitle': 'text-3xl font-light text-gray-300',
    'headline-body': 'text-2xl font-medium text-white mb-4',
    
    // Standardized Gradients (Black Theme)
    'gradient-text-white': 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent',
    'gradient-text-subtle': 'bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent',
  },
  theme: {
    colors: {
      // CAPITAL GLOBAL Brand Color Palette
      brand: {
        'dark-green': '#0a3324',
        'dark-green-2': '#0d3d2a',
        'dark-green-3': '#0f4a35',
        'green': '#00d9a5',
        'green-dark': '#00b88a',
        'green-light': '#33ffc4',
      },
      // Legacy primary mapping for compatibility
      primary: {
        50: '#f0fff9',
        100: '#ccfff0',
        200: '#99ffe0',
        300: '#66ffd1',
        400: '#33ffc4',
        500: '#00d9a5',
        600: '#00b88a',
        700: '#00996f',
        800: '#006a4d',
        900: '#0a3324',
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.5s ease-out',
      'scale-in': 'scaleIn 0.3s ease-out',
      'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      scaleIn: {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      pulseGlow: {
        '0%, 100%': { boxShadow: '0 0 20px rgba(0,217,165,0.5)' },
        '50%': { boxShadow: '0 0 40px rgba(0,217,165,0.8)' },
      },
    },
  },
})
