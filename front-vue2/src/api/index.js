
import { setInterceptors } from './common/interceptor';

// 인증이 필요한 api호출 시 이 함수를 이용해준다
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
  });
  return setInterceptors(instance);
}

// 현재 백엔드와 연동된 데이터가 없기 때문에 임의로 goods 데이터를 넣어준다
// export const goods = createInstanceWithAuth('goods');
// export const reply = createInstanceWithAuth('reply');
// export const cart = createInstanceWithAuth('cart');
// export const user = createInstanceWithAuth('user');
// axios의 api 함수 구조화
import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
	// return axios.get(config.baseUrl + 'news/1.json');
	return axios.get(`${config.baseUrl}news/1.json`); // 백틱기호 사용
}

function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
	return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
	return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchUserInfo,
	fetchCommentItem,
};
