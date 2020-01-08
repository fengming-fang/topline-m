// 所有的 vant 组件模块
import Vue from 'vue'
import { button,
  Cell,
  CellGroup,
  Icon
} from 'vant'

// 注册
// 支持链式编程 方便简洁
// Vue.use(button).use(Cell).use(CellGroup)

Vue.use(button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)