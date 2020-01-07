import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/register-vant'// 加载注册 vant 组件模块

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
