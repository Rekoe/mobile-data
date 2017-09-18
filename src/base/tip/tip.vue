<template>
  <div class="tip">
    <p class="tip-text" v-show="showFlag">{{text}}</p>
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
          
        })
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
      top 35%
      left 40%
      height 40px
      line-height 40px
      padding 6px 12px
      color #ffffff
      background-color rgba(0, 0, 0, 0.8)
      border-radius 5px
</style>
