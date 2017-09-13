<template>
  <div class="charts">
    <div id="pile" class="pile"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      options: {
        title: {},
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['新增数', '净增数', '拆机数']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['24', '25', '26', '27', '28', '29']
        },
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '新增数',
            type: 'line',
            lineStyle: { normal: { color: '#64779e' } },
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210],
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            color: ['#64779e']
          },
          {
            name: '净增数',
            type: 'line',
            lineStyle: { normal: { color: '#32b5fc' } },
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310],
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            color: ['#32b5fc']
          },
          {
            name: '拆机数',
            type: 'line',
            lineStyle: { normal: { color: '#faae00' } },
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320],
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            color: ['#faae00']
          }
        ]
      }
    }
  },
  mounted() {
    let myChart = echarts.init(document.getElementById('pile'))
    myChart.setOption(this.options)
  }
}
</script>

<style lang="stylus" scoped>
  .chart
    width 100%
    height 100%
    .pile
      width 100%
      height 100%
</style>
