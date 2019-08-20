import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
let router = new Router({
  // mode: 'history',
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
  ]
})
export default router
