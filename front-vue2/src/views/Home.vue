<template>
	<div id="home">
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

						<Goods></Goods>
						
					</div>			
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Goods from '../components/common/goods.vue'
export default {
	name: '',
	components: {
		Goods
	},
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
