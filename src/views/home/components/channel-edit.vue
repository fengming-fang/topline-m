<template>
  <div class="channel-edit">
    <van-nav-bar
    title="编辑频道"
    />

    <van-cell title="我的频道" :border="false">
    <van-button size="mini" round type="danger">编辑</van-button>
    </van-cell>
    <van-grid :gutter="8">
    <van-grid-item
    v-for="value in 10"
    :key="value"
    text="文字"
    >
    </van-grid-item>
    </van-grid>

    <van-cell title="推荐频道" >
    </van-cell>
    <van-grid :gutter="8" :border="false">
    <van-grid-item
    v-for="value in 14"
    :key="value"
    text="文字"
    >
    </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'ChannelEdit',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'>
.channel-edit {
  margin-top: 40px;
}

/deep/ .van-grid-item__content{
        background-color: #F4F5F6;

    }

.van-nav-bar{
    background-color: #fff;
    .van-nav-bar__title{
       color: black
    }
}

</style>
