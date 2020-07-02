import React, { useState } from "react";
import IsoIcon from "@material-ui/icons/Iso";
import HeightIcon from "@material-ui/icons/Height";

import "./DimensionsEditor.scss";
import { mergeCssClass } from "../../../../../utils";
import { NumericInput } from "../../../../common/NumericInput";

export function DimensionsEditor({
  width,
  height,
  noOfLamella,
  heightOfLamella,
  setPanelWidth,
  setPanelHeight,
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
      </div>
    </div>
  );
}
