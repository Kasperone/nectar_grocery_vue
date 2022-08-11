<template>
  <div class="c-logo-text__wrapper">
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

.c-logo-text__wrapper {
  display: flex;
  flex-direction: column;

  .c-logo-text__nectar {
    font-family: 'Fredoka One', cursive, sans-serif;
    color: white;
    font-size: 6rem;
    line-height: 0;
  }

  .c-logo-text__bottom {
    font-family: 'Baloo Bhaina 2', cursive;
    font-size: 2.9rem;
    color: white;
    top: 2rem;
  }
}
</style>
