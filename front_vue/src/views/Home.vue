<template>
  <div id="mypage">
    <!-- 광고 배너 슬라이더 -->
    <section
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
    </section>
    
    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">
      <div class="container padding-bottom-1x mb-1">
        <div
          class="tab-content"
          id="myTabContent">
          <!--  탭 1 : 거래목록  -->
          <div
            class="tab-pane fade show active"
            id="itemlist"
            role="tabpanel"
            aria-labelledby="itemlist-tab">
            <!-- 상품 리스트 메뉴 -->
            <div class="shop-toolbar padding-top-2x">
              <h2 class="text-center mb-30">
                물품
              </h2>
            </div>

            <!-- 상품 리스트 그룹 1  -->
            <div class="card-group">
              <!-- 카드 1 -->
              <div class="card">
                <img
                  src="../../public/img/shop/products/01.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/01.jpg" />
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
                      <button
                        type="button"
                        class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/01.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/01.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/04.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/01.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/01.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/01.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/04.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/09.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/10.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/11.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
                  alt="../../public/img/shop/products/12.jpg" />
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
                    <button
                      type="button"
                      class="btn btn-primary btn-sm">
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
              data-toggle="modal"
              data-target="#review-modal">
              Modal Test
              btn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Back To Top Button-->
  <a
    class="scroll-to-top-btn"
    href="#"><i class="icon-arrow-up"></i></a>
  <!-- Backdrop-->
  <div class="site-backdrop"></div>

  <!-- 상품후기 모달 -->
  <div
    class="modal fade"
    id="review-modal"
    tabindex="-1"
    role="dialog">
    <div
      class="modal-dialog modal-dialog-centered"
      role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">
            거래 후기
          </h3>
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close">
            <span
              aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>댕댕 정보: 금 목줄</p>
          <p style="display: inline-block;">
            평가:
          </p><div class="rating-stars">
            <i class="icon-star filled"></i>
            <i class="icon-star filled"></i>
            <i class="icon-star filled"></i>
            <i class="icon-star filled"></i>
            <i class="icon-star"></i>
          </div>
        
          <div class="form-group row">
            <div class="col-10">
              <textarea
                class="form-control"
                id="textarea-input"
                rows="5"
                placeholder="상세 내용을 작성해주세요."></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary btn-sm"
            type="button">
            후기 작성 완료
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .card {
    padding: 20px;
  }

  .card-group {
    margin-bottom: 3%;
  }

  .card-body>*,
  .card-footer {
    display: flex;
    justify-content: center;
  }


  .dropdown>button {
    height: 35px;
    display: flex;
    align-items: center;
    

  }

  .card-button>button {
    margin-left: 10px;
  }

 
  .comment{
        width: 90%;
  }
</style>
