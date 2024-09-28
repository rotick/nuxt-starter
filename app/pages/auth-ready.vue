<script setup lang="ts">
function authReady() {
  const channel = new BroadcastChannel('authChannel')
  channel.postMessage('auth-ready')
  channel.addEventListener('message', function (event) {
    if (event.data === 'session-refreshed') {
      window.close()
    }
  })
}
onMounted(authReady)
</script>

<template>
  <main class="w-[100vw] h-[100vh] center">
    <div class="center flex-col gap-4">
      <i class="icon-[icon-park-outline--success] text-6xl" role="img" aria-hidden="true" />
      <p>Auth Success</p>
      <!--      <button @click="authReady">test authReady</button> -->
    </div>
  </main>
</template>

<style scoped>

</style>
