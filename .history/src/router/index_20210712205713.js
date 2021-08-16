import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login'),
      children: [{
        path: 'myblog',
        name: 'myblog',
        component: () => import('@/views/indexPage')
      },{
        path: 'myinfo',
        name: 'myinfo',
        component: () => import('@/views/myinfo')
      }]
    }
  ]
})
