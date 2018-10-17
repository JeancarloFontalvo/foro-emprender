import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy';
import 'buefy/dist/buefy.min.css';


// - - - Vue Instance App - - - 
Vue.use(Buefy);

Vue.config.productionTip = false

var app = new Vue({
  router,
  store,
  render: h => h(App)
});

app.$mount('#app')
