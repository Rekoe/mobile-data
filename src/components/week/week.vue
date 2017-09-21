<template>
  <div class="week">
    <week-tab :unit="unit" @switch="switchItem" :currentIndex="currentIndex" :dataList="dataList"></week-tab>
    <split></split>
    <week-data></week-data>
    <split></split>
    <city-tabs :activeIndex="activeIndex" :title="title" :cityTabList="cityTabList" @switchTab="switchTab"></city-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import WeekTab from 'components/data-tabs/data-tabs'
import Split from 'base/split/split'
import WeekData from 'components/week-data/week-data'
import CityTabs from 'base/city-tabs/city-tabs'
import {getWeeksList} from 'common/js/format'
// import axios from 'axios'
// import qs from 'qs'
export default {
  data() {
    return {
      currentIndex: 1,
      dataList: [],
      unit: '周',
      activeIndex: 0,
      title: '天翼云呼每周业务数据',
      cityTabList: [
        { name: '每周新增数' },
        { name: '每周净增数' },
        { name: '每周拆机数' }
      ]
    }
  },
  created() {
    this._getWeek()
  },
  methods: {
    switchItem(index) {
      this.currentIndex = index
    },
    switchTab(index) {
      this.activeIndex = index
    },
    _getWeek() {
      let date = new Date()
      let year = date.getFullYear()
      // console.log(year)
      this.dataList = getWeeksList(year)
      // console.log(this.dataList)
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
  .week
    width 100%
    color #000
</style>
