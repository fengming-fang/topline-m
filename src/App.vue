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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less' scoped>
  #app{
    margin-top: 50px auto;

  }
</style>
