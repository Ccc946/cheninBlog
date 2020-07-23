import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入css初始化样式
import './assets/css/init.css'
//导入css适配 px2rem
import 'amfe-flexible'
//导入动画插件
import animated from 'animate.css';
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
