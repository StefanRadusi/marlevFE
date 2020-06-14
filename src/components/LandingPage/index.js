import React from "react";
import { Home } from "../Home";

import "./LandingPage.scss";
import { Products } from "../Products";
import { Contact } from "../Contact";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Home />
      <Products />
      <Contact />
    </div>
  );
}
