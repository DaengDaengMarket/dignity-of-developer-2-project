<template>
  <div>
    <div
      class="offcanvas-container"
      id="shop-categories">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title">
          카테고리
        </h3>
      </div>
      <nav class="offcanvas-menu">
        <ul class="menu">
          <li class="has-children">
            <span><a href="#">대형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
          <li class="has-children">
            <span><a href="#">중형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
          <li class="has-children">
            <span><a href="#">소형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 모바일용 햄버거 버튼 메뉴 -->
    <div
      class="offcanvas-container"
      id="mobile-menu">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title">
          카테고리
        </h3>
      </div>
      <nav class="offcanvas-menu">
        <ul class="menu">
          <li class="has-children">
            <span><a href="#">대형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
          <li class="has-children">
            <span><a href="#">중형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
          <li class="has-children">
            <span><a href="#">소형견</a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="#">사료/간식</a></li>
              <li><a href="#">위생/배변</a></li>
              <li><a href="#">미용/목욕</a></li>
              <li><a href="#">이동장/하우스</a></li>
              <li><a href="#">장난감/훈련용품</a></li>
              <li><a href="#">급수기/급식기</a></li>
              <li><a href="#">의류/액세서리</a></li>
              <li><a href="#">외출용품</a></li>
              <li><a href="#">기타용품</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 네비바 -->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header class="navbar navbar-sticky">
      <!-- 검색창 -->
      <form
        class="site-search"
        method="get">
        <input
          type="text"
          name="site_search"
          placeholder="찾으시는 물품을 입력해주세요" />
        <div class="search-tools">
          <span class="clear-search">Clear</span><span class="close-search"><i class="icon-cross"></i></span>
        </div>
      </form>
      <div class="site-branding">
        <div class="inner">
          <!-- Off-Canvas Toggle (#shop-categories)-->
          <a
            class="offcanvas-toggle cats-toggle"
            href="#shop-categories"
            data-toggle="offcanvas"></a>
          <!-- Off-Canvas Toggle (#mobile-menu)-->
          <a
            class="offcanvas-toggle menu-toggle"
            href="#mobile-menu"
            data-toggle="offcanvas"></a>
          <router-link
            class="site-logo"
            to="/">
            <img
              src="/img/header_logo.png"
              alt="댕댕마켓"
              style="width: 55px" />
          </router-link>
        </div>
      </div>
      <!-- 메인 네비바 -->
      <nav class="site-menu">
        <ul>
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
        </ul>
      </nav>

      <!-- 네비바의 내정보 -->
      <div class="toolbar">
        <div class="inner">
          <div class="tools">
            <div class="search">
              <i class="icon-search"></i>
            </div>
            <div class="account">
              <router-link to="/mypage">
                <i class="icon-head"></i>
              </router-link>
              <ul class="toolbar-dropdown">
                <li class="sub-menu-user">
                  <div class="user-ava">
                    <img
                      src="img/account/user-ava-sm.jpg"
                      alt="Daniel Adams" />
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
                    마이댕댕
                  </router-link>
                </li>
                <li>
                  <a
                    href="#"
                    @click="showPopup">댕댕톡</a>
                </li>
                <li>
                  <router-link to="/mypage">
                    wishlist
                  </router-link>
                </li>
                <li class="sub-menu-separator"></li>
                <li>
                  <a href="#"> <i class="icon-unlock"></i>로그아웃</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods:{
    showPopup() {
      const host='http://'+window.location.host+'/chat';
      window.open(host, "a", "width=800, height=880, left=100, top=50")
    }
  },
}


</script>
