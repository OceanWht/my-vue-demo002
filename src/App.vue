<template>
  <div id="app">
    <v-header :seller="seller"></v-header>

    <div class="tab">
      <div class="tab-item">
        <router-link :to="{name:'goods'}" tag="a">商品</router-link>
        <!--<a v-link="{path:'/goods'}"></a>-->
      </div>
      <div class="tab-item">
        <router-link :to="{name:'ratings'}" tag="a">评论</router-link>
        <!-- <a v-link="{path:'/ratings'}"></a>-->
      </div>
      <div class="tab-item" > <!--点击事件不能放在router-link里面，要放在div里面。否则失效  @click="getSeller"-->
        <router-link :to="{name:'seller'}" tag="a">商家</router-link>

        <!--<a v-link="{path:'/seller'}"></a>-->
      </div>
    </div>
    <!--改变路由刷新区域在router-view-->
    <router-view></router-view>
  </div>
</template>

<script>
  import headers from './components/header/header.vue'

  const ERR_OK = 0;

  export default {
    name: 'App',
    data() {
      return {
        baseUrl: "localhost:8080",
        seller: {}
      };
    },
    //ajax 请求通过第三方插件vue-resource 来实现，在钩子函数例如created里使用
    created() {
      this.$http.get('/api/seller').then((response) => {
          response = response.body;
          console.log("1111",response);
          if (response.errno === ERR_OK){
              this.seller = response.data;
              console.log(this.seller)
          }
      });
    },
    methods: {
      /*getSeller: function () {
        this.$http.get('/api/seller').then(response => {
          response = response.body;
          console.log("1111", response);
          if (response.errno === ERR_OK) {
            this.seller = response.data;
            console.log("1111", this.seller);
          }

        });
      }*/
    },
    components: {'v-header': headers}               //注册header.vue组件
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

      & > a
        display block //填充父类div
        font-size 14px
        text-decoration none //去掉下划线
        color rgb(77, 85, 93)

        &.router-link-exact-active
          color rgb(240, 20, 20)
</style>
