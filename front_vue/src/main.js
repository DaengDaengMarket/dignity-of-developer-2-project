import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../public/css/mycss.css';
import '../public/css/vendor.min.css';
import '../public/css/styles.min.css'; // 폰트 적용됨


createApp(App).use(router).use(store).mount('#app');