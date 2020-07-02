import React from "react";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import "./Dimensions.scss";

export function Dimensions({ x, y }) {
  return (
    <div className="dimensions">
      <div className="dimension-x">
        <div className="dimension-line-arrow">
          <div className="dimension-line" />
          <ArrowForward className="dimension-icon" />
        </div>
        <p className="dimension-label">{`${x} m`}</p>
      </div>
      <div className="dimension-y">
        <div className="dimension-line-arrow">
          <div className="dimension-line" />
          <ArrowUpward className="dimension-icon" />
        </div>
        <p className="dimension-label">{`${y} m`}</p>
      </div>
    </div>
  );
}
