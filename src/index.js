import Vue from 'vue'

import App from './app/core/App.vue'
import router from './app/router'
import store from './app/store'

import 'normalize.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
