<template>
  <div class="echarts">
    <div id="bar" class="bar"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
const nodeNameList = ['广州', '深圳', '东莞', '佛山', '中山', '惠州', '珠海', '江门', '汕头', '汕尾', '揭阳', '潮州', '云浮', '湛江', '阳江', '茂名', '清远', '韶关', '梅州', '河源', '肇庆'].reverse()
export default {
  data() {
    return {
      options: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: nodeNameList
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '20%',
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    let myChart = echarts.init(document.getElementById('bar'))
    myChart.setOption(this.options)
  }
}
</script>


<style lang="stylus" scoped>
  .echarts
    width 100%
    height 500px
    .bar
      width 100%
      height 100%
</style>
