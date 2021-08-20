import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Person } from "@material-ui/icons";

const ArticleCard = ({ article }) => {
  return (
    <div className="card p-3 rounded">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">{article.headline.main}</h2>
        <h4>{article.abstract}</h4>

        <p className="card-text">${article.lead_paragraph}</p>

        <div className="article-row">
          <div className="article-row__left">
            <DateRangeIcon />
            <span>{article.pub_date}</span>
          </div>
          <div className="article-row__left">
            <PersonIcon />
            <span>{article.headline.main}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
