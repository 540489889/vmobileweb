<template>
  <div class="authorIndex">
    <!--授权中...-->
  </div>
</template>
<script>
  import {GetQueryString} from '../../assets/js/mixin';
  export default {
    name: 'authorIndex',
    data (){
      return {

      }
    },
    created(){
      let thisUrl = window.location.href;
      console.log(thisUrl)
      let openId = GetQueryString("openId");
      //未授权
      if(!openId){
//        let newUrl = encodeURIComponent(thisUrl)
        let data = 'http://ccnwx.itlw.cn/service/weixin/web/authorize?returnUrl='+thisUrl
        window.location.href = data
      }else{
        this.$store.commit('changeLogin',openId)
        this.$router.push({path: '/'})
//        window.location.href = 'http://yj.svkeji.cn/'
      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .authorIndex{
    width:750px;
    min-height:100vh;
    background-color:white;
    font-size:30px;
  }
</style>

