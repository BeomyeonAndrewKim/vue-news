import { fetchAsksList, fetchJobsList, fetchNewsList } from "../api";

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
  }
};
