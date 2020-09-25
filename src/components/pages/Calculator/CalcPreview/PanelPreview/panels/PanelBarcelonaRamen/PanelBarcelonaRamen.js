import React from "react";

import "./PanelBarcelonaRamen.scss";

import { calcNumberOfLamellaBarcelonaRamen } from "./PanelBarcelonaRamensUtils";

export function PanelBarcelonaRamen({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaBarcelonaRamen(
    height,
    heightOfLamella
  );

  return (
    <div className="panel-barcelona-ramen">
      <div className="panel-barcelona-ramen-left" />
      <div className="panel-barcelona-ramen-right" />
      <div className="panel-barcelona-ramen-connector-left" />
      <div className="panel-barcelona-ramen-connector-right" />
      <div className="panel-barcelona-ramen-up" />
      <div className="panel-barcelona-ramen-bottom" />

      <div className="panel-barcelona-ramen-lamella-container">
        {Array.from(Array(nrOfLamella)).map((_, index) => (
          <div
            key={index}
            className="panel-barcelona-ramen-lamella"
            style={{ height: heightOfLamella * 500 }}
          />
        ))}
      </div>
    </div>
  );
}
