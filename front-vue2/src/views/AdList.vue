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

        <div class="row">
          <div class="col-sm-6 col-md-4 margin-top-2x margin-bottom-2x">
            <div
              class="card container"
              style="max-width: 17rem;">
              <img
                src="../assets/x.png"
                class="card-img-top margin-top-1x"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Card 이름
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk
                  of
                  the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-outline-primary">수정</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 margin-top-2x margin-bottom-2x">
            <div
              class="card container"
              style="max-width: 20rem;">
              <img
                src="../assets/x.png"
                class="card-img-top margin-top-1x"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Card 이름
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk
                  of
                  the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-outline-primary">수정</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 margin-top-2x margin-bottom-2x">
            <div
              class="card container"
              style="width: 17rem;">
              <img
                src="../assets/x.png"
                class="card-img-top margin-top-1x"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Card 이름
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk
                  of
                  the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-outline-primary">수정</a>
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

}
</script>

<style scoped>
  .offcanvas-wrapper{
    z-index:1;
  }
</style>