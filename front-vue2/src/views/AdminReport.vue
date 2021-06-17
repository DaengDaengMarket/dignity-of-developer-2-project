<template>
  <div id="adreport">
    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">
      <!-- main Content-->
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs nav-justified">
            <li class="nav-item">
              <div class="nav-link active">
                <router-link to="/adminnotice">
                  공지사항
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link active">
                <router-link to="/adminreport">
                  신고글처리
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link active">
                <router-link to="/adlist">
                  광고관리
                </router-link>
              </div>
            </li>
          </ul>
        </div>

        <div class="card-body black-border">
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="" />
              <label
                class="form-check-label"
                for="flexCheckDefault">
                전체선택
              </label>
            </div>
          </div>
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="" />
              <label
                class="form-check-label"
                for="flexCheckChecked">
                <a href="admin공지등록.html">신고내용 : 상품이 이미 팔려서</a>
              </label>
            </div>
          </div>
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="" />
              <label
                class="form-check-label"
                for="flexCheckChecked">
                <a href="admin공지등록.html">신고내용 : 상품이 이미 팔려서</a>
              </label>
            </div>
          </div>
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="" />
              <label
                class="form-check-label"
                for="flexCheckChecked">
                <a href="admin공지등록.html">신고내용 : 상품이 이미 팔려서</a>
              </label>
            </div>
          </div>
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="" />
              <label
                class="form-check-label"
                for="flexCheckChecked">
                <a href="admin공지등록.html">신고내용 : 상품이 이미 팔려서</a>
              </label>
            </div>
          </div>
          <div class="row bg-light p-3 black-border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                checked />
              <label
                class="form-check-label"
                for="flexCheckChecked">
                <a href="admin공지등록.html">신고내용 : 상품이 이미 팔려서</a>
              </label>
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
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-end"
            role="group">
            <button
              type="button"
              class="btn btn-outline-primary">
              신고글삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .offcanvas-wrapper{
    z-index:1;
  }
</style>