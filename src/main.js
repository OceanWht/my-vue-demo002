// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'  //最新写法，先不用




Vue.config.productionTip = false;
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
/*//将App实例化挂载
let app = Vue.extend(App);

//实例化一个路由
let router = new VueRouter();


router.map({
  '/goods':{
    component: goods
  }
});


//启动路由 '#app' 是App.vue的挂载点
router.start(app,'#app');*/
