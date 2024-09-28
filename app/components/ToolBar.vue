<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
// const localePath = useLocalePath()
const currentLocale = computed(() => {
  return locales.value.find((i: any) => i.code === locale.value)
})
const rtl = computed(() => ['ar', 'he'].includes(locale.value))

function openAuthWindow() {
  window.open('/auth/google', 'auth', 'popup,width=800,height=600')
}
</script>

<template>
  <div class="flex items-center">
    <DropDown
      class="flex items-center relative cursor-default shrink-0"
      :class="rtl ? 'flex-row-reverse pr-2 pl-2' : 'pl-4'"
      :top="30"
      :left="0"
    >
      <template #default="{ active }">
        <i class="icon-[ph--translate-bold] text-xl color-action shrink-0" :class="rtl ? 'ml-1' : 'mr-1'" role="img" aria-hidden="true" />
        <span class="color-action shrink-0 select-none">{{ currentLocale?.name }}</span>
        <i
          class="icon-[material-symbols--arrow-drop-down-rounded] text-2xl color-action transition-all shrink-0"
          role="img"
          :class="{ 'rotate-180': active }"
          aria-hidden="true"
        />
      </template>
      <template #content="{ close }">
        <div class="card w-[264px] p-2 rounded-2xl flex flex-wrap">
          <NuxtLink
            v-for="l in locales"
            :key="l.code"
            :to="switchLocalePath(l.code)"
            class="h-8 px-2 rounded-xl w-[122px] line-clamp-1 break-all leading-8"
            :class="l.code === locale ? 'color-disable cursor-default' : 'hover:bg-gray-100 dark:hover:bg-gray-700 hover:color-action'"
            @click="close()"
          >
            {{ l.name }}
          </NuxtLink>
        </div>
      </template>
    </DropDown>
    <ThemeToggle />
    <a href="https://github.com/rotick/nuxt-starter" target="_blank" aria-label="Folk on GitHub" class="text-2xl ml-4 flex items-center">
      <i class="icon-[mdi--github]" role="img" aria-hidden="true" />
    </a>
    <button v-if="runtimeConfig.public.googleAuth" class="h-8 rounded-lg bg-primary-500 text-white pr-2 flex items-center ml-4 overflow-hidden" @click="openAuthWindow">
      <span class="center h-full w-8 bg-white dark:bg-gray-700 text-xl mr-1">
        <i class="icon-[flat-color-icons--google]" role="img" aria-hidden="true" />
      </span>
      Sign in with Google
    </button>
  </div>
</template>

<style scoped></style>
