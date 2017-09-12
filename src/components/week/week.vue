<template>
  <div class="week">
    <week-tab @switch="switchItem" :currentIndex="currentIndex" :weekList="weekList"></week-tab>
    <split></split>
    <week-data></week-data>
    <split></split>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import WeekTab from 'components/week-tabs/week-tabs'
import Split from 'base/split/split'
import WeekData from 'components/week-data/week-data'
export default {
  data () {
    return {
      currentIndex: 1,
      weekList: [
        {
          name: '30周 '
        },
        {
          name: '31周'
        },
        {
          name: '32周 '
        },
        {
          name: '33周 '
        },
        {
          name: '34周 '
        },
        {
          name: '35周 '
        },
        {
          name: '36周 '
        }
      ]
    }
  },
  methods: {
    switchItem(index) {
      this.currentIndex = index
    }
  },
  components: {
    WeekTab,
    Split,
    WeekData
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .week
    width 100%
    color #000
</style>
