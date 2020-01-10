<template>
    <div class="login-container">
        <van-nav-bar title="登陆"/>
        <!--
        表单验证
        1、使用 ValidationObserver 组件把需要验证的整个表单包起来
        2、使用 ValidationProvider 组件把具体的表单元素包起来，例如 input
        3、通过 ValidationProvider 配置验证规则
            name   配置字段的提示名称
            rules  配置校验规则
                内置的规则：https://logaretm.github.io/vee-validate/guide/rules.html#rules
                自定义规则：
                单个验证规则：rules="required"
                多个验证规则：rules="required|length:4"
            v-slot="{ errors }" 获取校验失败的错误提示消息
        -->
        <ValidationObserver  ref="form">
            <ValidationProvider name="手机号" rules="required" immediate>
                <van-field
                v-model="user.mobile"
                left-icon="graphic"
                placeholder="请输入手机号"
                clearable
                >
                </van-field>

            </ValidationProvider>

            <ValidationProvider  name="验证码" rules="required" immediate>
                <van-field
                v-model="user.code"
                type="password"
                left-icon="contact"
                placeholder="请输入验证码"
                >
                <van-count-down
                  v-if="isCountDownShow"
                  slot="button"
                  :time="1000 * 60"
                  format="ss s"
                  @finish="isCountDownShow = false"
                />
                <van-button
                  v-else
                  slot="button"
                  size="small"
                  type="primary"
                  round
                  @click='onSendSmsCode'
                >发送验证码</van-button>
                </van-field>
            </ValidationProvider>
        </ValidationObserver>

        <div class="login-btn-warp">
          <van-button type="default"  @click="onLogin">登陆</van-button>
        </div>

    </div>
</template>

<script>
// import request from '@/utils/request.js'
import { login, getSmsCode } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      isCountDownShow: false // 是否显示倒计时
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
      // this.$refs.form.validate().then(success => {
      //   if (!success) {
      //   }
      // })
      const success = await this.$refs.form.validate()
      if (!success) {
        console.log('表单验证失败')
        // 注意：如果你需要在 JS 验证中能马上获取到错误消息
        // 必须给每一个 ValidationProvider 配置 immediate 初始验证
        const errors = this.$refs.form.errors
        for (let key in errors) {
          const item = errors[key]
          if (item[0]) {
            this.$toast(item[0])
            // 找到第1个有错误的消息，给出提示，停止遍历
            return
          }
        }
        // 获取验证失败的错误消息，轻提示
        return
      }

      // 开启登陆中的 loading
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '登录中...',
        forbidClick: true // 是否禁止背景点击
      })

      // 3. 请求登录
      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success('登陆成功')
      } catch (err) {
        this.$toast.fail('登陆失败')
      }
    },

    // 验证码请求
    async onSendSmsCode () {
      try {
        const { mobile } = this.user
        // 1. 验证手机号是否有效
        // 2. 请求发送短信验证码
        const res = await getSmsCode(mobile)
        console.log(res)
        // 3. 显示倒计时
        this.isCountDownShow = true
      } catch (err) {
        console.log(err)
        this.$toast('请勿频繁操作')
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
        .van-cell{
            align-items: center
        }

    }
</style>
