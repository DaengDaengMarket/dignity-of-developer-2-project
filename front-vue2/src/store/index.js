import Vue from 'vue';
import Vuex from 'vuex';
import state from './state/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
Vue.use(Vuex); //Vuex는 플러그인의 형태로 제공되어서 Vue.use로 Vuex 사용

export const store = new Vuex.Store({
	state: {
		images: [
			{
				id: 1,
				original_name: '사진1.png',
				name: '강아지도 쓸 수 있는 집',
				path: '../../public/../img/shop/products/01.jpg',
			},
			{
				id: 2,
				original_name: '사진2.png',
				name: '목줄',
				path: '../../public/../img/shop/products/02.jpg',
			},
			{
				id: 3,
				original_name: '사진3.png',
				name: '급수급식대',
				path: '../../public/../img/shop/products/03.jpg',
			},
			{
				id: 4,
				original_name: '사진4.png',
				name: '이동장',
				path: '../../public/../img/shop/products/04.jpg',
			},
		],
		items1: [
			{
				id: 1,
				name: '강아지도 쓸 수 있는 집',
				price: 20000,
				wanted_location: '삼성1동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/01.jpg',
			},
			{
				id: 2,
				name: '목줄',
				price: 30000,
				wanted_location: '삼성2동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/02.jpg',
			},
			{
				id: 3,
				name: '급수급식대',
				price: 5000,
				wanted_location: '압구정동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/03.jpg',
			},
			{
				id: 4,
				name: '이동장',
				price: 50000,
				wanted_location: '신사동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/04.jpg',
			},
		],
		items2: [
			{
				id: 5,
				name: '소독 스프레이',
				price: 60000,
				wanted_location: '대치동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/05.jpg',
			},
			{
				id: 6,
				name: '빨간 지붕 개집',
				price: 70000,
				wanted_location: '도곡1동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/06.jpg',
			},
			{
				id: 7,
				name: '귀여운 과일 옷',
				price: 5000,
				wanted_location: '역삼1동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/07.jpg',
			},
			{
				id: 8,
				name: '1980 청바지',
				price: 15800,
				wanted_location: '역삼2동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/08.jpg',
			},
		],
		items3: [
			{
				id: 9,
				name: '검정 하네스',
				price: 12000,
				wanted_location: '개포1동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/09.jpg',
			},
			{
				id: 10,
				name: '옷 같은 하네스',
				price: 30000,
				wanted_location: '개포2동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/10.jpg',
			},
			{
				id: 11,
				name: '장난감 3개',
				price: 40000,
				wanted_location: '잠실2동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/11.jpg',
			},
			{
				id: 12,
				name: '샤워기 거치대',
				price: 9900,
				wanted_location: '잠실1동',
				created_at: '2021-06-04',
				path: '../../public/../img/shop/products/12.jpg',
			},
		],
		// items4: [
		// 	{
		// 		id: 13,
		// 		name: '강아지도 쓸 수 있는 집',
		// 		price: 20000,
		// 		wanted_location: '삼성1동',
		// 		created_at: '2021-06-04',
		// 		path: '../../public/../img/shop/products/13.jpg',
		// 	},
		// 	{
		// 		id: 14,
		// 		name: '목줄',
		// 		price: 30000,
		// 		wanted_location: '삼성2동',
		// 		created_at: '2021-06-04',
		// 		path: '../../public/../img/shop/products/14.jpg',
		// 	},
		// 	{
		// 		id: 15,
		// 		name: '급수급식대',
		// 		price: 40000,
		// 		wanted_location: '압구정동',
		// 		created_at: '2021-06-04',
		// 		path: '../../public/../img/shop/products/15.jpg',
		// 	},
		// 	{
		// 		id: 16,
		// 		name: '이동장',
		// 		price: 50000,
		// 		wanted_location: '신사동',
		// 		created_at: '2021-06-04',
		// 		path: '../../public/../img/shop/products/16.jpg',
		// 	},
		// ],
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;
