<template>
  <div class="authorCode">
      <div class="codeBox">
        <!--<img src="../../assets/img/ewm.png" alt="">-->
        <h4>长按识别二维码，关注公众号</h4>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'authorCode',
    data (){
      return {

      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .authorCode{
    width:750px;
    min-height:100vh;
    background-color:white;
    font-size:30px;
    position:relative;
    .codeBox{
      position:absolute;
      left:0;
      top:45%;
      width:100%;
      text-align: center;
      transform: translateY(-50%);
      img{
        width:280px;
        height:280px;
      }
      h4{
        line-height:2.2;
      }
    }
  }
</style>

