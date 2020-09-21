import React from "react";

import "./PanelBarcelonaClassic.scss";

import { calcNumberOfLamellaBarcelona } from "./PanelBarcelonaClassicUtils";

export function PanelBarcelonaClasic({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaBarcelona(height, heightOfLamella);

  return (
      <div className="panel-barcelona-classic">
        <div className="panel-barcelona-classic-left" />
        <div className="panel-barcelona-classic-right" />
        <div className="panel-barcelona-classic-connector-left" />
        <div className="panel-barcelona-classic-connector-right" />

        {Array.from(Array(nrOfLamella)).map((_, index) => (
            <div
                key={index}
                className="panel-barcelona-classic-lamella"
                style={{ height: heightOfLamella * 500 }}
            />
        ))}
      </div>
  );
}
