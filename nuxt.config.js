
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:'Kaito Takase Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kaito Takase Portfolio' },
      { hid: 'X-UA-Compatible', 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:url', property: 'og:url', content: 'https://kaito-takase.dev/' },
      { hid: 'og:image', property: 'og:image', content: 'https://kaito-takase.dev/ogp.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Kaito Takase Portfolio' },
      { hid: 'og:title', property: 'og:title', content: 'Kaito Takase Portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'Kaito Takase Portfolio' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'Kaito Takase Portfolio' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'Kaito Takase Portfolio' },
      { property: 'apple-mobile-web-app-title', content: 'Kaito Takase Portfolio' },
      { property: 'application-name', content: 'Kaito Takase Portfolio' },
      { property: 'msapplication-TileColor', content: '#07029c' },
      { property: 'theme-color', content: '#07029c' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap'
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/style.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/scroll.js',
    '~plugins/smooth.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
