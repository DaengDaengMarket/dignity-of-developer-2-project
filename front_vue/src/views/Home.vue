<template>
  <div class="home">
    <!-- 광고 배너 슬라이더 -->
    <!-- <section
        class="hero-slider"
        style="background-image: url(img/hero-slider/main-bg.jpg)">
        <div
          class="owl-carousel large-controls dots-inside"
          data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">
          <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div
                  class="
                    col-lg-5 col-md-6
                    padding-bottom-2x
                    text-md-left text-center
                  ">
                  <div class="from-bottom">
                    <img
                      class="d-inline-block w-150 mb-4"
                      src="../assets/img/hero-slider/logo02.png"
                      alt="Puma" />
                    <div class="h2 text-body text-normal mb-2 pt-1">
                      사나운 강아지의 가방
                    </div>
                    <div class="h2 text-body text-normal mb-4 pb-1">
                      단돈 <span class="text-bold">₩120,000</span>
                    </div>
                  </div>
                  <a
                    class="btn btn-primary scale-up delay-1"
                    href="shop-grid-ls.html">제품 보러가기</a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3">
                  <img
                    class="d-block mx-auto"
                    src="../assets/img/hero-slider/02.png"
                    alt="Puma Backpack" />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div
                  class="
                    col-lg-5 col-md-6
                    padding-bottom-2x
                    text-md-left text-center
                  ">
                  <div class="from-bottom">
                    <img
                      class="d-inline-block w-200 mb-4"
                      src="../assets/img/hero-slider/logo01.png"
                      alt="Converse" />
                    <div class="h2 text-body text-normal mb-2 pt-1">
                      반려견과의 원활한 산책을 돕는 신발!
                    </div>
                    <div class="h2 text-body text-normal mb-4 pb-1">
                      당신에게만!<span class="text-bold">₩55,000</span>
                    </div>
                  </div>
                  <a
                    class="btn btn-primary scale-up delay-1"
                    href="shop-single.html">보러가기</a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3">
                  <img
                    class="d-block mx-auto"
                    src="../assets/img/hero-slider/01.png"
                    alt="Chuck Taylor All Star II" />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div
                  class="
                    col-lg-5 col-md-6
                    padding-bottom-2x
                    text-md-left text-center
                  ">
                  <div class="from-bottom">
                    <img
                      class="d-inline-block mb-4"
                      src="../assets/img/hero-slider/logo03.png"
                      style="width: 125px"
                      alt="Motorola" />
                    <div class="h2 text-body text-normal mb-2 pt-1">
                      댕댕의
                    </div>
                    <div class="h2 text-body text-normal mb-4 pb-1">
                      댕댕에 의한, <span class="text-bold">댕댕을 의한</span>
                    </div>
                  </div>
                  <a
                    class="btn btn-primary scale-up delay-1"
                    href="shop-single.html">후원하러 가기</a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3">
                  <img
                    class="d-block mx-auto"
                    src="../assets/img/hero-slider/banner03.png"
                    alt="Moto 360" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/img/banners/home02.jpg" class="d-block w-100"
            alt="../../public/img/banners/home02.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../public/img/banners/home02.jpg" class="d-block w-100"
            alt="../../public/img/banners/home02.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../public/img/banners/home02.jpg" class="d-block w-100"
            alt="../../public/img/banners/home02.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <!-- 메인 -->
    <section class="container padding-top-3x padding-bottom-3x">
      <main class="mt-3">
        <div class="container">
          <div class="row mb-2">
            <div class="col-12">
              <!-- <select class="form-select">
                <option selected>
                  메뉴 선택
                </option>
                <option value="1">
                  노트북
                </option>
                <option value="2">
                  모니터
                </option>
                <option value="3">
                  마우스/키보드
                </option>
              </select> -->
              <h1 class="text-center mb-30">
                물품
              </h1>
            </div>
          </div>

          <div class="row g-3">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/01.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    강아지도 쓸 수 있는 집
                  </h5>
                  <p class="card-text">
                    <span class="badge bg-dark">삼성 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    3분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/02.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    목줄
                  </h5>
                  <p class="card-text">
                    <span class="badge bg-dark">삼성 2동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    1시간 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/03.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    급수급식대
                  </h5>
                  <p class="card-text">
                    <span class="badge bg-dark">압구정동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    12분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/04.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    이동장 팔아요
                  </h5>
                  <p class="card-text">
                    <span class="badge bg-dark">신사동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    1분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/05.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    소독 스프레이
                  </h5>
                  <h4>₩60000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">삼성 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    3분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/06.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    빨간지붕개집
                  </h5>
                  <h4>₩60000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">도곡 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/07.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    귀여운 과일 옷
                  </h5>
                  <h4>₩60000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">역삼 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/08.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    1980 청바지
                  </h5>
                  <h4>₩60000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">역삼 2동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/09.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    검정 하네스
                  </h5>
                  <h4>₩500</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">개포 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/10.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    옷 같은 하네스
                  </h5>
                  <h4>₩45000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">잠실 2동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/11.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    샤워기 거치대
                  </h5>
                  <h4>₩9900</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">잠실 1동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem">
                <a href="product_detail.html"><img src="../assets/img/shop/products/12.jpg" class="card-img-top"
                    alt="keyboard" /></a>
                <div class="card-body">
                  <h5 class="card-title">
                    장난감 3개 팔아요
                  </h5>
                  <h4>₩20000</h4>
                  <p class="card-text">
                    <span class="badge bg-dark">개포 2동</span>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-md-12 text-center">
                      <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success"
                        data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product"
                        data-toast-message="successfuly added to cart!">
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    8분 전
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 모달용 버튼 -->
        <div class="modal-test">
          <button class="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#review-modal">
           상품 후기 작성
          </button>
        </div>

        <!-- 상품후기 모달 -->
        <div class="modal fade" id="review-modal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title">
                  거래 후기
                </h3>
                <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>댕댕 정보: 금 목줄</p>
                <p style="display: inline-block">
                  평가:
                </p>
                <div class="rating-stars">
                  <i class="icon-star filled"></i>
                  <i class="icon-star filled"></i>
                  <i class="icon-star filled"></i>
                  <i class="icon-star filled"></i>
                  <i class="icon-star"></i>
                </div>

                <div class="form-group row">
                  <div class="col-10">
                    <textarea class="form-control" id="textarea-input" rows="5" placeholder="상세 내용을 작성해주세요."></textarea>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary btn-sm" type="button">
                  후기 작성 완료
                </button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </section>

    <!-- Back To Top Button-->
    <a class="scroll-to-top-btn" href="#"><i class="icon-arrow-up"></i></a>
    <!-- Backdrop-->
    <div class="site-backdrop"></div>


  </div>

</template>
<script>
  export default {
    name: 'home',
    components: {

    }
  }
</script>