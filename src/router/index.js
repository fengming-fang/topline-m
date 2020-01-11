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
  }, {
    path: '/',
    // 有默认子路由的不需要配置 name
    // name: 'tab-bar',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/qa', // 默认子路由
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video', // 默认子路由
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my', // 默认子路由
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
