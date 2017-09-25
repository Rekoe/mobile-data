<template>
  <div class="echarts">
    <div id="bar" class="bar"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    options: {
      type: Object,
      default: {}
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
