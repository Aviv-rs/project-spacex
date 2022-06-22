<template>
  <RouterLink :to="`/landing/${landing.id}`">
    <article className="landing-preview flex align-center column">
      <div class="landing-img-container">
        <img :src="landingPatchImg" alt="" />
      </div>
      <h3 class="landing-name">
        {{ landing.name }}
      </h3>
    </article>
  </RouterLink>
</template>

<script>
export default {
  props: {
    landing: {
      required: true,
      type: Object,
    },
  },
  computed: {
    landingPatchImg() {
      return this.landing.links.patch.large
    },
  },
}
</script>
