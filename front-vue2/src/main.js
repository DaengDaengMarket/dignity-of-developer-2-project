import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import store from './store/index.js';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Vue.use(BootstrapVue);

// sidemenu를 위한 설정
import VueSidebarMenu from 'vue-sidebar-menu';
import Slider from '@jeremyhamm/vue-slider';
import vuetify from './plugins/vuetify';
import sidemenu from '../public/css/sidemenu.css';

//css 설정
import '../public/css/mycss.css';
//import '../public/css/vendor.min.css';
import '../public/css/styles.min.css'; // 폰트 적용됨

// Vue.use(sidemenu)
// Vue.use(Slider)
// Vue.use(VueSidebarMenu)
Vue.config.productionTip = false;

new Vue({
	components: {
		app: App,
	},
	render: h => h(App),
	router,
	store,
	vuetify,
	sidemenu,
	Slider,
	VueSidebarMenu,
}).$mount('#app');
