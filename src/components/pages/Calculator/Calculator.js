import React, { useState } from "react";

import { Calc } from "./Calc/Calc";
import { ContactData } from "./ContactForm/ContactData";
import "./Calculator.scss";
import { ContactForm } from "./ContactForm";
import { isEmpty } from "lodash";

export function Calculator({
  match: {
    params: { item },
  },
  history,
}) {
  const [contactData, setContactData] = useState(
    JSON.parse(localStorage.getItem("contactData"))
  );

  return (
    <ContactData.Provider value={contactData}>
      {isEmpty(contactData) ? (
        <ContactForm setContactData={setContactData} />
      ) : (
        <div id="calculator-oferta" className="calculator-page">
          <Calc item={item} history={history} />
        </div>
      )}
    </ContactData.Provider>
  );
}
