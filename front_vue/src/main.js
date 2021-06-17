import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../public/css/mycss.css';
import '../public/css/sidemenu.css';
import '../public/css/styles.min.css';

import Slider from '@jeremyhamm/vue-slider'

import store from "./store/index.js";

import '@fortawesome/fontawesome-free/css/all.css'
import vuetify from './plugins/vuetify'
import VueSidebarMenu from 'vue-sidebar-menu'

createApp(App).use(router,store,Slider,VueSidebarMenu,vuetify).mount('#app');
