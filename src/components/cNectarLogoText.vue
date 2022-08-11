<template>
  <div class="logo-text-wrapper">
    <span class="text-nectar">nectar</span>
    <span class="text-bottom">online grocery</span>
  </div>
</template>

<script>
export default {
  name: 'cNectarLogoText',
}
</script>

<style scoped lang="scss">

.logo-text-wrapper {
  display: flex;
  flex-direction: column;

  .text-nectar {
    font-family: 'Fredoka One', cursive, sans-serif;
    color: white;
    font-size: 6rem;
    line-height: 0;
  }

  .text-bottom {
    font-family: 'Baloo Bhaina 2', cursive;
    font-size: 2.9rem;
    color: white;
    top: 2rem;
  }
}
</style>
