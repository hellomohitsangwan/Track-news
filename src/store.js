import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  articleListReducer,
  popularArticleListReducer,
} from "./reducers/newsReducer";

const reducer = combineReducers({
  articleList: articleListReducer,
  popularArticleList: popularArticleListReducer,
});

// getUserDetails();
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
