<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
// import Login from 'components/login/login'
import MHeader from 'components/m-header/m-header'
export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style>
</style>
