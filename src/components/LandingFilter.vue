<template>
  <fieldset class="landing-filter flex">
    <legend>Filter landings by status:</legend>

    <div v-for="option in filterOptions" class="form-group" :key="option">
      <input
        type="radio"
        :id="option"
        name="option"
        :value="option"
        :checked="option === 'all'"
        @change="handleChange"
      />
      <label :for="option">{{ option }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  methods: {
    filter() {},
    handleChange({ target }) {
      this.$emit('filter', { status: target.value })
    },
  },
  computed: {
    filterOptions() {
      return ['success', 'failed', 'all']
    },
  },
}
</script>
