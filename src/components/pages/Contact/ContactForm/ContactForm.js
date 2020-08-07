import React from "react";
import TextField from "@material-ui/core/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import SendMailButton from "./SendMailButton/SendMailButton";

import "./ContactForm.scss";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [valid, setValid] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleValidChange = (valid) => {
    setValid(valid);
  };

  return (
      <div className="contact-form">
        <div className="contact-form__input_row contact-form__row">
          <TextField
              id="name"
              label="Nume"
              value={name}
              required

              color={"secondary"}
              onChange={handleNameChange}
          />
          <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              required
              color={"secondary"}
              onChange={handleEmailChange}
          />
        </div>
        <div className="contact-form__input_row contact-form__row">
          <TextField
              id="phone"
              label="Telefon"
              value={phone}
              required
              color="primary"
              onChange={handlePhoneChange}
          />
          <TextField
              id="city"
              label="Oras"
              value={city}
              required
              color="primary"
              onChange={handleCityChange}
          />
        </div>
        <TextField
            id="message"
            label="Mesaj"
            value={message}
            required
            color="primary"
            multiline
            rows={10}
            className="contact-form__row contact-form__text-area"
            onChange={handleMessageChange}
        />
        {/*For ReCAPTCHA to work access the local env at 127.0.0.1*/}
        <ReCAPTCHA
            sitekey="6LenursZAAAAABYp89NuWhSUiHONKZI_Hx9dKLu1"
            onChange={() => handleValidChange(true)}
        />
        <div className="contact-form__row">
          <SendMailButton
              disabled={!valid}
              mailData={{name, email, phone, city, message}}
          />
        </div>
      </div>
  );
}
