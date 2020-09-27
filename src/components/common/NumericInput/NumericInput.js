import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { mergeCssClass } from "../../../utils";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./NumericInput.scss";
import { isNumber } from "./NumericInputUtils";

export function NumericInput({ label, Icon, className, value, onChange }) {
  console.log(value);
  const [innerValue, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className={mergeCssClass("numeric-input-container", className)}>
      {Icon && <Icon className="numeric-input-icon" />}
      <TextField
        error={!isNumber(value)}
        label={label}
        className="numeric-input"
        value={innerValue}
        onChange={(event) => setValue(event.target.value)}
        helperText={isNumber(value) ? null : "valuare incorecta"}
        onBlur={(event) => {
          if (
            !isNumber(event.target.value) ||
            Number(event.target.value) <= 0
          ) {
            onChange(1);
            setValue(1);
          } else {
            onChange(event.target.value);
          }
        }}
      />
      <div className="numeric-increase-decrease">
        <RemoveIcon
          className="numeric-increase-decrease-button numeric-decrease"
          onClick={() => {
            const numberValue = Number(value) - 0.5;
            if (numberValue >= 1) {
              onChange(isNaN(numberValue) || numberValue < 0 ? 0 : numberValue);
            }
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
