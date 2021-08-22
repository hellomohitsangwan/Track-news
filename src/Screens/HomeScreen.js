import { MenuItem } from "@material-ui/core";
import { Message } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Col, DropdownButton, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPopularArticles } from "../actions/articlesActions";
import Loader from "../Components/Loader";
import PopularArticlesCard from "../Components/PopularArticlesCard";
import "./screens.css";
const HomeScreen = () => {
  const [latency, setLatency] = useState(1);
  const [filter, setfilter] = useState("1 day ago");
  const [type, setType] = useState("shared");
  const dispatch = useDispatch();
  const popularArticleList = useSelector((state) => state.popularArticleList);
  const { loading, error, articles } = popularArticleList;
  useEffect(() => {
    if (articles?.length === 0) {
      dispatch(listPopularArticles(type, latency));
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch(listPopularArticles(type, latency));
  }, [dispatch, latency, type]);
  useEffect(() => {
    //don't depend on anything , it just dispatch listPopularArticles() everytime when the app first load
    dispatch(listPopularArticles(type, latency));
  }, [dispatch]);

  return (
    <div>
      <div className="wrapper-background">
        <h3>
          You are currently viewing most {type} articles of {filter}.
        </h3>
      </div>

      <div className="container mt-4">
        <div className=" d-flex flex-row-reverse m-4">
          <div className=" mx-2">
            {" "}
            <DropdownButton
              key="Success"
              className="dropdown-button btn"
              title={type}
            >
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setType("shared");
                }}
              >
                Most shared
              </MenuItem>
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setType("emailed");
                }}
              >
                Most emailed
              </MenuItem>
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setType("viewed");
                }}
              >
                Most Viewed
              </MenuItem>
            </DropdownButton>{" "}
          </div>
          <div className=" mx-2">
            {" "}
            <DropdownButton className="dropdown-button btn " title={filter}>
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setfilter("1 day ago");
                  setLatency(1);
                }}
              >
                1 day ago
              </MenuItem>
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setfilter("7 days ago");
                  setLatency(7);
                }}
              >
                7 days ago
              </MenuItem>
              <MenuItem
                className="dropdown-menuitem"
                onClick={() => {
                  setfilter("30 days ago");
                  setLatency(30);
                }}
              >
                30 days ago
              </MenuItem>
            </DropdownButton>
          </div>
        </div>
        {loading && <Loader />}
        {error && <Message children={error} variant="danger" />}
        {!error && (
          <Row>
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
                  <PopularArticlesCard id={id} article={article} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
