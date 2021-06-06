import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trade from  '../views/Trade.vue'
import Feed from '../views/Feed.vue'
import Notice from '../views/Notice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/trade',
    name: 'Trade',
    component: Trade
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
