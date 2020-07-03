import React, { useState } from "react";
import IsoIcon from "@material-ui/icons/Iso";
import HeightIcon from "@material-ui/icons/Height";

import "./DimensionsEditor.scss";
import { mergeCssClass } from "../../../../../utils";
import { NumericInput } from "../../../../common/NumericInput";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { PageTitle } from "../../../../common/PageTitle/PageTitle";

export function DimensionsEditor({
  width,
  height,
  noOfLamella,
  heightOfLamella,
  setPanelWidth,
  setPanelHeight,
  setHightOfLamella,
}) {
  const [open, setEditorVisibility] = useState(false);

  return (
    <div className="dimension-editor-container">
      <div
        className="dimension-editor-open-button"
        onClick={() => setEditorVisibility(!open)}
      >
        <IsoIcon className="dimension-editor-open-button-icon" />
        <p className="dimension-editor-open-button-text">Editare Dimensiuni</p>
      </div>
      <div
        className={mergeCssClass(
          "dimension-editor",
          open && "dimension-editor-open"
        )}
      >
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
        <div className="lamella-options">
          <PageTitle title="optiuni lamele" className="lamella-options-title" />
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={heightOfLamella}
            onChange={({ target: { value } }) =>
              setHightOfLamella(Number(value))
            }
            className="lamella-options-radio-group"
          >
            <FormControlLabel
              value={0.1}
              label={"0.1 metri"}
              control={<Radio />}
            />
            <FormControlLabel
              value={0.2}
              label={"0.2 metri"}
              control={<Radio />}
            />
            <FormControlLabel
              value={0.3}
              label={"0.3 metri"}
              control={<Radio />}
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
