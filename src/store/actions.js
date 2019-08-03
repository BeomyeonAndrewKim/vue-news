import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username).then(({ data }) => {
      commit("SET_USER", data);
    });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId).then(({ data }) => {
      commit("SET_ITEM", data);
    });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName).then(({ data }) => {
      commit("SET_LIST", data);
    });
  }
};
