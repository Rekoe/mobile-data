<template>
  <div class="login">
    <img src="./icon-logo.png" class="logo">
    <div class="login-wrapper">
      <form>
        <div class="input-wrapper phone-input">
          <input type="num" placeholder="请输入手机号码">
        </div>
        <div class="password-input">
          <input type="num" placeholder="请输入验证码">
          <a href="javascript:;" class="pwd-btn">获取验证码</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .login
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-background
    .logo
      position absolute
      top 90px
      left calc(50% - 100px)
      width 200px
    .login-wrapper
      position absolute
      width 300px
      height 100px
      margin 20px auto
      top 300px
      left calc(50% - 155px)
      form
        .phone-input
          width 300px
          margin-bottom 20px
          input
            box-sizing border-box
            border 1px solid $color-theme
            height 45px
            width 300px
            padding-left 30px
        .password-input
          width 300px
          margin-bottom 20px
          input 
            box-sizing border-box
            width 180px
            height 45px
            border 1px solid $color-theme
            padding-left 30px
          .pwd-btn
            display inline-block
            width 110px
            height 45px
            margin-left 4px
            line-height 45px
            color $color-text
            background-color $color-theme
            text-align center
            border-radius 3px
</style>

