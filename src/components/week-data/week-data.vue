<template>
  <div class="week-data">
    <div class="data-wrapper">
      <div class="total-content">
        <div class="data-item item-color-y">
          <span class="num">366</span>
          <span class="title">本周新增数</span>
        </div>
        <div class="data-item item-color-b">
          <span class="num">234</span>
          <span class="title">本周净增数</span>
        </div>
        <div class="data-item item-color-d">
          <span class="num">366</span>
          <span class="title">本周拆机数</span>
        </div>
      </div>
      <div class="chart-content">
        <echarts-pile class="chart"></echarts-pile>
      </div>
    </div>
  </div>
</template>

<script type="text-ecmascript-6">
import EchartsPile from 'components/echarts-pile/echarts-pile'
export default {
  components: {
    EchartsPile
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .week-data
    width 100%
    height 360px
    background-color $color-background
    .data-wrapper
      padding 10px
      .total-content
        display flex
        .data-item
          flex 1
          margin-right 6px
          margin-left 6px
          text-align center
          height 90px
          border-radius 10px
          color $color-text
          & span
            display block
          &.item-color-y
            background-color #faae00
          &.item-color-b
            background-color #32b5fc
          &.item-color-d
            background-color #64779e
          .num
            line-height 50px
            font-size $font-size-large-x
    .chart-content
      width 100%
      height 220px
      border 1px solid #000
      margin-top 15px
      .chart
        width 100%
        height 100%
</style>

