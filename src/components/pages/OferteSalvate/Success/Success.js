import React from "react";
import success from "./success.png";
import "./Success.scss";

export default function Success() {
  return (
    <div className="container-success">
      <img src={success} />
      <p>Comanda dumneavoastra a fost inregistrata cu succes.</p>
      <p>Va vom contacta in cel mai scurt timp.</p>
    </div>
  );
}
