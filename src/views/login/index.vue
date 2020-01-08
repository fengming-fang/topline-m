<template>
    <div class="login-container">
        <van-nav-bar
        title="登陆"/>

        <van-cell-group>
        <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
        />

        <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        />
        </van-cell-group>
        <div class="login-btn-warp">
          <van-button type="default">登陆</van-button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'LoginPage'
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
