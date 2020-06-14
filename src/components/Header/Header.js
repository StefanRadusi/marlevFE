import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

import { MarlevLogo } from "../common/MarlevLogo";
import { withRouter } from "react-router-dom";
import { getCurrentPage, mergeCssClass } from "../../utils/utils";
import { BurgerButton } from "./BurgerButton";
import { MenuButtons } from "./MenuButtons";

import "./Header.scss";

export const Header = withRouter(({ location }) => {
  const currentPage = getCurrentPage(location);

  const [menuVisibility, setMenuVisibility] = useState(false);
  const handleOnClick = () => setMenuVisibility(!menuVisibility);

  return (
    <header
      className={mergeCssClass("header", menuVisibility && "header-expand")}
    >
      <Link to="/#home" smooth className="logo-link">
        <MarlevLogo />
      </Link>
      <div className="header-buttons-container">
        <MenuButtons currentPage={currentPage} />
      </div>

      <div className="mobile-buttons-container">
        <div className="mobile-background" />
        <BurgerButton onClick={handleOnClick} />
        {menuVisibility && (
          <div className="mobile-buttons" onClick={handleOnClick}>
            <MenuButtons currentPage={currentPage} />
          </div>
        )}
      </div>
    </header>
  );
});
