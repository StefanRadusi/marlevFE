import React from "react";

import "./PanelVarsoviaClassicRamen.scss";

import {
  calcNumberOfLamellaVarsovia,
  calcLamelaHeight,
} from "./PanelVarsoviaUtils";

export function PanelVarsoviaClassicRamen({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaVarsovia(height, heightOfLamella);

  return (
    <div className="panel-varsovia-classic-ramen">
      <div className="panel-varsovia-classic-ramen-left" />
      <div className="panel-varsovia-classic-ramen-right" />
      <div className="panel-varsovia-classic-ramen-connector-left" />
      <div className="panel-varsovia-classic-ramen-connector-right" />
      <div className="panel-varsovia-classic-ramen-up" />
      <div className="panel-varsovia-classic-ramen-bottom" />

      {Array.from(Array(nrOfLamella)).map((_, index) => (
        <div
          key={index}
          className="panel-varsovia-classic-ramen-lamella"
          style={{
            height: calcLamelaHeight(index, nrOfLamella, heightOfLamella),
          }}
        />
      ))}
    </div>
  );
}
