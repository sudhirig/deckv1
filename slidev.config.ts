import { defineConfig } from '@slidev/types'

export default defineConfig({
  theme: 'seriph',
  
  // CAPITAL GLOBAL Brand Fonts - Poppins (secondary) + Montserrat (primary alternative)
  fonts: {
    sans: 'Poppins, Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, "Fira Code", Consolas, monospace',
    serif: 'Poppins, Montserrat, serif',
  },

  // High-quality PDF export settings
  export: {
    format: 'pdf',
    timeout: 30000,
    dark: true,
    withClicks: false,
    executablePath: undefined, // Auto-detect
    quality: 100,
    // High resolution for crisp PDFs
    scale: 2,
  },

  // Modern UI enhancements
  htmlAttrs: {
    lang: 'en',
  },

  // UnoCSS configuration for modern styling
  unoCSS: {
    shortcuts: {
      'card': 'rounded-2xl shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 p-6',
      'card-hover': 'transition-all duration-300 hover:scale-105 hover:shadow-2xl',
      'gradient-text': 'bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent',
      'glass': 'bg-white/10 backdrop-blur-xl border border-white/20',
      'glow': 'shadow-[0_0_30px_rgba(56,189,248,0.3)]',
      'glow-teal': 'shadow-[0_0_30px_rgba(20,184,166,0.4)]',
      'glow-green': 'shadow-[0_0_30px_rgba(34,197,94,0.4)]',
    },
  },

  // Vite configuration for modern tooling
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core'],
    },
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
  },

  // Drawing persist (for presentations)
  drawings: {
    persist: false,
    enabled: true,
  },

  // Modern slide transitions
  transitions: ['slide-left', 'fade', 'zoom'],

  // Color scheme - dark mode for modern look
  colorSchema: 'dark',

  // Highlighter for code blocks
  highlighter: 'shiki',
  
  // Background configuration
  background: 'dark',
})
