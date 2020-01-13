<template>
  <div class="channel-edit">
    <van-nav-bar
    title="编辑频道"
    />

    <van-cell title="我的频道" :border="false" class="channel-header">
    <van-button size="mini" round type="danger"  plain>编辑</van-button>
    </van-cell>
    <van-grid :gutter="8" clickable>
    <van-grid-item
      v-for="channel in userChannels"
      :key="channel.id"
      :text="channel.name"
    >
    </van-grid-item>
    </van-grid>

    <van-cell title="推荐频道" class="channel-header">
    </van-cell>
    <van-grid :gutter="8" :border="false" clickable>
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
import { getAllChannels } from '@/api/channel'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    userChannels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      allChannels: [] // 所有频道
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    async loadAllChannels () {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    }
  }
}
</script>

<style scoped lang='less'>
.channel-edit {
  // padding-top: 40px;
  .channel-header {
    font-size: 16px;
    color: #333;
  }
  /deep/ .van-grid-item {
    width: 80px;
    height: 43px;
    .van-grid-item__content {
      background: #f4f5f6;
    }
    .van-grid-item__text {
      font-size: 14px;
      color: #222;
    }
  }
}
</style>
