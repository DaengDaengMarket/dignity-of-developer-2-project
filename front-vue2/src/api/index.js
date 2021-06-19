import axios from 'axios';
import { setInterceptors } from './common/interceptor';

// 인증이 필요한 api호출 시 이 함수를 이용해준다
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
  });
  return setInterceptors(instance);
}

// 현재 백엔드와 연동된 데이터가 없기 때문에 임의로 goods 데이터를 넣어준다
export const goods=[
    {
      "title": "메인 상품1",
      "price": "20000",
      "image": "https://picsum.photos/1920/570/?image=814",
      "location": "삼성 1동",
      "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
    {
        "title": "메인 상품1",
        "price": "20000",
        "image": "https://picsum.photos/1920/570/?image=814",
        "location": "삼성 1동",
        "time": "1시간 전"
    },
  ]

// export const goods = createInstanceWithAuth('goods');
// export const reply = createInstanceWithAuth('reply');
// export const cart = createInstanceWithAuth('cart');
// export const user = createInstanceWithAuth('user');
