import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    //懒加载模式
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/index'], resolve) ,
      meta:{index: 1, title: '首页', requireAuth: false}
    },
    {
      path: '/hello',
      name: 'Hello',
      component: resolve => require(['@/components/HelloWorld'], resolve) ,
      meta:{index: 1, title: '首页', requireAuth: false}
    },
  ]
})
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})
router.afterEach(function (to) {
  setTimeout(()=>{
    store.commit('updateLoadingStatus', {isLoading: false})
  },500)
})

export default router
