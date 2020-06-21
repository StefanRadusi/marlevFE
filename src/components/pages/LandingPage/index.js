import React, { useEffect } from "react";
import { Home } from "../Home";

import "./LandingPage.scss";
import { Products } from "../Products";
import { Contact } from "../Contact";
import { Portfolio } from "../Portfolio";

export function LandingPage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  }, []);

  return (
    <div className="landing-page">
      <Home />
      <Products />
      <Portfolio />
      <Contact />
    </div>
  );
}
