<template>
    <div class="login-container">
        <van-nav-bar
        title="登陆"/>

        <van-cell-group>
        <van-field
        v-model="user.mobile"
        left-icon="graphic"
        placeholder="请输入手机号"
        >
        </van-field>

        <van-field
        v-model="user.code"
        type="password"
        left-icon="contact"
        placeholder="请输入验证码"
        >
        <van-button
          slot="button"
          size="small"
          type="primary"
          round
        >发送验证码</van-button>
        </van-field>
        </van-cell-group>
        <div class="login-btn-warp">
          <van-button type="default"  @click="onLogin">登陆</van-button>
        </div>

    </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // 1. 获取表单数据
      const user = this.user
      // 2. 表单验证

      // 开启登陆中的 loading
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '登录中...',
        forbidClick: true // 是否禁止背景点击
      })

      // 3. 请求登录
      try {
        const res = await request({
          method: 'POST',
          url: '/app/v1_0/authorizations',
          // headers: {
          // axios 会自动添加该请求头
          // 'Content-Type': 'application/json'
          // }, // 请求头参数
          // params: {}, // Query 查询参数
          data: user // Body 请求体参数
        })

        console.log(res)
        this.$toast.success('登陆成功')
      } catch (err) {
        this.$toast.fail('登陆失败')
      }
    }
    // 4. 根据后端返回结果执行后续业务处理
  }
}
</script>

<style lang='less' scoped>
    .login-container{
        .login-btn-warp{
            padding: 16px ;
             .van-button{
            width: 100%;
            background-color: #3296fa;
            color: white;
            margin: 17px auto;
            }
        }

    }
</style>
