import { all, fork, takeLatest } from "@redux-saga/core/effects";
import {
  GET_CRYPTO,
  GET_FNEWS,
  GET_GNEWS,
  GET_MNEWS,
  GET_NEWS,
  GET_SNEWS,
  GET_SPNEWS,
  GET_TNEWS,
} from "../reducer";
import {
  handleGetCrypto,
  handleGetFNews,
  handleGetGNews,
  handleGetMNews,
  handleGetNews,
  handleGetSNews,
  handleGetSPNews,
  handleGetTNews,
} from "./handler";

function* newsSaga() {
  yield takeLatest(GET_NEWS, handleGetNews);
}

function* fnewsSaga() {
  yield takeLatest(GET_FNEWS, handleGetFNews);
}

function* gnewsSaga() {
  yield takeLatest(GET_GNEWS, handleGetGNews);
}

function* mnewsSaga() {
  yield takeLatest(GET_MNEWS, handleGetMNews);
}

function* snewsSaga() {
  yield takeLatest(GET_SNEWS, handleGetSNews);
}

function* spnewsSaga() {
  yield takeLatest(GET_SPNEWS, handleGetSPNews);
}

function* tnewsSaga() {
  yield takeLatest(GET_TNEWS, handleGetTNews);
}

function* cryptoSaga() {
  yield takeLatest(GET_CRYPTO, handleGetCrypto);
}

export function* watcherSaga() {
  yield all([
    fork(newsSaga),
    fork(fnewsSaga),
    fork(gnewsSaga),
    fork(mnewsSaga),
    fork(snewsSaga),
    fork(spnewsSaga),
    fork(tnewsSaga),
    fork(cryptoSaga),
  ]);
}
