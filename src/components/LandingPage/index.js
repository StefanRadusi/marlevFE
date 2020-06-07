import React from "react";
import { Home } from "../Home";

import "./LandingPage.scss";
import { Products } from "../Products";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Home />
      <Products />
    </div>
  );
}
