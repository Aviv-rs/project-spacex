<template>
  <section class="home-page main-layout">
    <!-- <LandingFilter @filter="onFilter" /> -->
    <LandingList v-if="landings" :landings="landings" />
  </section>
</template>

<script>
import LandingFilter from '../components/LandingFilter.vue'
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
    LandingFilter,
  },
  methods: {
    async onFilter(filterBy) {
      this.contacts = await landingService.query(filterBy)
    },
  },
  async created() {
    this.landings = await landingService.query()
  },
}
</script>
