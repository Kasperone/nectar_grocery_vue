<template>
    <div class="logo-wrapper animation">
        <c-carrot-icon class="carrot-icon"/>
        <c-nectar-logo-text />
    </div>
</template>

<script>
import cCarrotIcon from '../components/cCarrotIcon.vue'
import cNectarLogoText from '../components/cNectarLogoText.vue'

export default {
  name: 'cLogo',
  components: {
    cCarrotIcon,
    cNectarLogoText,
  }
}
</script>

<style scoped lang="scss">

.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  .carrot-icon {
    margin-right: 2rem;
  }
}

.animation {
  margin: 0 auto;
  animation-name: stretch;
  animation-duration: .5s;
}

@keyframes stretch {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
