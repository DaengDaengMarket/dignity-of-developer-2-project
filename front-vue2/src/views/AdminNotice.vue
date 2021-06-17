<template>
  <div id="adnotice">
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

        <div class="card-body">
          <div
            class="accordion"
            id="accordionPanelsStayOpenExample">
            <div
              class="accordion"
              id="accordionExample">
              <div class="card">
                <div
                  class="card-header"
                  id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      Collapsible Group Item #1
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                    <code>.show</code> class.
                  </div>
                </div>
              </div>
              <div class="card">
                <div
                  class="card-header"
                  id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      Collapsible Group Item #2
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    Some placeholder content for the second accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div
                  class="card-header"
                  id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by
                    default.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-end"
              role="group">
              <router-link to="/noticeadd">
                <button
                  type="button"
                  class="btn btn-outline-primary">
                  공지 등록
                </button>
              </router-link>
              <button
                type="button"
                class="btn btn-outline-primary">
                공지 수정
              </button>
              <button
                type="button"
                class="btn btn-outline-primary">
                공지 삭제
              </button>
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

<style>
  .offcanvas-wrapper{
    z-index:1;
  }
</style>