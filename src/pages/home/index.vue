<template>
  <div class="homeWrapper">
    <x-header>我是首页</x-header>
    <div class="cs" @click="csClick">组件Alerrt 测试</div>
    <img src="../../assets/img/p3.png" alt="">
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    name: 'authorCode',
    data (){
      return {

      }
    },
    components:{
      XHeader
    },
    methods: {
      csClick(){
        this.http.get(this.ports.home.index,res=>{
          console.log(res)
        })
        let self = this
        // 显示
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            self.$router.push('/hello')
          }
        })
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .cs{
    width:750px;
    height:100px;
    background-color:green;
    text-align: center;
    line-height:100px;
    color:white;
    margin-top:30px;
    margin-bottom:20px;
  }
  img{
    width:100%;
  }
</style>

