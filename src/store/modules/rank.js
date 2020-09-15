import { RANK_API } from "../../api/url";
import http from "../../api/http";

export default {
  namespaced: true,
  state: {
    rankList: [],
  },
  mutations: {
    setRankList(state, payload) {
      state.rankList = payload;
    },
  },
  actions: {
    async requestRankList(context){
      const {data:{list}} = await http.get(RANK_API);
      // console.log(list);
      const newData = list.map(({ updateFrequency, tracks, coverImgUrl })=>({ updateFrequency, tracks, coverImgUrl }));
      console.log(newData);
      context.commit("setRankList", newData);
      // console.log(newData);
    }
  }
};
