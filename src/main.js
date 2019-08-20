// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
//样式重置
import './assets/style/reset.css'
//axios 封装
import http from './api/http'
import ports from './api/ports'
Vue.prototype.http = http
Vue.prototype.ports = ports
import axios from 'axios'
Vue.config.debug = true
//阻止启动生产消息
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.withCredentials=true;

//微信授权判断
// 添加请求拦截器，在请求头中加openId
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('openId')) {
//       config.headers.openid = localStorage.getItem('openId');
//     }
//     if(localStorage.parentmid){
//       config.headers.parentmid = localStorage.getItem('parentmid');
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });
//请求拦截
// axios.interceptors.response.use(function (response) {
//   // 未授权
//   if (response.data.code===30005){
//     localStorage.clear()
//     //未授权
//     router.replace({
//       path:'/author/index'
//     })
//   }else if(response.data.code===30006){
//     // 未关注
//     router.replace({
//       path:'/author/code'
//     })
//   }else{
//     return response
//   }
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error)
// })
//vux
import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)
import router from './router'
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
