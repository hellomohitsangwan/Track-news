import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listArticles } from "../actions/articlesActions";

const SearchArticle = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("everything");

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
