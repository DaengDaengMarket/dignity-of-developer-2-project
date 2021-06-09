import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/mycss.css';
//import './css/styles.min.css';
createApp(App).use(router).mount('#app');
