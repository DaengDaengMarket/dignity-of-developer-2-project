import store from '@/store/index';

// interceptor를 이용한 로그인 토큰 헤더에 넣어 보내기 
// 아래 url은 참고사항
// https://velog.io/@sdsdsrd/Vue-axios-interceptor%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%86%A0%ED%81%B0-%ED%97%A4%EB%8D%94%EC%97%90-%EB%84%A3%EC%96%B4-%EB%B3%B4%EB%82%B4%EA%B8%B0
export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // console.log(config);
      store.state.loading = true;
      config.headers.Authorization = store.state.user.USER_TOKEN;
      return config;
    },
    function(error) {
      store.state.loading = false;
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      store.state.loading = false;
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      store.state.loading = false;
      return Promise.reject(error);
    },
  );
  return instance;
}
