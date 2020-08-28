import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  })
  
  router.afterEach(() => {
  NProgress.done()
  })

export default router
