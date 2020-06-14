import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./HeaderButton.scss";

import { getCssClass } from "./HeaderButtonUtils";

export function HeaderButton({ to, text, currentPage }) {
  let location = useLocation();

  return (
    <Link smooth to={to} className={getCssClass(location, to)}>
      {text}
    </Link>
  );
}
