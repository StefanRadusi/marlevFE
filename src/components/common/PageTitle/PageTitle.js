import React from "react";

import "./PageTitle.scss";
import { mergeCssClass } from "../../../utils";

export function PageTitle({ title, className }) {
  return (
    <div className={mergeCssClass("page-title", className)}>
      <span>{title}</span>
    </div>
  );
}
