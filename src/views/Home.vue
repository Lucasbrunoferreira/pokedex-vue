<template>
  <div class="home">
    <Pokedex />

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Pokedex from '@/components/Pokedex.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Home',
  components: {
    Footer,
    Pokedex,
  },
});
</script>

<style lang="scss">
.home {
  height: 100vh;
  background-color: #EEE;
  display: flex;
  align-items: center;
  justify-content: center ;
}
</style>
