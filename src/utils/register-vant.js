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
  Tabbar, // 标签栏
  TabbarItem,
  Image,
  Grid, // 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航
  GridItem,
  Dialog,
  List,
  Tab,
  Tabs,
  PullRefresh, // 下拉刷新
  Popup // 弹出层
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
  .use(Image)
  .use(Grid)
  .use(GridItem)
  .use(Dialog)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh)
  .use(Popup)
