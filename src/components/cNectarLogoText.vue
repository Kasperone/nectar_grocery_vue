<template>
  <div class="c-logo-text">
    <span class="c-logo-text__nectar">nectar</span>
    <span class="c-logo-text__bottom">online grocery</span>
  </div>
</template>

<script>
export default {
  name: 'cNectarLogoText',
}
</script>

<style scoped lang="scss">

.c-logo-text {
  display: flex;
  flex-direction: column;

  &__nectar {
    font-family: 'Fredoka One', cursive, sans-serif;
    color: white;
    font-size: 6rem;
    line-height: 0;
  }

  &__bottom {
    font-family: 'Baloo Bhaina 2', cursive;
    font-size: 2.9rem;
    color: white;
    top: 2rem;
  }
}
</style>
