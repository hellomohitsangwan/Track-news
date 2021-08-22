import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "./components.css";
const PopularArticlesCard = ({ article }) => {
  return (
    <div className="card p-4 rounded">
      {article.media[0] ? (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          className="card-img-top img-fluid"
          src={article?.media[0]["media-metadata"][2]?.url}
          alt="image"
        ></img>
      ) : (
        ""
      )}
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">
          <a href={article.url}>{article.title}</a>{" "}
        </h3>

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
              {article.byline && (
                <>
                  {" "}
                  <PersonIcon />
                  <span className="m-2">{article.byline}</span>
                </>
              )}
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
