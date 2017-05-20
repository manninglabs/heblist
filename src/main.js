// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('site-nav-bar', require('./components/NavBar.vue'))
Vue.component('site-footer', require('./components/Footer.vue'))
Vue.component('list-item', require('./components/ListItem.vue'))
Vue.component('list-filter', require('./components/ListFilter.vue'))
Vue.component('list-pagination', require('./components/ListPagination.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
