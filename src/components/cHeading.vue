<template>
  <h2 class="c-heading">{{ text }}</h2>
</template>

<script>
export default {
  name: 'cHeading',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.c-heading {
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
}
</style>
