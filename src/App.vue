<template>
  <div id="app">
    <v-header></v-header>

    <div class="tab">
      <div class="tab-item">
        <router-link :to="{name:'goods'}" tag="a">商品</router-link>
        <!--<a v-link="{path:'/goods'}"></a>-->
      </div>
      <div class="tab-item">
        <router-link :to="{name:'ratings'}" tag="a">评论</router-link>
       <!-- <a v-link="{path:'/ratings'}"></a>-->
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}" tag="a">商家</router-link>

        <!--<a v-link="{path:'/seller'}"></a>-->
      </div>
    </div>
    <!--改变路由刷新区域在router-view-->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    name: 'App',
    components: {'v-header': header}               //注册header.vue组件
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app .tab /*这里要改成#app 因为最上面的是id=app，否则样式不生效*/
    display: flex
    width: 100%
    height: 40px
    line-height: 30px

    .tab-item
      flex: 1
      text-align center
</style>
