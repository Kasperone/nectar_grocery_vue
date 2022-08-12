<template>
  <c-logo-and-localization />
  {{ inputText }}
  <c-input v-model:inputValue="inputText" />
</template>

<script>
import { ref } from 'vue';

import cLogoAndLocalization from '../components/cLogoAndLocalization.vue'
import cInput from '../components/cInput.vue'

export default {
  name: 'HomeScreenView',
  components: {
    cLogoAndLocalization,
    cInput
  },

  setup() {
    const inputText = ref('')

    return { inputText }
  }
}
</script>
