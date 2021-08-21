import React from "react";
import SearchArticle from "./SearchArticle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="react-link">
        <span className="header-left">Track News</span>
      </Link>
      <SearchArticle />
    </div>
  );
};

export default Header;
