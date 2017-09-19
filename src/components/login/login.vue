<template>
  <div class="login">
    <img src="./icon-logo.png" class="logo">
    <div class="login-wrapper">
      <form>
        <div class="input-wrapper phone-input">
          <input type="number" placeholder="请输入手机号码" v-model="phoneNum">
        </div>
        <div class="password-input">
          <input type="number" placeholder="请输入验证码" v-model="verifyCode">
          <a href="javascript:;" class="pwd-btn" @click="checkVerifyCode">{{verifyCodeText}}</a>
        </div>
        <div class="login-btn" @click="login">登&nbsp;录</div>
      </form>
    </div>
    <div class="footer-wrapper">
      <img src="./icon-footer.png" width="180px" height="60px">
      <p class="footer-text">
        <span>官网&nbsp;:&nbsp;http://tycc100.com</span>
        <span>咨询热线&nbsp;:&nbsp;4008-990-114</span>
      </p>
    </div>
    <tip :text="text" ref="tip"></tip>
  </div>
</template>

<script type="text/ecmascript-6">
import Tip from 'base/tip/tip'
import axios from 'axios'
export default {
  data () {
    return {
      phoneNum: '',
      verifyCode: '',
      text: '',
      time: 0
    }
  },
  computed: {
    verifyCodeText() {
      return this.time > 0 ? this.time + 's 后获取' : '获取验证码'
    }
  },
  methods: {
    checkVerifyCode() {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/).test(this.phoneNum)) {
        this.$refs.tip.show()
        this.text = '请填写正确的手机号码'
      } else {
        let data = {'phoneNum': this.phoneNum}
        // 请求接口
        axios.post('/api/sendSms', data).then((res) => {
          if (!res.data.success) {
            this._startTimer(10)
            this.$refs.tip.show()
            this.text = '该手机尚未开通业务'
          } else {
            this.$refs.tip.show()
            this.text = '验证码发送成功'
          }
        }).catch((err) => {
          this.$refs.tip.show()
          this.text = err.data.message
        })
      }
    },
    login() {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/).test(this.phoneNum)) {
        this.$refs.tip.show()
        this.text = '请填写正确的手机号码'
      } else if (this.verifyCode === '') {
        this.$refs.tip.show()
        this.text = '验证码不能为空'
      } else {
        let data = {'phoneNum': this.phoneNum, 'verifyCode': this.verifyCode}
        axios.post('/api/signin', data).then((res) => {
          if (!res.data.success) {
            this.$refs.tip.show()
            this.text = res.data.message
          } else {
            this.$router.push('/week')
          }
        }).catch((err) => {
          this.$refs.tip.show()
          this.text = err.data.message
        })
      }
    },
    _startTimer(time) {
      this.time = time
      this.time = setInterval(() => {
        this.time--
      }, 1000)
    }
  },
  components: {
    Tip
  }
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
      margin 20px auto
      top 256px
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
            position relative
          &:before
            content ''
            position absolute
            width 30px
            height 45px
            z-index 99
            background-repeat no-repeat
            background-position 50% 50%
            background-size 100%
            background-image url(./icon-phone.png)
        .password-input
          width 300px
          margin-bottom 20px
          &:before
            content ''
            position absolute
            width 30px
            height 45px
            z-index 99
            background-repeat no-repeat
            background-position 50% 50%
            background-size 100%
            background-image url(./icon-in.png)
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
        .login-btn
          width 300px
          height 40px
          line-height 40px
          background-color $color-theme
          color $color-text
          text-align center
          border-radius 25px
    .footer-wrapper
      position absolute
      bottom 10px
      text-align center
      width 100%
      span
        color $color-text-l
        font-size $font-size-small
</style>

