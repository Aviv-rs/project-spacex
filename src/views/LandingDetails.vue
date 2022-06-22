<template>
  <section v-if="landing" class="landing-details main-layout flex">
    <div class="landing-info flex column align-center">
      <div class="landing-img-container">
        <img :src="landingFields.imgUrl" alt="" />
      </div>

      <div class="txt-fields-container">
        <h1 class="name">{{ landingFields.name }}</h1>
        <span class="status">
          Status:
          <span :class="landingFields.status.toLowerCase()">
            {{ landingFields.status }}</span
          >
        </span>
        <p class="summary">Short summary: {{ landingFields.details }}</p>
        <ul class="landing-links clean-list flex">
          <span class="read-more"> Read more: </span>
          <li class="link">
            <a target="_blank" :href="landingFields.wikipedia"
              >Wikipedia page</a
            >
          </li>
          <li class="link">
            <a target="_blank" :href="landingFields.article">SpaceX article</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="100%"
        height="450"
        :src="`https://www.youtube.com/embed/${landingFields.youtube_id}`"
      >
      </iframe>
    </div>
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
        details,
        links: {
          youtube_id,
          article,
          patch: { large },
          wikipedia,
        },
        success,
      } = this.landing
      return {
        name,
        youtube_id,
        imgUrl: large,
        wikipedia,
        status: success ? 'Success' : 'Failed',
        details,
        article,
      }
    },
  },
}
</script>
