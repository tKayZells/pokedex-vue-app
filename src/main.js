import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PokeApi from "@/plugins/poke-api";
import './styles/index.css';

Vue.config.productionTip = false
Vue.prototype.PokeApi = PokeApi;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
