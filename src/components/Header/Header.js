import React, { useState } from "react";

import { MarlevLogo } from "../MarlevLogo";
import { withRouter } from "react-router-dom";
import { getCurrentPage, mergeCssClass } from "../../utils/utils";
import { BurgerButton } from "./BurgerButton";
import { MenuButtons } from "./MenuButtons";

import "./Header.scss";

export const Header = withRouter(({ location }) => {
  const currentPage = getCurrentPage(location);

  const [menuVisibility, setMenuVisibility] = useState(true);

  return (
    <header
      className={mergeCssClass("header", menuVisibility && "header-expand")}
    >
      <MarlevLogo />
      <div className="header-buttons-container">
        <MenuButtons currentPage={currentPage} />
      </div>

      <div className="mobile-buttons-container">
        <div className="mobile-background" />
        <BurgerButton onClick={() => setMenuVisibility(!menuVisibility)} />
        {menuVisibility && (
          <div className="mobile-buttons">
            <MenuButtons currentPage={currentPage} />
          </div>
        )}
      </div>
    </header>
  );
});
