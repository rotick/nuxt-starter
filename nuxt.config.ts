import type { LocaleObject } from '@nuxtjs/i18n'
import locales from './locales'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-28',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },

  devServer: {
    port: 5000
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'nuxt-auth-utils',
    '@nuxthub/core'
  ],

  hub: {
    database: true
  },

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
      Inter: [300, 500, 700]
    }
  },

  gtag: {
    id: ''
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
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
    lazy: true,
    langDir: '../locales',
    locales: locales as LocaleObject[]
  },

  runtimeConfig: {
    public: {
      googleAuth: Boolean(process.env.GOOGLE_AUTH || (process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID && process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET))
    }
  },

  nitro: {
    // preset: 'cloudflare_pages'
  },

  routeRules: {
    // '/': { prerender: true }
  }
})
