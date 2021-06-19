<template>
<div id="sortedproduct">
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
						<!-- goods 리스트가 있을 때까지  -->
						<div class="card-group" v-if="getGoods.length>0">
							<!-- 카드 1 -->
							<div class="card" v-for="(goods,index) in getGoods" :key="index">
								<img
									src="../../public/img/shop/products/01.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
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
							<!-- 카드 2 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/02.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										목줄
									</h5>
									<p class="card-text">
										30,000원
									</p>
									<p class="card-text">
										삼성2동
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
							<!-- 카드 3 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/03.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										급수급식대
									</h5>
									<p class="card-text">
										40,000원
									</p>
									<p class="card-text">
										압구정동
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

							<!-- 카드 4 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/04.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/04.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										이동장
									</h5>
									<p class="card-text">
										50,000원
									</p>
									<p class="card-text">
										신사동
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

						<!-- 상품 리스트 그룹 2  -->
						<div class="card-group">
							<!-- 카드 1 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/05.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
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
							<!-- 카드 2 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/06.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										빨간 지붕 개집
									</h5>
									<p class="card-text">
										70,000원
									</p>
									<p class="card-text">
										도곡1동
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
							<!-- 카드 3 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/07.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/01.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										귀여운 과일 옷
									</h5>
									<p class="card-text">
										5,000원
									</p>
									<p class="card-text">
										역삼1동
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

							<!-- 카드 4 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/08.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/04.jpg"
								/>
								<div class="card-body">
									<h5 class="card-title">
										1980 청바지
									</h5>
									<p class="card-text">
										15,800원
									</p>
									<p class="card-text">
										역삼2동
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
							<!-- 카드 1 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/09.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/09.jpg"
								/>
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
							<!-- 카드 2 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/10.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/10.jpg"
								/>
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
							<!-- 카드 3 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/11.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/11.jpg"
								/>
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

							<!-- 카드 4 -->
							<div class="card">
								<img
									src="../../public/img/shop/products/12.jpg"
									class="card-img-top"
									alt="../../public/img/shop/products/12.jpg"
								/>
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
                    </div>
                </div>
            </div>
        </div>

</div>
</template>

<script>
export default {
	computed:{
		getGoods(){
			return this.$store.state.goods.goods;
		}
	}

}
</script>

<style>

</style>