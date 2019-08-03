import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

const fetchList = pageName => axios.get(`${config.baseUrl}${pageName}.json`);
const fetchUserInfo = username =>
  axios.get(`${config.baseUrl}user/${username}.json`);
const fetchItemInfo = itemId =>
  axios.get(`${config.baseUrl}item/${itemId}.json`);

export { fetchList, fetchUserInfo, fetchItemInfo };
