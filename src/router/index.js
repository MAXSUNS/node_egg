import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Exchange = resolve => require(['@/views/Exchange.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Order = resolve => require(['@/views/Order.vue'], resolve)
const OrderDetail = resolve => require(['@/views/OrderDetail.vue'], resolve)
const Address = resolve => require(['@/views/address.vue'], resolve)


export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: '首页',
      component: User
    }, {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
      }]
    }, {
      path: '/car',
      name: '购物车页',
      component: Car
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    },
    {
      path: '/exchange',
      name: '兑换页',
      component: Exchange,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/search',
      name: '搜索页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/order',
      name: '订单页',
      component: Order
    },{
      path: '/orderdetail',
      name: '订单详情页',
      component: OrderDetail
    },{
      path: '/address',
      name: '修改地址页',
      component: Address
    }
  ]
})
