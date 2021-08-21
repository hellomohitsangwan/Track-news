import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import ArticleCard from "../Components/ArticleCard";
import Loader from "../Components/Loader";
import SearchArticle from "../Components/SearchArticle";

const ArticlesScreen = () => {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;
  useEffect(() => {
    if (articles.length === 0) {
      dispatch(listArticles("everything"));
    }
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
};

export default ArticlesScreen;
