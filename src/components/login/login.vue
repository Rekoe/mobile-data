<template>
  <div class="login">
    <img src="./icon-logo.png" class="logo">
    <div class="login-wrapper">
      <form>
        <div class="input-wrapper phone-input">
          <input type="num" placeholder="请输入手机号码" v-model="phoneNum">
        </div>
        <div class="password-input">
          <input type="num" placeholder="请输入验证码" v-model="verifyCode">
          <a href="javascript:;" class="pwd-btn" @click="checkVerifyCode">获取验证码</a>
        </div>
        <div class="login-btn" @click="login">登&nbsp;录</div>
      </form>
    </div>
    <tip :text="text"></tip>
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
      text: ''
    }
  },
  methods: {
    checkVerifyCode() {
      if (this.phoneNum === '') {
        
      } else {
        let data = {'phoneNum': this.phoneNum}
        // 请求接口
        axios.post('/api/sendSms', data).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    login() {
      if (this.phoneNum === '' || this.verifyCode === '') {
        alert('不能为空')
      } else {
        let data = {'phoneNum': this.phoneNum, 'verifyCode': this.verifyCode}
        axios.post('/api/signin', data).then((res) => {
          if (!res.data.success) {
            alert(res.data.message)
          } else {
            this.$router.push('/week')
          }
        }).catch((err) => {
          console.log(err)
        })
      }
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
        .login-btn
          width 300px
          height 40px
          line-height 40px
          background-color $color-theme
          color $color-text
          text-align center
          border-radius 25px
</style>

