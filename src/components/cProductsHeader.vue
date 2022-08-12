<template>
  <div class="c-product-header">
    <c-heading text="Exclusive Offer"/>
    <c-see-all />
  </div>
</template>

<script>
import cHeading from '../components/cHeading.vue';
import cSeeAll from './cSeeAll.vue';

export default {
  name: 'cProductsHeader',
  components: {
    cSeeAll,
    cHeading
  }
}
</script>

<style scoped lang="scss">
.c-product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.58rem;
}
</style>
