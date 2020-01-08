<template>
  <div id="app">
    <router-view></router-view>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />
   <h2>我们都一样</h2>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less' scoped>
//在style中使用@别名 需要在前面加上 ~
// @之后必须有 /
@import url('~@/styles/variables.less');
  #app{
    margin-top: 50px auto;

  }
h2{
  color: @color-primary;
}
</style>
