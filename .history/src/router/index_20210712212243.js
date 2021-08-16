import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    }, {
      path: '/pages/myblog',
      name: 'myblog',
      component: () => import('@/views/indexPage')
    }, {
      path: '/pages/myInfo',
      name: 'myInfo',
      component: () => import('@/views/myInfo')
    }
  ]
})
