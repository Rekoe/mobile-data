<template>
  <div class="week">
    <week-tab :unit="unit" @switch="switchItem" :currentIndex="currentIndex" :dataList="dataList"></week-tab>
    <split></split>
    <week-data :weekNewly="weekNewly" :weekIncrease="weekIncrease" :weekSubtract="weekSubtract"></week-data>
    <split></split>
    <city-tabs :activeIndex="activeIndex" :title="title" :cityTabList="cityTabList" @switchTab="switchTab"></city-tabs>
    <div class="echart-wrapper">
      <echarts-bar></echarts-bar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import WeekTab from 'components/data-tabs/data-tabs'
import Split from 'base/split/split'
import WeekData from 'components/week-data/week-data'
import CityTabs from 'base/city-tabs/city-tabs'
import { getWeeksList } from 'common/js/format'
import echarts from 'echarts'
import axios from 'axios'
import EchartsBar from 'components/echarts-bar/echarts-bar'
// import qs from 'qs'

const NEW_DATA_LIST = []
const NEW_INCREASE_LIST = []
const NEW_SUBTRACT_LIST = []
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
      ],
      weekNewly: 0,
      weekIncrease: 0,
      weekSubtract: 0
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
      // 切换柱状图图标数据
      let myChart = echarts.init(document.getElementById('bar'))
      if (this.activeIndex === 0) {
        myChart.setOption({
          series: [
            {
              data: NEW_DATA_LIST
            }
          ]
        })
      } else if (this.activeIndex === 1) {
        myChart.setOption({
          series: [
            {
              data: NEW_INCREASE_LIST
            }
          ]
        })
      } else {
        myChart.setOption({
          series: [
            {
              data: NEW_SUBTRACT_LIST
            }
          ]
        })
      }
    },
    _getWeek() {
      let date = new Date()
      let year = date.getFullYear()
      // console.log(year)
      this.dataList = getWeeksList(year)
      // console.log(this.dataList)
      axios.get('http://192.168.1.71:8080/static/test.json').then((res) => {
        let resDataList = res.data.data
        this._getResDataList(resDataList)
        let myChart = echarts.init(document.getElementById('bar'))
        myChart.setOption({
          series: [
            {
              data: NEW_DATA_LIST
            }
          ]
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    // 对周数据求和
    _getResDataList(list) {
      // console.log(resDataList[0].voiceNewly)
      for (let i = 0; i < list.length; i++) {
        // 总数 = 语音客服 + 在线客服 + 云电销A + 云电销B + 云通信 + 云录音 + 移动端基础 + 移动端录音 + 移动端专业
        // 新增数
        let sumNewly = list[i].voiceNewly +
          list[i].onlineNewly +
          list[i].ydxANewly +
          list[i].ydxBNewly +
          list[i].communicationNewly +
          list[i].recordNewly +
          list[i].moveBasicsNewly +
          list[i].moveRecordNewly +
          list[i].moveSpecialtyNewly
        // 净增数
        let sumIncrease = list[i].voiceIncrease +
          list[i].onlineIncrease +
          list[i].ydxAIncrease +
          list[i].ydxBIncrease +
          list[i].communicationIncrease +
          list[i].recordIncrease +
          list[i].moveBasicsIncrease +
          list[i].moveRecordIncrease +
          list[i].moveSpecialtyIncrease
        // 拆机数
        let sumSubtract = -(list[i].voiceSubtract +
          list[i].onlineSubtract +
          list[i].ydxASubtract +
          list[i].ydxBSubtract +
          list[i].communicationSubtract +
          list[i].recordSubtract +
          list[i].moveBasicsSubtract +
          list[i].moveRecordSubtract +
          list[i].moveSpecialtySubtract)
        this.weekNewly += sumNewly
        this.weekIncrease += sumIncrease
        this.weekSubtract += sumSubtract
        NEW_DATA_LIST.push(sumNewly)
        NEW_INCREASE_LIST.push(sumIncrease)
        NEW_SUBTRACT_LIST.push(sumSubtract)
      }
      NEW_DATA_LIST.reverse()
      NEW_INCREASE_LIST.reverse()
      NEW_SUBTRACT_LIST.reverse()
      // console.log(nodeDataList.length)
      // console.log(nodeNameList.length)
      // console.log(resDataList.length)
    }
  },
  components: {
    WeekTab,
    Split,
    WeekData,
    CityTabs,
    EchartsBar
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .week
    width 100%
    color #000
    .echart-wrapper
      box-sizing border-box
      width 100%
      height 500px
      padding 12px
      .echarts
        width 100%
        height 500px
        .bar
          width 100%
          height 100%
</style>
