import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const SearchArticle = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("sports");
  const articleList = useSelector((state) => state.articleList);
  const { searchType } = articleList;
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
    dispatch(listArticles(keyword));
  };
  return (
    <form onSubmit={submitHandler} className="search-boxp">
      <div className="search-box-inputp">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder={searchType}
        />
        <div className="search-box-buttonp">
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchArticle;
