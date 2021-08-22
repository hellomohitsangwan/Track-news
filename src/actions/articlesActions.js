import axios from "axios";
import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  POPULAR_ARTICLE_LIST_FAIL,
  POPULAR_ARTICLE_LIST_REQUEST,
  POPULAR_ARTICLE_LIST_SUCCESS,
} from "../constants";

export const listArticles = (type) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${type}&api-key=GB0FtUXOyOeiavbSe2GbQShix50J3fdQ`
    );
    if (res.status === 500) {
      dispatch({
        type: ARTICLE_LIST_FAIL,
        payload: "check your network connection",
      });
      return;
    }
    dispatch({
      type: ARTICLE_LIST_SUCCESS,
      payload: res.data.response.docs,
      typee: type,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload:
        err.response && err.response.status === 500
          ? "check your network connection"
          : err.response && err.response.status !== 500
          ? err.response.data.message
          : "check your network connection",
    });
  }
};

export const listPopularArticles = (type, latency) => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_ARTICLE_LIST_REQUEST });
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/${type}/${latency}.json?api-key=LywcfhREzeBJYc0LXZGBugRoRBQqDRud`
    );
    if (res.status === 500) {
      dispatch({
        type: POPULAR_ARTICLE_LIST_FAIL,
        payload: "check your network connection",
      });
      return;
    }
    dispatch({
      type: POPULAR_ARTICLE_LIST_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: POPULAR_ARTICLE_LIST_FAIL,
      payload:
        err.response && err.response.status === 500
          ? "check your network connection"
          : err.response && err.response.status !== 500
          ? err.response.data.message
          : "check your network connection",
    });
  }
};
