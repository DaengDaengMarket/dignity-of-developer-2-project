import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../public/css/mycss.css';
import '../public/css/styles.min.css';
// import '../public/css/vendor.min.css';


createApp(App).use(router).mount('#app');
