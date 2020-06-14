import React from "react";
import { Home } from "../Home";

import "./LandingPage.scss";
import { Products } from "../Products";
import { Contact } from "../Contact";
import { Portfolio } from "../Portfolio";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Home />
      <Products />
      <Portfolio />
      <Contact />
    </div>
  );
}
