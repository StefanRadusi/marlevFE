import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { isEmpty } from "lodash";
import {
  isEmailValid,
  isPhoneValid,
} from "../../../../../utils/validationUtils";
import "./ContactFormData.scss";

export default function ContactFormData({ setContactData }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("");
  const [valid, setValid] = React.useState({
    name: null,
    email: null,
    phone: null,
    city: null,
  });

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    if (!isEmpty(name)) {
      handleValidChange({ name: true });
    } else {
      handleValidChange({ name: false });
    }
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (isEmailValid(email)) {
      handleValidChange({ email: true });
    } else {
      handleValidChange({ email: false });
    }
  };
  const handlePhoneChange = (event) => {
    const phone = event.target.value;
    setPhone(phone);
    if (isPhoneValid(phone)) {
      handleValidChange({ phone: true });
    } else {
      handleValidChange({ phone: false });
    }
  };
  const handleCityChange = (event) => {
    const city = event.target.value;
    setCity(city);
    if (!isEmpty(city)) {
      handleValidChange({ city: true });
    } else {
      handleValidChange({ city: false });
    }
  };
  const handleValidChange = (field) => {
    setValid({ ...valid, ...field });
  };

  const isValid = () => {
    return valid.name && valid.email && valid.phone && valid.city;
  };

  const submit = () => {
    const contactData = { name, email, phone, city };
    localStorage.setItem("contactData", JSON.stringify(contactData));
    setContactData(contactData);
  };

  return (
    <div className="calculator--contact_form--data">
      <TextField
        id="name"
        label="Nume"
        required
        onBlur={handleNameChange}
        error={valid.name === false}
        helperText={valid.name === false ? "Numele nu poate fii gol" : null}
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        onBlur={handleEmailChange}
        error={valid.email === false}
        helperText={valid.email === false ? "Mailul introdus nu este valid" : null}
      />
      <TextField
        id="phone"
        label="Telefon"
        required
        onBlur={handlePhoneChange}
        error={valid.phone === false}
        helperText={valid.phone === false ? "Numărul de telefon introdus nu este valid" : null}
      />
      <TextField
        id="city"
        label="Ora&#351;"
        required
        onBlur={handleCityChange}
        error={valid.city === false}
        helperText={valid.city === false ? "Oraşul nu poate fii gol" : null}
      />
      <Button
        title="Completeaza campurile de mai sus"
        variant="outlined"
        onClick={submit}
        disabled={!isValid()}
      >
        Continua
      </Button>
    </div>
  );
}
