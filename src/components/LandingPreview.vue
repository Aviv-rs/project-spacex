<template>
  <RouterLink :to="`/landing/${landing._id}`">
    <article className="landing-preview flex align-center">
      <!-- TODO: render landing info -->
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
