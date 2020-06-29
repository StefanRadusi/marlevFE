import React from "react";

import "./CalcPreview.scss";
import { Grid } from "./Grid";
import { Dimensions } from "./Dimensions/Dimensions";

export function CalcPreview() {
  return (
    <div className="calc-preview">
      <Grid />
      <Dimensions x={10} y={20} />
    </div>
  );
}
