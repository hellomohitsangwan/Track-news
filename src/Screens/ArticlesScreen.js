import { Message } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import ArticleCard from "../Components/ArticleCard";
import Loader from "../Components/Loader";
import "./screens.css";
const ArticlesScreen = ({ match }) => {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles, searchType } = articleList;
  useEffect(() => {
    if (articles.length === 0 && !loading) {
      dispatch(listArticles(match.params.name));
    }
  }, [dispatch]);

  return (
    <div>
      <div className="wrapper-background">
        <h3 className="text-center">
          You are currently viewing articles on {searchType}.
        </h3>
      </div>
      {loading && <Loader />}
      {error && <Message children={error} variant="danger" />}
      <div className="container">
        <Row className="mt-4">
          {articles.map((article, id) => {
            return (
              <Col
                className="mb-4"
                key={article.id}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <ArticleCard id={id} article={article} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ArticlesScreen;
