<template>
	<div>
		<!-- 네비바 -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
		<header class="navbar navbar-sticky">
			<!-- 검색창 -->
			<!-- sidemenu -->
			<form class="site-search" method="get">
				<input
					type="text"
					name="site_search"
					placeholder="찾으시는 물품을 입력해주세요"
				/>
				<div class="search-tools">
					<span class="clear-search">Clear</span
					><span class="close-search"><i class="icon-cross"></i></span>
				</div>
			</form>
			<div class="site-branding">
				<div class="inner">
					<!-- Off-Canvas Toggle (#shop-categories)-->
					<!-- <a
            class="offcanvas-toggle cats-toggle"
            href="#shop-categories"
            data-toggle="offcanvas"></a>
          Off-Canvas Toggle (#mobile-menu)
          <a
            class="offcanvas-toggle menu-toggle"
            href="#mobile-menu"
            data-toggle="offcanvas"></a> -->

					<router-link class="site-logo" to="/">
						<img
							src="@/assets/img/header_logo.png"
							alt="댕댕마켓"
							style="width: 55px"
						/>
						<div class="title">댕댕마켓</div>
					</router-link>
				</div>
			</div>
			<!-- 메인 네비바 -->
			<nav class="site-menu">
				<ul class="menubar">
					<li>
						<router-link to="/trade">
							<span>댕댕거래</span>
						</router-link>
					</li>
					<li>
						<a href="#"><span>댕댕피드</span></a>
					</li>
					<li>
						<router-link to="/notice">
							<span>댕댕알림</span>
						</router-link>
					</li>
					<li class="searchmenu">
						<div class="form-outline">
							<input id="search-input" type="search" class="form-control" />
							<label class="form-label" for="form1">Search</label>
						</div>
					</li>
					<li>
						<button id="search-button" type="button" class="btn btn-primary">
							<i class="fas fa-search"></i>
						</button>
					</li>
				</ul>
			</nav>

			<!-- 네비바의 내정보 -->
			<div class="toolbar">
				<div class="inner">
					<div class="tools">
						<div class="account">
							<router-link to="/mypage">
								<div class="user__icon">
									<i class="far fa-user"></i>
								</div>
							</router-link>
							<ul class="toolbar-dropdown">
								<li class="sub-menu-user">
									<div class="user-ava">
										<img
											src="@/assets/img/header_logo.png"
											alt="Daniel Adams"
										/>
									</div>
									<div class="user-info">
										<router-link to="/adminnotice">
											<h6 class="user-name">
												Admin
											</h6>
										</router-link>
										<span class="text-xs text-muted">환영합니다!</span>
									</div>
								</li>
								<li>
									<router-link to="/mypage">
										<i class="fas fa-bone"></i>
										마이댕댕
									</router-link>
								</li>
								<li>
									<a href="#" @click="showPopup"
										><i class="far fa-comment-dots"></i> 댕댕톡</a
									>
								</li>
								<li>
									<router-link to="/mypage">
										<i class="fas fa-shopping-basket"></i>
										wishlist
									</router-link>
								</li>
								<li class="sub-menu-separator"></li>
								<li>
									<a href="#"> <i class="fas fa-sign-out-alt"></i>로그아웃</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div>
			<span class="sidemenu-slide">
				<div class="nav-container" tabindex="0" @click="checkSidebarVisibility">
					<div class="nav-toggle"></div>
					<v-navigation-drawer
						v-if="showSidebar"
						id="app-drawer"
						v-model="drawer"
						app
						dark
						:color="colors.menu_background_color"
						floating
						persistent
						mobile-break-point="960"
						width="280"	
						sm="3"
                        xl="3"
                        lg="3"
                        xs="3"
                        md="3"
                        cols="12"					
					>
						<div>
							<v-layout class="fill-height" tag="v-list" column>
								<v-list>
									<v-list-item v-on:click="showSidebar = false">
										<v-toolbar-title
											><v-icon class="mr-2">fas fa-bars</v-icon
											>댕댕마켓</v-toolbar-title
										>
									</v-list-item>
									<hr class="mt-2 mb-2" />
									<v-list-item-group active-class="white--text">
										<template v-for="menu in menus">
											<template v-if="menu.childrens">
												<v-list-group :prepend-icon="menu.icon" :key="menu.id">
													<template v-slot:activator>
														<v-list-item-title>{{
															menu.title
														}}</v-list-item-title>
													</template>
													<template v-for="children in menu.childrens">
														<v-list-item
															@click="movePage(children.target)"
															:key="children.id"
															class="ml-2"
															:active-class="
																`${colors.menu_selected_color} accent-4 white--text`
															"
														>
															<v-list-item-icon
																:active-class="
																	`${colors.menu_selected_color} accent-4`
																"
															>
																<v-icon>{{ children.icon }}</v-icon>
															</v-list-item-icon>
															<v-list-item-title>
																{{ children.title }}
															</v-list-item-title>
														</v-list-item>
													</template>
												</v-list-group>
											</template>
											<template v-else>
												<v-list-item
													@click="movePage(menu.target)"
													:key="menu.id"
												>
													<v-list-item-icon>
														<v-icon>{{ menu.icon }}</v-icon>
													</v-list-item-icon>
													<v-list-item-title>{{
														menu.title
													}}</v-list-item-title>
												</v-list-item>
											</template>
										</template>
									</v-list-item-group>
								</v-list>
							</v-layout>
						</div>
					</v-navigation-drawer>
				</div>
			</span>
		</div>
	</div>
</template>

<script>
// import Menus from './menus.vue';
import { mapState } from 'vuex';
import _ from 'lodash';
export default {
	computed: _.extend(mapState(['menus', 'colors'])),
	data: () => ({
		drawer: null,
		color: 'success',
		responsive: false,
		showSidebar: false,
	}),
	mounted() {
		this.onResponsiveInverted();
		window.addEventListener('resize', this.onResponsiveInverted);

		document.addEventListener(
			'click',
			function(event) {
				// If the click inside the element, do nothing
				if (event.target.closest('.nav-container')) return;
				// If the clicks outside the element, hide it!
				this.showSidebar = false;
			}.bind(this),
		);
	},
	methods: {
		showPopup() {
			const host = 'http://' + window.location.host + '/chat';
			window.open(host, 'a', 'width=800, height=880, left=100, top=50');
		},
		movePage(target) {
			// this.showSidebar=false;
			this.$router.push({ name: target });
		},
		onResponsiveInverted() {
			if (window.innerWidth < 1000) {
				this.responsive = true;
			} else {
				this.responsive = false;
			}
		},
		checkSidebarVisibility() {
			this.showSidebar = true;
		},
	},
};
</script>
<style>
.mr-2 {
	padding-right: 10px;
}
.sidemenu-slide {
	/* padding: 20px 20px 20px 20px; */
	padding-left: 20px;
	padding-right: 20px;
	/* padding-top: 100px; */
}
/* .v-navigation-drawer__content{
	z-index:20;
} */
.fill-height{
	z-index:20;
}
.nav-container{
	z-index:10;
}
.menubar {
	padding-left: 300px;
}
.searchmenu {
	padding-left: 200px;
	width: 400px;
}
.title {
	font-size: 18px;
}
.toolbar {
	z-index: 7;
	position: absolute;
}

.user__icon {
	font-size: 30px;
}
</style>
