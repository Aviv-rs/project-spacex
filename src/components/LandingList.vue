<template>
  <section className="landing-list">
    <TransitionGroup name="list">
      <LandingPreview
        v-for="landing in landings"
        :key="landing.id"
        :landing="landing"
      />
    </TransitionGroup>
  </section>
</template>

<script>
import LandingPreview from './LandingPreview.vue'
export default {
  emits: ['landingRemoved'],
  props: {
    landings: {
      required: true,
      type: Array,
    },
  },
  components: {
    LandingPreview,
  },
}
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
