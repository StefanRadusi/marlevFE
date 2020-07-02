import React from "react";

import "./CalcPreview.scss";
import { Grid } from "./Grid";
import { Dimensions } from "./Dimensions/Dimensions";
import { DimensionsEditor } from "./DimensionsEditor";
import { PanelPreview } from "./PanelPreview/PanelPreview";

export function CalcPreview({ panel, setPanel, panelName }) {
  const { width, height } = panel;

  return (
    <div className="calc-preview">
      <Grid />
      <Dimensions x={width} y={height} />
      <PanelPreview panelName={panelName} width={width} height={height} />
      <DimensionsEditor
        {...panel}
        setPanelWidth={(width) => setPanel({ ...panel, width })}
        setPanelHeight={(height) => setPanel({ ...panel, height })}
      />
    </div>
  );
}
