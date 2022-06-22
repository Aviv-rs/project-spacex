<template>
  <RouterLink :to="`/landing/${landing._id}`">
    <article className="landing-preview flex align-center">
      <div class="landing-img-container">
        <!-- <img :src="" alt=""> -->
      </div>
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
  emits: ['landingSelected'],
}
</script>
