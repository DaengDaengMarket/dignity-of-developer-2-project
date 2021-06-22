<template>
<div>
      <Header v-if="chatcheck"/>
      <router-view/>
      <Footer v-if="chatcheck"/>
</div>
</template>

<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
export default {
	mounted() {
		if (window.location.pathname === '/chat') {
			this.chatcheck = false;
			console.log(window.location.pathname);
		} else this.chatcheck = true;
	},
	data() {
		return {
			chatcheck: true,
			loading: false,
			post: null,
			error: null,
		};
	},
	created() {
		this.fetchData();
	},
	watch: {
		$route: 'fetchData',
	},
	components: {
		Header,
		Footer,
	},
	methods: {
		fetchData() {
			this.error = this.post = null;
			this.loading = true;
			// `getPost`를 데이터 가져오기 위한 유틸리티/API 래퍼로 변경합니다.
		},
	},
};
</script>

<style scoped>
.offcanvas-wrapper {
	z-index: 5;
}
</style>
