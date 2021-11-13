import { call, put } from "redux-saga/effects";
import {
  setNews,
  setFNews,
  setGNews,
  setMNews,
  setSNews,
  setSPNews,
  setTNews,
} from "../reducer";
import { requestGetNews } from "../sagas/request";

const urls = Object.freeze({
  url1: "country=in&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
  finance:
    "country=in&language=en&category=business&apiKey=9908a284d11342b9819c623043e14fdc",
  global: "country=us&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
  medic: "category=health&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
  science:
    "category=science&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
  sports: "category=sports&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
  tech: "sources=techcrunch&language=en&apiKey=9908a284d11342b9819c623043e14fdc",
});

export function* handleGetNews(action) {
  try {
    const response = yield call(requestGetNews, urls.url1);
    const { data } = response;
    yield put(setNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetFNews(action) {
  try {
    const response = yield call(requestGetNews, urls.finance);
    const { data } = response;
    yield put(setFNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetGNews(action) {
  try {
    const response = yield call(requestGetNews, urls.global);
    const { data } = response;
    yield put(setGNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetMNews(action) {
  try {
    const response = yield call(requestGetNews, urls.medic);
    const { data } = response;
    yield put(setMNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetSNews(action) {
  try {
    const response = yield call(requestGetNews, urls.science);
    const { data } = response;
    yield put(setSNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetSPNews(action) {
  try {
    const response = yield call(requestGetNews, urls.sports);
    const { data } = response;
    yield put(setSPNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetTNews(action) {
  try {
    const response = yield call(requestGetNews, urls.tech);
    const { data } = response;
    yield put(setTNews(data));
  } catch (err) {
    console.log(err);
  }
}
