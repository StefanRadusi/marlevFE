import React from "react";
import { Link } from "react-router-dom";

import "./TabPanelArticle.scss";

export function TabPanelArticle(props) {
  const { element, customClassName } = props;

  return (
    <div className={`article-container ${customClassName || ''}`}>
      <div className="article-inner-container">
        <Link to={element.path} className="btn-primary room-link">
          <img
            src={element.image}
            alt="single room"
            className={`article-image ${customClassName || ''}`}
          />
        </Link>
        <h2>{element.name}</h2>
        <p>{element.description}</p>
      </div>
    </div>
  );
}
