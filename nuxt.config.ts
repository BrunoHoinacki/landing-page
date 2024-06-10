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
      title: 'Landing Page para o Dia dos Namorados em Gramado',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descubra os melhores lugares e atividades para aproveitar o Dia dos Namorados em Gramado com nosso guia completo.' },
        { name: 'keywords', content: 'Dia dos Namorados, Gramado, Turismo, Restaurantes Românticos, Pontos Turísticos' },
        { name: 'author', content: 'Seu Nome ou Empresa' },
        { property: 'og:title', content: 'Landing Page para o Dia dos Namorados em Gramado' },
        { property: 'og:description', content: 'Descubra os melhores lugares e atividades para aproveitar o Dia dos Namorados em Gramado com nosso guia completo.' },
        { property: 'og:image', content: '/path-to-your-image.jpg' },
        { property: 'og:url', content: 'https://seusite.com' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'canonical', href: 'https://seusite.com' }
      ],
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
