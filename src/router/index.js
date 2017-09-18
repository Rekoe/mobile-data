import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import week from '@/components/week/week'
import month from '@/components/month/month'
import year from '@/components/year/year'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/week',
      component: week
    },
    {
      path: '/month',
      component: month
    },
    {
      path: '/year',
      component: year
    }
  ]
})
