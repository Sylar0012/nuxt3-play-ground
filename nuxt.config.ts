import Aura from '@primeuix/themes/aura';

// nuxt.config.ts
export default defineNuxtConfig({
  srcDir: 'app',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/styles.scss'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  nitro: { compatibilityDate: '2025-08-18' },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  },
})
