<template>
  <div class="c-splash-screen">
    <c-logo />
  </div>
</template>

<script>
import cLogo from '../components/cLogo.vue'

export default {
  name: 'cSplashScreen',
  components: {
    cLogo
  }
}
</script>

<style scoped lang="scss">
  .c-splash-screen {
    display: flex;
    justify-content: center;
    background-color: #53B175;
    width: 100%;
    height: 100vh;
  }
</style>
