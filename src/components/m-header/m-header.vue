<template>
  <div class="header">
    <ul class="header-wrapper">
      <router-link tag="li" class="item" to="/week">
        <li class="item-link">周</li>
      </router-link>
      <router-link tag="li" class="item" to="/month">
        <li class="item-link">月</li>
      </router-link>
      <router-link tag="li" class="item" to="/year">
        <li class="item-link">年</li>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .header
    width 100%
    height 64px
    background-color $color-theme
    .header-wrapper
      display flex
      width 80%
      height 46px
      line-height 46px
      margin 0 auto
      position relative
      top 9px
      background-color #3688ff
      border-radius 35px
      .item
        flex 1
        text-align center
        .item-link
          font-size $font-size-large
          border-radius 35px
        &.router-link-active
          .item-link
            color: $color-text-d
            background-color $color-background
</style>
