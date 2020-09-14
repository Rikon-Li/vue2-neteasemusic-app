import { SINGERS_API } from "../../api/url";
import http from "../../api/http";

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
    async requestDefaultList(context, args={'area':-1,'type':-1}){
      const {data: {artists}} = await http.get(SINGERS_API,args);
      const newData = artists.map(({ id, name, picUrl })=>({ id, name, picUrl }));
      context.commit("setDefaultList", newData);
    }
  }
};
