import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
const USER_KEY = 'user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // null,(token,refresh_token)
    user: getItem(USER_KEY)
    // user: JSON.parse(window.localStorage.getItem('user')) // 当前用户登陆状态(token)
    // user:null
  },
  mutations: {
    // 用mutations去修改上边的state
    setUser (state, data) {
      state.user = data
      // 为了避免页面刷新数据丢失，我们这里使用本地存储进行 *持久化*
      // state.user是一个对象 所以要转化为字符串形式
      setItem(USER_KEY, state.user)
      // window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
