import locale from './locale'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 5000
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/eslint-module', '@nuxtjs/i18n', 'nuxt-gtag', '@nuxtjs/google-fonts', '@nuxtjs/seo'],
  site: {
    url: '',
    name: 'NuxtStarter',
    description: ''
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'NuxtStarter',
      url: '',
      logo: '',
      founder: {
        type: 'Person',
        name: 'dongnaebi',
        sameAs: ['https://twitter.com/dongnaebi', 'https://github.com/dongnaebi']
      }
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },
  googleFonts: {
    families: {
      Roboto: [300, 500, 700]
    }
  },
  gtag: {
    id: ''
  },
  eslint: {
    lintOnStart: false
  },
  i18n: {
    baseUrl: '',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      cookieCrossOrigin: true
    },
    langDir: './lang',
    locales: locale
  },
  nitro: {
    // preset: 'cloudflare_pages'
  },
  routeRules: {
    // '/': { prerender: true }
  }
})
