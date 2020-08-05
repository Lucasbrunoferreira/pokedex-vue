import VueCompositionAPI from '@vue/composition-api';
import Toasted from 'vue-toasted';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(Toasted, { duration: 3000 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
