<template>
  <div id="mypage">
    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">
      <!-- User Info-->
      <div class="container padding-bottom-2x mb-2">
        <hr class="margin-top-2x" />
        <aside class="user-info-wrapper">
          <div
            class="user-cover"
            style="background-image: url(img/account/user-cover-img.jpg);"></div>
          <div class="user-info">
            <div class="user-avatar">
              <a
                class="edit-avatar"
                href="#"></a><img
                  src="img/account/user-ava.jpg"
                  alt="User" />
            </div>
            <div class="user-data">
              <h4>Daniel Adams</h4>
              <span>동네 : 용산구</span>
              <span>관심사 : 소형견</span>
            </div>
          </div>
        </aside>
      </div>

      <!-- tabs menu -->
      <div class="container padding-bottom-1x mb-1">
        <ul
          class="nav nav-tabs"
          role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#거래목록"
              data-toggle="tab"
              role="tab">거래목록</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#거래후기"
              data-toggle="tab"
              role="tab">거래후기</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#동네인증하기"
              data-toggle="tab"
              role="tab">동네인증하기</a>
          </li>
        </ul>
      </div>
      <!-- tabs content -->
      <div class="tab-content">
        <!--tab 1-->
        <div
          class="tab-pane transition fade show active"
          id="거래목록"
          role="tabpanel">
          <div class="container padding-bottom-3x mb-1">
            <!-- Shop Toolbar-->
            <div class="shop-toolbar padding-bottom-1x mb-2">
              <div class="shop-sorting">
                <label for="sorting"></label>
                <select
                  class="form-control"
                  id="sorting">
                  <option>최신 순</option>
                  <option>낮은 가격순</option>
                  <option>높은 가격순</option>
                  <option>오래된 순</option>
                  <option>거래완료</option>
                  <option>거래중</option>
                </select>
              </div>
            </div>

            <!-- Products Grid-->
            <div class="isotope-grid cols-4 mb-2">
              <div class="gutter-sizer"></div>
              <div class="grid-sizer"></div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/01.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Unionbay Park</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/02.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Cole Haan Crossbody</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/03.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Oakley Kickback</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/04.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Waist Leather Belt</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/05.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Jordan City Man's Hoodie</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/06.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Palace Shell Track Jacket</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/07.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Stretch Woven Jogger</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/08.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Off the Shoulder Top</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/09.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Rocket Dog</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/10.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Daily Fabric Cap</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/11.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Top-Sider Fathom</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/12.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Vented Straw Fedora</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/13.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Diamond Quilted Backpack</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/14.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Skagen Holst Watch</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/15.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Metal Star Earings</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div class="grid-item">
                <div class="product-card">
                  <!-- toogle -->
                  <button
                    class="btn btn-outline-secondary dropdown-toggle float-right dropdown-button"
                    type="button"
                    data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#">거래 완료</a>
                    <a
                      class="dropdown-item"
                      href="#">게시글 수정</a>
                    <a
                      class="dropdown-item"
                      href="#">숨기기</a>
                    <a
                      class="dropdown-item"
                      href="#">삭제</a>
                  </div>
                  <a
                    class="product-thumb"
                    href="shop-single.html"><img
                      src="img/shop/products/16.jpg"
                      alt="Product" /></a>
                  <h3 class="product-title">
                    <a href="shop-single.html">Big Wordmark Tote</a>
                  </h3>
                  <h4 class="product-price">
                    3,000원
                  </h4>
                  <p class="product-title">
                    삼성동
                  </p>
                  <div class="product-buttons">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination-->
            <nav class="pagination">
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
            </nav>
          </div>
        </div>

        <!--tab 2-->
        <div
          class="tab-pane transition fade scale"
          id="거래후기"
          role="tabpanel">
          <div class="container padding-bottom-3x mb-1">
            <!-- Messages-->
            <div class="comment">
              <div class="comment-author-ava">
                <img
                  src="img/reviews/01.jpg"
                  alt="Avatar" />
              </div>
              <div class="rating-stars padding-bottom-1 mb-1">
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star"></i>
              </div>
              <div class="comment-body">
                상품명 : <span class="comment-text">사료</span>
                <p class="comment-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                  non
                  provident, similique sunt in culpa qui officia deserunt mollitia animi.
                </p>
                <div class="comment-footer">
                  <span class="comment-meta">Daniel Adams</span>
                  <span class="comment-meta">&nbsp;&nbsp;</span>
                  <span class="comment-meta">2021-5-26</span>
                </div>
              </div>
            </div>

            <div class="comment">
              <div class="comment-author-ava">
                <img
                  src="img/reviews/03.jpg"
                  alt="Avatar" />
              </div>
              <div class="rating-stars padding-bottom-1 mb-1">
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star"></i>
              </div>
              <div class="comment-body">
                상품명 : <span class="comment-text">장난감</span>
                <p class="comment-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <div class="comment-footer">
                  <span class="comment-meta">Jacob Hammond, Staff</span>
                  <span class="comment-meta">&nbsp;&nbsp;</span>
                  <span class="comment-meta">2021-5-26</span>
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="comment-author-ava">
                <img
                  src="img/reviews/03.jpg"
                  alt="Avatar" />
              </div>
              <div class="rating-stars padding-bottom-1 mb-1">
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star filled"></i>
                <i class="icon-star"></i>
              </div>
              <div class="comment-body">
                상품명 : <span class="comment-text">사료</span>
                <p class="comment-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip
                  ex ea commodo consequat.
                </p>
                <div class="comment-footer">
                  <span class="comment-meta">Jacob Hammond, Staff</span>
                  <span class="comment-meta">&nbsp;&nbsp;</span>
                  <span class="comment-meta">2021-5-26</span>
                </div>
              </div>
              <!-- Pagination-->
              <nav class="pagination">
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
              </nav>
            </div>
          </div>
        </div>

        <!--tab 3-->
        <div
          class="tab-pane transition fade scaledown"
          id="동네인증하기"
          role="tabpanel">
          <div class="container padding-bottom-3x mb-1">
            <!-- Register page -->
            <section>
              <!-- <div class="main"> -->
              <div class="location-check">
                <a
                  class="btn btn-primary"
                  href="#">
                  <i class="fas fa-map-marker-alt">내 위치 확인하기</i>
                </a>
              </div>
              <div class="location-title">
                <i class="fas fa-home">내 동네</i>
              </div>
              <div class="location-box form-border">
                <div>용산구</div>
              </div>
              <!--Google map-->
              <div
                id="map-container-google-2"
                class="location-image z-depth-1-half"
                style="height: 500px">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.066108514817!2d126.96317646311331!3d37.52921339051611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca23c7e313fd3%3A0xa4342ca52af9b117!2z7ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rA!5e0!3m2!1sko!2skr!4v1621955418742!5m2!1sko!2skr"
                  style="border:0"
                  allowfullscreen></iframe>
              </div>
              <!--Google Maps-->
              <!-- <div class="location-image">
                  <img src="./img/features/02.jpg">
                  </img>
                </div> -->
              <div class="location-result-box ">
                <div class="">
                  현재 위치가 &nbsp;<p style="color:rgb(13, 169, 239);">
                    '용산구'
                  </p>&nbsp;에 있어요
                </div>
              </div>

              <button class="location-confirm btn-primary">
                동네 인증 확정하기
              </button>
            <!-- </div> -->
            </section>
          </div>
        </div>
      </div>

      <!-- Site Footer-->
      <footer class="site-footer">
        <div class="container">
          <hr class="hr-light mt-2 margin-bottom-2x" />
          <!-- Copyright-->
          <p><strong>고객문의</strong> cs@dangmarket.com &nbsp;&nbsp;&nbsp; <strong>광고문의</strong> ad@dangmarket.com</p>
          <p>서울특별시 강남구 테헤란로2길 &nbsp;&nbsp;&nbsp; 사업자 등록번호 : 123-12-12345</p>
          <p class="mb-1">
            &copy; Dangdang Market Inc.
          </p>
        </div>
      </footer>
    </div>
    <!-- Back To Top Button--><a
      class="scroll-to-top-btn"
      href="#"><i class="icon-arrow-up"></i></a>
    <!-- Backdrop-->
    <div class="site-backdrop"></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
