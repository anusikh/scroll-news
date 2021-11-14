import axios from "axios";

export function requestGetNews(url) {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?${url}`,
  });
}

export function requestGetCrypto() {
  return axios.request({
    method: "get",
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
    headers: { "X-CMC_PRO_API_KEY": "aca82d63-d6e1-4228-8de8-5e763cfcc6c9" },
  });
}
