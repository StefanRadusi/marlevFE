import React from "react";

import "./PanelVarsoviaClassic.scss";

import { calcNumberOfLamellaVarsovia } from "./PanelVarsoviaUtils";

export function PanelVarsoviaClassic({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaVarsovia(height, heightOfLamella);

  return (
    <div className="panel-varsovia-classic">
      <div className="panel-varsovia-classic-left" />
      <div className="panel-varsovia-classic-right" />
      <div className="panel-varsovia-classic-connector-left" />
      <div className="panel-varsovia-classic-connector-right" />

      {Array.from(Array(nrOfLamella)).map((_, index) => (
        <div
          key={index}
          className="panel-varsovia-classic-lamella"
          style={{ height: heightOfLamella * 500 }}
        />
      ))}
    </div>
  );
}
