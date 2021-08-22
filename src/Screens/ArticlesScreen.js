import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import ArticleCard from "../Components/ArticleCard";
import Loader from "../Components/Loader";
import SearchArticle from "../Components/SearchArticle";
import "./screens.css";
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
    <div className="container">
      <div className="row-up"></div>
      {loading && <Loader />}
      <Row className="mt-4">
        {articles.map((article) => {
          return (
            <Col
              className="mb-4"
              key={article.id}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ArticlesScreen;
