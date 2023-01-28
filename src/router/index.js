import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import About from '../pages/about/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
