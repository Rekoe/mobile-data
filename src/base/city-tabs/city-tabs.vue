<template>
  <div class="city-tabs">
    <div class="title">{{title}}</div>
    <ul class="tabs">
      <li class="item" v-for="(item, index) in cityTabList" @click="switchTab(index)" :class="{'item-active': activeIndex === index}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    cityTabList: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchTab(index) {
      this.$emit('switchTab', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .city-tabs
    width 100%
    height 100px
    box-sizing border-box
    background-color $background-color
    text-align center
    .title
      width 100%
      height 55px
      line-height 55px
      border-bottom 1px solid #cccccc
    .tabs
      display flex
      width 100%
      height 45px
      line-height 45px
      border-bottom 1px solid #cccccc
      .item
        flex 1
        color $color-text-ll
      .item-active
        border-bottom 2px solid $color-theme
        color $color-theme
</style>
