<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('seoTitle')
})
</script>

<template>
  <header class="flex items-center justify-between px-6 h-12">
    <Logo />
    <ToolBar />
  </header>
</template>

<style>

</style>
