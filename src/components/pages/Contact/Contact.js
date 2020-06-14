import React from "react";

import "./Contact.scss";
import { BackgroundCarousel } from "../../common/BackgroundCarousel/BackgroundCarousel";
import { homePageBackgroundImgs } from "../Home/HomeUtils";

export function Contact() {
  return (
    <BackgroundCarousel imgs={homePageBackgroundImgs.reverse()}>
      <div id="contact" className="contact-page">
        <h1>Contact</h1>
      </div>
    </BackgroundCarousel>
  );
}
