// nuxt.config.ts
export default defineNuxtConfig({
  srcDir: 'app',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  nitro: { compatibilityDate: '2025-08-18' }
})
