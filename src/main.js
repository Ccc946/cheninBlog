import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from './store'
import '@/styles/index.less'
import './getInitData'
//过滤器
import * as filters from './filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
