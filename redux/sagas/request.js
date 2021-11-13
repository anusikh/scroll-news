import axios from "axios";

export function requestGetNews(url) {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?${url}`,
  });
}
