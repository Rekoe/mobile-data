<template>
  <div class="week">
    <week-tab @switch="switchItem" :currentIndex="currentIndex" :dataList="dataList"></week-tab>
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
// import axios from 'axios'
// import qs from 'qs'
export default {
  data() {
    return {
      currentIndex: 1,
      dataList: [
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
      ],
      activeIndex: 0,
      title: '天翼云呼每周业务数据',
      cityTabList: [
        {name: '每周新增数'},
        {name: '每周净增数'},
        {name: '每周拆机数'}
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
      // axios.post('/api/bocc/services/TyyhService/business?wsdl').then((res) => {
      //   console.log(res)
      // })
      // axios({
      //   method: 'POST',
      //   url: '/api/figure',
      //   params: {
      //     statisticsType: '4',
      //     reportName: '1',
      //     startTime: '2017/08/10',
      //     endTime: '2017/08/24'
      //   }
      // })
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
