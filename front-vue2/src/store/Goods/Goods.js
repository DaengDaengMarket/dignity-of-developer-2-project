// api에서 goods 리스트들을 받아온다
import { getGoodsList, getGoodsOne } from '@/api/goods.js';
const state={
    goods:[],
    total:0,
}

const mutations = {
    getGoodList(state, data) {
      state.goods = data.data.results;
    },
    getGoodOne(state, data) {
      state.goods = data.data.results;
    },
};

const actions={
    async getGoodList(context, data) {
        try {
          const response = await getGoodsList(data);
          context.commit('getGoodList', response);
        } catch (error) {
          alert(error);
        }
      },
      async getGoodOne(context, data) {
        try {
          const response = await getGoodsOne(data);
          context.commit('getGoodOne', response);
        } catch (error) {
          alert(error);
        }
      },
}

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};