import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentTemplate from '@/components/ContentTemplate'
import NavTab from '@/components/NavTab'

Vue.config.productionTip = false
Vue.component('ContentTemplate', ContentTemplate)
Vue.component('NavTab', NavTab)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
