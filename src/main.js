// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { EventBus } from './event-bus'

Vue.config.productionTip = false
// window.eventbus = new Vue()
Vue.prototype.eventbus = EventBus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
