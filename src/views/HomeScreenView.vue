<template>
  <c-logo-and-localization />
  <c-products-header />
</template>

<script>
import cLogoAndLocalization from '../components/cLogoAndLocalization.vue';
import cProductsHeader from '../components/cProductsHeader.vue';

export default {
  name: 'HomeScreenView',
  components: {
    cLogoAndLocalization,
    cProductsHeader,
  }
}
</script>
