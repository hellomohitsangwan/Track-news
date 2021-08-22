import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articlesActions";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Person } from "@material-ui/icons";

const PopularArticlesCard = ({ article }) => {
  return (
    <div className="card p-4 rounded">
      {article.media[0] ? (
        <img
          class="card-img-top img-fluid"
          src={article?.media[0]["media-metadata"][2]?.url}
        ></img>
      ) : (
        ""
      )}
      {/* <img
        class="card-img-top"
        src={article?.media[0]["media-metadata"][0]?.url}
      ></img> */}

      <div className="card-body d-flex flex-column">
        <h2 className="card-title">
          <a href={article.url}>{article.title}</a>{" "}
        </h2>
        {/* <h4>{article.abstract}</h4> */}

        <p className="card-text">{article.abstract}</p>

        <div className="article-row">
          <div className="article-row__left">
            <div>
              {" "}
              <DateRangeIcon />
              <span className="m-2">{article.published_date}</span>
            </div>
            <div>
              {" "}
              <PersonIcon />
              <span className="m-2">{article.byline}</span>
            </div>
          </div>
          <div className="article-row__right">
            <a href={article.url} className="btn m-2">
              view details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticlesCard;
