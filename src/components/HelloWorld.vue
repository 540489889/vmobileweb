<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <div class="cs" @click="csClick">clickMe</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    csClick(){
      this.http.get(this.ports.home.index,res=>{
        console.log(res)
      })
      // 显示
      this.$vux.alert.show({
        title: 'Vux is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .cs{
    width:750px;
    height:100px;
    background-color:green;
    text-align: center;
    line-height:100px;
    color:white;
  }
</style>
