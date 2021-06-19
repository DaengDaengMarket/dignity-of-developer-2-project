<template>
<div id="content">
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
						<div class="card-group" >
							<!-- 카드 1 -->
							<div class="card"
								v-for="goods in this.$store.state.goods"
								v-bind:key="goods">
								<img
									src="goods.image"
									class="card-img-top"
									alt="goods.image"
								/>
								<div class="card-body">
									<h5 class="card-title">
										{{goods.title}}
									</h5>
									<p class="card-text">
										{{goods.price}}
									</p>
									<p class="card-text">
										{{goods.location}}
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
                    </div>
                </div>
            </div>
        </div>

</div>
</template>

<script>
export default {
	computed: {
	getGoods() {
		return this.$store.state.goods.goods;
	},
  },
}
</script>

<style>

</style>