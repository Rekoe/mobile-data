<template>
  <div class="year">
    <week-tab @switch="switchItem" :unit="unit" :currentIndex="currentIndex" :dataList="dataList"></week-tab>
    <split></split>
    <week-data></week-data>
    <split></split>
    <city-tabs :cityTabList="cityTabList" :activeIndex="activeIndex" :title="title" @switchTab="switchTab"></city-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import WeekTab from 'components/data-tabs/data-tabs'
import Split from 'base/split/split'
import WeekData from 'components/week-data/week-data'
import CityTabs from 'base/city-tabs/city-tabs'
export default {
  data () {
    return {
      currentIndex: 1,
      unit: '年',
      dataList: [2016, 2017, 2018],
      title: '天翼云呼年度业务数据',
      activeIndex: 0,
      cityTabList: [
        {name: '年新增数'},
        {name: '年净增数'},
        {name: '年拆机数'},
        {name: '年总到达数'}
      ]
    }
  },
  methods: {
    switchItem(index) {
      this.currentIndex = index
    },
    switchTab(index) {
      this.activeIndex = index
    }
  },
  components: {
    WeekTab,
    Split,
    WeekData,
    CityTabs
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .year
    width 100%
    color #000
</style>