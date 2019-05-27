<template>
  <div class="header">

    <!--内容-->
    <div class="content-wrapper">
      <div class="avatar">
        <!--:src 就是v-bind:src vue里不能直接用src，识别不了-->
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <!--注： v-if="seller.supports" 不能省，因为在APP.VUE里，我们把seller传给了header组件，但是create钩子函数里的ajax请求是异步的，
        就是说最开始的时候，seller是undenfined的，所以肯定会报错，这里我们用v-if进行一个判空处理，如果为空就不执行下面的{{seller.supports[0].description}}
        表达式，就避免报错了-->
        <div class="supports" v-if="seller.supports">
          <span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <!--公告-->
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
      <!-- <i class="icon-keyboard_arrow_right"></i>-->
    </div>

    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";

  .header
    position relative
    color: #ffffff
   // background: #999

    .content-wrapper
      position relative
      font-size: 0
      padding: 24px 12px 18px 24px //顺序是 上右下左

      .avatar
        display: inline-block //行内并排
        vertical-align top

        img
          border-radius 2px

      .content
        display: inline-block
        /*font-size :14px*/
        margin-left: 16px

        .title
          margin: 2px 0 8px 0

          .brand //span是行内元素，设置宽高不起作用，需要再设置成inline-block
            width: 30px
            height: 18px
            bg-image("brand")
            background-size: 30px 18px
            background-repeat: no-repeat
            display inline-block
            vertical-align top

          //顶部对齐

          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px

        .description
          margin 8px 0 10px 0
          line-height 12px
          font-size 12px

        .supports
          .icon
            vertical-align top
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            background-repeat no-repeat
            background-size 12px 12px

            &.decrease
              bg-image('decrease_1')

            &.discount
              bg-image('discount_1')

            &.guarantee
              bg-image('guarantee_1')

            &.invoice
              bg-image('invoice_1')

            &.special
              bg-image('special_1')


          .text
            line-height 12px
            font-size 10px

      .support-count //相对于content做绝对定位，需要父级的position是relative
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-align center

        .count
          font-size 10px
          line-height 12px

        .icon-keyboard_arrow_right
          font-size 10px

    .bulletin-wrapper
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      background rgba(7, 17, 27, 0.2)
      //下面三个属性 可以将多行文字折叠，并显示点点点，如页面公告
      white-space nowrap
      overflow hidden
      text-overflow ellipsis

      .bulletin-title
        margin-top 8px
        vertical-align top
        display inline-block
        width 22px
        height 12px
        //设置图片背景
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat

      .bulletin-text
        margin 0 4px
        font-size 10px
        line-height 12px

    .header-background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
      background-color rgba(7,17,27,0.5)
</style>
