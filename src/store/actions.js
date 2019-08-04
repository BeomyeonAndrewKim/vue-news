import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  async FETCH_USER({ commit }, username) {
    const { data } = await fetchUserInfo(username);
    commit("SET_USER", data);
    return data
  },
  async FETCH_ITEM({ commit }, itemId) {
    const { data } = await fetchItemInfo(itemId)
    commit("SET_ITEM", data);
    return data;
  },
  async FETCH_LIST({ commit }, pageName) {
    const { data } = await fetchList(pageName);
    commit("SET_LIST", data);
    return data;
  }
};
