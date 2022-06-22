<template>
  <section class="home-page">
    <LandingList :landings="landings" />
  </section>
</template>

<script>
import LandingList from '../components/LandingList.vue'

export default {
  components: {
    LandingList,
  },
}
</script>

<style></style>
