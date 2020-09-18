import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PokeApi from "@/plugins/poke-api";
import FontAwesomeIcon from "@/plugins/font-awesome"
import './styles/index.css';

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.prototype.PokeApi = PokeApi;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
