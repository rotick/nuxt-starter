<template>
  <NuxtPage />
</template>
<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const i18nHead = useLocaleHead({
  addSeoAttributes: true
})
const url = useRequestURL()
// const origin = 'https://' + url.host
const origin = url.origin
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang
  },
  titleTemplate: titleChunk => {
    return (route.name as string).startsWith('index') && !route.query.q ? titleChunk || t('seoTitle') : `${titleChunk} - ${t('siteName')}`
  },
  link: [
    ...(i18nHead.value.link || []),
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
  meta: [
    ...(i18nHead.value?.meta || []),
    { name: 'description', content: t('seoDescription') },
    { property: 'og:site_name', content: t('siteName') },
    { property: 'og:url', content: `${origin}/` },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('seoTitle') },
    { property: 'og:description', content: t('seoDescription') },
    { property: 'og:image', content: `${origin}/cover.jpg` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:domain', content: url.host },
    { name: 'twitter:url', content: `${origin}/` },
    { name: 'twitter:title', content: t('seoTitle') },
    { name: 'twitter:description', content: t('seoDescription') },
    { name: 'twitter:image', content: `${origin}/cover.jpg` }
  ]
})
</script>
