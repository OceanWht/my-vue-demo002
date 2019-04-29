import Vue from 'vue'
import Router from 'vue-router'
//引入路由页面
import goods from  '../components/goods/goods'
import ratings from  '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

export default new Router({
  //linkActiveClass:'active',
  mode:'history',
  routes: [
    {path:'/',name:'goods',component:goods},
    {path:'/api/goods',name:'goods',component:goods},
    {path:'/api/ratings',name:'ratings',component:ratings},
    {path:'/api/seller',name:'seller',component:seller}
  ]
})
