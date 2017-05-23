import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Show from '@/pages/Show'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/show/:id',
      name: 'show',
      component: Show,
      props: true // https://goo.gl/gjd9D1
    }
  ]
})
