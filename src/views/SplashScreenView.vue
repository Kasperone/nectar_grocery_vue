<template>
  <c-splash-screen />
</template>

<script>
import { useRouter } from 'vue-router/dist/vue-router';
import cSplashScreen from '../components/cSplashScreen.vue';

export default {
  name: 'vSplashScreenView',
  components: {
    cSplashScreen
  },

  setup() {
    const { push } = useRouter();

    const changeView = () => {
      setTimeout(() => {
        push('/home');
      }, 1000)
    }

    changeView()
  }
}
</script>

