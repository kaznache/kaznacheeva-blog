import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');