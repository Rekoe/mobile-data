<template>
  <div class="tip">
    <p class="tip-text" v-show="showFlag" ref="tipText">{{text}}</p>
  </div>
</template>

<script type="ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: '密码错误'
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.showFlag = false
        }, 2000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tip
    width 100%
    text-align center
    .tip-text
      position fixed
      top 29%
      left 50%
      margin-left -75px
      width 150px
      height 40px
      line-height 40px
      padding 3px 6px
      color #ffffff
      background-color rgba(0, 0, 0, 0.8)
      border-radius 5px
</style>
