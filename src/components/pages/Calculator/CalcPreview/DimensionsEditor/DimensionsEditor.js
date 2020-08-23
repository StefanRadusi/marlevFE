import React from "react";
import HeightIcon from "@material-ui/icons/Height";

import "./DimensionsEditor.scss";
import { mergeCssClass } from "../../../../../utils";
import { NumericInput } from "../../../../common/NumericInput";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { PageTitle } from "../../../../common/PageTitle/PageTitle";

export function DimensionsEditor({
  width,
  height,
  heightOfLamella,
  setPanelWidth,
  setPanelHeight,
  setHightOfLamella,
  lamellaOptions,
}) {
  return (
    <div className="dimension-editor-container">
      <div className={mergeCssClass("dimension-editor")}>
        <NumericInput
          label="inaltime (m)"
          Icon={HeightIcon}
          className="dimension-editor-dimension dimension-editor-dimension-height"
          value={height}
          onChange={(value) => setPanelHeight(value)}
        />
        <NumericInput
          label="lungime (m)"
          Icon={HeightIcon}
          className="dimension-editor-dimension dimension-editor-dimension-width"
          value={width}
          onChange={(value) => setPanelWidth(value)}
        />

        {lamellaOptions && (
          <div className="lamella-options">
            <PageTitle
              title="optiuni lamele"
              className="lamella-options-title"
            />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={heightOfLamella}
              onChange={({ target: { value } }) =>
                setHightOfLamella(Number(value))
              }
              className="lamella-options-radio-group"
            >
              {lamellaOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  label={`${option * 1000} mm`}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </div>
        )}
      </div>
    </div>
  );
}
