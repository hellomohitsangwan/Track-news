import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";

const SearchArticle = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("everything");
  // // const dispatch = useDispatch();
  // const articleList = useSelector((state) => state.articleList);
  // const { loading, error, articles } = articleList;
  // useEffect(() => {
  //   if (articles.length === 0) {
  //     dispatch(listArticles("everything"));
  //   }
  // }, [dispatch, articles]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(listArticles(type));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setType(e.target.value)}
          type="text"
          placeholder="search .."
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchArticle;
