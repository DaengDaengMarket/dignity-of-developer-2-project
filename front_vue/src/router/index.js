import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Trade from  '../views/Trade.vue'
import Feed from '../views/Feed.vue'
import Notice from '../views/Notice.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
