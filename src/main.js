import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // rem适配 动态设置大小font-size大小
import 'normalize.css' // 引入初始化样式 其实vant内置normalize.css了可以不用引入
import './utils/register-vant'// 加载注册 vant 组件模块
import './styles/index.less' // 注意一定要把自己的样式引到第三方组件样式之后

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
