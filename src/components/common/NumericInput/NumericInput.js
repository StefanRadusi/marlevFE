import React from "react";
import { TextField } from "@material-ui/core";
import { mergeCssClass } from "../../../utils";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./NumericInput.scss";
import { isNumber } from "./NumericInputUtils";

export function NumericInput({ label, Icon, className, value, onChange }) {
  return (
    <div className={mergeCssClass("numeric-input-container", className)}>
      {Icon && <Icon className="numeric-input-icon" />}
      <TextField
        error={!isNumber(value)}
        label={label}
        className="numeric-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        helperText={isNumber(value) ? null : "valuare incorecta"}
        onBlur={() => {
          if (!isNumber(value)) {
            onChange(0);
          }
        }}
      />
      <div className="numeric-increase-decrease">
        <RemoveIcon
          className="numeric-increase-decrease-button numeric-decrease"
          onClick={() => {
            const numberValue = Number(value) - 0.5;

            onChange(isNaN(numberValue) || numberValue < 0 ? 0 : numberValue);
          }}
        />
        <AddIcon
          className="numeric-increase-decrease-button numeric-increase"
          onClick={() => {
            const numberValue = Number(value) + 0.5;

            onChange(isNaN(numberValue) ? 0 : numberValue);
          }}
        />
      </div>
    </div>
  );
}
