<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <label class="relative inline-flex items-center cursor-default">
    <input v-model="value" type="checkbox" class="sr-only peer">
    <span
      class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"
    />
  </label>
</template>

<style scoped></style>
