import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // AuthorizedUrl: 'http://192.168.137.1:8081/author/index',//授权地址
    AuthorizedUrl: 'http://yj.svkeji.cn/author/index',
    staticImg: '/static/img/',
    defaultTitle: '首页',
    IMGPATH: 'http://youjia.svkeji.cn',
    isLoading: true,
    cartNum: localStorage.cartNum?localStorage.cartNum:0,//购物车数量
    // 存储openId
    openId: localStorage.getItem('openId') ? localStorage.getItem('openId') : null,
    parentmid: localStorage.parentmid ? localStorage.parentmid : null,
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      console.log(9999)
      state.openId = user;
      localStorage.setItem('openId', user);
    },
    //导航
    changeTitle (state, title){
      state.defaultTitle = title
    },
    //ajax 请求状态管理
    changeLoading (state, val){
      state.isLoading = val
    },
    //购物车数量监听
    changeCartNum (state, val){
      localStorage.cartNum = val
      state.cartNum = localStorage.cartNum
    }
  },
  actions: {
    // changeMallInfo(ctx,data){
    //   ctx.commit("changeMallInfo",data)
    // }
  }
})
