import { createRouter, createWebHistory } from 'vue-router'; // eslint-disable-line no-unused-vars
import Home from '../views/Home.vue';
import Trade from '../views/Trade.vue';
import Feed from '../views/Feed.vue';
import Notice from '../views/Notice.vue';
import Chat from '../views/Chat.vue';
import LoginJoin from '../views/LoginJoin.vue';
import MyPage from '../views/MyPage.vue';
import NoticeAdd from '../views/NoticeAdd.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Report from '../views/Report.vue';

import AdminNotice from '../views/AdminNotice.vue';
import AdminReport from '../views/AdminReport.vue';
import AdList from '../views/AdList.vue';

const routes = [
  {
    path: '/',
    redirect: '/home', // redirect는 페이지 열자마자 특정페이지로 나타냄
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/trade',
    name: 'Trade',
    component: Trade,
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/loginjoin',
    name: 'LoginJoin',
    component: LoginJoin,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/noticeadd',
    name: 'NoticeAdd',
    component: NoticeAdd,
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
  },
  {
    path: '/adminnotice',
    name: 'AdminNotice',
    component: AdminNotice,
  },
  {
    path: '/adminreport',
    name: 'AdminReport',
    component: AdminReport,
  },
  {
    path: '/adlist',
    name: 'AdList',
    component: AdList,
  },
  // {
  //   path: '*',
  //   component: NotFoundPage, // 404페이지 제어
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
