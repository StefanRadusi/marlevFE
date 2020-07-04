import React from "react";

import "./Contact.scss";
import { ContactForm } from "./ContactForm";
import { BackgroundCarousel } from "../../common/BackgroundCarousel/BackgroundCarousel";
import { homePageBackgroundImgs } from "../Home/HomeUtils";
import { PageTitle } from "../../common/PageTitle/PageTitle";

export function Contact() {
  return (
    <BackgroundCarousel imgs={homePageBackgroundImgs.reverse()}>
      <div id="contact" className="contact-page">
        <PageTitle title="Contact" className="contact-page-title" />
        <ContactForm />
      </div>
    </BackgroundCarousel>
  );
}
