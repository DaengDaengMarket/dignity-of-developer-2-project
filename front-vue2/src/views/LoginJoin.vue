<template>
  <div id="loginjoin">
    <!-- 로그인 폼 -->
    <div class="loginjoin-title">
      회원가입/로그인
    </div>
    <div class="container padding-bottom-3x mb-2">
      <div class="row">
        <div class="col-md-6">
          <form
            class="login-box"
            method="post">
            <div class="row margin-bottom-1x">
              <div class="col-xl-4 col-md-6 col-sm-4">
                <a
                  class="btn btn-sm btn-block twitter-btn"
                  href="#"><i class="socicon-twitter"></i>&nbsp;카카오로 로그인</a>
              </div>
              <div class="col-xl-4 col-md-6 col-sm-4">
                <a
                  class="btn btn-sm btn-block google-btn"
                  href="#"><i class="socicon-googleplus"></i>&nbsp;Google로 로그인</a>
              </div>
            </div>
            <h4 class="margin-bottom-1x">
              혹은 댕댕마켓 계정으로 로그인
            </h4>
            <div class="form-group input-group">
              <input
                class="form-control"
                type="email"
                placeholder="Email"
                required /><span class="input-group-addon"><i class="icon-mail"></i></span>
            </div>
            <div class="form-group input-group">
              <input
                class="form-control"
                type="password"
                placeholder="Password"
                required /><span class="input-group-addon"><i class="icon-lock"></i></span>
            </div>
            <div class="d-flex flex-wrap justify-content-between padding-bottom-1x">
              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="remember_me"
                  checked />
                <label
                  class="custom-control-label"
                  for="remember_me">Remember me</label>
              </div>
              <a
                class="navi-link"
                href="account-password-recovery.html">비밀번호 찾기</a>
            </div>
            <div class="text-center text-sm-right">
              <button
                class="btn btn-primary margin-bottom-none"
                type="submit">
                로그인
              </button>
            </div>
          </form>
        </div>

        <!-- 회원가입 폼-->
        <div class="col-md-6">
          <div class="padding-top-3x hidden-md-up"></div>
          <h3 class="margin-bottom-1x">
            계정이 없나요?
          </h3>
          <p>1분이면 가입하고 댕댕마켓을 즐길 수 있어요!</p>
          <form
            class="row"
            method="post">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="reg-email">이메일</label>
                <input
                  class="form-control"
                  type="email"
                  id="reg-email"
                  required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="reg-phone">휴대폰 번호</label>
                <input
                  class="form-control"
                  type="text"
                  id="reg-phone"
                  required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="reg-pass">비밀번호</label>
                <input
                  class="form-control"
                  type="password"
                  id="reg-pass"
                  required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="reg-pass-confirm">비밀번호 확인</label>
                <input
                  class="form-control"
                  type="password"
                  id="reg-pass-confirm"
                  required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="reg-fn">닉네임</label>
                <input
                  class="form-control"
                  type="text"
                  id="reg-fn"
                  required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="select-input">관심사</label>
                <select
                  class="form-control select-interest"
                  id="select-input">
                  <option>관심사를 골라주세요</option>
                  <option>대형견</option>
                  <option>중형견</option>
                  <option>소형견</option>
                </select>
              </div>
            </div>
            <div class="col-12 text-center text-sm-right">
              <button
                class="btn btn-primary margin-bottom-none"
                type="submit">
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .offcanvas-wrapper{
    z-index:1;
  }
</style>