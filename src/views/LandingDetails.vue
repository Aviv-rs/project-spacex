<template>
  <section v-if="landing" class="landing-details main-layout">
    <div class="landing-img-container">
      <img :src="landingFields.imgUrl" alt="" />
    </div>
    <h1 class="name">Name: {{ landingFields.name }}</h1>
    <iframe
      width="420"
      height="315"
      :src="`https://www.youtube.com/embed/${landingFields.youtube_id}`"
    >
    </iframe>
  </section>
</template>

<script>
import { landingService } from '../services/landing.service'
export default {
  data() {
    return {
      landing: null,
    }
  },
  async created() {
    const { landingId } = this.$route.params
    if (!landingId) return this.$router.push('/')
    this.landing = await landingService.getById(landingId)
  },
  computed: {
    landingFields() {
      const {
        name,
        links: {
          youtube_id,
          patch: { large },
          wikipedia,
        },
        success,
      } = this.landing
      return { name, youtube_id, imgUrl: large, wikipedia, status: success }
    },
  },
}
</script>
