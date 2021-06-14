import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery'

import '../public/css/mycss.css';
import '../public/css/styles.min.css';
import '../public/css/vendor.min.css';
// import '../public/js/vendor.min.js';
// import '../public/js/scripts.min.js';
// import '../public/js/modernizr.min.js';



createApp(App).use(router).mount('#app');
