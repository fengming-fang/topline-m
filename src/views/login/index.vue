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

      <van-button type="default">登陆</van-button>
    </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style lang='less' scoped>

</style>
