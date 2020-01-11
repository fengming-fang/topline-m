// 所有的 vant 组件模块
import Vue from 'vue'
import { button,
  Cell,
  CellGroup,
  Icon,
  NavBar,
  Field,
  Button,
  Toast, // 轻提示
  CountDown, // 定时器
  Tabbar,
  TabbarItem
} from 'vant'

// 注册
// 支持链式编程 方便简洁
// Vue.use(button).use(Cell).use(CellGroup)

Vue.use(button)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(NavBar)
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(CountDown)
  .use(Tabbar)
  .use(TabbarItem)
