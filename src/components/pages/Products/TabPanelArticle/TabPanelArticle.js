import React from "react";
import { Link } from "react-router-dom";

import "./TabPanelArticle.scss";

export function TabPanelArticle(props) {
  const { panou } = props;

  return (
    <div className="article-container">
      <img src={panou.image} alt="single room" />
      <h2>{panou.name}</h2>
      <p>{panou.description}</p>
      <Link to={panou.path} className="btn-primary room-link">
        Click me
      </Link>
    </div>
  );
}
