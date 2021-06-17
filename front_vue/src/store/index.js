import { createApp } from 'vue';
import App from '@/App.vue';
import Vuex from 'vuex';
import state from "./state/index.js";
import mutations from './mutations.js';
import actions from './actions.js';
//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
createApp(App).use(Vuex).mount('#app');
const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store;