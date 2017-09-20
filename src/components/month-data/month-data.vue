<template>
  <div class="month-data">
    <div class="data-wrapper">
      <div class="data-content">
        <div class="circle c-1">
          <img src="./icon-new.png">
          <span>月新增数</span>
        </div>
        <p class="text">862</p>
      </div>
      <div class="data-content">
        <div class="circle c-2">
          <img src="./icon-add.png">
          <span>月净增数</span>
        </div>
        <p class="text">862</p>
      </div>
      <div class="data-content">
        <div class="circle c-3">
          <img src="./icon-split.png">
          <span>月拆机数</span>
        </div>
        <p class="text">862</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .month-data
    width 100%
    height 180px
    box-sizing border-box
    background-color $background-color
    .data-wrapper
      display flex
      width 100%
      height 100%
      box-sizing border-box
      text-align center
      .data-content
        flex 1
        width 100%
        height 100%
        line-height 20px
        padding 12px
        box-sizing border-box
        .circle
          width 82px
          height 82px
          margin 15px auto 0
          border-radius 50%
          font-size 16px
          &.c-1
            border 1px solid #faae00
            color #faae00
          &.c-2
            border 1px solid #32b5fc
            color #32b5fc
          &.c-3
            border 1px solid #64779e
            color #64779e
          img
            width 32px
            height 32px
            margin-top 10px
          span
            display block
        .text
          font-size 24px
          color #555
          margin-top 10px
</style>

