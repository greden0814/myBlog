import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    }, {
      path: '/pages/indexPage',
      name: 'myblog',
      component: () => import('@/views/indexPage')
    }, {
      path: '/pages/myInfo',
      name: 'myInfo',
      component: () => import('@/views/myInfo')
    },{
      path: '/pages/tableManage',
      name: 'tableManage',
      component: () => import('@/views/tableManage')
    },{
      path: '/pages/articles',
      name: 'articles',
      component: () => import('@/views/articles')
    },{
      path: '/pages/articles/writing',
      name: 'writing',
      component: () => import('@/views/articles/writing')
    },{
      path: '/pages/articles/articleInfo',
      name: 'articleInfo',
      component: () => import('@/views/articles/articleInfo')
    },{
      path: '/pages/articles/articleInfo/:id',
      name: 'articleInfo',
      component: () => import('@/views/articles/articleInfo')
    }
  ]
})
