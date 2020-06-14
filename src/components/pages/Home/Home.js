import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { BackgroundCarousel } from "../../common/BackgroundCarousel/BackgroundCarousel";
import { homePageBackgroundImgs } from "./HomeUtils";

import "./Home.scss";

export function Home(props) {
  return (
    <BackgroundCarousel imgs={homePageBackgroundImgs}>
      <div id="home" className="home">
        <h1 className="home-landing-text">Porti si garduri din aluminiu</h1>
        <Link smooth to="/#contact">
          <button className="home-landing-to-contact-button">
            Contactati-ne
          </button>
        </Link>
      </div>
    </BackgroundCarousel>
  );
}
