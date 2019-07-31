import {
  fetchAsksList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo
} from "../api";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList().then(({ data }) => {
      commit("SET_NEWS", data);
    });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList().then(({ data }) => {
      commit("SET_JOBS", data);
    });
  },
  FETCH_ASKS({ commit }) {
    fetchAsksList().then(({ data }) => {
      commit("SET_ASKS", data);
    });
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username).then(({ data }) => {
      commit("SET_USER", data);
    });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId).then(({ data }) => {
      commit("SET_ITEM", data);
    });
  }
};
