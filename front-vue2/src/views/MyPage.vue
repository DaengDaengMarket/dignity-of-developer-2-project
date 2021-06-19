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
              <span class="afterButton">	<!-- 모달용 버튼 -->
					<div class="modal-test">
						<button
							class="btn btn-outline-primary"
							type="button"
							@click="toggleModal"
						>
							상품 후기 등록
						</button>
					</div>
					<b-modal
										id="modal-1"
										title="상품 후기"
										v-model="modalShown"
										@show="resetModal"
										@hidden="resetModal"
										@ok="handleOk"
									>
										<form ref="form" @submit.stop.prevent="handleSubmit">
											<textarea
												class="form-control"
												id="textarea-input"
												rows="5"
												placeholder="상세 내용을 작성해주세요."
											></textarea>
										</form>
									</b-modal></span>
            </div>
          </div>
        </aside>
      </div>
      <div class="container padding-bottom-1x mb-1">
        <ul
          class="nav nav-tabs"
          id="myTab"
          role="tablist">
          <li
            class="nav-item"
            role="presentation">
            <button
              class="nav-link active"
              id="itemlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#itemlist"
              type="button"
              role="tab"
              aria-controls="itemlist"
              aria-selected="true">
              거래목록
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation">
            <button
              class="nav-link"
              id="review-tab"
              data-bs-toggle="tab"
              data-bs-target="#review"
              type="button"
              role="tab"
              aria-controls="review"
              aria-selected="false">
              거래후기
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation">
            <button
              class="nav-link"
              id="location-tab"
              data-bs-toggle="tab"
              data-bs-target="#location"
              type="button"
              role="tab"
              aria-controls="location"
              aria-selected="false">
              동네인증하기
            </button>
          </li>
        </ul>
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
            <!-- 상품 리스트 그룹 1  -->
            <div class="card-group">
              <!-- 카드 1 -->
              <div class="card">
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/01.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/01.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/01.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/01.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/01.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/01.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/01.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/01.jpg" />
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

            <!-- 상품 리스트 그룹 2  -->
            <div class="card-group">
              <!-- 카드 1 -->
              <div class="card">
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/02.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/02.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/02.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/02.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/02.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/02.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/02.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/02.jpg" />
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

            <!-- 상품 리스트 그룹 3  -->
            <div class="card-group">
              <!-- 카드 1 -->
              <div class="card">
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/03.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/03.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/03.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/03.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/03.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/03.jpg" />
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
                <!-- 드롭박스  -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">거래완료</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">게시글 수정</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">숨기기</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#">삭제</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/shop/products/03.jpg"
                  class="card-img-top"
                  alt="../../public/img/shop/products/03.jpg" />
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

          <!-- 탭 2 : 상품후기 -->
          <div
            class="tab-pane fade review-container"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab">
            <div class="container padding-bottom-3x mb-1 ">
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
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate
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
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae
                    vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia
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
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi
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
                      href="#">Next&nbsp;<i
                        class="icon-arrow-right"></i></a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="location"
            role="tabpanel"
            aria-labelledby="location-tab">
            <div class="container padding-bottom-3x mb-1">
              <!-- Register page -->
              <section>
                <!-- <div class="main"> -->
                <div class="location-check">
                  <a
                    class="btn btn-primary"
                    href="#"
                    style="color:white;">
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
      </div>
    </div>
    <!-- Back To Top Button--><a
      class="scroll-to-top-btn"
      href="#"><i class="icon-arrow-up"></i></a>
    <!-- Backdrop-->
    <div class="site-backdrop"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
		  modalShown: false,
	}),
	methods: {
		toggleModal() {
			this.modalShown = !this.modalShown;
		},
	},
  };
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
.offcanvas-wrapper{
  z-index:1
}
.afterButton{
  float:right;
}
</style>