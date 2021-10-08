import axios from "axios";

export function requestGetNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetFNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?country=in&language=en&category=business&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetGNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetMNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetSNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetSPNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}

export function requestGetTNews() {
  return axios.request({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&apiKey=9908a284d11342b9819c623043e14fdc`,
  });
}
