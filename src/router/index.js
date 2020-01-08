import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由表配置
const routes = [
  {
    path: '/login',
    name: 'login',
    // @是src的别名 VueCli项目中特俗提供的
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
