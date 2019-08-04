import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username).then(({ data }) => {
      commit("SET_USER", data);
    });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId).then(({ data }) => {
      commit("SET_ITEM", data);
    });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName).then(({ data }) => {
      commit("SET_LIST", data);
      return data;
    });
  }
};
