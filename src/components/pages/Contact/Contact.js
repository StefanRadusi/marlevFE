import React from "react";

import "./Contact.scss";
import {ContactForm} from "./ContactForm";
import {BackgroundCarousel} from "../../common/BackgroundCarousel/BackgroundCarousel";
import {homePageBackgroundImgs} from "../Home/HomeUtils";
import {PageTitle} from "../../common/PageTitle";
import {Showroom} from './Showroom/Showroom';
import {Social} from './Social/Social';

export function Contact() {
  return (
      <BackgroundCarousel imgs={homePageBackgroundImgs.reverse()}>
        <div id="contact" className="contact-page">
          <PageTitle title="Contact" className="contact-page-title"/>
          <div className="contact-page--content">
            <Showroom/>
            <Social/>
            <ContactForm/>
          </div>
        </div>
      </BackgroundCarousel>
  );
}
