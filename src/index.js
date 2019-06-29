import Vue from 'vue'

import App from './core/App.vue'
import infrastructure from './infrastructure.js'

import 'normalize.css'

new Vue({
  ...infrastructure,
  render: h => h(App)
}).$mount('#app')
