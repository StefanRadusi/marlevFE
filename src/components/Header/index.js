import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      this is header
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
    </header>
  );
}
