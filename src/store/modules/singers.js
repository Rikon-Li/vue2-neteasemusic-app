import { SINGERS_API } from "../../api/url";
import http from "../../api/http";
// http://47.112.160.41:3000/artist/list?type=1&area=7
// 华语男歌手

export default {
  namespaced: true,
  state: {
    defaultList: [],
  },
  mutations: {
    setDefaultList(state, payload) {
      state.defaultList = payload;
    },
  },
  actions: {
    async requestDefaultList(context){
      const {data: {artists}} = await http.get(SINGERS_API);
      // console.log(artists);
      const newData = artists.map(({ id, name, picUrl })=>({ id, name, picUrl }));
      context.commit("setDefaultList", newData);
    }
  }
};
