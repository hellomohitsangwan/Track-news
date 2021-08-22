import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "./components.css";
const ArticleCard = ({ article }) => {
  const date = new Date(article.pub_date);
  return (
    <div className="card px-5 rounded">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">
          <a href={article.web_url}>{article.headline.main}</a>{" "}
        </h2>
        <h4>{article.abstract}</h4>

        <p className="card-text">{article.lead_paragraph}</p>

        <div className="article-row">
          <div className="article-row__left">
            <div>
              {" "}
              <DateRangeIcon />
              <span className="m-2">{date.toLocaleDateString()}</span>
            </div>
            <div>
              {" "}
              <PersonIcon />
              <span className="m-2">{article.byline.original}</span>
            </div>
          </div>
          <div className="article-row__right">
            <a href={article.web_url} className="btn m-2">
              view details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
