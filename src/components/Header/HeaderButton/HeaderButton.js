import React from "react";
import { Link } from "react-router-dom";

import { getCssClass } from "./HeaderButtonUtils";

import "./HeaderButton.scss";

export function HeaderButton({ to, text, currentPage }) {
  return (
    <Link to={to} className={getCssClass(currentPage, text)}>
      {text}
    </Link>
  );
}
