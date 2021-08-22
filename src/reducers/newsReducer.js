import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  POPULAR_ARTICLE_LIST_FAIL,
  POPULAR_ARTICLE_LIST_REQUEST,
  POPULAR_ARTICLE_LIST_SUCCESS,
} from "../constants";

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true, articles: [] };
    case ARTICLE_LIST_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
        searchType: action.typee,
      };
    case ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularArticleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case POPULAR_ARTICLE_LIST_REQUEST:
      return { loading: true, articles: [] };
    case POPULAR_ARTICLE_LIST_SUCCESS:
      return { loading: false, articles: action.payload };
    case POPULAR_ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
