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
import {
  requestGetNews,
  requestGetFNews,
  requestGetGNews,
  requestGetMNews,
  requestGetSNews,
  requestGetSPNews,
  requestGetTNews,
} from "../sagas/request";

export function* handleGetNews(action) {
  try {
    const response = yield call(requestGetNews);
    const { data } = response;
    yield put(setNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetFNews(action) {
  try {
    const response = yield call(requestGetFNews);
    const { data } = response;
    yield put(setFNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetGNews(action) {
  try {
    const response = yield call(requestGetGNews);
    const { data } = response;
    yield put(setGNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetMNews(action) {
  try {
    const response = yield call(requestGetMNews);
    const { data } = response;
    yield put(setMNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetSNews(action) {
  try {
    const response = yield call(requestGetSNews);
    const { data } = response;
    yield put(setSNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetSPNews(action) {
  try {
    const response = yield call(requestGetSPNews);
    const { data } = response;
    yield put(setSPNews(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetTNews(action) {
  try {
    const response = yield call(requestGetTNews);
    const { data } = response;
    yield put(setTNews(data));
  } catch (err) {
    console.log(err);
  }
}
