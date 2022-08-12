<template>
  <router-link class="c-see-all"
               to="/blank">

    <span class="c-see-all__text">See All</span>
  </router-link>
</template>

<script>
export default {
  name: 'cSeeAll'
}
</script>

<style scoped lang="scss">
.c-see-all {
  text-decoration: none;

  &__text {
    font-size: 1.6rem;
    font-weight: 600;
    font-style: normal;
    color: #53B175;
  }
}
</style>
