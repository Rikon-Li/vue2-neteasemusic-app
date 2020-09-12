import { BANNER_API, RECOMMEND_LIST_API } from "../../api/url";
import http from "../../api/http";
export default {
  namespaced: true,
  state: {
    banner: [],
    recommend: [],
    bannerLoading: false,
    recommendLoading: false,
  },
  getters:{
    loading(state){
      return state.bannerLoading || state.recommendLoading;
    }
  },
  mutations: {
    setBannerLoading(state, payload) {
      state.bannerLoading = payload;
    },
    setBanner(state, payload) {
      state.banner = payload;
    },
    setRecomendLoading(state, payload) {
      state.recommendLoading = payload;
    },
    setRecommend(state, payload) {
      state.recommend = payload;
    },
  },
  actions: {
    async requestBannerList(context) {
      context.commit("setBannerLoading", true);
      const {data: { banners }} = await http.get(BANNER_API);
      const newData = banners.map((item) => item.imageUrl);
      context.commit("setBanner", newData);
      context.commit("setBannerLoading", false);
    },
    async requestRecommendList(context) {
      context.commit("setRecomendLoading", true);
      const {data: { result }} = await http.get(RECOMMEND_LIST_API);
      const newData = result.map(({ id, name, picUrl, playCount }) => ({ id, name, picUrl, playCount }));
      context.commit("setRecommend", newData);
      context.commit("setRecomendLoading", false);
    },
  },
};
