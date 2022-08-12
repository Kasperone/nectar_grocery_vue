<template>
  <div class="c-input">

    <input class="c-input__input"
           type="text"
           v-model="text"
           :placeholder="placeholder">

    <img src="../assets/icons/search-icon.svg"
         alt='localization icon'
         class="c-input__icon">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'cInput',
  props: {
    placeholder: {
      type: String,
      default: 'Search Store',
    },
  },

  setup() {
    const text = ref('');

    return { text }
  }
}
</script>

<style scoped lang="scss">
.c-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  &__input {
    position: relative;
    width: 36.4rem;
    height: 5.15rem;
    padding-left: 4rem;
    background: #F2F3F2;
    border-radius: 1.5rem;
    border: none;
    resize: none;

    &:focus {
      outline: .1rem solid green;
    }
  }

  &__icon {
    position: absolute;
    left: 2.5rem;
  }
}
</style>
