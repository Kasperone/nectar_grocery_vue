<template>
  <c-logo-and-localization />
  <c-input />
</template>

<script>
import cLogoAndLocalization from '../components/cLogoAndLocalization.vue'
import cInput from '../components/cInput.vue'

export default {
  name: 'HomeScreenView',
  components: {
    cLogoAndLocalization,
    cInput
  }
}

</script>
