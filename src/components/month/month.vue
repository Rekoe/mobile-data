<template>
  <div class="month">
    <month-tab @switch="switchItem" :currentIndex="currentIndex" :dataList="dataList"></month-tab>
    <split></split>
    <month-data></month-data>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
import MonthTab from 'components/data-tabs/data-tabs'
import Split from 'base/split/split'
import MonthData from 'components/month-data/month-data'
export default {
  data () {
    return {
      currentIndex: 1,
      dataList: [
        {
          name: '1月'
        },
        {
          name: '2月'
        },
        {
          name: '3月'
        },
        {
          name: '4月'
        },
        {
          name: '5月'
        },
        {
          name: '6月'
        },
        {
          name: '7月'
        },
        {
          name: '8月'
        },
        {
          name: '9月'
        },
        {
          name: '10月'
        },
        {
          name: '11月'
        },
        {
          name: '12月'
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
    MonthTab,
    Split,
    MonthData
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .month
    width 100%
    color #000
</style>