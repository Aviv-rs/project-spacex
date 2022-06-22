<template>
  <main class="app">
    <AppHeader />
    <RouterView />
  </main>
</template>

<script>
import '@/assets/styles/main.scss'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },
}
</script>

<style></style>
