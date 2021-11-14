export const GET_NEWS = "GET_NEWS";
const SET_NEWS = "SET_NEWS";
export const GET_FNEWS = "GET_FNEWS";
const SET_FNEWS = "SET_FNEWS";
export const GET_GNEWS = "GET_GNEWS";
const SET_GNEWS = "SET_GNEWS";
export const GET_MNEWS = "GET_MNEWS";
const SET_MNEWS = "SET_MNEWS";
export const GET_SNEWS = "GET_SNEWS";
const SET_SNEWS = "SET_SNEWS";
export const GET_SPNEWS = "GET_SPNEWS";
const SET_SPNEWS = "SET_SPNEWS";
export const GET_TNEWS = "GET_TNEWS";
const SET_TNEWS = "SET_TNEWS";
export const GET_CRYPTO = "GET_CRYPTO";
const SET_CRYPTO = "SET_CRYPTO";

export const getNews = () => ({
  type: GET_NEWS,
});

export const setNews = (news) => ({
  type: SET_NEWS,
  news,
});

export const getFNews = () => ({
  type: GET_FNEWS,
});

export const setFNews = (fnews) => ({
  type: SET_FNEWS,
  fnews,
});

export const getGNews = () => ({
  type: GET_GNEWS,
});

export const setGNews = (gnews) => ({
  type: SET_GNEWS,
  gnews,
});

export const getMNews = () => ({
  type: GET_MNEWS,
});

export const setMNews = (mnews) => ({
  type: SET_MNEWS,
  mnews,
});

export const getSNews = () => ({
  type: GET_SNEWS,
});

export const setSNews = (snews) => ({
  type: SET_SNEWS,
  snews,
});

export const getSPNews = () => ({
  type: GET_SPNEWS,
});

export const setSPNews = (spnews) => ({
  type: SET_SPNEWS,
  spnews,
});

export const getTNews = () => ({
  type: GET_TNEWS,
});

export const setTNews = (tnews) => ({
  type: SET_TNEWS,
  tnews,
});

export const getCrypto = () => ({
  type: GET_CRYPTO,
});

export const setCrypto = (crypto) => ({
  type: SET_CRYPTO,
  crypto,
});

const initialState = {
  news: undefined,
  fnews: undefined,
  gnews: undefined,
  mnews: undefined,
  snews: undefined,
  spnews: undefined,
  tnews: undefined,
  crypto: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      const { news } = action;
      return { ...state, news };
    case SET_FNEWS:
      const { fnews } = action;
      return { ...state, fnews };
    case SET_GNEWS:
      const { gnews } = action;
      return { ...state, gnews };
    case SET_MNEWS:
      const { mnews } = action;
      return { ...state, mnews };
    case SET_SNEWS:
      const { snews } = action;
      return { ...state, snews };
    case SET_SPNEWS:
      const { spnews } = action;
      return { ...state, spnews };
    case SET_TNEWS:
      const { tnews } = action;
      return { ...state, tnews };
    case SET_CRYPTO:
      const { crypto } = action;
      return { ...state, crypto };
    default:
      return state;
  }
};
