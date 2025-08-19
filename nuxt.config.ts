import Aura from '@primeuix/themes/aura';

// nuxt.config.ts
export default defineNuxtConfig({
  srcDir: 'app',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/styles.scss'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  nitro: { compatibilityDate: '2025-08-18' }
})
