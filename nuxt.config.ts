export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/global.css'
  ],
  build: {
    transpile: ['bootstrap']
  },
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        }
      ]
    }
  },
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  modules: [
    '@nuxt/ui'
  ]
})
