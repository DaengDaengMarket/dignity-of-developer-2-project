import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../public/css/mycss.css';
<<<<<<< HEAD
import '../public/css/vendor.min.css';
import '../public/css/styles.min.css'; // 폰트 적용됨
=======
import '../public/css/sidemenu.css';
import '../public/css/styles.min.css';
>>>>>>> 0317c0fde0a21ae45829b9d0386d202592a62cbe

import Slider from '@jeremyhamm/vue-slider'

<<<<<<< HEAD
createApp(App).use(router).use(store).mount('#app');
=======
import store from "./store/index.js";

import '@fortawesome/fontawesome-free/css/all.css'
import vuetify from './plugins/vuetify'
import VueSidebarMenu from 'vue-sidebar-menu'

createApp(App).use(router,store,Slider,VueSidebarMenu,vuetify).mount('#app');
>>>>>>> 0317c0fde0a21ae45829b9d0386d202592a62cbe
