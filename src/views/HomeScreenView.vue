<template>
  <c-logo-and-localization />
  <c-hero />
</template>

<script>
import cLogoAndLocalization from '../components/cLogoAndLocalization.vue';
import cHero from '../components/cHero.vue';

export default {
  name: 'HomeScreenView',
  components: {
    cLogoAndLocalization,
    cHero
  }
}

</script>
