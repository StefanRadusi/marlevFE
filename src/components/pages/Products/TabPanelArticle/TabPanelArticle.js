import React from "react";
import { Link } from "react-router-dom";

import "./TabPanelArticle.scss";

export function TabPanelArticle(props) {
  const { element } = props;

  return (
    <div className="article-container">
      <div className="article-inner-container">
        <Link to={element.path} className="btn-primary room-link">
          <img src={element.image} alt="single room" />
        </Link>
        <h2>{element.name}</h2>
        <p>{element.description}</p>
      </div>
    </div>
  );
}
