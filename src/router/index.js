import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach.js'
import Login from '@/components/login/Login'
import GoodsList from '@/components/store/goods/List'
import GoodsDetail from '@/components/store/goods/Detail'
import Shopcart from '@/components/store/shopcart/Shopcart'
import OrderCommit from '@/components/store/order/Commit'
import OrderPay from '@/components/store/order/Pay'
import Store from '@/components/store/Store.vue'
Vue.use(Router)
let childs = [
// 商品
{ name: 'goodsList', path: 'goods/list', component:GoodsList },
{ name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail },
// 购物车
{ name: 'shopcart', path: 'shopcart', component: Shopcart },
// 订单
{ name: 'orderCommit', path: 'order/commit', component: OrderCommit },
{ name: 'orderPay', path: 'order/pay', component: OrderPay },
]
let router = new Router({
  routes: [
     // 首页就是商品列表页
 { name: 'index', path: '/', component: Store,children: childs},
     // 登陆
  { name: 'login', path: '/login', component: Login },

     ]
});
router.beforeEach(beforeEach)
export default router