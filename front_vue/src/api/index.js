import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/trade',
    name: 'Trade',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Trade.vue'),
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Feed.vue'),
  },
  {
    path: '/adlist',
    name: 'AdList',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AdList.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
  },
  {
    path: '/loginjoin',
    name: 'LoginJoin',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginJoin.vue'),
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyPage.vue'),
  },
  {
    path: '/noticeadd',
    name: 'NoticeAdd',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NoticeAdd.vue'),
  },
  {
    path: '/productadd',
    name: 'ProductAdd',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ProductAdd.vue'),
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue'),
  },
  {
    path: '/report',
    name: 'Report',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Report.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
