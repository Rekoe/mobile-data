<template>
  <div class="tab" ref="tab">
    <scroll class="tab-wrapper">
      <ul class="tab-content" ref="tabContent">
        <li @click="switchItem(index)" v-for="(item, index) in dataList" class="week-item" :class="{'active': currentIndex === index}" ref="weekItem">
          <span>{{item}}</span><b>{{unit}}</b>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
export default {
  props: {
    dataList: {
      type: Array,
      default: []
    },
    currentIndex: {
      type: Number,
      default: 1
    },
    unit: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._calculateWidth()
    }, 20)
  },
  methods: {
    switchItem(index) {
      this.$emit('switch', index)
    },
    // 计算 item 的容器宽度
    _calculateWidth() {
      let w = document.body.clientWidth
      let listLen = document.getElementsByClassName('week-item').length
      this.$refs.tabContent.style.width = ((listLen - 1) * w * 0.25) + w * 0.5 + 'px'
      // console.log(document.body.clientWidth + 'px')
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .tab
    width 100%
    height 45px
    line-height 45px
    background-color $color-background
    .tab-wrapper
      width 100%
      height 100%
      overflow hidden
      position relative
      &:after
        content ''
        position absolute
        width 50%
        left  25%
        bottom 1px
      .tab-content
        display flex
        height 100%
        .week-item
          flex 1
          text-align center
          font-size $font-size-medium
        .active
          height 43px
          color $color-theme
          border-bottom 2px solid $color-theme
</style>
