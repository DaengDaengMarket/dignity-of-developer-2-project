<template>
	<div id="mypage">
		<!-- 배너슬라이드  -->
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-bs-ride="carousel"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="../../public/img/banners/home02.jpg"
						class="d-block w-100"
						alt="../../public/img/banners/home02.jpg"
					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div class="carousel-item">
					<img
						src="../../public/img/banners/home02.jpg"
						class="d-block w-100"
						alt="../../public/img/banners/home02.jpg"
					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div class="carousel-item">
					<img
						src="../../public/img/banners/home02.jpg"
						class="d-block w-100"
						alt="../../public/img/banners/home02.jpg"
					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>

		<!-- Off-Canvas Wrapper-->
		<div class="offcanvas-wrapper">
			<div class="container padding-bottom-1x mb-1">
				<div class="tab-content" id="myTabContent">
					<!--  탭 1 : 거래목록  -->
					<div
						class="tab-pane fade show active"
						id="itemlist"
						role="tabpanel"
						aria-labelledby="itemlist-tab"
					>
						<!-- 상품 리스트 메뉴 -->
						<div class="shop-toolbar padding-top-2x">
							<h2 class="text-center mb-30">
								물품
							</h2>
						</div>

						<!-- 상품 리스트 그룹 1  -->
						<div class="card-group">
							<div
								class="card"
								v-for="item in test.items1"
								v-bind:key="item"
							>
								<img :src="item.path" class="card-img-top" alt="image" />
								<div class="card-body">
									<h5 class="card-title">
										강아지도 쓸 수 있는집
									</h5>
									<p class="card-text">
										20,000원
									</p>
									<p class="card-text">
										삼성1동
									</p>

									<router-link to="/productdetail">
										<div class="card-button">
											<button type="button" class="btn btn-primary btn-sm">
												상세 정보 보기
											</button>
										</div>
									</router-link>
								</div>
								<div class="card-footer">
									<small class="text-muted">1시간 전</small>
								</div>
							</div>
							
							
						</div>

						<!-- 상품 리스트 그룹 2  -->
						<div class="card-group">
							<div
								class="card"
								v-for="item in test.items2"
								v-bind:key="item"
							>
								<img :src="item.path" class="card-img-top" alt="image" />
								<div class="card-body">
									<h5 class="card-title">
										소독 스프레이
									</h5>
									<p class="card-text">
										60,000원
									</p>
									<p class="card-text">
										대치동
									</p>
									<div class="card-button">
										<button type="button" class="btn btn-primary btn-sm">
											상세 정보 보기
										</button>
									</div>
								</div>
								<div class="card-footer">
									<small class="text-muted">1시간 전</small>
								</div>
							</div>
							
						</div>

						<!-- 상품 리스트 그룹 3  -->
						<div class="card-group">
							<div
								class="card"
								v-for="item in test.items3"
								v-bind:key="item"
							>
								<img :src="item.path" class="card-img-top" alt="image" />
								<div class="card-body">
									<h5 class="card-title">
										강아지 타워
									</h5>
									<p class="card-text">
										12,000원
									</p>
									<p class="card-text">
										성수동
									</p>
									<div class="card-button">
										<button type="button" class="btn btn-primary btn-sm">
											상세 정보 보기
										</button>
									</div>
								</div>
								<div class="card-footer">
									<small class="text-muted">1시간 전</small>
								</div>
							</div>
						</div>

						<!-- Pagination(무한스크롤)-->
						<!-- <nav class="pagination">
              <div class="column">
                <ul class="pages">
                  <li class="active">
                    <a href="#">1</a>
                  </li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li>...</li>
                  <li><a href="#">12</a></li>
                </ul>
              </div>
              <div class="column text-right hidden-xs-down">
                <a
                  class="btn btn-outline-secondary btn-sm"
                  href="#">Next&nbsp;<i class="icon-arrow-right"></i></a>
              </div>
            </nav> -->
					</div>

					<!-- 모달용 버튼 -->
					<div class="modal-test">
						<button
							class="btn btn-outline-primary"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#review-modal"
						>
							상품 후기 등록
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';
export default {
	computed: _.extend(mapState(['test'])),
	name: '',
	components: {},
	data() {
		return {};
	},
};
</script>

<style scoped>
.offcanvas-wrapper {
	z-index: 3;
}
.card {
	padding: 20px;
}
.card-group {
	margin-bottom: 3%;
}
.card-body > *,
.card-footer {
	display: flex;
	justify-content: center;
}
.dropdown > button {
	height: 35px;
	display: flex;
	align-items: center;
}
.card-button > button {
	margin-left: 10px;
}

.comment {
	width: 90%;
}
</style>
