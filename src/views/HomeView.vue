<template>
  <section class="home-page">
    <LandingList v-if="landings" :landings="landings" />
  </section>
</template>

<script>
import LandingList from '../components/LandingList.vue'
import { landingService } from '../services/landing.service'
export default {
  data() {
    return {
      landings: null,
    }
  },
  components: {
    LandingList,
  },
  async created() {
    this.landings = await landingService.query()
  },
}
</script>
