import React from "react";
import ContactFormData from "./ContactFormData/ContactFormData";
import "./ContactForm.scss";
import { MarlevLogo } from "../../../common/MarlevLogo";

export default function ContactForm({ setContactData }) {
  return (
    <div className="calculator--contact-form">
      <div className="calculator--contact-form--message">
        <MarlevLogo />
        <p>Pentru a continua completa&#x00163;i urm&atilde;toarele date</p>
      </div>
      <ContactFormData setContactData={setContactData} />
    </div>
  );
}
