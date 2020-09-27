import React, { useEffect, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

import { MarlevLogo } from "../common/MarlevLogo";
import { withRouter } from "react-router-dom";
import { getCurrentPage, mergeCssClass } from "../../utils/utils";
import { BurgerButton } from "./BurgerButton";
import { MenuButtons } from "./MenuButtons";
import { handledPageInView } from "./HandlePageInView";

import "./Header.scss";

export const Header = withRouter(({ location, history }) => {
  const currentPage = getCurrentPage(location);

  const [menuVisibility, setMenuVisibility] = useState(false);
  const handleOnClick = () => setMenuVisibility(!menuVisibility);

  useEffect(() => {
    handledPageInView(history, location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

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
