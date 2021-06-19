import { goods } from './index.js';

// category에 매핑해주는 함수
// 강아지/사료 ~ 와 같은 카테고리에 매핑해주기 위한 함수
function getCategory(reqData) {
    return goods.get(`/category/${reqData}`);
}

// 상품을 삽입시켜주는 함수
function InsertGoods(goodsData) {
    return goods.post('/InsertGoods', goodsData);
}
 
// 상품 정보를 업데이트해주는 함수
  function updateGoods(reqData) {
    return goods.post('/updateGoods', reqData);
}

// 상품 정보를 삭제해주는 함수
  function deleteGoods(reqData) {
    return goods.post('/deleteGoods', reqData);
}

// 상품 정보 하나를 찾아주는 함수
function getGoodsOne(reqData) {
    return goods.get(`/getGoodsOne/${reqData}`);
}

// 상품 정보들을 불러오는 함수
function getGoodsList(reqData) {
    return goods.post(`/getGoodsList`, reqData);
}

export {
    getCategory,
    InsertGoods,
    getGoodsList,
    updateGoods,
    deleteGoods,
    getGoodsOne,
    getCategoryList,
};
